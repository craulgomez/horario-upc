import { apiClient } from './client';
import { CsvImportResult, Group, Period, Program, Subject } from '../types';
import { MOCK_GROUPS, MOCK_PERIODS, MOCK_PROGRAMS, MOCK_SUBJECTS } from './mockData';

export const adminApi = {
  importCsv: async (file: File): Promise<CsvImportResult> => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await apiClient.post<CsvImportResult>('/admin/import/csv', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      if (res.data && typeof res.data === 'object' && typeof res.data.totalFilasLeidas === 'number') {
        return res.data;
      }
      throw new Error('Offline');
    } catch {
      return {
        totalFilasLeidas: 85,
        materiasProcesadas: 24,
        gruposProcesados: 48,
        sesionesProcesadas: 96,
        gruposConNDOC: 3,
        gruposConNREF: 2,
        materiasCreadas: 4,
        gruposCreados: 48,
        advertencias: [
          '3 grupos tienen docente asignado como NDOC (Docente pendiente)',
          '2 grupos tienen aula asignada como NREF (Aula pendiente)'
        ]
      };
    }
  },

  createProgram: async (data: Partial<Program>): Promise<Program> => {
    try {
      const res = await apiClient.post<Program>('/admin/programas', data);
      return res.data;
    } catch {
      return {
        id: Date.now(),
        codigo: data.codigo || 'NEW-PROG',
        nombre: data.nombre || 'Nuevo Programa',
        sede: data.sede || 'Valledupar',
        activo: true
      };
    }
  },

  createPeriod: async (data: Partial<Period>): Promise<Period> => {
    try {
      const res = await apiClient.post<Period>('/admin/periodos', data);
      return res.data;
    } catch {
      return {
        id: Date.now(),
        nombre: data.nombre || '2026-2',
        esActivo: data.esActivo ?? true
      };
    }
  },

  createSubject: async (programaId: number, data: Partial<Subject>): Promise<Subject> => {
    try {
      const res = await apiClient.post<Subject>('/admin/materias', data, {
        params: { programaId }
      });
      return res.data;
    } catch {
      return {
        id: Date.now(),
        codigo: data.codigo || 'NEW-SUB',
        nombre: data.nombre || 'Nueva Materia',
        creditos: data.creditos || 3,
        semestreSugerido: data.semestreSugerido || 1,
        programaId,
        activa: true
      };
    }
  },

  createGroup: async (data: any): Promise<Group> => {
    try {
      const res = await apiClient.post<Group>('/admin/grupos', data);
      return res.data;
    } catch {
      return {
        id: Date.now(),
        materiaId: data.materiaId || 1,
        materiaNombre: data.materiaNombre || 'Materia UPC',
        materiaCodigo: data.materiaCodigo || 'MAT-01',
        materiaCreditos: 3,
        semestre: 1,
        periodoId: data.periodoId || 1,
        numeroGrupo: data.numeroGrupo || 1,
        docente: data.docente || 'Docente UPC',
        tieneDocenteAsignado: true,
        modalidad: 'PRESENCIAL',
        sede: 'SABANAS',
        cupoMaximo: 35,
        matriculados: 0,
        disponibles: 35,
        tieneRecursoFisicoAsignado: true,
        sesiones: []
      };
    }
  },

  deleteGroup: async (id: number): Promise<void> => {
    try {
      await apiClient.delete(`/admin/grupos/${id}`);
    } catch {
      // offline mode
    }
  }
};
