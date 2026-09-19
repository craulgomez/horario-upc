import { apiClient } from './client';
import { AuthResponse, User } from '../types';

export const authApi = {
  login: async (credentials: { correo: string; password: string }): Promise<AuthResponse> => {
    const email = credentials.correo.trim().toLowerCase();
    const pass = credentials.password;

    try {
      const res = await apiClient.post<AuthResponse>('/auth/login', credentials);
      return res.data;
    } catch (err: any) {
      // Fallback a modo demo offline si el backend de Spring Boot no está levantado
      if (!err.response || err.code === 'ERR_NETWORK' || err.response.status === 500 || err.response.status === 502) {
        if (email === 'estudiante@unicesar.edu.co' && pass === 'Estudiante123*') {
          return {
            token: 'mock-jwt-token-estudiante-' + Date.now(),
            tipo: 'Bearer',
            usuario: {
              id: 2,
              nombre: 'Estudiante Sistemas',
              correo: 'estudiante@unicesar.edu.co',
              rol: 'ESTUDIANTE'
            }
          };
        }

        if (email === 'admin@unicesar.edu.co' && pass === 'Admin123*') {
          return {
            token: 'mock-jwt-token-admin-' + Date.now(),
            tipo: 'Bearer',
            usuario: {
              id: 1,
              nombre: 'Administrador UPC',
              correo: 'admin@unicesar.edu.co',
              rol: 'ADMIN'
            }
          };
        }

        throw new Error('Credenciales inválidas. Usa estudiante@unicesar.edu.co / Estudiante123*');
      }

      throw err;
    }
  },

  register: async (data: { nombre: string; correo: string; password: string }): Promise<AuthResponse> => {
    try {
      const res = await apiClient.post<AuthResponse>('/auth/register', data);
      return res.data;
    } catch (err: any) {
      if (!err.response || err.code === 'ERR_NETWORK' || err.response.status >= 500) {
        return {
          token: 'mock-jwt-token-registered-' + Date.now(),
          tipo: 'Bearer',
          usuario: {
            id: Date.now(),
            nombre: data.nombre,
            correo: data.correo,
            rol: 'ESTUDIANTE'
          }
        };
      }
      throw err;
    }
  },

  getProfile: async (): Promise<User> => {
    try {
      const res = await apiClient.get<User>('/auth/me');
      return res.data;
    } catch (err: any) {
      const savedUser = localStorage.getItem('upc_user');
      if (savedUser) {
        return JSON.parse(savedUser);
      }
      throw err;
    }
  }
};
