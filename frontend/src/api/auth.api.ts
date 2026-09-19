import { apiClient } from './client';
import { AuthResponse, User } from '../types';

export const authApi = {
  login: async (credentials: { correo: string; password: string }): Promise<AuthResponse> => {
    const res = await apiClient.post<AuthResponse>('/auth/login', credentials);
    return res.data;
  },

  register: async (data: { nombre: string; correo: string; password: string }): Promise<AuthResponse> => {
    const res = await apiClient.post<AuthResponse>('/auth/register', data);
    return res.data;
  },

  getProfile: async (): Promise<User> => {
    const res = await apiClient.get<User>('/auth/me');
    return res.data;
  }
};
