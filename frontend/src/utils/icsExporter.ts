import { Group } from '../types';

export function downloadClientIcs(grupos: Group[], scheduleName: string = 'Horario-UPC') {
  const semesterUntil = '20261215T235959Z';

  let ics = "BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//HorarioUPC//ES\r\nCALSCALE:GREGORIAN\r\n";
  ics += `X-WR-CALNAME:${scheduleName}\r\n`;

  const dayOffsets: Record<string, number> = {
    LUNES: 0,
    MARTES: 1,
    MIERCOLES: 2,
    JUEVES: 3,
    VIERNES: 4,
    SABADO: 5
  };

  grupos.forEach((g) => {
    g.sesiones.forEach((s) => {
      const offset = dayOffsets[s.diaSemana] || 0;
      // 2026-08-03 era lunes (dia 3 de agosto)
      const dayNum = 3 + offset;
      const dayFormatted = dayNum < 10 ? `0${dayNum}` : `${dayNum}`;
      const dtStart = `202608${dayFormatted}T${s.horaInicio.replace(':', '')}00`;
      const dtEnd = `202608${dayFormatted}T${s.horaFin.replace(':', '')}00`;

      ics += "BEGIN:VEVENT\r\n";
      ics += `UID:${Math.random().toString(36).substring(2)}@horarioupc\r\n`;
      ics += `DTSTART:${dtStart}\r\n`;
      ics += `DTEND:${dtEnd}\r\n`;
      ics += `RRULE:FREQ=WEEKLY;UNTIL=${semesterUntil}\r\n`;
      ics += `SUMMARY:${g.materiaNombre} (${g.materiaCodigo}) - ${g.numeroGrupo}\r\n`;
      ics += `LOCATION:${s.aula || g.aula} - ${g.sede}\r\n`;
      ics += `DESCRIPTION:Docente: ${g.docente}\\nModalidad: ${g.modalidad}\r\n`;
      ics += "END:VEVENT\r\n";
    });
  });

  ics += "END:VCALENDAR\r\n";

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${scheduleName.toLowerCase().replace(/\s+/g, '-')}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}
