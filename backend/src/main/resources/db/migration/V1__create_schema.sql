-- =========================================================================
-- HorarioUPC Database Schema Migration (V1)
-- Target RDBMS: PostgreSQL 16+
-- =========================================================================

-- 1. Tabla: usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id BIGSERIAL PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    correo VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    rol VARCHAR(30) NOT NULL DEFAULT 'ESTUDIANTE', -- 'ESTUDIANTE', 'ADMIN'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Tabla: programas
CREATE TABLE IF NOT EXISTS programas (
    id BIGSERIAL PRIMARY KEY,
    codigo VARCHAR(50) NOT NULL UNIQUE,
    nombre VARCHAR(150) NOT NULL,
    universidad VARCHAR(150) NOT NULL DEFAULT 'Universidad Popular del Cesar',
    activo BOOLEAN NOT NULL DEFAULT TRUE
);

-- 3. Tabla: periodos_academicos
CREATE TABLE IF NOT EXISTS periodos_academicos (
    id BIGSERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE, -- Ej: '2026-2'
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    activo BOOLEAN NOT NULL DEFAULT TRUE
);

-- 4. Tabla: materias
CREATE TABLE IF NOT EXISTS materias (
    id BIGSERIAL PRIMARY KEY,
    codigo VARCHAR(50) NOT NULL UNIQUE, -- Ej: 'SS200'
    nombre VARCHAR(200) NOT NULL,
    creditos INTEGER NOT NULL DEFAULT 3,
    semestre_sugerido INTEGER NOT NULL,
    programa_id BIGINT NOT NULL REFERENCES programas(id) ON DELETE CASCADE,
    activa BOOLEAN NOT NULL DEFAULT TRUE
);

-- 5. Tabla: grupos
CREATE TABLE IF NOT EXISTS grupos (
    id BIGSERIAL PRIMARY KEY,
    numero_grupo VARCHAR(80) NOT NULL, -- Ej: '01-CAMPUS', '02-CAMPUS'
    modalidad VARCHAR(30) NOT NULL DEFAULT 'PRESENCIAL', -- 'PRESENCIAL', 'VIRTUAL', 'HIBRIDA'
    sede VARCHAR(80) NOT NULL DEFAULT 'CAMPUS', -- 'CAMPUS', 'BELLAS_ARTES', 'COPEY', 'PLATO', 'BANCO'
    docente VARCHAR(200) NOT NULL DEFAULT 'NDOC',
    aula VARCHAR(120) NOT NULL DEFAULT 'NREF',
    estado VARCHAR(30) NOT NULL DEFAULT 'ACTIVO', -- 'ACTIVO', 'PENDIENTE', 'CERRADO'
    tiene_docente_asignado BOOLEAN NOT NULL DEFAULT TRUE,
    tiene_recurso_fisico_asignado BOOLEAN NOT NULL DEFAULT TRUE,
    materia_id BIGINT NOT NULL REFERENCES materias(id) ON DELETE CASCADE,
    periodo_id BIGINT NOT NULL REFERENCES periodos_academicos(id) ON DELETE CASCADE,
    CONSTRAINT uq_grupo_materia_periodo UNIQUE (materia_id, periodo_id, numero_grupo)
);

-- 6. Tabla: sesiones_clase
CREATE TABLE IF NOT EXISTS sesiones_clase (
    id BIGSERIAL PRIMARY KEY,
    dia_semana VARCHAR(20) NOT NULL, -- 'LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO', 'DOMINGO'
    hora_inicio TIME NOT NULL,
    hora_fin TIME NOT NULL,
    aula VARCHAR(120),
    grupo_id BIGINT NOT NULL REFERENCES grupos(id) ON DELETE CASCADE
);

-- 7. Tabla: horarios_guardados
CREATE TABLE IF NOT EXISTS horarios_guardados (
    id BIGSERIAL PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    puntaje INTEGER NOT NULL DEFAULT 100,
    desglose_puntaje_json TEXT,
    usuario_id BIGINT NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
    periodo_id BIGINT NOT NULL REFERENCES periodos_academicos(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 8. Tabla intermedia: horario_grupos
CREATE TABLE IF NOT EXISTS horario_grupos (
    horario_id BIGINT NOT NULL REFERENCES horarios_guardados(id) ON DELETE CASCADE,
    grupo_id BIGINT NOT NULL REFERENCES grupos(id) ON DELETE CASCADE,
    PRIMARY KEY (horario_id, grupo_id)
);

-- 9. Tabla: preferencias_horario
CREATE TABLE IF NOT EXISTS preferencias_horario (
    id BIGSERIAL PRIMARY KEY,
    usuario_id BIGINT NOT NULL UNIQUE REFERENCES usuarios(id) ON DELETE CASCADE,
    prefiere_manana BOOLEAN NOT NULL DEFAULT TRUE,
    prefiere_tarde BOOLEAN NOT NULL DEFAULT FALSE,
    evitar_nocturna BOOLEAN NOT NULL DEFAULT TRUE,
    evitar_sabado BOOLEAN NOT NULL DEFAULT TRUE,
    quiere_dia_libre BOOLEAN NOT NULL DEFAULT FALSE,
    minimizar_huecos BOOLEAN NOT NULL DEFAULT TRUE,
    modalidad_preferida VARCHAR(30) NOT NULL DEFAULT 'PRESENCIAL',
    hora_maxima_salida TIME DEFAULT '18:00:00'
);

-- Índices de Rendimiento
CREATE INDEX IF NOT EXISTS idx_materia_programa ON materias(programa_id);
CREATE INDEX IF NOT EXISTS idx_materia_semestre ON materias(semestre_sugerido);
CREATE INDEX IF NOT EXISTS idx_grupo_materia ON grupos(materia_id);
CREATE INDEX IF NOT EXISTS idx_grupo_periodo ON grupos(periodo_id);
CREATE INDEX IF NOT EXISTS idx_sesion_grupo ON sesiones_clase(grupo_id);
CREATE INDEX IF NOT EXISTS idx_sesion_dia_horas ON sesiones_clase(dia_semana, hora_inicio, hora_fin);
CREATE INDEX IF NOT EXISTS idx_horarios_usuario ON horarios_guardados(usuario_id);
CREATE INDEX IF NOT EXISTS idx_horarios_periodo ON horarios_guardados(periodo_id);
