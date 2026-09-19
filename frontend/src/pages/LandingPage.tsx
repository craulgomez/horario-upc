import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Calendar,
  Sparkles,
  ShieldCheck,
  Download,
  AlertCircle,
  ArrowRight,
  CheckCircle,
  Clock,
  Layers
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-28 bg-gradient-to-b from-emerald-900 via-emerald-800 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold mb-8 backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-upc-gold-300" />
            <span>Optimizador Oficial de Matrícula para Estudiantes Upecistas</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
            Planifica tu horario en la UPC{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-upc-gold-300 to-emerald-100">
              sin cruces ni complicaciones
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-emerald-100/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Olvídate de buscar materia por materia en PDFs interminables. Selecciona tus asignaturas y deja que nuestro motor inteligente genere las mejores combinaciones de horario según tus preferencias.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {isAuthenticated ? (
              <Link
                to="/planificador"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-upc-gold-500 hover:bg-upc-gold-600 text-slate-950 font-extrabold text-base shadow-lg hover:shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Ir al Constructor de Horario</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            ) : (
              <>
                <Link
                  to="/registro"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-upc-gold-500 hover:bg-upc-gold-600 text-slate-950 font-extrabold text-base shadow-lg hover:shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>Empezar Ahora Gratis</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/login"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-base transition-colors"
                >
                  Iniciar Sesión
                </Link>
              </>
            )}
          </div>

          {/* Pensum Badge */}
          <div className="mt-12 flex items-center justify-center gap-6 text-xs text-emerald-200/80 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> Pensum V-0402-IS-D-07
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> Período 2026-2
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> Detección de NDOC / NREF
            </span>
          </div>
        </div>
      </section>

      {/* Características Principales */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 mb-2">
              Diseñado para Estudiantes
            </h2>
            <p className="text-3xl font-extrabold text-slate-900">
              Todo lo que necesitas para armar tu semestre ideal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                Rejilla Visual Semanal
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Visualiza bloques de clase organizados de lunes a sábado de 06:00 a 22:00 con colores diferenciados por materia, docente y salón.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-upc-gold-100 text-amber-700 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                Generador con Inteligencia CSP
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Algoritmo de resolución de restricciones que descarta choques horarios y evalúa alternativas puntuadas de 0 a 100 según tus preferencias.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                Exportación Multi-Formato
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Descarga tu horario en PDF listo para imprimir, imagen PNG de alta definición o sincronízalo en Google Calendar con archivo .ics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 mb-2">
              Flujo Rápido en 3 Pasos
            </h2>
            <p className="text-3xl font-extrabold text-slate-900">
              ¿Cómo funciona HorarioUPC?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-extrabold flex items-center justify-center text-base mb-4">
                1
              </div>
              <h4 className="font-extrabold text-slate-900 mb-2">Elige tus Materias</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Filtra por semestre las asignaturas que deseas cursar en el período académico activo.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-extrabold flex items-center justify-center text-base mb-4">
                2
              </div>
              <h4 className="font-extrabold text-slate-900 mb-2">Genera o Personaliza</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deja que el sistema genere las opciones óptimas o selecciona manualmente cada grupo con alertas en tiempo real.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-extrabold flex items-center justify-center text-base mb-4">
                3
              </div>
              <h4 className="font-extrabold text-slate-900 mb-2">Guarda y Exporta</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Descarga tu horario en PDF, imagen o archivo .ics para tenerlo siempre a mano al momento de matricular.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/70 text-amber-900 text-xs flex items-center gap-3 text-left">
            <AlertCircle className="w-6 h-6 text-amber-600 shrink-0" />
            <div>
              <span className="font-bold block">Aviso importante:</span>
              <span>
                HorarioUPC es una herramienta externa e independiente diseñada para facilitar la planificación del horario previo a la matrícula. No realiza matrículas oficiales ni automatiza trámites en la plataforma institucional Academusoft.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
