import React, { useState } from 'react';
import { Group } from '../../types';
import { exportElementAsPdf, exportElementAsPng } from '../../utils/pdfExporter';
import { downloadClientIcs } from '../../utils/icsExporter';
import { Download, FileText, Image, Calendar, Check, Loader2 } from 'lucide-react';

interface ScheduleExportActionsProps {
  groups: Group[];
  scheduleName?: string;
  targetElementId?: string;
}

export const ScheduleExportActions: React.FC<ScheduleExportActionsProps> = ({
  groups,
  scheduleName = 'Horario-UPC-2026-2',
  targetElementId = 'schedule-calendar-capture',
}) => {
  const [exporting, setExporting] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleExportPdf = async () => {
    try {
      setExporting('pdf');
      await exportElementAsPdf(targetElementId, `${scheduleName}.pdf`);
      setSuccess('pdf');
      setTimeout(() => setSuccess(null), 2500);
    } catch (err) {
      alert('Error exportando PDF. Asegúrate de que el horario esté visible en pantalla.');
    } finally {
      setExporting(null);
    }
  };

  const handleExportPng = async () => {
    try {
      setExporting('png');
      await exportElementAsPng(targetElementId, `${scheduleName}.png`);
      setSuccess('png');
      setTimeout(() => setSuccess(null), 2500);
    } catch (err) {
      alert('Error exportando imagen PNG.');
    } finally {
      setExporting(null);
    }
  };

  const handleExportIcs = () => {
    try {
      setExporting('ics');
      downloadClientIcs(groups, scheduleName);
      setSuccess('ics');
      setTimeout(() => setSuccess(null), 2500);
    } catch (err) {
      alert('Error generando archivo de calendario.');
    } finally {
      setExporting(null);
    }
  };

  const disabled = groups.length === 0 || !!exporting;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Botón Exportar PDF */}
      <button
        type="button"
        disabled={disabled}
        onClick={handleExportPdf}
        className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 shadow-xs disabled:opacity-50 transition-colors"
      >
        {exporting === 'pdf' ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin text-emerald-600" />
        ) : success === 'pdf' ? (
          <Check className="w-3.5 h-3.5 text-emerald-600" />
        ) : (
          <FileText className="w-3.5 h-3.5 text-rose-600" />
        )}
        <span>Descargar PDF</span>
      </button>

      {/* Botón Exportar PNG */}
      <button
        type="button"
        disabled={disabled}
        onClick={handleExportPng}
        className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 shadow-xs disabled:opacity-50 transition-colors"
      >
        {exporting === 'png' ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin text-emerald-600" />
        ) : success === 'png' ? (
          <Check className="w-3.5 h-3.5 text-emerald-600" />
        ) : (
          <Image className="w-3.5 h-3.5 text-blue-600" />
        )}
        <span>Descargar PNG</span>
      </button>

      {/* Botón Exportar .ICS */}
      <button
        type="button"
        disabled={disabled}
        onClick={handleExportIcs}
        className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 shadow-xs disabled:opacity-50 transition-colors"
      >
        {exporting === 'ics' ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin text-emerald-600" />
        ) : success === 'ics' ? (
          <Check className="w-3.5 h-3.5 text-emerald-600" />
        ) : (
          <Calendar className="w-3.5 h-3.5 text-amber-600" />
        )}
        <span>Calendario (.ics)</span>
      </button>
    </div>
  );
};
