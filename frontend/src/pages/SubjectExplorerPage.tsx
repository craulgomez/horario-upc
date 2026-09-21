import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { catalogApi } from '../api/catalog.api';
import { useSchedulePlanner } from '../context/SchedulePlannerContext';
import { Subject, Group } from '../types';
import {
  Search,
  BookOpen,
  Plus,
  Check,
  Calendar,
  ChevronDown,
  ChevronUp,
  MapPin,
  User,
  Clock,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { AlertBadge } from '../components/common/AlertBadge';
import { Link } from 'react-router-dom';

export const SubjectExplorerPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [expandedSubjectId, setExpandedSubjectId] = useState<number | null>(null);

  const { selectedSubjects, toggleSubject, periodoId } = useSchedulePlanner();

  const { data: subjects, isLoading } = useQuery({
    queryKey: ['subjects', selectedSemester, searchTerm],
    queryFn: () =>
      catalogApi.getSubjects({
        semestre: selectedSemester || undefined,
        search: searchTerm || undefined,
      }),
  });

  const semesters = [2, 3, 4, 5, 6, 7, 8, 9, 10];

  const isSubjectSelected = (id: number) => selectedSubjects.some((s) => s.id === id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Cabecera */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Catálogo de Materias</h1>
          <p className="text-xs text-slate-500">
            Explora las asignaturas de Ingeniería de Sistemas (Semestres 2 al 10) y agrégalas a tu canasta de planificación
          </p>
        </div>

        {selectedSubjects.length > 0 && (
          <Link
            to="/planificador"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-upc-green-600 hover:bg-upc-green-700 text-white font-bold text-xs shadow-md transition-all self-start md:self-auto"
          >
            <span>Ir al Constructor ({selectedSubjects.length} seleccionadas)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>

      {/* Barra de Búsqueda y Filtros */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por código (ej: SS200, MT301B) o nombre de materia..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
          />
        </div>

        {/* Filtro de Semestres */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <span className="text-slate-400 font-bold uppercase text-[10px] mr-1 shrink-0">Semestre:</span>
          <button
            type="button"
            onClick={() => setSelectedSemester(null)}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all shrink-0 ${
              selectedSemester === null
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Todos (2°-10°)
          </button>
          {semesters.map((sem) => (
            <button
              key={sem}
              type="button"
              onClick={() => setSelectedSemester(selectedSemester === sem ? null : sem)}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all shrink-0 ${
                selectedSemester === sem
                  ? 'bg-upc-green-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {sem}° Semestre
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-[11px] leading-relaxed">
          <span className="font-extrabold text-amber-700 bg-amber-200/60 px-1.5 py-0.5 rounded text-[10px] shrink-0">INFORMACIÓN UPC</span>
          <span>El <strong>1° Semestre</strong> no se incluye para armar horarios ya que la universidad le asigna un bloque de horario cerrado a los estudiantes nuevos.</span>
        </div>
      </div>

      {/* Listado de Materias */}
      {isLoading ? (
        <LoadingSpinner message="Consultando materias y grupos disponibles..." />
      ) : !subjects || subjects.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <p className="text-base font-bold text-slate-800">No se encontraron materias</p>
          <p className="text-xs text-slate-500 mt-1">Prueba ajustando el término de búsqueda o el semestre seleccionado.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {subjects.map((materia) => {
            const isSelected = isSubjectSelected(materia.id);
            const isExpanded = expandedSubjectId === materia.id;

            return (
              <div
                key={materia.id}
                className={`rounded-2xl border transition-all p-5 flex flex-col justify-between ${
                  isSelected
                    ? 'border-upc-green-600 bg-emerald-50/30 ring-2 ring-emerald-500/20'
                    : 'border-slate-200 bg-white hover:border-slate-300 shadow-xs'
                }`}
              >
                <div>
                  {/* Top Bar: Código & Créditos */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono font-extrabold text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
                      {materia.codigo}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <span>{materia.creditos} Créditos</span>
                      <span>•</span>
                      <span className="text-emerald-700 font-bold">{materia.semestreSugerido}° Semestre</span>
                    </div>
                  </div>

                  {/* Nombre */}
                  <h3 className="font-extrabold text-slate-900 text-base leading-snug mb-3">
                    {materia.nombre}
                  </h3>
                </div>

                {/* Acciones de la tarjeta */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => toggleSubject(materia)}
                      className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                        isSelected
                          ? 'bg-rose-100 hover:bg-rose-200 text-rose-800'
                          : 'bg-upc-green-600 hover:bg-upc-green-700 text-white shadow-xs'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Seleccionada (Quitar)</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Añadir a mi Plan</span>
                        </>
                      )}
                    </button>

                    <SubjectGroupsButton
                      materiaId={materia.id}
                      periodoId={periodoId}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// Componente modal/popover para previsualizar grupos de una materia
const SubjectGroupsButton: React.FC<{ materiaId: number; periodoId: number }> = ({
  materiaId,
  periodoId,
}) => {
  const [open, setOpen] = useState(false);

  const { data: detail, isLoading } = useQuery({
    queryKey: ['subjectGroups', materiaId, periodoId],
    queryFn: () => catalogApi.getSubjectGroups(materiaId, periodoId),
    enabled: open,
  });

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-semibold"
        title="Ver grupos disponibles"
      >
        <BookOpen className="w-4 h-4" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 max-h-[85vh] flex flex-col justify-between shadow-2xl animate-in zoom-in-95">
            <div className="border-b border-slate-100 pb-3 mb-4">
              <h3 className="font-extrabold text-base text-slate-900">
                Grupos Disponibles — {detail?.codigo}
              </h3>
              <p className="text-xs text-slate-500">{detail?.nombre}</p>
            </div>

            <div className="overflow-y-auto space-y-3 flex-1 pr-1">
              {isLoading ? (
                <LoadingSpinner message="Consultando grupos..." />
              ) : !detail?.grupos || detail.grupos.length === 0 ? (
                <p className="text-xs text-slate-400 text-center py-6">No hay grupos ofertados para este período.</p>
              ) : (
                detail.grupos.map((g) => (
                  <div key={g.id} className="p-3 rounded-xl border border-slate-200 bg-slate-50 text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-sm">Grupo {g.numeroGrupo}</span>
                      <span className="font-medium text-slate-500">{g.modalidad} • Sede {g.sede}</span>
                    </div>

                    <div className="text-slate-600 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        <span>Docente: {g.docente}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>Aula principal: {g.aula}</span>
                      </div>
                    </div>

                    {/* Alertas */}
                    {(Boolean(!g.tieneDocenteAsignado) || Boolean(!g.tieneRecursoFisicoAsignado)) && (
                      <div className="flex gap-1 pt-1">
                        {!g.tieneDocenteAsignado && <AlertBadge type="NDOC" size="sm" />}
                        {!g.tieneRecursoFisicoAsignado && <AlertBadge type="NREF" size="sm" />}
                      </div>
                    )}

                    {/* Sesiones semanales */}
                    <div className="border-t border-slate-200/60 pt-1.5 space-y-0.5 text-[11px] font-mono text-slate-700">
                      {g.sesiones.map((s, idx) => (
                        <div key={idx} className="flex justify-between">
                          <span>{s.diaSemana}:</span>
                          <span>{s.horaInicio.substring(0, 5)} - {s.horaFin.substring(0, 5)} ({s.aula || g.aula})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end mt-4">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
