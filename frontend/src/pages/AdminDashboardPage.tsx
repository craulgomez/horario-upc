import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { catalogApi } from '../api/catalog.api';
import { adminApi } from '../api/admin.api';
import { CsvImportResult, Subject } from '../types';
import {
  Upload,
  Shield,
  FileSpreadsheet,
  CheckCircle2,
  AlertTriangle,
  Search,
  BookOpen,
  Calendar,
  Layers,
  Trash2,
  Plus
} from 'lucide-react';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { AlertBadge } from '../components/common/AlertBadge';

export const AdminDashboardPage: React.FC = () => {
  const queryClient = useQueryClient();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadResult, setUploadResult] = useState<CsvImportResult | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [searchFilter, setSearchFilter] = useState('');

  const { data: subjects, isLoading: loadingSubjects } = useQuery({
    queryKey: ['adminSubjects'],
    queryFn: () => catalogApi.getSubjects(),
  });

  const handleFileUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    setIsUploading(true);
    setUploadError(null);
    setUploadResult(null);

    try {
      const res = await adminApi.importCsv(selectedFile);
      setUploadResult(res);
      setSelectedFile(null);
      queryClient.invalidateQueries({ queryKey: ['adminSubjects'] });
      queryClient.invalidateQueries({ queryKey: ['subjects'] });
    } catch (err: any) {
      setUploadError(err.response?.data?.message || 'Error al procesar el archivo CSV.');
    } finally {
      setIsUploading(false);
    }
  };

  const filteredSubjects = (subjects || []).filter(
    (s) =>
      s.codigo.toLowerCase().includes(searchFilter.toLowerCase()) ||
      s.nombre.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Cabecera de Administración */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Shield className="w-5 h-5 text-amber-600" />
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Panel de Administración</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[11px] font-extrabold">
              ADMIN
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Importación masiva desde reportes Academusoft 4.0 y mantenimiento del catálogo de materias y grupos
          </p>
        </div>
      </div>

      {/* Tarjeta de Importación CSV */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-slate-900 pb-2 border-b border-slate-100">
          <FileSpreadsheet className="w-5 h-5 text-emerald-600" />
          <h2 className="font-extrabold text-base">Importación Masiva desde CSV</h2>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed">
          Carga un archivo CSV exportado desde el reporte oficial de la UPC. El sistema procesará materias, grupos, docentes, salones y sesiones semanales, detectando automáticamente alertas de grupos sin docente (NDOC) y sin aula (NREF).
        </p>

        <form onSubmit={handleFileUpload} className="space-y-4">
          <div className="border-2 border-dashed border-slate-300 hover:border-emerald-500 rounded-2xl p-6 text-center transition-colors bg-slate-50/50">
            <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <label className="cursor-pointer">
              <span className="text-xs font-bold text-upc-green-600 hover:underline">
                Selecciona un archivo .csv
              </span>
              <span className="text-xs text-slate-500"> o arrástralo aquí</span>
              <input
                type="file"
                accept=".csv,text/csv"
                onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                className="hidden"
              />
            </label>
            {selectedFile && (
              <p className="mt-2 text-xs font-bold text-slate-800">
                Archivo seleccionado: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)} KB)
              </p>
            )}
          </div>

          {uploadError && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{uploadError}</span>
            </div>
          )}

          {uploadResult && (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-sm text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>¡Importación Completada con Éxito!</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-medium">
                <div>Filas procesadas: <span className="font-bold">{uploadResult.totalFilasLeidas}</span></div>
                <div>Materias: <span className="font-bold">{uploadResult.materiasProcesadas}</span></div>
                <div>Grupos: <span className="font-bold">{uploadResult.gruposProcesados}</span></div>
                <div>Grupos NDOC: <span className="font-bold">{uploadResult.gruposConNDOC}</span></div>
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!selectedFile || isUploading}
              className="px-6 py-2.5 rounded-xl bg-upc-green-600 hover:bg-upc-green-700 text-white font-bold text-xs shadow-xs disabled:opacity-50 transition-colors flex items-center gap-2"
            >
              {isUploading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Procesando archivo...</span>
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4" />
                  <span>Procesar e Importar CSV</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Catálogo de Materias Administrable */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-100">
          <div>
            <h2 className="font-extrabold text-base text-slate-900">Catálogo de Asignaturas en Sistema</h2>
            <p className="text-xs text-slate-500">
              Total de materias registradas: {subjects?.length || 0}
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Buscar materia..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-300 text-xs"
            />
          </div>
        </div>

        {loadingSubjects ? (
          <LoadingSpinner message="Cargando catálogo..." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-[10px] font-bold">
                <tr>
                  <th className="py-2.5 px-3">Código</th>
                  <th className="py-2.5 px-3">Nombre de la Materia</th>
                  <th className="py-2.5 px-3 text-center">Semestre</th>
                  <th className="py-2.5 px-3 text-center">Créditos</th>
                  <th className="py-2.5 px-3 text-center">Grupos</th>
                  <th className="py-2.5 px-3 text-center">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredSubjects.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-3 font-mono font-bold text-slate-900">{s.codigo}</td>
                    <td className="py-3 px-3 font-semibold text-slate-800">{s.nombre}</td>
                    <td className="py-3 px-3 text-center">{s.semestreSugerido}°</td>
                    <td className="py-3 px-3 text-center">{s.creditos}</td>
                    <td className="py-3 px-3 text-center font-bold text-emerald-700">
                      {s.cantidadGrupos || 0}
                    </td>
                    <td className="py-3 px-3 text-center">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                        Activa
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
