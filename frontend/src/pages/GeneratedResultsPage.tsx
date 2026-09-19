import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useSchedulePlanner } from '../context/SchedulePlannerContext';
import { scheduleApi } from '../api/schedule.api';
import { GeneratedScheduleOption } from '../types';
import { GeneratedOptionCard } from '../components/schedule/GeneratedOptionCard';
import { WeeklyGridCalendar } from '../components/schedule/WeeklyGridCalendar';
import { ScheduleExportActions } from '../components/schedule/ScheduleExportActions';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { Sparkles, ArrowLeft, Check, Bookmark, Filter, Sliders } from 'lucide-react';
import { PreferencesDrawer } from '../components/schedule/PreferencesDrawer';
import { preferencesApi } from '../api/preferences.api';

export const GeneratedResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const { selectedSubjects, periodoId, applyGroupCombination } = useSchedulePlanner();

  const [selectedOption, setSelectedOption] = useState<GeneratedScheduleOption | null>(null);
  const [minScoreFilter, setMinScoreFilter] = useState<number>(0);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [saveModalOpen, setSaveModalOpen] = useState(false);
  const [scheduleName, setScheduleName] = useState('Horario Optimizado');

  const { data: userPrefs, refetch: refetchPrefs } = useQuery({
    queryKey: ['userPreferences'],
    queryFn: preferencesApi.getPreferences,
  });

  const { data: options, isLoading, error, refetch } = useQuery({
    queryKey: ['generateSchedules', periodoId, selectedSubjects.map((s) => s.id), userPrefs],
    queryFn: () =>
      scheduleApi.generateSchedules({
        periodoId,
        materiaIds: selectedSubjects.map((s) => s.id),
        preferencias: userPrefs,
        limite: 30,
      }),
    enabled: selectedSubjects.length > 0,
  });

  // Establecer la primera opción por defecto cuando cargan
  React.useEffect(() => {
    if (options && options.length > 0 && !selectedOption) {
      setSelectedOption(options[0]);
    }
  }, [options, selectedOption]);

  const filteredOptions = (options || []).filter((opt) => opt.puntaje >= minScoreFilter);

  const handleApply = (option: GeneratedScheduleOption) => {
    applyGroupCombination(option.grupos);
    navigate('/planificador');
  };

  const handleSave = async () => {
    if (!selectedOption) return;
    try {
      await scheduleApi.saveSchedule({
        nombre: scheduleName.trim(),
        periodoId,
        grupoIds: selectedOption.grupos.map((g) => g.id),
        puntaje: selectedOption.puntaje,
        desglosePuntajeJson: JSON.stringify(selectedOption.desglosePuntaje),
      });
      setSaveModalOpen(false);
      navigate('/guardados');
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error guardando horario');
    }
  };

  if (selectedSubjects.length === 0) {
    return (
      <div className="max-w-xl mx-auto py-20 text-center px-4">
        <Sparkles className="w-12 h-12 text-slate-300 mx-auto mb-3" />
        <h2 className="text-xl font-bold text-slate-800">No hay materias seleccionadas</h2>
        <p className="text-xs text-slate-500 mt-1 mb-6">
          Agrega al menos una materia en el catálogo o en el constructor antes de generar combinaciones.
        </p>
        <button
          onClick={() => navigate('/explorador')}
          className="px-5 py-2.5 rounded-xl bg-upc-green-600 text-white font-bold text-xs shadow-md"
        >
          Ir al Catálogo de Materias
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Cabecera */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/planificador')}
            className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors"
            title="Volver al constructor"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">Horarios Generados</h1>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-extrabold">
                {options ? `${options.length} alternativas` : 'Calculando...'}
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Combinaciones 100% compatibles sin cruces, clasificadas de 0 a 100 según tus preferencias
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPreferencesOpen(true)}
            className="px-3.5 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-2 transition-colors"
          >
            <Sliders className="w-4 h-4 text-emerald-600" />
            <span>Ajustar Criterios</span>
          </button>

          {selectedOption && (
            <>
              <button
                type="button"
                onClick={() => setSaveModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs"
              >
                <Bookmark className="w-4 h-4 text-upc-gold-400" />
                <span>Guardar esta opción</span>
              </button>

              <ScheduleExportActions
                groups={selectedOption.grupos}
                scheduleName={`Horario-UPC-${selectedOption.idOpcion}`}
              />
            </>
          )}
        </div>
      </div>

      {/* Disposición: Lista de opciones (Columna izq) y Calendario de vista previa (Columna der) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Columna Izquierda: Opciones */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between bg-slate-100/60 p-3 rounded-xl border border-slate-200 text-xs">
            <span className="font-bold text-slate-700 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5" />
              <span>Filtrar por puntaje mínimo:</span>
            </span>
            <div className="flex gap-1">
              {[0, 60, 80].map((score) => (
                <button
                  key={score}
                  type="button"
                  onClick={() => setMinScoreFilter(score)}
                  className={`px-2.5 py-1 rounded-lg font-bold text-[11px] ${
                    minScoreFilter === score
                      ? 'bg-slate-900 text-white'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {score === 0 ? 'Todos' : `≥ ${score}`}
                </button>
              ))}
            </div>
          </div>

          {isLoading ? (
            <LoadingSpinner message="Generando combinaciones compatibles con el motor CSP..." />
          ) : error ? (
            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 text-center text-xs text-rose-800">
              <p className="font-bold text-sm mb-1">No se encontraron combinaciones</p>
              <p>{(error as any)?.response?.data?.message || 'Revisa que las materias seleccionadas no tengan grupos incompatibles.'}</p>
            </div>
          ) : filteredOptions.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-xs text-slate-500">
              No hay alternativas que alcancen un puntaje mayor o igual a {minScoreFilter}.
            </div>
          ) : (
            <div className="space-y-3 max-h-[850px] overflow-y-auto pr-1">
              {filteredOptions.map((option) => (
                <div
                  key={option.idOpcion}
                  onClick={() => setSelectedOption(option)}
                  className="cursor-pointer"
                >
                  <GeneratedOptionCard
                    option={option}
                    isSelected={selectedOption?.idOpcion === option.idOpcion}
                    onApply={handleApply}
                    onSave={() => {
                      setSelectedOption(option);
                      setSaveModalOpen(true);
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Columna Derecha: Rejilla en Vivo de la Opción Seleccionada */}
        <div className="lg:col-span-7 space-y-3">
          {selectedOption ? (
            <>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-900 flex items-center justify-between">
                <div>
                  <span className="font-extrabold text-sm block text-emerald-950">
                    Visualizando: Opción {selectedOption.idOpcion}
                  </span>
                  <span>
                    Puntaje: {selectedOption.puntaje}/100 • {selectedOption.diasLibres} día(s) libre(s) • {selectedOption.horasMuertas} h huecos
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleApply(selectedOption)}
                  className="px-4 py-2 rounded-xl bg-upc-green-600 hover:bg-upc-green-700 text-white font-bold text-xs shadow-xs"
                >
                  Aplicar al Constructor
                </button>
              </div>

              <WeeklyGridCalendar
                groups={selectedOption.grupos}
                readOnly={true}
              />
            </>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-400">
              Selecciona una opción a la izquierda para visualizarla en la rejilla semanal.
            </div>
          )}
        </div>
      </div>

      {/* Drawer de Preferencias */}
      {userPrefs && (
        <PreferencesDrawer
          isOpen={isPreferencesOpen}
          onClose={() => setIsPreferencesOpen(false)}
          preferences={userPrefs}
          onChange={(newPref) => {
            preferencesApi.updatePreferences(newPref).then(() => {
              refetchPrefs();
              refetch();
            });
          }}
        />
      )}

      {/* Modal Guardar */}
      {saveModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <h3 className="font-extrabold text-lg text-slate-900">Guardar Horario en tu Cuenta</h3>
            <input
              type="text"
              value={scheduleName}
              onChange={(e) => setScheduleName(e.target.value)}
              className="w-full rounded-xl border border-slate-300 p-2.5 text-sm"
              placeholder="Nombre del horario"
            />
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setSaveModalOpen(false)}
                className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-semibold"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="px-5 py-2 rounded-xl bg-upc-green-600 text-white text-xs font-bold"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
