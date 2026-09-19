import { apiClient } from './client';
import { UserPreference } from '../types';

const DEFAULT_PREFERENCES: UserPreference = {
  prefiereManana: true,
  prefiereTarde: false,
  evitarNocturna: true,
  evitarSabado: true,
  quiereDiaLibre: true,
  minimizarHuecos: true,
  modalidadPreferida: 'PRESENCIAL',
  horaMaximaSalida: '18:00'
};

export const preferencesApi = {
  getPreferences: async (): Promise<UserPreference> => {
    try {
      const res = await apiClient.get<UserPreference>('/preferences');
      if (res.data && typeof res.data === 'object' && typeof res.data.prefiereManana === 'boolean') {
        return res.data;
      }
      throw new Error('Offline');
    } catch {
      const saved = localStorage.getItem('upc_preferences');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // ignore
        }
      }
      return DEFAULT_PREFERENCES;
    }
  },

  updatePreferences: async (preferences: Partial<UserPreference>): Promise<UserPreference> => {
    try {
      const res = await apiClient.put<UserPreference>('/preferences', preferences);
      if (res.data && typeof res.data === 'object' && typeof res.data.prefiereManana === 'boolean') {
        return res.data;
      }
      throw new Error('Offline');
    } catch {
      const current = await preferencesApi.getPreferences();
      const updated = { ...current, ...preferences };
      localStorage.setItem('upc_preferences', JSON.stringify(updated));
      return updated;
    }
  }
};
