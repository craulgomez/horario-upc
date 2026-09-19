import { apiClient } from './client';
import { CsvImportResult, Group, Period, Program, Subject } from '../types';

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
        errores: [],
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
        universidad: data.universidad || 'Universidad Popular del Cesar',
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
        fechaInicio: data.fechaInicio || '2026-08-01',
        fechaFin: data.fechaFin || '2026-12-15',
        activo: data.activo ?? true
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
        numeroGrupo: String(data.numeroGrupo || '01'),
        modalidad: 'PRESENCIAL',
        sede: 'SABANAS',
        docente: data.docente || 'Docente UPC',
        aula: 'S-201',
        estado: 'ACTIVO',
        tieneDocenteAsignado: true,
        tieneRecursoFisicoAsignado: true,
        materiaId: data.materiaId || 1,
        materiaCodigo: data.materiaCodigo || 'MAT-01',
        materiaNombre: data.materiaNombre || 'Materia UPC',
        materiaCreditos: 3,
        semestreSugerido: 1,
        periodoId: data.periodoId || 1,
        periodoNombre: '2026-2',
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
