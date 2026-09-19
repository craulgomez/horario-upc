import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthResponse } from '../types';
import { authApi } from '../api/auth.api';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  loading: boolean;
  login: (correo: string, pass: string) => Promise<AuthResponse>;
  register: (nombre: string, correo: string, pass: string) => Promise<AuthResponse>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedToken = localStorage.getItem('upc_token');
    const savedUser = localStorage.getItem('upc_user');

    if (savedToken && savedUser) {
      try {
        setToken(savedToken);
        setUser(JSON.parse(savedUser));
      } catch {
        localStorage.removeItem('upc_token');
        localStorage.removeItem('upc_user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (correo: string, pass: string) => {
    const res = await authApi.login({ correo, password: pass });
    setToken(res.token);
    setUser(res.usuario);
    localStorage.setItem('upc_token', res.token);
    localStorage.setItem('upc_user', JSON.stringify(res.usuario));
    return res;
  };

  const register = async (nombre: string, correo: string, pass: string) => {
    const res = await authApi.register({ nombre, correo, password: pass });
    setToken(res.token);
    setUser(res.usuario);
    localStorage.setItem('upc_token', res.token);
    localStorage.setItem('upc_user', JSON.stringify(res.usuario));
    return res;
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('upc_token');
    localStorage.removeItem('upc_user');
  };

  const isAdmin = user?.rol === 'ADMIN';
  const isAuthenticated = !!token && !!user;

  return (
    <AuthContext.Provider value={{
      user,
      token,
      isAuthenticated,
      isAdmin,
      loading,
      login,
      register,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};
