import { apiClient } from './client';
import { Group, Period, Program, Subject } from '../types';
import { MOCK_GROUPS, MOCK_PERIODS, MOCK_PROGRAMS, MOCK_SUBJECTS } from './mockData';

export const catalogApi = {
  getPrograms: async (): Promise<Program[]> => {
    try {
      const res = await apiClient.get<Program[]>('/catalog/programas');
      if (Array.isArray(res.data) && res.data.length > 0) return res.data;
      return MOCK_PROGRAMS;
    } catch {
      return MOCK_PROGRAMS;
    }
  },

  getPeriods: async (): Promise<Period[]> => {
    try {
      const res = await apiClient.get<Period[]>('/catalog/periodos');
      if (Array.isArray(res.data) && res.data.length > 0) return res.data;
      return MOCK_PERIODS;
    } catch {
      return MOCK_PERIODS;
    }
  },

  getActivePeriod: async (): Promise<Period> => {
    try {
      const res = await apiClient.get<Period>('/catalog/periodos/activo');
      if (res.data && typeof res.data === 'object' && res.data.id) return res.data;
      return MOCK_PERIODS[0];
    } catch {
      return MOCK_PERIODS[0];
    }
  },

  getSubjects: async (params?: { programaId?: number; semestre?: number; search?: string }): Promise<Subject[]> => {
    try {
      const res = await apiClient.get<Subject[]>('/catalog/materias', { params });
      if (Array.isArray(res.data)) return res.data;
      throw new Error('Invalid format');
    } catch {
      let list = [...MOCK_SUBJECTS];
      if (params?.semestre) {
        list = list.filter((s) => s.semestreSugerido === params.semestre);
      }
      if (params?.search) {
        const q = params.search.toLowerCase();
        list = list.filter((s) => s.codigo.toLowerCase().includes(q) || s.nombre.toLowerCase().includes(q));
      }
      return list;
    }
  },

  getSubjectGroups: async (materiaId: number, periodoId: number): Promise<Subject> => {
    try {
      const res = await apiClient.get<Subject>(`/catalog/materias/${materiaId}/grupos`, {
        params: { periodoId }
      });
      if (res.data && typeof res.data === 'object' && Array.isArray(res.data.grupos)) return res.data;
      throw new Error('Invalid format');
    } catch {
      const sub = MOCK_SUBJECTS.find((s) => s.id === materiaId) || MOCK_SUBJECTS[0];
      const groups = MOCK_GROUPS.filter((g) => g.materiaId === materiaId);
      return {
        ...sub,
        grupos: groups,
        cantidadGrupos: groups.length
      };
    }
  },

  getGroupDetails: async (grupoId: number): Promise<Group> => {
    try {
      const res = await apiClient.get<Group>(`/catalog/grupos/${grupoId}`);
      if (res.data && typeof res.data === 'object' && res.data.id) return res.data;
      throw new Error('Grupo no encontrado');
    } catch {
      const g = MOCK_GROUPS.find((grp) => grp.id === grupoId);
      if (g) return g;
      throw new Error('Grupo no encontrado');
    }
  }
};
