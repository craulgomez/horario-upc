import React from 'react';
import { AlertTriangle, UserX, MapPinOff, Globe, MapPin, Moon } from 'lucide-react';

interface AlertBadgeProps {
  type: 'NDOC' | 'NREF' | 'VIRTUAL' | 'SEDE' | 'NOCHE' | 'SABADO';
  text?: string;
  size?: 'sm' | 'md';
}

export const AlertBadge: React.FC<AlertBadgeProps> = ({ type, text, size = 'sm' }) => {
  const isSmall = size === 'sm';
  const padding = isSmall ? 'px-1.5 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs';

  switch (type) {
    case 'NDOC':
      return (
        <span className={`inline-flex items-center gap-1 font-semibold rounded bg-amber-100 text-amber-800 border border-amber-300 ${padding}`}>
          <UserX className={isSmall ? "w-3 h-3" : "w-3.5 h-3.5"} />
          {text || 'Docente Pendiente (NDOC)'}
        </span>
      );
    case 'NREF':
      return (
        <span className={`inline-flex items-center gap-1 font-semibold rounded bg-rose-100 text-rose-800 border border-rose-300 ${padding}`}>
          <MapPinOff className={isSmall ? "w-3 h-3" : "w-3.5 h-3.5"} />
          {text || 'Sin Salón (NREF)'}
        </span>
      );
    case 'VIRTUAL':
      return (
        <span className={`inline-flex items-center gap-1 font-semibold rounded bg-sky-100 text-sky-800 border border-sky-300 ${padding}`}>
          <Globe className={isSmall ? "w-3 h-3" : "w-3.5 h-3.5"} />
          {text || 'Virtual'}
        </span>
      );
    case 'SEDE':
      return (
        <span className={`inline-flex items-center gap-1 font-semibold rounded bg-purple-100 text-purple-800 border border-purple-300 ${padding}`}>
          <MapPin className={isSmall ? "w-3 h-3" : "w-3.5 h-3.5"} />
          {text || 'Sede Externa'}
        </span>
      );
    case 'NOCHE':
      return (
        <span className={`inline-flex items-center gap-1 font-semibold rounded bg-slate-800 text-slate-100 border border-slate-700 ${padding}`}>
          <Moon className={isSmall ? "w-3 h-3" : "w-3.5 h-3.5"} />
          {text || 'Horario Nocturno'}
        </span>
      );
    case 'SABADO':
      return (
        <span className={`inline-flex items-center gap-1 font-semibold rounded bg-orange-100 text-orange-800 border border-orange-300 ${padding}`}>
          <AlertTriangle className={isSmall ? "w-3 h-3" : "w-3.5 h-3.5"} />
          {text || 'Sábado'}
        </span>
      );
    default:
      return null;
  }
};
