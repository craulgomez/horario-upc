import { apiClient } from './client';
import { Group, Period, Program, Subject } from '../types';

export const catalogApi = {
  getPrograms: async (): Promise<Program[]> => {
    const res = await apiClient.get<Program[]>('/catalog/programas');
    return res.data;
  },

  getPeriods: async (): Promise<Period[]> => {
    const res = await apiClient.get<Period[]>('/catalog/periodos');
    return res.data;
  },

  getActivePeriod: async (): Promise<Period> => {
    const res = await apiClient.get<Period>('/catalog/periodos/activo');
    return res.data;
  },

  getSubjects: async (params?: { programaId?: number; semestre?: number; search?: string }): Promise<Subject[]> => {
    const res = await apiClient.get<Subject[]>('/catalog/materias', { params });
    return res.data;
  },

  getSubjectGroups: async (materiaId: number, periodoId: number): Promise<Subject> => {
    const res = await apiClient.get<Subject>(`/catalog/materias/${materiaId}/grupos`, {
      params: { periodoId }
    });
    return res.data;
  },

  getGroupDetails: async (grupoId: number): Promise<Group> => {
    const res = await apiClient.get<Group>(`/catalog/grupos/${grupoId}`);
    return res.data;
  }
};
