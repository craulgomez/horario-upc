import React, { useState } from 'react';
import { GeneratedScheduleOption } from '../../types';
import { Award, ChevronDown, ChevronUp, Check, Bookmark, AlertCircle, Clock, Coffee } from 'lucide-react';
import { AlertBadge } from '../common/AlertBadge';

interface GeneratedOptionCardProps {
  option: GeneratedScheduleOption;
  isSelected?: boolean;
  onApply: (option: GeneratedScheduleOption) => void;
  onSave?: (option: GeneratedScheduleOption) => void;
}

export const GeneratedOptionCard: React.FC<GeneratedOptionCardProps> = ({
  option,
  isSelected = false,
  onApply,
  onSave,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'bg-emerald-500 text-white';
    if (score >= 70) return 'bg-blue-600 text-white';
    if (score >= 50) return 'bg-amber-500 text-white';
    return 'bg-rose-500 text-white';
  };

  return (
    <div
      className={`rounded-xl border transition-all p-4 bg-white shadow-xs ${
        isSelected ? 'border-upc-green-600 ring-2 ring-emerald-500/20' : 'border-slate-200 hover:border-slate-300'
      }`}
    >
      {/* Cabecera: Identificador y Puntaje */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-sm text-slate-800 tracking-tight">
            Opción {option.idOpcion}
          </span>
          <span className="text-xs text-slate-400">({option.grupos.length} materias)</span>
        </div>

        <div className="flex items-center gap-2">
          <div className={`px-2.5 py-1 rounded-full font-extrabold text-xs flex items-center gap-1 shadow-xs ${getScoreColor(option.puntaje)}`}>
            <Award className="w-3.5 h-3.5" />
            <span>{option.puntaje} / 100</span>
          </div>
        </div>
      </div>

      {/* Resumen de Métricas */}
      <div className="grid grid-cols-3 gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs mb-3">
        <div>
          <span className="text-slate-400 block text-[10px] uppercase font-semibold">Días Libres</span>
          <span className="font-bold text-slate-700 flex items-center gap-1">
            <Coffee className="w-3 h-3 text-amber-500" />
            {option.diasLibres} día(s)
          </span>
        </div>
        <div>
          <span className="text-slate-400 block text-[10px] uppercase font-semibold">Horas Muertas</span>
          <span className="font-bold text-slate-700 flex items-center gap-1">
            <Clock className="w-3 h-3 text-emerald-600" />
            {option.horasMuertas} h
          </span>
        </div>
        <div>
          <span className="text-slate-400 block text-[10px] uppercase font-semibold">Horario</span>
          <span className="font-bold text-slate-700 font-mono text-[11px]">
            {option.horaMasTemprana.substring(0, 5)} - {option.horaMasTardia.substring(0, 5)}
          </span>
        </div>
      </div>

      {/* Lista de Grupos incluidos */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {option.grupos.map((g) => (
          <span
            key={g.id}
            className="inline-flex items-center gap-1 bg-slate-100 border border-slate-200 text-slate-700 px-2 py-0.5 rounded text-[11px] font-medium"
          >
            <span className="font-bold">{g.materiaCodigo}</span>
            <span className="text-slate-400">({g.numeroGrupo})</span>
          </span>
        ))}
      </div>

      {/* Alertas */}
      {option.tieneAlertas && (
        <div className="mb-3 flex flex-wrap gap-1">
          {option.alertas.map((al, idx) => (
            <AlertBadge key={idx} type="NDOC" text={al} size="sm" />
          ))}
        </div>
      )}

      {/* Desglose Expandible */}
      <div className="border-t border-slate-100 pt-2 mb-3">
        <button
          type="button"
          onClick={() => setShowDetails(!showDetails)}
          className="text-xs font-semibold text-slate-500 hover:text-slate-700 flex items-center justify-between w-full"
        >
          <span>¿Por qué tiene este puntaje?</span>
          {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {showDetails && (
          <div className="mt-2 text-xs space-y-1.5 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
            {option.desglosePuntaje?.razonesPositivas.map((r, i) => (
              <div key={i} className="flex items-start gap-1.5 text-emerald-800">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{r}</span>
              </div>
            ))}
            {option.desglosePuntaje?.penalizaciones.map((p, i) => (
              <div key={i} className="flex items-start gap-1.5 text-amber-800">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>{p}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Botones de Acción */}
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => onApply(option)}
          className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors ${
            isSelected
              ? 'bg-emerald-100 text-emerald-800'
              : 'bg-upc-green-600 hover:bg-upc-green-700 text-white'
          }`}
        >
          <Check className="w-3.5 h-3.5" />
          {isSelected ? 'Aplicado' : 'Visualizar en Rejilla'}
        </button>

        {onSave && (
          <button
            type="button"
            onClick={() => onSave(option)}
            className="p-2 border border-slate-200 text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
            title="Guardar horario en mi cuenta"
          >
            <Bookmark className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
