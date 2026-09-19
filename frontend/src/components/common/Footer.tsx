import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-700">HorarioUPC</span>
          <span>•</span>
          <span>Pensum V-0402-IS-D-07 — Período 2026-2</span>
        </div>
        <div className="text-center md:text-right text-slate-400">
          Herramienta externa de planificación académica para estudiantes de la Universidad Popular del Cesar.
          <br className="hidden sm:inline" /> No realiza matrículas ni reemplaza la plataforma oficial Academusoft.
        </div>
      </div>
    </footer>
  );
};
