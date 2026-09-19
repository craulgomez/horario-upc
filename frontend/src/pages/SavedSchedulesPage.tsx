import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { scheduleApi } from '../api/schedule.api';
import { SavedSchedule } from '../types';
import { WeeklyGridCalendar } from '../components/schedule/WeeklyGridCalendar';
import { ScheduleExportActions } from '../components/schedule/ScheduleExportActions';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { BookmarkCheck, Calendar, Trash2, ChevronDown, ChevronUp, Clock, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SavedSchedulesPage: React.FC = () => {
  const queryClient = useQueryClient();
  const [activeScheduleId, setActiveScheduleId] = useState<number | null>(null);

  const { data: schedules, isLoading } = useQuery({
    queryKey: ['savedSchedules'],
    queryFn: scheduleApi.getSavedSchedules,
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => scheduleApi.deleteSavedSchedule(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['savedSchedules'] });
    },
  });

  const activeSchedule = schedules?.find((s) => s.id === activeScheduleId) || schedules?.[0] || null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Cabecera */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Mis Horarios Guardados</h1>
          <p className="text-xs text-slate-500">
            Gestiona, visualiza y exporta las combinaciones que has guardado en tu cuenta
          </p>
        </div>

        <Link
          to="/planificador"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-upc-green-600 hover:bg-upc-green-700 text-white font-bold text-xs shadow-xs transition-colors self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Crear Nuevo Horario</span>
        </Link>
      </div>

      {isLoading ? (
        <LoadingSpinner message="Cargando tus horarios guardados..." />
      ) : !schedules || schedules.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 p-8">
          <BookmarkCheck className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800">No tienes horarios guardados</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto mb-5">
            Ve al constructor o al generador automático para seleccionar tus grupos y guardarlos aquí.
          </p>
          <Link
            to="/planificador"
            className="px-5 py-2.5 rounded-xl bg-upc-green-600 text-white font-bold text-xs shadow-md"
          >
            Ir al Constructor
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Columna Izquierda: Tarjetas de Horarios Guardados */}
          <div className="lg:col-span-4 space-y-3">
            {schedules.map((horario) => {
              const isActive = activeSchedule?.id === horario.id;

              return (
                <div
                  key={horario.id}
                  onClick={() => setActiveScheduleId(horario.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isActive
                      ? 'border-upc-green-600 bg-emerald-50/40 ring-2 ring-emerald-500/20 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-extrabold text-sm text-slate-900 leading-tight">
                      {horario.nombre}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-extrabold">
                      {horario.puntaje} pts
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 mb-3">
                    {horario.grupos.length} materias • Período {horario.periodoNombre}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {horario.grupos.map((g) => (
                      <span
                        key={g.id}
                        className="bg-slate-100 border border-slate-200 text-slate-700 px-2 py-0.5 rounded text-[10px] font-medium"
                      >
                        {g.materiaCodigo} ({g.numeroGrupo})
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <span className="text-[10px] text-slate-400">
                      {new Date(horario.createdAt).toLocaleDateString('es-CO')}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm(`¿Estás seguro de eliminar el horario "${horario.nombre}"?`)) {
                          deleteMutation.mutate(horario.id);
                        }
                      }}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                      title="Eliminar horario guardado"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Columna Derecha: Vista Previa y Botones de Exportación */}
          <div className="lg:col-span-8 space-y-4">
            {activeSchedule && (
              <>
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-extrabold text-slate-900">{activeSchedule.nombre}</h2>
                    <p className="text-xs text-slate-500">
                      {activeSchedule.grupos.length} materias matriculadas en esta alternativa
                    </p>
                  </div>

                  <ScheduleExportActions
                    groups={activeSchedule.grupos}
                    scheduleName={activeSchedule.nombre}
                  />
                </div>

                <WeeklyGridCalendar
                  groups={activeSchedule.grupos}
                  readOnly={true}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
