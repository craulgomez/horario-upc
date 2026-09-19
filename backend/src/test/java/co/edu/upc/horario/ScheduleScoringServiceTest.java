package co.edu.upc.horario;

import co.edu.upc.horario.dto.request.UserPreferenceRequest;
import co.edu.upc.horario.dto.response.ScoreBreakdownDto;
import co.edu.upc.horario.model.entity.Grupo;
import co.edu.upc.horario.model.entity.Materia;
import co.edu.upc.horario.model.entity.SesionClase;
import co.edu.upc.horario.model.enums.DiaSemana;
import co.edu.upc.horario.model.enums.Modalidad;
import co.edu.upc.horario.service.ScheduleScoringService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.time.LocalTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class ScheduleScoringServiceTest {

    private ScheduleScoringService scoringService;
    private Materia materia;

    @BeforeEach
    void setUp() {
        scoringService = new ScheduleScoringService();
        materia = Materia.builder().id(1L).codigo("SS200").nombre("Programación").creditos(3).build();
    }

    @Test
    @DisplayName("Debe otorgar puntaje alto a un horario compacto matutino sin sábados")
    void testOptimalMorningScheduleScoresHigh() {
        Grupo g1 = Grupo.builder()
                .id(1L)
                .numeroGrupo("01-CAMPUS")
                .materia(materia)
                .modalidad(Modalidad.PRESENCIAL)
                .tieneDocenteAsignado(true)
                .tieneRecursoFisicoAsignado(true)
                .build();

        g1.setSesiones(List.of(
                SesionClase.builder().diaSemana(DiaSemana.LUNES).horaInicio(LocalTime.of(8, 0)).horaFin(LocalTime.of(10, 0)).build(),
                SesionClase.builder().diaSemana(DiaSemana.MIERCOLES).horaInicio(LocalTime.of(8, 0)).horaFin(LocalTime.of(10, 0)).build()
        ));

        UserPreferenceRequest pref = UserPreferenceRequest.builder()
                .prefiereManana(true)
                .prefiereTarde(false)
                .evitarNocturna(true)
                .evitarSabado(true)
                .quiereDiaLibre(true)
                .minimizarHuecos(true)
                .modalidadPreferida(Modalidad.PRESENCIAL)
                .horaMaximaSalida(LocalTime.of(18, 0))
                .build();

        ScoreBreakdownDto score = scoringService.calculateScore(List.of(g1), pref);

        assertEquals(100, score.getPuntajeTotal());
        assertTrue(score.isSinSabado());
        assertTrue(score.isSinNocturnas());
        assertTrue(score.isCumpleJornadaPreferida());
        assertTrue(score.getDiasLibresTotales() > 0);
    }

    @Test
    @DisplayName("Debe penalizar el puntaje si el horario contiene clases en sábado y el estudiante desea evitarlas")
    void testSaturdayPenalty() {
        Grupo gSabado = Grupo.builder()
                .id(2L)
                .numeroGrupo("02-CAMPUS")
                .materia(materia)
                .modalidad(Modalidad.PRESENCIAL)
                .tieneDocenteAsignado(true)
                .tieneRecursoFisicoAsignado(true)
                .build();

        gSabado.setSesiones(List.of(
                SesionClase.builder().diaSemana(DiaSemana.SABADO).horaInicio(LocalTime.of(8, 0)).horaFin(LocalTime.of(12, 0)).build()
        ));

        UserPreferenceRequest pref = UserPreferenceRequest.builder()
                .evitarSabado(true)
                .build();

        ScoreBreakdownDto score = scoringService.calculateScore(List.of(gSabado), pref);

        assertFalse(score.isSinSabado());
        assertTrue(score.getPuntajeTotal() <= 85);
        assertTrue(score.getPenalizaciones().stream().anyMatch(p -> p.contains("sábado")));
    }

    @Test
    @DisplayName("Debe penalizar las horas muertas (huecos) entre clases del mismo día")
    void testDeadHoursPenalty() {
        Grupo g1 = Grupo.builder()
                .id(1L)
                .numeroGrupo("01")
                .materia(materia)
                .tieneDocenteAsignado(true)
                .tieneRecursoFisicoAsignado(true)
                .build();
        g1.setSesiones(List.of(
                SesionClase.builder().diaSemana(DiaSemana.LUNES).horaInicio(LocalTime.of(6, 0)).horaFin(LocalTime.of(8, 0)).build()
        ));

        Grupo g2 = Grupo.builder()
                .id(2L)
                .numeroGrupo("02")
                .materia(materia)
                .tieneDocenteAsignado(true)
                .tieneRecursoFisicoAsignado(true)
                .build();
        // Hueco de 4 horas el lunes (de 08:00 a 12:00)
        g2.setSesiones(List.of(
                SesionClase.builder().diaSemana(DiaSemana.LUNES).horaInicio(LocalTime.of(12, 0)).horaFin(LocalTime.of(14, 0)).build()
        ));

        UserPreferenceRequest pref = UserPreferenceRequest.builder()
                .minimizarHuecos(true)
                .build();

        ScoreBreakdownDto score = scoringService.calculateScore(List.of(g1, g2), pref);

        assertTrue(score.getHorasMuertasTotales() >= 4);
        assertTrue(score.getPenalizaciones().stream().anyMatch(p -> p.contains("Horas muertas")));
    }
}
