import { apiClient } from './client';
import {
  ConflictValidationResult,
  GeneratedScheduleOption,
  SavedSchedule,
  UserPreference
} from '../types';

export const scheduleApi = {
  validateConflicts: async (grupoIds: number[]): Promise<ConflictValidationResult> => {
    const res = await apiClient.post<ConflictValidationResult>('/schedules/validate-conflicts', { grupoIds });
    return res.data;
  },

  generateSchedules: async (payload: {
    periodoId: number;
    materiaIds: number[];
    preferencias?: Partial<UserPreference>;
    limite?: number;
  }): Promise<GeneratedScheduleOption[]> => {
    const res = await apiClient.post<GeneratedScheduleOption[]>('/schedules/generate', payload);
    return res.data;
  },

  saveSchedule: async (payload: {
    nombre: string;
    periodoId: number;
    grupoIds: number[];
    puntaje?: number;
    desglosePuntajeJson?: string;
  }): Promise<SavedSchedule> => {
    const res = await apiClient.post<SavedSchedule>('/schedules/save', payload);
    return res.data;
  },

  getSavedSchedules: async (): Promise<SavedSchedule[]> => {
    const res = await apiClient.get<SavedSchedule[]>('/schedules/saved');
    return res.data;
  },

  getSavedScheduleById: async (id: number): Promise<SavedSchedule> => {
    const res = await apiClient.get<SavedSchedule>(`/schedules/saved/${id}`);
    return res.data;
  },

  deleteSavedSchedule: async (id: number): Promise<void> => {
    await apiClient.delete(`/schedules/saved/${id}`);
  },

  downloadIcsUrl: (id: number): string => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL || '/api/v1';
    return `${baseUrl}/schedules/${id}/export/ics`;
  }
};
