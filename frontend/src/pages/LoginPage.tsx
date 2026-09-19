import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogIn, Key, Mail, AlertCircle, Sparkles } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await login(correo, password);
      navigate('/dashboard');
    } catch (err: any) {
      const msg = err.response?.data?.message || 'Error al iniciar sesión. Verifica tus credenciales.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickLogin = async (email: string, pass: string) => {
    setCorreo(email);
    setPassword(pass);
    setError(null);
    setLoading(true);

    try {
      await login(email, pass);
      navigate('/dashboard');
    } catch (err: any) {
      const msg = err.response?.data?.message || err.message || 'Error al iniciar sesión.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-800 to-upc-green-600 flex items-center justify-center text-white font-extrabold text-2xl mx-auto shadow-sm mb-3">
            <span className="text-upc-gold-300 text-base">UPC</span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">Iniciar Sesión</h2>
          <p className="text-xs text-slate-500 mt-1">
            Ingresa a tu cuenta de HorarioUPC para planificar tu horario
          </p>
        </div>

        {/* 1-Click Fast Access Banner */}
        <div className="mb-6 p-4 rounded-xl bg-emerald-50/80 border border-emerald-200">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 mb-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Acceso Rápido Demo (1 solo clic)</span>
          </div>
          <p className="text-[11px] text-emerald-700 mb-3">
            Haz clic en el botón de abajo para ingresar directamente sin escribir contraseña:
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              disabled={loading}
              onClick={() => handleQuickLogin('estudiante@unicesar.edu.co', 'Estudiante123*')}
              className="py-2.5 px-3 text-center rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all flex flex-col items-center justify-center gap-0.5 disabled:opacity-50 cursor-pointer"
            >
              <span>🎓 Estudiante</span>
              <span className="text-[10px] font-normal opacity-90">Entrar en 1 clic</span>
            </button>
            <button
              type="button"
              disabled={loading}
              onClick={() => handleQuickLogin('admin@unicesar.edu.co', 'Admin123*')}
              className="py-2.5 px-3 text-center rounded-lg bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs shadow-sm transition-all flex flex-col items-center justify-center gap-0.5 disabled:opacity-50 cursor-pointer"
            >
              <span>🛡️ Administrador</span>
              <span className="text-[10px] font-normal opacity-90">Entrar en 1 clic</span>
            </button>
          </div>
        </div>

        {searchParams.get('expired') && (
          <div className="mb-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Tu sesión ha expirado. Por favor ingresa nuevamente.</span>
          </div>
        )}

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              O ingresa con tu correo
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="email"
                required
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="estudiante@unicesar.edu.co"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Contraseña
            </label>
            <div className="relative">
              <Key className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <LogIn className="w-4 h-4" />
                <span>Ingresar con credenciales</span>
              </>
            )}
          </button>
        </form>

        <p className="text-center text-xs text-slate-500 mt-6">
          ¿No tienes una cuenta?{' '}
          <Link to="/registro" className="font-bold text-upc-green-600 hover:underline">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
};
