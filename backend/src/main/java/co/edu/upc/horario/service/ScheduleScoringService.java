package co.edu.upc.horario.service;

import co.edu.upc.horario.dto.request.UserPreferenceRequest;
import co.edu.upc.horario.dto.response.ScoreBreakdownDto;
import co.edu.upc.horario.model.entity.Grupo;
import co.edu.upc.horario.model.entity.SesionClase;
import co.edu.upc.horario.model.enums.DiaSemana;
import co.edu.upc.horario.model.enums.Modalidad;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class ScheduleScoringService {

    public ScoreBreakdownDto calculateScore(List<Grupo> grupos, UserPreferenceRequest pref) {
        if (grupos == null || grupos.isEmpty()) {
            return ScoreBreakdownDto.builder().puntajeTotal(0).build();
        }

        if (pref == null) {
            pref = UserPreferenceRequest.builder().build();
        }

        int score = 100;
        List<String> positivas = new ArrayList<>();
        List<String> penalizaciones = new ArrayList<>();

        // Extraer todas las sesiones organizadas por día
        Map<DiaSemana, List<SesionClase>> sesionesPorDia = new EnumMap<>(DiaSemana.class);
        for (Grupo g : grupos) {
            for (SesionClase s : g.getSesiones()) {
                sesionesPorDia.computeIfAbsent(s.getDiaSemana(), k -> new ArrayList<>()).add(s);
            }
        }

        // 1. Días libres (Lunes a Sábado)
        List<DiaSemana> diasHabiles = List.of(
                DiaSemana.LUNES, DiaSemana.MARTES, DiaSemana.MIERCOLES,
                DiaSemana.JUEVES, DiaSemana.VIERNES, DiaSemana.SABADO
        );
        int diasLibres = 0;
        for (DiaSemana d : diasHabiles) {
            if (!sesionesPorDia.containsKey(d) || sesionesPorDia.get(d).isEmpty()) {
                diasLibres++;
            }
        }

        if (Boolean.TRUE.equals(pref.getQuiereDiaLibre())) {
            if (diasLibres > 0) {
                positivas.add(String.format("Día libre conseguido: Tienes %d día(s) libre(s) entre semana.", diasLibres));
            } else {
                score -= 15;
                penalizaciones.add("No se logró un día completamente libre entre semana (-15 pts).");
            }
        }

        // 2. Horas muertas / Huecos entre clases
        int minutosHuecosTotales = 0;
        for (Map.Entry<DiaSemana, List<SesionClase>> entry : sesionesPorDia.entrySet()) {
            List<SesionClase> list = new ArrayList<>(entry.getValue());
            list.sort(Comparator.comparing(SesionClase::getHoraInicio));

            for (int i = 0; i < list.size() - 1; i++) {
                SesionClase actual = list.get(i);
                SesionClase siguiente = list.get(i + 1);

                if (siguiente.getHoraInicio().isAfter(actual.getHoraFin())) {
                    long gap = Duration.between(actual.getHoraFin(), siguiente.getHoraInicio()).toMinutes();
                    // Si el hueco supera 15 minutos, cuenta como hora muerta
                    if (gap > 15) {
                        minutosHuecosTotales += gap;
                    }
                }
            }
        }
        int horasMuertas = (int) Math.ceil(minutosHuecosTotales / 60.0);

        if (Boolean.TRUE.equals(pref.getMinimizarHuecos())) {
            if (horasMuertas == 0) {
                positivas.add("Horario compacto: 0 horas muertas o huecos intermedios entre clases.");
            } else {
                int deduccion = Math.min(25, horasMuertas * 5);
                score -= deduccion;
                penalizaciones.add(String.format("Horas muertas: Contiene aproximadamente %d hora(s) de huecos intermedios (-%d pts).", horasMuertas, deduccion));
            }
        }

        // 3. Sábados
        boolean tieneSabado = sesionesPorDia.containsKey(DiaSemana.SABADO) && !sesionesPorDia.get(DiaSemana.SABADO).isEmpty();
        if (Boolean.TRUE.equals(pref.getEvitarSabado())) {
            if (!tieneSabado) {
                positivas.add("Sin clases los sábados: Fin de semana completamente libre.");
            } else {
                score -= 15;
                penalizaciones.add("Contiene clases asignadas el día sábado (-15 pts).");
            }
        }

        // 4. Clases Nocturnas
        boolean tieneNocturna = false;
        LocalTime limiteNoche = LocalTime.of(18, 0);
        for (Grupo g : grupos) {
            for (SesionClase s : g.getSesiones()) {
                if (s.getHoraFin().isAfter(limiteNoche)) {
                    tieneNocturna = true;
                    break;
                }
            }
            if (tieneNocturna) break;
        }

        if (Boolean.TRUE.equals(pref.getEvitarNocturna())) {
            if (!tieneNocturna) {
                positivas.add("Sin clases nocturnas: Todas las actividades culminan antes de las 18:00.");
            } else {
                score -= 15;
                penalizaciones.add("Contiene sesiones de clase nocturnas que terminan después de las 18:00 (-15 pts).");
            }
        }

        // 5. Jornada Preferida (Mañana vs Tarde)
        boolean cumpleJornada = true;
        LocalTime mediodia = LocalTime.of(12, 0);
        if (Boolean.TRUE.equals(pref.getPrefiereManana())) {
            long clasesEnTarde = grupos.stream()
                    .flatMap(g -> g.getSesiones().stream())
                    .filter(s -> s.getHoraInicio().isAfter(mediodia) || s.getHoraInicio().equals(mediodia))
                    .count();

            if (clasesEnTarde == 0) {
                positivas.add("Jornada óptima: 100% de clases programadas en la mañana.");
            } else {
                int ded = (int) Math.min(20, clasesEnTarde * 4);
                score -= ded;
                cumpleJornada = false;
                penalizaciones.add(String.format("Preferencia de mañana: Posee %d sesión(es) en la tarde (-%d pts).", clasesEnTarde, ded));
            }
        } else if (Boolean.TRUE.equals(pref.getPrefiereTarde())) {
            long clasesEnManana = grupos.stream()
                    .flatMap(g -> g.getSesiones().stream())
                    .filter(s -> s.getHoraInicio().isBefore(mediodia))
                    .count();

            if (clasesEnManana == 0) {
                positivas.add("Jornada óptima: 100% de clases programadas en la tarde.");
            } else {
                int ded = (int) Math.min(20, clasesEnManana * 4);
                score -= ded;
                cumpleJornada = false;
                penalizaciones.add(String.format("Preferencia de tarde: Posee %d sesión(es) en la mañana (-%d pts).", clasesEnManana, ded));
            }
        }

        // 6. Hora máxima de salida
        boolean cumpleHoraSalida = true;
        if (pref.getHoraMaximaSalida() != null) {
            LocalTime maxSalida = pref.getHoraMaximaSalida();
            boolean excede = grupos.stream()
                    .flatMap(g -> g.getSesiones().stream())
                    .anyMatch(s -> s.getHoraFin().isAfter(maxSalida));
            if (excede) {
                score -= 10;
                cumpleHoraSalida = false;
                penalizaciones.add(String.format("Excede hora máxima de salida (%s) (-10 pts).", maxSalida));
            } else {
                positivas.add(String.format("Cumple límite horario: Ninguna clase termina después de las %s.", maxSalida));
            }
        }

        // 7. Alertas Académicas: Docente No Asignado (NDOC) y Recurso No Asignado (NREF)
        long sinDocente = grupos.stream().filter(g -> Boolean.FALSE.equals(g.getTieneDocenteAsignado())).count();
        if (sinDocente > 0) {
            score -= (int) (sinDocente * 8);
            penalizaciones.add(String.format("Advertencia: Contiene %d grupo(s) con docente pendiente (NDOC) (-%d pts).", sinDocente, sinDocente * 8));
        } else {
            positivas.add("Certeza docente: Todos los grupos tienen profesor asignado.");
        }

        long sinRecurso = grupos.stream().filter(g -> Boolean.FALSE.equals(g.getTieneRecursoFisicoAsignado())).count();
        if (sinRecurso > 0) {
            score -= (int) (sinRecurso * 5);
            penalizaciones.add(String.format("Advertencia: Contiene %d grupo(s) sin salón asignado (NREF) (-%d pts).", sinRecurso, sinRecurso * 5));
        }

        // 8. Modalidad preferida
        boolean cumpleModalidad = true;
        if (pref.getModalidadPreferida() != null) {
            Modalidad prefMod = pref.getModalidadPreferida();
            long modDiferente = grupos.stream().filter(g -> g.getModalidad() != prefMod).count();
            if (modDiferente > 0) {
                int ded = (int) Math.min(15, modDiferente * 5);
                score -= ded;
                cumpleModalidad = false;
                penalizaciones.add(String.format("Modalidad: %d grupo(s) no corresponden a la modalidad preferida (%s) (-%d pts).", modDiferente, prefMod, ded));
            } else {
                positivas.add(String.format("Modalidad perfecta: Todos los grupos son de modalidad %s.", prefMod));
            }
        }

        // Acotar puntaje entre 0 y 100
        int puntajeFinal = Math.max(0, Math.min(100, score));

        return ScoreBreakdownDto.builder()
                .puntajeTotal(puntajeFinal)
                .horasMuertasTotales(horasMuertas)
                .diasLibresTotales(diasLibres)
                .cumpleJornadaPreferida(cumpleJornada)
                .sinSabado(!tieneSabado)
                .sinNocturnas(!tieneNocturna)
                .todosDocenteAsignado(sinDocente == 0)
                .todosRecursoAsignado(sinRecurso == 0)
                .cumpleModalidadPreferida(cumpleModalidad)
                .cumpleHoraSalida(cumpleHoraSalida)
                .razonesPositivas(positivas)
                .penalizaciones(penalizaciones)
                .build();
    }
}
