import { apiClient } from './client';
import { UserPreference } from '../types';

export const preferencesApi = {
  getPreferences: async (): Promise<UserPreference> => {
    const res = await apiClient.get<UserPreference>('/preferences');
    return res.data;
  },

  updatePreferences: async (preferences: Partial<UserPreference>): Promise<UserPreference> => {
    const res = await apiClient.put<UserPreference>('/preferences', preferences);
    return res.data;
  }
};
