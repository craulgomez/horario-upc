import React from 'react';
import { Group } from '../../types';
import {
  CALENDAR_END_HOUR,
  CALENDAR_START_HOUR,
  DIA_LABELS,
  DIAS_SEMANA,
  formatTime,
  getBlockPosition
} from '../../utils/timeHelpers';
import { getSubjectColor } from '../../utils/colors';
import { AlertBadge } from '../common/AlertBadge';
import { MapPin, User, Trash2 } from 'lucide-react';

interface WeeklyGridCalendarProps {
  groups: Group[];
  onRemoveGroup?: (groupId: number) => void;
  readOnly?: boolean;
}

export const WeeklyGridCalendar: React.FC<WeeklyGridCalendarProps> = ({
  groups,
  onRemoveGroup,
  readOnly = false,
}) => {
  // Generar las etiquetas de horas: 06:00 a 22:00
  const hours = Array.from(
    { length: CALENDAR_END_HOUR - CALENDAR_START_HOUR + 1 },
    (_, i) => CALENDAR_START_HOUR + i
  );

  return (
    <div
      id="schedule-calendar-capture"
      className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden select-none"
    >
      {/* Encabezado con Días de la Semana */}
      <div className="grid grid-cols-7 bg-slate-100/80 border-b border-slate-200 text-center font-bold text-xs text-slate-700 py-3">
        <div className="text-slate-400 font-medium">Hora</div>
        {DIAS_SEMANA.map((dia) => {
          // Contar sesiones en este día
          const sessionCount = groups.reduce(
            (acc, g) => acc + g.sesiones.filter((s) => s.diaSemana === dia).length,
            0
          );
          return (
            <div key={dia} className="flex flex-col items-center">
              <span>{DIA_LABELS[dia]}</span>
              {sessionCount > 0 && (
                <span className="text-[10px] text-emerald-700 font-semibold mt-0.5">
                  {sessionCount} clase{sessionCount > 1 ? 's' : ''}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Rejilla de Horarios y Bloques */}
      <div className="relative grid grid-cols-7" style={{ height: '900px' }}>
        {/* Columna de Horas */}
        <div className="border-r border-slate-200 bg-slate-50/50 flex flex-col justify-between py-1 text-[11px] text-slate-500 font-mono text-center">
          {hours.map((h) => (
            <div key={h} className="relative -top-2 flex justify-center items-center">
              <span>{h < 10 ? `0${h}:00` : `${h}:00`}</span>
            </div>
          ))}
        </div>

        {/* 6 Columnas para los Días (Lunes a Sábado) */}
        {DIAS_SEMANA.map((dia) => (
          <div
            key={dia}
            className="relative border-r border-slate-200 last:border-r-0 bg-white"
          >
            {/* Líneas horizontales de guía para cada hora */}
            {hours.map((h) => (
              <div
                key={h}
                className="absolute w-full border-b border-slate-100"
                style={{
                  top: `${((h - CALENDAR_START_HOUR) / (CALENDAR_END_HOUR - CALENDAR_START_HOUR)) * 100}%`,
                  height: '0px',
                }}
              />
            ))}

            {/* Sesiones correspondientes a este día */}
            {groups.map((grupo) => {
              const color = getSubjectColor(grupo.materiaId);
              const sesionesDia = grupo.sesiones.filter((s) => s.diaSemana === dia);

              return sesionesDia.map((sesion, sIdx) => {
                const pos = getBlockPosition(sesion.horaInicio, sesion.horaFin);

                return (
                  <div
                    key={`${grupo.id}-${sIdx}`}
                    style={{ top: pos.top, height: pos.height }}
                    className={`absolute inset-x-1 rounded-lg border p-2 shadow-xs transition-all flex flex-col justify-between overflow-hidden group ${color.bg} ${color.border} ${color.text}`}
                  >
                    <div>
                      {/* Cabecera del Bloque */}
                      <div className="flex items-start justify-between gap-1">
                        <span className="font-extrabold text-xs leading-tight line-clamp-1">
                          {grupo.materiaCodigo}
                        </span>
                        <div className="flex items-center gap-1">
                          <span className={`text-[10px] text-white font-bold px-1.5 py-0.2 rounded ${color.badge}`}>
                            {grupo.numeroGrupo}
                          </span>
                          {!readOnly && onRemoveGroup && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onRemoveGroup(grupo.id);
                              }}
                              className="opacity-0 group-hover:opacity-100 p-0.5 rounded text-rose-600 hover:bg-rose-100 transition-opacity"
                              title="Quitar grupo"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Nombre Materia */}
                      <p className="text-[11px] font-semibold mt-0.5 line-clamp-2 leading-tight">
                        {grupo.materiaNombre}
                      </p>
                    </div>

                    {/* Metadatos: Aula, Docente y Horas */}
                    <div className="text-[10px] space-y-0.5 mt-1 pt-1 border-t border-black/10">
                      <div className="flex items-center gap-1 opacity-90 truncate">
                        <MapPin className="w-3 h-3 shrink-0" />
                        <span className="truncate">{sesion.aula || grupo.aula}</span>
                      </div>
                      <div className="flex items-center gap-1 opacity-90 truncate">
                        <User className="w-3 h-3 shrink-0" />
                        <span className="truncate">{grupo.docente}</span>
                      </div>
                      <div className="font-mono font-medium text-[9px] opacity-75">
                        {formatTime(sesion.horaInicio)} - {formatTime(sesion.horaFin)}
                      </div>

                      {/* Alertas NDOC / NREF en el bloque */}
                      {(Boolean(!grupo.tieneDocenteAsignado) || Boolean(!grupo.tieneRecursoFisicoAsignado)) && (
                        <div className="flex flex-wrap gap-1 pt-0.5">
                          {!grupo.tieneDocenteAsignado && <AlertBadge type="NDOC" size="sm" text="NDOC" />}
                          {!grupo.tieneRecursoFisicoAsignado && <AlertBadge type="NREF" size="sm" text="NREF" />}
                        </div>
                      )}
                    </div>
                  </div>
                );
              });
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
