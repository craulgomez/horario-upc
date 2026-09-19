import { DiaSemana } from '../types';

export const DIAS_SEMANA: DiaSemana[] = [
  'LUNES',
  'MARTES',
  'MIERCOLES',
  'JUEVES',
  'VIERNES',
  'SABADO'
];

export const DIA_LABELS: Record<DiaSemana, string> = {
  LUNES: 'Lunes',
  MARTES: 'Martes',
  MIERCOLES: 'Miércoles',
  JUEVES: 'Jueves',
  VIERNES: 'Viernes',
  SABADO: 'Sábado',
  DOMINGO: 'Domingo'
};

export const CALENDAR_START_HOUR = 6;  // 06:00
export const CALENDAR_END_HOUR = 22;   // 22:00
export const TOTAL_HOURS = CALENDAR_END_HOUR - CALENDAR_START_HOUR; // 16 horas

export function timeToMinutes(time: string): number {
  if (!time) return 0;
  const [h, m] = time.split(':').map(Number);
  return (h || 0) * 60 + (m || 0);
}

export function formatTime(time: string): string {
  if (!time) return '';
  return time.substring(0, 5);
}

export function getBlockPosition(horaInicio: string, horaFin: string) {
  const startMin = timeToMinutes(horaInicio);
  const endMin = timeToMinutes(horaFin);
  const baseMin = CALENDAR_START_HOUR * 60;
  const totalMin = TOTAL_HOURS * 60;

  const top = Math.max(0, ((startMin - baseMin) / totalMin) * 100);
  const height = Math.max(2, ((endMin - startMin) / totalMin) * 100);

  return { top: `${top}%`, height: `${height}%` };
}
