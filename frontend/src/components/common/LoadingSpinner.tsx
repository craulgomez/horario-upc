import React from 'react';

export const LoadingSpinner: React.FC<{ message?: string }> = ({ message = 'Cargando información...' }) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 gap-3 text-slate-500">
      <div className="w-9 h-9 border-3 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-sm font-medium text-slate-600 animate-pulse">{message}</p>
    </div>
  );
};
