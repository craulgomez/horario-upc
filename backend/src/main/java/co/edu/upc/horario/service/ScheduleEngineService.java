package co.edu.upc.horario.service;

import co.edu.upc.horario.dto.request.GenerateScheduleRequest;
import co.edu.upc.horario.dto.request.UserPreferenceRequest;
import co.edu.upc.horario.dto.response.*;
import co.edu.upc.horario.exception.BusinessRuleException;
import co.edu.upc.horario.model.entity.*;
import co.edu.upc.horario.model.enums.DiaSemana;
import co.edu.upc.horario.repository.GrupoRepository;
import co.edu.upc.horario.repository.MateriaRepository;
import co.edu.upc.horario.repository.PreferenciaHorarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ScheduleEngineService {

    private final GrupoRepository grupoRepository;
    private final MateriaRepository materiaRepository;
    private final PreferenciaHorarioRepository preferenciaRepository;
    private final ScheduleScoringService scoringService;
    private final AcademicCatalogService catalogService;

    @Transactional(readOnly = true)
    public ConflictValidationResponse validateGroupConflicts(List<Long> grupoIds) {
        if (grupoIds == null || grupoIds.isEmpty()) {
            return ConflictValidationResponse.builder().esValido(true).cantidadConflictos(0).build();
        }

        List<Grupo> grupos = grupoRepository.findAllByIdWithSesiones(grupoIds);
        List<String> conflictos = new ArrayList<>();
        List<String> advertencias = new ArrayList<>();

        // 1. Regla: No se permite más de un grupo por materia
        Map<Long, List<Grupo>> porMateria = grupos.stream().collect(Collectors.groupingBy(g -> g.getMateria().getId()));
        for (Map.Entry<Long, List<Grupo>> entry : porMateria.entrySet()) {
            if (entry.getValue().size() > 1) {
                String nombreMateria = entry.getValue().get(0).getMateria().getNombre();
                String gruposNombres = entry.getValue().stream().map(Grupo::getNumeroGrupo).collect(Collectors.joining(", "));
                conflictos.add(String.format("Has seleccionado múltiples grupos para la misma materia '%s': [%s]", nombreMateria, gruposNombres));
            }
        }

        // 2. Regla: Cruces de horario entre sesiones
        for (int i = 0; i < grupos.size(); i++) {
            Grupo g1 = grupos.get(i);
            for (int j = i + 1; j < grupos.size(); j++) {
                Grupo g2 = grupos.get(j);

                for (SesionClase s1 : g1.getSesiones()) {
                    for (SesionClase s2 : g2.getSesiones()) {
                        if (haveOverlap(s1, s2)) {
                            conflictos.add(String.format(
                                    "Cruce horario el %s: '%s' (Grupo %s de %s a %s) choca con '%s' (Grupo %s de %s a %s)",
                                    s1.getDiaSemana(),
                                    g1.getMateria().getNombre(), g1.getNumeroGrupo(), s1.getHoraInicio(), s1.getHoraFin(),
                                    g2.getMateria().getNombre(), g2.getNumeroGrupo(), s2.getHoraInicio(), s2.getHoraFin()
                            ));
                        }
                    }
                }
            }
        }

        // 3. Advertencias de calidad académica
        for (Grupo g : grupos) {
            if (Boolean.FALSE.equals(g.getTieneDocenteAsignado()) || "NDOC".equalsIgnoreCase(g.getDocente())) {
                advertencias.add(String.format("El grupo %s de '%s' no tiene docente asignado aún (NDOC).", g.getNumeroGrupo(), g.getMateria().getNombre()));
            }
            if (Boolean.FALSE.equals(g.getTieneRecursoFisicoAsignado()) || "NREF".equalsIgnoreCase(g.getAula())) {
                advertencias.add(String.format("El grupo %s de '%s' no tiene salón o recurso físico asignado (NREF).", g.getNumeroGrupo(), g.getMateria().getNombre()));
            }
            if (!"CAMPUS".equalsIgnoreCase(g.getSede())) {
                advertencias.add(String.format("El grupo %s de '%s' pertenece a una sede externa (%s).", g.getNumeroGrupo(), g.getMateria().getNombre(), g.getSede()));
            }
        }

        return ConflictValidationResponse.builder()
                .esValido(conflictos.isEmpty())
                .cantidadConflictos(conflictos.size())
                .conflictos(conflictos)
                .advertencias(advertencias)
                .build();
    }

    @Transactional(readOnly = true)
    public List<GeneratedScheduleOptionDto> generateSchedules(GenerateScheduleRequest request, Usuario usuario) {
        Long periodoId = request.getPeriodoId();
        List<Long> materiaIds = request.getMateriaIds();

        if (materiaIds == null || materiaIds.isEmpty()) {
            throw new BusinessRuleException("Debe seleccionar al menos una materia para generar combinaciones.");
        }

        // Obtener preferencias: las pasadas en el request o las del usuario
        UserPreferenceRequest pref = request.getPreferencias();
        if (pref == null && usuario != null) {
            pref = preferenciaRepository.findByUsuarioId(usuario.getId())
                    .map(this::toPreferenceRequest)
                    .orElseGet(() -> UserPreferenceRequest.builder().build());
        } else if (pref == null) {
            pref = UserPreferenceRequest.builder().build();
        }

        // Cargar todos los grupos de las materias seleccionadas
        List<Grupo> todosGrupos = grupoRepository.findByMateriaIdsAndPeriodoIdWithSesiones(materiaIds, periodoId);

        // Agrupar por materia
        Map<Long, List<Grupo>> gruposPorMateria = todosGrupos.stream()
                .collect(Collectors.groupingBy(g -> g.getMateria().getId()));

        // Validar que cada materia solicitada tenga al menos 1 grupo activo
        for (Long matId : materiaIds) {
            List<Grupo> grupos = gruposPorMateria.get(matId);
            if (grupos == null || grupos.isEmpty()) {
                Materia m = materiaRepository.findById(matId).orElse(null);
                String nombreMat = m != null ? m.getNombre() + " (" + m.getCodigo() + ")" : "ID: " + matId;
                throw new BusinessRuleException("La materia " + nombreMat + " no tiene grupos disponibles para el período seleccionado.");
            }
        }

        // Ordenar materias según heurística MRV (Minimum Remaining Values): materias con menos grupos primero
        List<List<Grupo>> gruposPorMateriaOrdenados = new ArrayList<>(gruposPorMateria.values());
        gruposPorMateriaOrdenados.sort(Comparator.comparingInt(List::size));

        // Algoritmo CSP Backtracking con Poda Temprana
        List<List<Grupo>> combinacionesValidas = new ArrayList<>();
        backtrack(0, gruposPorMateriaOrdenados, new ArrayList<>(), combinacionesValidas);

        if (combinacionesValidas.isEmpty()) {
            throw new BusinessRuleException("No se encontró ninguna combinación compatible sin choques de horario para las materias seleccionadas. Intenta retirar una materia o probar diferentes opciones.");
        }

        // Evaluar puntaje y mapear a DTOs
        final UserPreferenceRequest finalPref = pref;
        List<GeneratedScheduleOptionDto> opciones = new ArrayList<>();
        int index = 1;

        for (List<Grupo> combo : combinacionesValidas) {
            ScoreBreakdownDto breakdown = scoringService.calculateScore(combo, finalPref);

            // Estadísticas adicionales
            int totalCreditos = combo.stream().mapToInt(g -> g.getMateria().getCreditos()).sum();
            Set<DiaSemana> diasUsados = combo.stream()
                    .flatMap(g -> g.getSesiones().stream())
                    .map(SesionClase::getDiaSemana)
                    .collect(Collectors.toSet());

            LocalTime horaTemprana = combo.stream()
                    .flatMap(g -> g.getSesiones().stream())
                    .map(SesionClase::getHoraInicio)
                    .min(LocalTime::compareTo)
                    .orElse(LocalTime.of(6, 0));

            LocalTime horaTardia = combo.stream()
                    .flatMap(g -> g.getSesiones().stream())
                    .map(SesionClase::getHoraFin)
                    .max(LocalTime::compareTo)
                    .orElse(LocalTime.of(18, 0));

            // Alertas
            List<String> alertas = new ArrayList<>();
            for (Grupo g : combo) {
                if (Boolean.FALSE.equals(g.getTieneDocenteAsignado())) {
                    alertas.add(String.format("%s (%s): Docente pendiente", g.getMateria().getCodigo(), g.getNumeroGrupo()));
                }
                if (Boolean.FALSE.equals(g.getTieneRecursoFisicoAsignado())) {
                    alertas.add(String.format("%s (%s): Aula pendiente", g.getMateria().getCodigo(), g.getNumeroGrupo()));
                }
            }

            GeneratedScheduleOptionDto opcionDto = GeneratedScheduleOptionDto.builder()
                    .idOpcion("OPT-" + index++)
                    .puntaje(breakdown.getPuntajeTotal())
                    .totalCreditos(totalCreditos)
                    .diasConClase(diasUsados.size())
                    .diasLibres(6 - diasUsados.size())
                    .horasMuertas(breakdown.getHorasMuertasTotales())
                    .horaMasTemprana(horaTemprana)
                    .horaMasTardia(horaTardia)
                    .tieneAlertas(!alertas.isEmpty())
                    .alertas(alertas)
                    .desglosePuntaje(breakdown)
                    .grupos(combo.stream().map(catalogService::toGroupDto).collect(Collectors.toList()))
                    .build();

            opciones.add(opcionDto);
        }

        // Ordenar opciones por puntaje descendente
        opciones.sort((a, b) -> Integer.compare(b.getPuntaje(), a.getPuntaje()));

        // Limitar la cantidad de combinaciones para alto rendimiento
        int limit = request.getLimite() != null ? Math.min(50, Math.max(1, request.getLimite())) : 20;
        return opciones.stream().limit(limit).collect(Collectors.toList());
    }

    private void backtrack(
            int materiaIdx,
            List<List<Grupo>> gruposPorMateria,
            List<Grupo> horarioActual,
            List<List<Grupo>> resultados) {

        // Si ya asignamos un grupo a cada materia, encontramos un horario válido completo
        if (materiaIdx == gruposPorMateria.size()) {
            resultados.add(new ArrayList<>(horarioActual));
            return;
        }

        // Límite de seguridad para evitar explosión combinatoria desmedida
        if (resultados.size() >= 1000) {
            return;
        }

        List<Grupo> gruposCandidatos = gruposPorMateria.get(materiaIdx);

        for (Grupo candidato : gruposCandidatos) {
            // PODA TEMPRANA: Verificar si el candidato choca con alguno ya en el horario actual
            if (!hasConflictWithCurrentSchedule(candidato, horarioActual)) {
                horarioActual.add(candidato);
                backtrack(materiaIdx + 1, gruposPorMateria, horarioActual, resultados);
                horarioActual.remove(horarioActual.size() - 1);
            }
        }
    }

    private boolean hasConflictWithCurrentSchedule(Grupo candidato, List<Grupo> horarioActual) {
        for (Grupo asignado : horarioActual) {
            for (SesionClase s1 : candidato.getSesiones()) {
                for (SesionClase s2 : asignado.getSesiones()) {
                    if (haveOverlap(s1, s2)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    public static boolean haveOverlap(SesionClase s1, SesionClase s2) {
        if (s1.getDiaSemana() != s2.getDiaSemana()) {
            return false;
        }
        // Choque si: s1.inicio < s2.fin && s2.inicio < s1.fin
        return s1.getHoraInicio().isBefore(s2.getHoraFin()) && s2.getHoraInicio().isBefore(s1.getHoraFin());
    }

    private UserPreferenceRequest toPreferenceRequest(PreferenciaHorario p) {
        return UserPreferenceRequest.builder()
                .prefiereManana(p.getPrefiereManana())
                .prefiereTarde(p.getPrefiereTarde())
                .evitarNocturna(p.getEvitarNocturna())
                .evitarSabado(p.getEvitarSabado())
                .quiereDiaLibre(p.getQuiereDiaLibre())
                .minimizarHuecos(p.getMinimizarHuecos())
                .modalidadPreferida(p.getModalidadPreferida())
                .horaMaximaSalida(p.getHoraMaximaSalida())
                .build();
    }
}
