import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api/v1';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para inyectar token JWT
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('upc_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor para manejo de errores globales
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Si el token expira o no es válido, limpiar sesión
      localStorage.removeItem('upc_token');
      localStorage.removeItem('upc_user');
      if (window.location.pathname !== '/login' && window.location.pathname !== '/registro') {
        window.location.href = '/login?expired=true';
      }
    }
    return Promise.reject(error);
  }
);
