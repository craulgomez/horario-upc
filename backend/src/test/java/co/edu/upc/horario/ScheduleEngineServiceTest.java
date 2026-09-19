package co.edu.upc.horario;

import co.edu.upc.horario.dto.request.GenerateScheduleRequest;
import co.edu.upc.horario.dto.response.ConflictValidationResponse;
import co.edu.upc.horario.dto.response.GeneratedScheduleOptionDto;
import co.edu.upc.horario.model.entity.*;
import co.edu.upc.horario.model.enums.DiaSemana;
import co.edu.upc.horario.model.enums.Modalidad;
import co.edu.upc.horario.repository.GrupoRepository;
import co.edu.upc.horario.repository.MateriaRepository;
import co.edu.upc.horario.repository.PreferenciaHorarioRepository;
import co.edu.upc.horario.service.AcademicCatalogService;
import co.edu.upc.horario.service.ScheduleEngineService;
import co.edu.upc.horario.service.ScheduleScoringService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyList;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class ScheduleEngineServiceTest {

    @Mock
    private GrupoRepository grupoRepository;

    @Mock
    private MateriaRepository materiaRepository;

    @Mock
    private PreferenciaHorarioRepository preferenciaRepository;

    @Spy
    private ScheduleScoringService scoringService = new ScheduleScoringService();

    @Spy
    private AcademicCatalogService catalogService;

    @InjectMocks
    private ScheduleEngineService scheduleEngineService;

    private Materia programacion;
    private Materia estructuras;
    private PeriodoAcademico periodo;

    @BeforeEach
    void setUp() {
        periodo = PeriodoAcademico.builder().id(1L).nombre("2026-2").build();

        programacion = Materia.builder()
                .id(1L)
                .codigo("SS200")
                .nombre("Programación de Computadores I")
                .creditos(3)
                .semestreSugerido(2)
                .build();

        estructuras = Materia.builder()
                .id(2L)
                .codigo("SS301")
                .nombre("Estructura de Datos")
                .creditos(3)
                .semestreSugerido(3)
                .build();
    }

    @Test
    @DisplayName("Debe detectar solapamiento entre dos sesiones que coinciden en día y hora")
    void testOverlapDetectionTrue() {
        SesionClase s1 = SesionClase.builder()
                .diaSemana(DiaSemana.LUNES)
                .horaInicio(LocalTime.of(8, 0))
                .horaFin(LocalTime.of(9, 59))
                .build();

        SesionClase s2 = SesionClase.builder()
                .diaSemana(DiaSemana.LUNES)
                .horaInicio(LocalTime.of(9, 0))
                .horaFin(LocalTime.of(10, 59))
                .build();

        assertTrue(ScheduleEngineService.haveOverlap(s1, s2));
    }

    @Test
    @DisplayName("No debe detectar solapamiento entre sesiones en días diferentes o consecutivas sin choque")
    void testOverlapDetectionFalse() {
        SesionClase s1 = SesionClase.builder()
                .diaSemana(DiaSemana.LUNES)
                .horaInicio(LocalTime.of(8, 0))
                .horaFin(LocalTime.of(9, 59))
                .build();

        SesionClase s2 = SesionClase.builder()
                .diaSemana(DiaSemana.LUNES)
                .horaInicio(LocalTime.of(10, 0))
                .horaFin(LocalTime.of(11, 59))
                .build();

        SesionClase s3 = SesionClase.builder()
                .diaSemana(DiaSemana.MARTES)
                .horaInicio(LocalTime.of(8, 0))
                .horaFin(LocalTime.of(9, 59))
                .build();

        assertFalse(ScheduleEngineService.haveOverlap(s1, s2));
        assertFalse(ScheduleEngineService.haveOverlap(s1, s3));
    }

    @Test
    @DisplayName("Debe alertar si se intentan seleccionar dos grupos de la misma materia")
    void testSameSubjectMultipleGroupsConflict() {
        Grupo g1 = Grupo.builder().id(101L).numeroGrupo("01-CAMPUS").materia(programacion).sesiones(new ArrayList<>()).build();
        Grupo g2 = Grupo.builder().id(102L).numeroGrupo("02-CAMPUS").materia(programacion).sesiones(new ArrayList<>()).build();

        when(grupoRepository.findAllByIdWithSesiones(List.of(101L, 102L))).thenReturn(List.of(g1, g2));

        ConflictValidationResponse response = scheduleEngineService.validateGroupConflicts(List.of(101L, 102L));

        assertFalse(response.isEsValido());
        assertTrue(response.getConflictos().get(0).contains("múltiples grupos para la misma materia"));
    }

    @Test
    @DisplayName("Debe generar únicamente combinaciones válidas y sin conflictos")
    void testGenerateSchedulesEliminatesConflicts() {
        // Grupo 1 de Programación: Lunes 08:00 - 10:00
        Grupo gProg1 = Grupo.builder()
                .id(101L)
                .numeroGrupo("01-CAMPUS")
                .materia(programacion)
                .periodo(periodo)
                .modalidad(Modalidad.PRESENCIAL)
                .build();
        gProg1.setSesiones(List.of(
                SesionClase.builder().diaSemana(DiaSemana.LUNES).horaInicio(LocalTime.of(8, 0)).horaFin(LocalTime.of(10, 0)).grupo(gProg1).build()
        ));

        // Grupo 1 de Estructuras: Choca con Prog1 (Lunes 09:00 - 11:00)
        Grupo gEst1 = Grupo.builder()
                .id(201L)
                .numeroGrupo("01-CAMPUS")
                .materia(estructuras)
                .periodo(periodo)
                .modalidad(Modalidad.PRESENCIAL)
                .build();
        gEst1.setSesiones(List.of(
                SesionClase.builder().diaSemana(DiaSemana.LUNES).horaInicio(LocalTime.of(9, 0)).horaFin(LocalTime.of(11, 0)).grupo(gEst1).build()
        ));

        // Grupo 2 de Estructuras: Compatible (Martes 08:00 - 10:00)
        Grupo gEst2 = Grupo.builder()
                .id(202L)
                .numeroGrupo("02-CAMPUS")
                .materia(estructuras)
                .periodo(periodo)
                .modalidad(Modalidad.PRESENCIAL)
                .build();
        gEst2.setSesiones(List.of(
                SesionClase.builder().diaSemana(DiaSemana.MARTES).horaInicio(LocalTime.of(8, 0)).horaFin(LocalTime.of(10, 0)).grupo(gEst2).build()
        ));

        when(grupoRepository.findByMateriaIdsAndPeriodoIdWithSesiones(anyList(), eq(1L)))
                .thenReturn(List.of(gProg1, gEst1, gEst2));

        GenerateScheduleRequest req = new GenerateScheduleRequest();
        req.setPeriodoId(1L);
        req.setMateriaIds(List.of(1L, 2L));

        List<GeneratedScheduleOptionDto> opciones = scheduleEngineService.generateSchedules(req, null);

        // Solo debe haber 1 combinación posible: [gProg1, gEst2] (porque gProg1 con gEst1 choca)
        assertEquals(1, opciones.size());
        assertEquals("OPT-1", opciones.get(0).getIdOpcion());
        assertEquals(2, opciones.get(0).getGrupos().size());
        assertTrue(opciones.get(0).getPuntaje() > 0);
    }
}
