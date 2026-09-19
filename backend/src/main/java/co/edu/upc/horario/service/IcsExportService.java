package co.edu.upc.horario.service;

import co.edu.upc.horario.exception.ResourceNotFoundException;
import co.edu.upc.horario.model.entity.*;
import co.edu.upc.horario.model.enums.DiaSemana;
import co.edu.upc.horario.repository.HorarioGuardadoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalAdjusters;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class IcsExportService {

    private final HorarioGuardadoRepository horarioGuardadoRepository;

    private static final DateTimeFormatter ICS_DATE_FORMAT = DateTimeFormatter.ofPattern("yyyyMMdd");
    private static final DateTimeFormatter ICS_TIME_FORMAT = DateTimeFormatter.ofPattern("HHmmss");

    @Transactional(readOnly = true)
    public String generateIcsForSavedSchedule(Long horarioId) {
        HorarioGuardado horario = horarioGuardadoRepository.findByIdWithGrupos(horarioId)
                .orElseThrow(() -> new ResourceNotFoundException("Horario guardado no encontrado con id: " + horarioId));

        LocalDate semesterStart = horario.getPeriodo().getFechaInicio();
        LocalDate semesterEnd = horario.getPeriodo().getFechaFin();
        String untilFormatted = semesterEnd.format(ICS_DATE_FORMAT) + "T235959Z";

        StringBuilder sb = new StringBuilder();
        sb.append("BEGIN:VCALENDAR\r\n");
        sb.append("VERSION:2.0\r\n");
        sb.append("PRODID:-//Universidad Popular del Cesar//HorarioUPC 1.0//ES\r\n");
        sb.append("CALSCALE:GREGORIAN\r\n");
        sb.append("METHOD:PUBLISH\r\n");
        sb.append("X-WR-CALNAME:Horario UPC - ").append(escapeIcs(horario.getNombre())).append("\r\n");
        sb.append("X-WR-TIMEZONE:America/Bogota\r\n");

        for (Grupo grupo : horario.getGrupos()) {
            String materiaDesc = grupo.getMateria().getNombre() + " (" + grupo.getMateria().getCodigo() + ")";
            String location = grupo.getAula() + " - " + grupo.getSede();
            String description = "Docente: " + grupo.getDocente() + "\\n" +
                                 "Modalidad: " + grupo.getModalidad() + "\\n" +
                                 "Créditos: " + grupo.getMateria().getCreditos() + "\\n" +
                                 "Generado por HorarioUPC";

            for (SesionClase sesion : grupo.getSesiones()) {
                DayOfWeek targetDay = mapDiaSemanaToDayOfWeek(sesion.getDiaSemana());
                LocalDate firstClassDate = semesterStart.with(TemporalAdjusters.nextOrSame(targetDay));

                String dtStart = firstClassDate.format(ICS_DATE_FORMAT) + "T" + sesion.getHoraInicio().format(ICS_TIME_FORMAT);
                String dtEnd = firstClassDate.format(ICS_DATE_FORMAT) + "T" + sesion.getHoraFin().format(ICS_TIME_FORMAT);

                sb.append("BEGIN:VEVENT\r\n");
                sb.append("UID:").append(UUID.randomUUID()).append("@horarioupc.unicesar.edu.co\r\n");
                sb.append("DTSTAMP:").append(LocalDate.now().format(ICS_DATE_FORMAT)).append("T000000Z\r\n");
                sb.append("DTSTART;TZID=America/Bogota:").append(dtStart).append("\r\n");
                sb.append("DTEND;TZID=America/Bogota:").append(dtEnd).append("\r\n");
                sb.append("RRULE:FREQ=WEEKLY;UNTIL=").append(untilFormatted).append("\r\n");
                sb.append("SUMMARY:").append(escapeIcs(materiaDesc)).append(" - Grupo ").append(escapeIcs(grupo.getNumeroGrupo())).append("\r\n");
                sb.append("LOCATION:").append(escapeIcs(location)).append("\r\n");
                sb.append("DESCRIPTION:").append(escapeIcs(description)).append("\r\n");
                sb.append("STATUS:CONFIRMED\r\n");
                sb.append("END:VEVENT\r\n");
            }
        }

        sb.append("END:VCALENDAR\r\n");
        return sb.toString();
    }

    private DayOfWeek mapDiaSemanaToDayOfWeek(DiaSemana dia) {
        return switch (dia) {
            case LUNES -> DayOfWeek.MONDAY;
            case MARTES -> DayOfWeek.TUESDAY;
            case MIERCOLES -> DayOfWeek.WEDNESDAY;
            case JUEVES -> DayOfWeek.THURSDAY;
            case VIERNES -> DayOfWeek.FRIDAY;
            case SABADO -> DayOfWeek.SATURDAY;
            case DOMINGO -> DayOfWeek.SUNDAY;
        };
    }

    private String escapeIcs(String text) {
        if (text == null) return "";
        return text.replace("\\", "\\\\")
                   .replace(";", "\\;")
                   .replace(",", "\\,")
                   .replace("\n", "\\n");
    }
}
