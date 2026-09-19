export type Rol = 'ESTUDIANTE' | 'ADMIN';
export type Modalidad = 'PRESENCIAL' | 'VIRTUAL' | 'HIBRIDA';
export type DiaSemana = 'LUNES' | 'MARTES' | 'MIERCOLES' | 'JUEVES' | 'VIERNES' | 'SABADO' | 'DOMINGO';
export type EstadoGrupo = 'ACTIVO' | 'PENDIENTE' | 'CERRADO';

export interface User {
  id: number;
  nombre: string;
  correo: string;
  rol: Rol;
}

export interface AuthResponse {
  token: string;
  tipo: string;
  usuario: User;
}

export interface Program {
  id: number;
  codigo: string;
  nombre: string;
  universidad: string;
  activo: boolean;
}

export interface Period {
  id: number;
  nombre: string;
  fechaInicio: string;
  fechaFin: string;
  activo: boolean;
}

export interface ClassSession {
  id?: number;
  diaSemana: DiaSemana;
  horaInicio: string; // "08:00"
  horaFin: string;    // "09:59"
  aula?: string;
}

export interface Group {
  id: number;
  numeroGrupo: string;
  modalidad: Modalidad;
  sede: string;
  docente: string;
  aula: string;
  estado: EstadoGrupo;
  tieneDocenteAsignado: boolean;
  tieneRecursoFisicoAsignado: boolean;
  materiaId: number;
  materiaCodigo: string;
  materiaNombre: string;
  materiaCreditos: number;
  semestreSugerido: number;
  periodoId: number;
  periodoNombre: string;
  sesiones: ClassSession[];
}

export interface Subject {
  id: number;
  codigo: string;
  nombre: string;
  creditos: number;
  semestreSugerido: number;
  programaId: number;
  programaNombre?: string;
  activa: boolean;
  cantidadGrupos?: number;
  grupos?: Group[];
}

export interface UserPreference {
  prefiereManana: boolean;
  prefiereTarde: boolean;
  evitarNocturna: boolean;
  evitarSabado: boolean;
  quiereDiaLibre: boolean;
  minimizarHuecos: boolean;
  modalidadPreferida: Modalidad;
  horaMaximaSalida: string; // "18:00"
}

export interface ScoreBreakdown {
  puntajeTotal: number;
  horasMuertasTotales: number;
  diasLibresTotales: number;
  cumpleJornadaPreferida: boolean;
  sinSabado: boolean;
  sinNocturnas: boolean;
  todosDocenteAsignado: boolean;
  todosRecursoAsignado: boolean;
  cumpleModalidadPreferida: boolean;
  cumpleHoraSalida: boolean;
  razonesPositivas: string[];
  penalizaciones: string[];
}

export interface GeneratedScheduleOption {
  idOpcion: string;
  puntaje: number;
  totalCreditos: number;
  diasConClase: number;
  diasLibres: number;
  horasMuertas: number;
  horaMasTemprana: string;
  horaMasTardia: string;
  tieneAlertas: boolean;
  alertas: string[];
  desglosePuntaje: ScoreBreakdown;
  grupos: Group[];
}

export interface ConflictValidationResult {
  esValido: boolean;
  cantidadConflictos: number;
  conflictos: string[];
  advertencias: string[];
}

export interface SavedSchedule {
  id: number;
  nombre: string;
  puntaje: number;
  desglosePuntajeJson?: string;
  periodoId: number;
  periodoNombre: string;
  createdAt: string;
  grupos: Group[];
}

export interface CsvImportResult {
  totalFilasLeidas: number;
  materiasProcesadas: number;
  gruposProcesados: number;
  sesionesProcesadas: number;
  gruposConNDOC: number;
  gruposConNREF: number;
  errores: string[];
  advertencias: string[];
}
