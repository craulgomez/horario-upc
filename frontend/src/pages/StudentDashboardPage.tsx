import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useSchedulePlanner } from '../context/SchedulePlannerContext';
import { useQuery } from '@tanstack/react-query';
import { scheduleApi } from '../api/schedule.api';
import { catalogApi } from '../api/catalog.api';
import {
  Calendar,
  BookOpen,
  BookmarkCheck,
  Sparkles,
  ArrowRight,
  Sliders,
  CheckCircle2,
  Clock,
  Coffee,
  AlertTriangle
} from 'lucide-react';
import { LoadingSpinner } from '../components/common/LoadingSpinner';

export const StudentDashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { selectedSubjects, selectedGroups } = useSchedulePlanner();

  const { data: activePeriod, isLoading: loadingPeriod } = useQuery({
    queryKey: ['activePeriod'],
    queryFn: catalogApi.getActivePeriod,
  });

  const { data: savedSchedules, isLoading: loadingSchedules } = useQuery({
    queryKey: ['savedSchedules'],
    queryFn: scheduleApi.getSavedSchedules,
  });

  const totalCredits = selectedSubjects.reduce((acc, s) => acc + s.creditos, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Banner de Bienvenida */}
      <div className="rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-slate-900 text-white p-8 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 opacity-10">
          <Calendar className="w-80 h-80 text-white" />
        </div>

        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold backdrop-blur-xs">
            <span>Período Académico {activePeriod?.nombre || '2026-2'}</span>
            <span>•</span>
            <span>Ingeniería de Sistemas</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            ¡Hola, {user?.nombre?.split(' ')[0]}!
          </h1>

          <p className="text-emerald-100/85 text-sm sm:text-base leading-relaxed">
            Bienvenido a tu panel de planificación académica. Organiza tus materias, detecta cruces antes de la matrícula oficial y genera el horario más conveniente para tu semestre.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              to="/planificador"
              className="px-5 py-2.5 rounded-xl bg-upc-gold-500 hover:bg-upc-gold-600 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Abrir Constructor de Horario</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/explorador"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explorar Materias</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Métricas Rápidas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-black text-slate-900 block">{selectedSubjects.length}</span>
            <span className="text-xs text-slate-500 font-medium">Materias en Selección</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-black text-slate-900 block">{totalCredits}</span>
            <span className="text-xs text-slate-500 font-medium">Créditos Planificados</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-black text-slate-900 block">{selectedGroups.length}</span>
            <span className="text-xs text-slate-500 font-medium">Grupos en Rejilla</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
            <BookmarkCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-black text-slate-900 block">
              {savedSchedules ? savedSchedules.length : 0}
            </span>
            <span className="text-xs text-slate-500 font-medium">Horarios Guardados</span>
          </div>
        </div>
      </div>

      {/* Sección de Horarios Guardados Recientes */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-extrabold text-slate-900">Mis Horarios Guardados</h2>
            <p className="text-xs text-slate-500">Alternativas favoritas listas para exportar</p>
          </div>
          <Link
            to="/guardados"
            className="text-xs font-bold text-upc-green-600 hover:text-upc-green-700 flex items-center gap-1"
          >
            <span>Ver todos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {loadingSchedules ? (
          <LoadingSpinner message="Cargando horarios guardados..." />
        ) : !savedSchedules || savedSchedules.length === 0 ? (
          <div className="text-center py-10 border-2 border-dashed border-slate-200 rounded-xl">
            <Calendar className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-700">Aún no has guardado ningún horario</p>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
              Utiliza el constructor para armar una combinación o generar horarios automáticos y guárdalos aquí.
            </p>
            <Link
              to="/planificador"
              className="inline-flex items-center gap-1.5 mt-4 px-4 py-2 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-upc-gold-600" />
              <span>Crear mi primer horario</span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedSchedules.slice(0, 3).map((horario) => (
              <div
                key={horario.id}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-extrabold text-sm text-slate-900">{horario.nombre}</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold">
                      {horario.puntaje} pts
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-3">
                    {horario.grupos.length} asignaturas • Período {horario.periodoNombre}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {horario.grupos.map((g) => (
                      <span
                        key={g.id}
                        className="bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded text-[10px] font-medium"
                      >
                        {g.materiaCodigo}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/guardados"
                  className="w-full py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold text-center transition-colors"
                >
                  Ver detalles y exportar
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
