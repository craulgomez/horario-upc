import React from 'react';
import { UserPreference } from '../../types';
import { Sliders, Sun, Sunset, Moon, CalendarOff, Coffee, Clock, ShieldCheck, X } from 'lucide-react';

interface PreferencesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  preferences: UserPreference;
  onChange: (newPref: UserPreference) => void;
  onSaveToServer?: () => void;
}

export const PreferencesDrawer: React.FC<PreferencesDrawerProps> = ({
  isOpen,
  onClose,
  preferences,
  onChange,
  onSaveToServer,
}) => {
  if (!isOpen) return null;

  const handleToggle = (key: keyof UserPreference) => {
    onChange({
      ...preferences,
      [key]: !preferences[key],
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/40 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-200">
        {/* Cabecera */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-800">
            <Sliders className="w-5 h-5 text-upc-green-600" />
            <h2 className="font-extrabold text-lg">Criterios y Preferencias</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Formulario de Opciones */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm">
          <p className="text-xs text-slate-500 leading-relaxed">
            Personaliza cómo el algoritmo evalúa y puntúa las combinaciones de horario (de 0 a 100 puntos).
          </p>

          {/* Jornada */}
          <div className="space-y-3">
            <label className="font-bold text-slate-700 text-xs uppercase tracking-wider block">
              Jornada de Preferencia
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => onChange({ ...preferences, prefiereManana: true, prefiereTarde: false })}
                className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                  preferences.prefiereManana
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Sun className="w-5 h-5 text-amber-500" />
                <span>Mañana (06:00 - 12:00)</span>
              </button>

              <button
                type="button"
                onClick={() => onChange({ ...preferences, prefiereManana: false, prefiereTarde: true })}
                className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                  preferences.prefiereTarde
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Sunset className="w-5 h-5 text-orange-500" />
                <span>Tarde (12:00 - 18:00)</span>
              </button>
            </div>
          </div>

          {/* Filtros booleanos */}
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <label className="font-bold text-slate-700 text-xs uppercase tracking-wider block">
              Restricciones Personales
            </label>

            {/* Evitar Nocturna */}
            <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50/50">
              <div className="flex items-center gap-3">
                <Moon className="w-4 h-4 text-indigo-500" />
                <div>
                  <span className="font-semibold block text-slate-800">Evitar clases nocturnas</span>
                  <span className="text-xs text-slate-500">Terminar antes de las 18:00</span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={preferences.evitarNocturna}
                onChange={() => handleToggle('evitarNocturna')}
                className="w-4 h-4 rounded text-upc-green-600 focus:ring-emerald-500 cursor-pointer"
              />
            </div>

            {/* Evitar Sábados */}
            <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50/50">
              <div className="flex items-center gap-3">
                <CalendarOff className="w-4 h-4 text-rose-500" />
                <div>
                  <span className="font-semibold block text-slate-800">Evitar clases los sábados</span>
                  <span className="text-xs text-slate-500">Fin de semana libre</span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={preferences.evitarSabado}
                onChange={() => handleToggle('evitarSabado')}
                className="w-4 h-4 rounded text-upc-green-600 focus:ring-emerald-500 cursor-pointer"
              />
            </div>

            {/* Día Libre */}
            <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50/50">
              <div className="flex items-center gap-3">
                <Coffee className="w-4 h-4 text-amber-600" />
                <div>
                  <span className="font-semibold block text-slate-800">Buscar un día libre</span>
                  <span className="text-xs text-slate-500">Al menos 1 día sin clases entre semana</span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={preferences.quiereDiaLibre}
                onChange={() => handleToggle('quiereDiaLibre')}
                className="w-4 h-4 rounded text-upc-green-600 focus:ring-emerald-500 cursor-pointer"
              />
            </div>

            {/* Minimizar Huecos */}
            <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50/50">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-emerald-600" />
                <div>
                  <span className="font-semibold block text-slate-800">Minimizar horas muertas</span>
                  <span className="text-xs text-slate-500">Agrupar clases seguidas sin huecos</span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={preferences.minimizarHuecos}
                onChange={() => handleToggle('minimizarHuecos')}
                className="w-4 h-4 rounded text-upc-green-600 focus:ring-emerald-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Modalidad y Hora Salida */}
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <div>
              <label className="font-bold text-slate-700 text-xs uppercase tracking-wider block mb-1">
                Modalidad Preferida
              </label>
              <select
                value={preferences.modalidadPreferida}
                onChange={(e) => onChange({ ...preferences, modalidadPreferida: e.target.value as any })}
                className="w-full rounded-lg border-slate-300 border p-2 text-sm focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="PRESENCIAL">Presencial</option>
                <option value="VIRTUAL">Virtual</option>
                <option value="HIBRIDA">Híbrida</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 text-xs uppercase tracking-wider block mb-1">
                Hora Máxima de Salida
              </label>
              <input
                type="time"
                value={preferences.horaMaximaSalida || "18:00"}
                onChange={(e) => onChange({ ...preferences, horaMaximaSalida: e.target.value })}
                className="w-full rounded-lg border-slate-300 border p-2 text-sm focus:ring-emerald-500 focus:border-emerald-500 font-mono"
              />
            </div>
          </div>
        </div>

        {/* Pie y Guardar */}
        <div className="p-6 border-t border-slate-100 flex gap-3 bg-slate-50">
          <button
            type="button"
            onClick={onClose}
            className="w-1/2 py-2.5 px-4 rounded-xl border border-slate-300 font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
          >
            Listo
          </button>
          {onSaveToServer && (
            <button
              type="button"
              onClick={() => {
                onSaveToServer();
                onClose();
              }}
              className="w-1/2 py-2.5 px-4 rounded-xl bg-upc-green-600 hover:bg-upc-green-700 text-white font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors"
            >
              <ShieldCheck className="w-4 h-4" />
              Guardar Perfil
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
