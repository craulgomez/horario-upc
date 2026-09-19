import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSchedulePlanner } from '../context/SchedulePlannerContext';
import { preferencesApi } from '../api/preferences.api';
import { scheduleApi } from '../api/schedule.api';
import { useQuery } from '@tanstack/react-query';
import { UserPreference, Group } from '../types';
import { WeeklyGridCalendar } from '../components/schedule/WeeklyGridCalendar';
import { ConflictWarningBox } from '../components/schedule/ConflictWarningBox';
import { PreferencesDrawer } from '../components/schedule/PreferencesDrawer';
import { ScheduleExportActions } from '../components/schedule/ScheduleExportActions';
import {
  Sparkles,
  Sliders,
  Bookmark,
  Trash2,
  Plus,
  BookOpen,
  Calendar as CalendarIcon,
  CheckCircle2,
  Info,
  Layers
} from 'lucide-react';
import { catalogApi } from '../api/catalog.api';
import { AlertBadge } from '../components/common/AlertBadge';

export const SchedulePlannerPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    periodoId,
    selectedSubjects,
    selectedGroups,
    conflictResult,
    isValidating,
    selectGroup,
    removeGroup,
    removeSubject,
    clearAll,
  } = useSchedulePlanner();

  const [activeSubjectId, setActiveSubjectId] = useState<number | null>(
    selectedSubjects[0]?.id || null
  );

  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [saveModalOpen, setSaveModalOpen] = useState(false);
  const [scheduleName, setScheduleName] = useState('Mi Horario Semestre 2026-2');
  const [saving, setSaving] = useState(false);

  // Cargar preferencias del estudiante
  const { data: serverPreferences, refetch: refetchPreferences } = useQuery({
    queryKey: ['userPreferences'],
    queryFn: preferencesApi.getPreferences,
  });

  const [localPreferences, setLocalPreferences] = useState<UserPreference>({
    prefiereManana: true,
    prefiereTarde: false,
    evitarNocturna: true,
    evitarSabado: true,
    quiereDiaLibre: false,
    minimizarHuecos: true,
    modalidadPreferida: 'PRESENCIAL',
    horaMaximaSalida: '18:00',
  });

  // Sincronizar preferencias del servidor
  React.useEffect(() => {
    if (serverPreferences) {
      setLocalPreferences(serverPreferences);
    }
  }, [serverPreferences]);

  // Cargar grupos de la materia activa en el panel lateral izquierdo
  const { data: activeSubjectDetail, isLoading: loadingGroups } = useQuery({
    queryKey: ['subjectGroups', activeSubjectId, periodoId],
    queryFn: () => (activeSubjectId ? catalogApi.getSubjectGroups(activeSubjectId, periodoId) : null),
    enabled: !!activeSubjectId,
  });

  const handleSaveSchedule = async () => {
    if (selectedGroups.length === 0) return;
    setSaving(true);
    try {
      await scheduleApi.saveSchedule({
        nombre: scheduleName.trim(),
        periodoId,
        grupoIds: selectedGroups.map((g) => g.id),
        puntaje: 100,
      });
      setSaveModalOpen(false);
      navigate('/guardados');
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error guardando el horario');
    } finally {
      setSaving(false);
    }
  };

  const totalCredits = selectedSubjects.reduce((acc, s) => acc + s.creditos, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Barra de Acciones Superior */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Constructor de Horario</h1>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-extrabold">
              2026-2
            </span>
          </div>
          <p className="text-xs text-slate-500">
            {selectedSubjects.length} materias en plan • {selectedGroups.length} grupos asignados • {totalCredits} créditos
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPreferencesOpen(true)}
            className="px-3.5 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-2 shadow-xs transition-colors"
          >
            <Sliders className="w-4 h-4 text-emerald-600" />
            <span>Preferencias</span>
          </button>

          <button
            type="button"
            disabled={selectedSubjects.length === 0}
            onClick={() => navigate('/generados')}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-700 to-upc-green-600 hover:from-emerald-800 hover:to-upc-green-700 text-white font-extrabold text-xs flex items-center gap-2 shadow-md disabled:opacity-50 transition-all"
          >
            <Sparkles className="w-4 h-4 text-upc-gold-300" />
            <span>Generar Horarios Automáticos</span>
          </button>

          <button
            type="button"
            disabled={selectedGroups.length === 0 || conflictResult?.esValido === false}
            onClick={() => setSaveModalOpen(true)}
            className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center gap-1.5 shadow-xs disabled:opacity-50 transition-colors"
          >
            <Bookmark className="w-4 h-4 text-upc-gold-400" />
            <span>Guardar Horario</span>
          </button>

          <ScheduleExportActions groups={selectedGroups} scheduleName={scheduleName} />
        </div>
      </div>

      {/* Disposición Principal: 3 Columnas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Panel Izquierdo: Materias Seleccionadas y Selección Manual de Grupos (4 Columnas) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="font-extrabold text-xs text-slate-800 uppercase tracking-wider">
                Mis Asignaturas ({selectedSubjects.length})
              </span>
              <button
                type="button"
                onClick={() => navigate('/explorador')}
                className="text-xs font-bold text-upc-green-600 hover:text-upc-green-700 flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Agregar</span>
              </button>
            </div>

            {selectedSubjects.length === 0 ? (
              <div className="text-center py-8 text-slate-400">
                <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-xs font-medium">No has seleccionado materias aún.</p>
                <button
                  type="button"
                  onClick={() => navigate('/explorador')}
                  className="mt-3 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-colors"
                >
                  Explorar Catálogo
                </button>
              </div>
            ) : (
              <div className="space-y-1.5">
                {selectedSubjects.map((sub) => {
                  const isActive = activeSubjectId === sub.id;
                  const assignedGroup = selectedGroups.find((g) => g.materiaId === sub.id);

                  return (
                    <div
                      key={sub.id}
                      onClick={() => setActiveSubjectId(sub.id)}
                      className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-center justify-between gap-2 ${
                        isActive
                          ? 'border-emerald-600 bg-emerald-50/50 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-slate-50/40'
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="font-mono font-bold text-slate-900">{sub.codigo}</span>
                          {assignedGroup ? (
                            <span className="px-1.5 py-0.2 rounded bg-emerald-600 text-white text-[10px] font-bold">
                              Grupo {assignedGroup.numeroGrupo}
                            </span>
                          ) : (
                            <span className="px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 text-[10px] font-bold">
                              Sin grupo
                            </span>
                          )}
                        </div>
                        <p className="text-slate-600 truncate font-medium">{sub.nombre}</p>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeSubject(sub.id);
                        }}
                        className="p-1 rounded text-slate-400 hover:text-rose-600 hover:bg-rose-50"
                        title="Quitar materia"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Grupos disponibles para la materia activa */}
          {activeSubjectId && (
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div>
                  <span className="font-extrabold text-xs text-slate-800 block">
                    Grupos para {activeSubjectDetail?.codigo || 'Materia'}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Haz clic para asignar a tu horario semanal
                  </span>
                </div>
              </div>

              <div className="space-y-2 max-h-[420px] overflow-y-auto pr-1">
                {loadingGroups ? (
                  <p className="text-xs text-slate-400 text-center py-4">Cargando grupos...</p>
                ) : !activeSubjectDetail?.grupos || activeSubjectDetail.grupos.length === 0 ? (
                  <p className="text-xs text-slate-400 text-center py-4">No hay grupos disponibles.</p>
                ) : (
                  activeSubjectDetail.grupos.map((grupo) => {
                    const isGroupSelected = selectedGroups.some((g) => g.id === grupo.id);

                    return (
                      <div
                        key={grupo.id}
                        onClick={() => selectGroup(grupo)}
                        className={`p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                          isGroupSelected
                            ? 'border-upc-green-600 bg-emerald-50 ring-2 ring-emerald-500/20 shadow-xs'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-bold text-slate-900 text-sm">
                            Grupo {grupo.numeroGrupo}
                          </span>
                          <span className="text-[11px] font-semibold text-slate-500">
                            {grupo.modalidad}
                          </span>
                        </div>

                        <p className="text-[11px] text-slate-600 truncate mb-1">
                          Prof: <span className="font-medium">{grupo.docente}</span>
                        </p>
                        <p className="text-[11px] text-slate-500 truncate mb-2">
                          Aula: <span className="font-mono">{grupo.aula}</span> • Sede: {grupo.sede}
                        </p>

                        {/* Alertas */}
                        {(Boolean(!grupo.tieneDocenteAsignado) || Boolean(!grupo.tieneRecursoFisicoAsignado)) && (
                          <div className="flex flex-wrap gap-1 mb-2">
                            {!grupo.tieneDocenteAsignado && <AlertBadge type="NDOC" size="sm" />}
                            {!grupo.tieneRecursoFisicoAsignado && <AlertBadge type="NREF" size="sm" />}
                          </div>
                        )}

                        {/* Horarios */}
                        <div className="bg-slate-50 rounded-lg p-2 font-mono text-[10px] space-y-0.5 text-slate-700">
                          {grupo.sesiones.map((s, idx) => (
                            <div key={idx} className="flex justify-between">
                              <span className="font-bold">{s.diaSemana}:</span>
                              <span>{s.horaInicio.substring(0, 5)} - {s.horaFin.substring(0, 5)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}
        </div>

        {/* Panel Central y Derecho: Rejilla Semanal y Estado de Conflictos (8 Columnas) */}
        <div className="lg:col-span-8 space-y-4">
          <ConflictWarningBox conflictResult={conflictResult} isValidating={isValidating} />

          <WeeklyGridCalendar
            groups={selectedGroups}
            onRemoveGroup={removeGroup}
          />
        </div>
      </div>

      {/* Drawer de Preferencias */}
      <PreferencesDrawer
        isOpen={isPreferencesOpen}
        onClose={() => setIsPreferencesOpen(false)}
        preferences={localPreferences}
        onChange={setLocalPreferences}
        onSaveToServer={() => {
          preferencesApi.updatePreferences(localPreferences).then(() => refetchPreferences());
        }}
      />

      {/* Modal para Guardar Horario */}
      {saveModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <h3 className="font-extrabold text-lg text-slate-900">Guardar Horario Favorito</h3>
            <p className="text-xs text-slate-500">
              Asigna un nombre a esta alternativa para consultarla o exportarla más tarde desde tu cuenta.
            </p>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                Nombre del Horario
              </label>
              <input
                type="text"
                value={scheduleName}
                onChange={(e) => setScheduleName(e.target.value)}
                placeholder="Ej: Horario Mañana sin Sábados"
                className="w-full rounded-xl border border-slate-300 p-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setSaveModalOpen(false)}
                className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50"
              >
                Cancelar
              </button>
              <button
                type="button"
                disabled={saving || !scheduleName.trim()}
                onClick={handleSaveSchedule}
                className="px-5 py-2 rounded-xl bg-upc-green-600 hover:bg-upc-green-700 text-white text-xs font-bold shadow-xs flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{saving ? 'Guardando...' : 'Guardar Horario'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
