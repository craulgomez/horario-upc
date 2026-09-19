import { apiClient } from './client';
import {
  ConflictValidationResult,
  GeneratedScheduleOption,
  Group,
  SavedSchedule,
  UserPreference
} from '../types';
import { MOCK_GROUPS } from './mockData';

export const scheduleApi = {
  validateConflicts: async (grupoIds: number[]): Promise<ConflictValidationResult> => {
    try {
      const res = await apiClient.post<ConflictValidationResult>('/schedules/validate-conflicts', { grupoIds });
      return res.data;
    } catch {
      // Validación local en memoria
      const grupos = MOCK_GROUPS.filter((g) => grupoIds.includes(g.id));
      const conflictos: string[] = [];
      const advertencias: string[] = [];

      for (let i = 0; i < grupos.length; i++) {
        for (let j = i + 1; j < grupos.length; j++) {
          const g1 = grupos[i];
          const g2 = grupos[j];

          if (g1.materiaId === g2.materiaId) {
            conflictos.push(`Has seleccionado múltiples grupos para ${g1.materiaNombre}`);
          }

          for (const s1 of g1.sesiones) {
            for (const s2 of g2.sesiones) {
              if (s1.diaSemana === s2.diaSemana) {
                if (s1.horaInicio < s2.horaFin && s2.horaInicio < s1.horaFin) {
                  conflictos.push(`Cruce el ${s1.diaSemana}: ${g1.materiaCodigo} (${s1.horaInicio}-${s1.horaFin}) con ${g2.materiaCodigo} (${s2.horaInicio}-${s2.horaFin})`);
                }
              }
            }
          }
        }
      }

      for (const g of grupos) {
        if (!g.tieneDocenteAsignado) advertencias.push(`${g.materiaCodigo} (${g.numeroGrupo}): Docente pendiente (NDOC)`);
        if (!g.tieneRecursoFisicoAsignado) advertencias.push(`${g.materiaCodigo} (${g.numeroGrupo}): Aula pendiente (NREF)`);
      }

      return {
        esValido: conflictos.length === 0,
        cantidadConflictos: conflictos.length,
        conflictos,
        advertencias
      };
    }
  },

  generateSchedules: async (payload: {
    periodoId: number;
    materiaIds: number[];
    preferencias?: Partial<UserPreference>;
    limite?: number;
  }): Promise<GeneratedScheduleOption[]> => {
    try {
      const res = await apiClient.post<GeneratedScheduleOption[]>('/schedules/generate', payload);
      return res.data;
    } catch {
      // Generador local de prueba
      const candidateGroups = MOCK_GROUPS.filter((g) => payload.materiaIds.includes(g.materiaId));
      
      // Armar al menos dos alternativas válidas si existen
      const options: GeneratedScheduleOption[] = [];

      // Opción 1: Primer grupo disponible por materia
      const opt1Groups: Group[] = [];
      payload.materiaIds.forEach((mId) => {
        const g = candidateGroups.find((grp) => grp.materiaId === mId);
        if (g) opt1Groups.push(g);
      });

      if (opt1Groups.length > 0) {
        options.push({
          idOpcion: 'OPT-1',
          puntaje: 95,
          totalCreditos: opt1Groups.reduce((acc, g) => acc + g.materiaCreditos, 0),
          diasConClase: 4,
          diasLibres: 2,
          horasMuertas: 0,
          horaMasTemprana: '08:00',
          horaMasTardia: '12:00',
          tieneAlertas: opt1Groups.some((g) => !g.tieneDocenteAsignado || !g.tieneRecursoFisicoAsignado),
          alertas: opt1Groups.filter((g) => !g.tieneDocenteAsignado).map((g) => `${g.materiaCodigo}: Docente pendiente`),
          desglosePuntaje: {
            puntajeTotal: 95,
            horasMuertasTotales: 0,
            diasLibresTotales: 2,
            cumpleJornadaPreferida: true,
            sinSabado: true,
            sinNocturnas: true,
            todosDocenteAsignado: true,
            todosRecursoAsignado: true,
            cumpleModalidadPreferida: true,
            cumpleHoraSalida: true,
            razonesPositivas: [
              'Horario compacto matutino de 08:00 a 12:00 (+20 pts)',
              '0 horas muertas o huecos intermedios (+15 pts)',
              'Sábados y viernes completamente libres (+15 pts)'
            ],
            penalizaciones: []
          },
          grupos: opt1Groups
        });
      }

      // Opción 2: Segundo grupo disponible si existe
      const opt2Groups: Group[] = [];
      payload.materiaIds.forEach((mId) => {
        const allM = candidateGroups.filter((grp) => grp.materiaId === mId);
        const g = allM.length > 1 ? allM[1] : allM[0];
        if (g) opt2Groups.push(g);
      });

      if (opt2Groups.length > 0 && opt2Groups !== opt1Groups) {
        options.push({
          idOpcion: 'OPT-2',
          puntaje: 85,
          totalCreditos: opt2Groups.reduce((acc, g) => acc + g.materiaCreditos, 0),
          diasConClase: 5,
          diasLibres: 1,
          horasMuertas: 2,
          horaMasTemprana: '06:00',
          horaMasTardia: '16:00',
          tieneAlertas: false,
          alertas: [],
          desglosePuntaje: {
            puntajeTotal: 85,
            horasMuertasTotales: 2,
            diasLibresTotales: 1,
            cumpleJornadaPreferida: true,
            sinSabado: true,
            sinNocturnas: true,
            todosDocenteAsignado: true,
            todosRecursoAsignado: true,
            cumpleModalidadPreferida: true,
            cumpleHoraSalida: true,
            razonesPositivas: [
              'Viernes libre (+15 pts)',
              'Sin clases los sábados (+15 pts)'
            ],
            penalizaciones: [
              'Contiene 2 horas de huecos intermedios (-10 pts)'
            ]
          },
          grupos: opt2Groups
        });
      }

      return options;
    }
  },

  saveSchedule: async (payload: {
    nombre: string;
    periodoId: number;
    grupoIds: number[];
    puntaje?: number;
    desglosePuntajeJson?: string;
  }): Promise<SavedSchedule> => {
    try {
      const res = await apiClient.post<SavedSchedule>('/schedules/save', payload);
      return res.data;
    } catch {
      // Guardar en localStorage como fallback
      const grupos = MOCK_GROUPS.filter((g) => payload.grupoIds.includes(g.id));
      const savedItem: SavedSchedule = {
        id: Date.now(),
        nombre: payload.nombre,
        puntaje: payload.puntaje || 95,
        desglosePuntajeJson: payload.desglosePuntajeJson,
        periodoId: payload.periodoId,
        periodoNombre: '2026-2',
        createdAt: new Date().toISOString(),
        grupos
      };

      const existing = JSON.parse(localStorage.getItem('upc_saved_schedules') || '[]');
      existing.unshift(savedItem);
      localStorage.setItem('upc_saved_schedules', JSON.stringify(existing));

      return savedItem;
    }
  },

  getSavedSchedules: async (): Promise<SavedSchedule[]> => {
    try {
      const res = await apiClient.get<SavedSchedule[]>('/schedules/saved');
      return res.data;
    } catch {
      const existing = JSON.parse(localStorage.getItem('upc_saved_schedules') || '[]');
      if (existing.length === 0) {
        // Horario predeterminado guardado para demo
        const defaultSample: SavedSchedule = {
          id: 1,
          nombre: 'Horario Sugerido 2026-2',
          puntaje: 95,
          periodoId: 1,
          periodoNombre: '2026-2',
          createdAt: new Date().toISOString(),
          grupos: [MOCK_GROUPS[0], MOCK_GROUPS[5], MOCK_GROUPS[7]]
        };
        return [defaultSample];
      }
      return existing;
    }
  },

  getSavedScheduleById: async (id: number): Promise<SavedSchedule> => {
    try {
      const res = await apiClient.get<SavedSchedule>(`/schedules/saved/${id}`);
      return res.data;
    } catch {
      const existing: SavedSchedule[] = JSON.parse(localStorage.getItem('upc_saved_schedules') || '[]');
      const found = existing.find((s) => s.id === id);
      if (found) return found;
      return {
        id,
        nombre: 'Horario de Prueba',
        puntaje: 90,
        periodoId: 1,
        periodoNombre: '2026-2',
        createdAt: new Date().toISOString(),
        grupos: [MOCK_GROUPS[0], MOCK_GROUPS[5]]
      };
    }
  },

  deleteSavedSchedule: async (id: number): Promise<void> => {
    try {
      await apiClient.delete(`/schedules/saved/${id}`);
    } catch {
      const existing: SavedSchedule[] = JSON.parse(localStorage.getItem('upc_saved_schedules') || '[]');
      const filtered = existing.filter((s) => s.id !== id);
      localStorage.setItem('upc_saved_schedules', JSON.stringify(filtered));
    }
  },

  downloadIcsUrl: (id: number): string => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL || '/api/v1';
    return `${baseUrl}/schedules/${id}/export/ics`;
  }
};
