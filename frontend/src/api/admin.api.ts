import { apiClient } from './client';
import { CsvImportResult, Group, Period, Program, Subject } from '../types';

export const adminApi = {
  importCsv: async (file: File): Promise<CsvImportResult> => {
    const formData = new FormData();
    formData.append('file', file);
    const res = await apiClient.post<CsvImportResult>('/admin/import/csv', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return res.data;
  },

  createProgram: async (data: Partial<Program>): Promise<Program> => {
    const res = await apiClient.post<Program>('/admin/programas', data);
    return res.data;
  },

  createPeriod: async (data: Partial<Period>): Promise<Period> => {
    const res = await apiClient.post<Period>('/admin/periodos', data);
    return res.data;
  },

  createSubject: async (programaId: number, data: Partial<Subject>): Promise<Subject> => {
    const res = await apiClient.post<Subject>('/admin/materias', data, {
      params: { programaId }
    });
    return res.data;
  },

  createGroup: async (data: unknown): Promise<Group> => {
    const res = await apiClient.post<Group>('/admin/grupos', data);
    return res.data;
  },

  deleteGroup: async (id: number): Promise<void> => {
    await apiClient.delete(`/admin/grupos/${id}`);
  }
};
