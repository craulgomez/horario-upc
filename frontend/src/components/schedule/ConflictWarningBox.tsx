import React from 'react';
import { ConflictValidationResult } from '../../types';
import { AlertOctagon, CheckCircle2, AlertTriangle } from 'lucide-react';

interface ConflictWarningBoxProps {
  conflictResult: ConflictValidationResult | null;
  isValidating?: boolean;
}

export const ConflictWarningBox: React.FC<ConflictWarningBoxProps> = ({
  conflictResult,
  isValidating = false,
}) => {
  if (isValidating) {
    return (
      <div className="bg-slate-100 border border-slate-200 rounded-xl p-3 flex items-center gap-3 text-slate-600 text-xs">
        <div className="w-4 h-4 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin shrink-0"></div>
        <span>Verificando posibles choques de horario en tiempo real...</span>
      </div>
    );
  }

  if (!conflictResult) {
    return null;
  }

  if (conflictResult.esValido) {
    return (
      <div className="space-y-2">
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-start gap-2.5 text-emerald-900 text-xs shadow-xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-sm block text-emerald-800">Horario Compatible (0 Choques)</span>
            <span>Todos los grupos seleccionados tienen disponibilidad y no presentan traslapes de tiempo.</span>
          </div>
        </div>

        {conflictResult.advertencias.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900">
            <div className="flex items-center gap-1.5 font-bold text-amber-800 mb-1">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Advertencias Académicas ({conflictResult.advertencias.length}):</span>
            </div>
            <ul className="list-disc pl-5 space-y-0.5 text-slate-700">
              {conflictResult.advertencias.map((adv, i) => (
                <li key={i}>{adv}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-rose-50 border-2 border-rose-300 rounded-xl p-4 text-xs text-rose-950 shadow-xs animate-shake">
      <div className="flex items-center gap-2 font-extrabold text-sm text-rose-800 mb-2">
        <AlertOctagon className="w-5 h-5 text-rose-600 shrink-0" />
        <span>¡Conflicto de Horario Detectado ({conflictResult.cantidadConflictos})!</span>
      </div>
      <p className="mb-2 text-rose-900 font-medium">
        No es posible matricular esta combinación debido a los siguientes choques:
      </p>
      <ul className="space-y-1.5 bg-white/70 rounded-lg p-2.5 border border-rose-200">
        {conflictResult.conflictos.map((c, i) => (
          <li key={i} className="flex items-start gap-1.5 text-rose-800 font-medium">
            <span className="text-rose-500 font-bold">•</span>
            <span>{c}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
