# Modelo de Datos — HorarioUPC

## 1. Diagrama Entidad-Relación

```
USUARIOS (1) <----> (0..1) PREFERENCIAS_HORARIO
USUARIOS (1) <----> (0..N) HORARIOS_GUARDADOS
PROGRAMAS (1) <----> (0..N) MATERIAS
PERIODOS_ACADEMICOS (1) <----> (0..N) GRUPOS
MATERIAS (1) <----> (0..N) GRUPOS
GRUPOS (1) <----> (1..N) SESIONES_CLASE
HORARIOS_GUARDADOS (N) <----> (N) GRUPOS (vía HORARIO_GRUPOS)
```

## 2. Descripción de Entidades

### `usuarios`
- `id`: BIGSERIAL (Clave primaria).
- `nombre`: VARCHAR(150), nombre completo del estudiante o docente.
- `correo`: VARCHAR(150), único e insensible a mayúsculas.
- `password_hash`: VARCHAR(255), cifrado con BCrypt (10 rondas de salting).
- `rol`: VARCHAR(30), valores `ESTUDIANTE` o `ADMIN`.

### `programas`
- `codigo`: VARCHAR(50), único (ej: `ING-SISTEMAS`).
- `nombre`: VARCHAR(150), nombre de la carrera (ej: `Ingeniería de Sistemas`).
- `universidad`: VARCHAR(150), por defecto `Universidad Popular del Cesar`.
- `activo`: BOOLEAN.

### `periodos_academicos`
- `nombre`: VARCHAR(50), identificador del semestre (ej: `2026-2`).
- `fecha_inicio`: DATE, inicio del ciclo académico (ej: `2026-08-03`).
- `fecha_fin`: DATE, finalización de clases (ej: `2026-12-15`).

### `materias`
- `codigo`: VARCHAR(50), código oficial según pensum (ej: `SS200`).
- `nombre`: VARCHAR(200).
- `creditos`: INTEGER (ej: 3, 4).
- `semestre_sugerido`: INTEGER (1 a 10).
- `programa_id`: FK -> `programas(id)`.

### `grupos`
- `numero_grupo`: VARCHAR(80), identificador del grupo según reporte (ej: `01-CAMPUS`, `02-CAMPUS`).
- `modalidad`: VARCHAR(30), `PRESENCIAL`, `VIRTUAL`, `HIBRIDA`.
- `sede`: VARCHAR(80), `CAMPUS`, `BELLAS_ARTES`, `COPEY`, `PLATO`, `BANCO`.
- `docente`: VARCHAR(200), nombre del profesor o `NDOC` si está sin asignar.
- `aula`: VARCHAR(120), salón de clase o `NREF` si está sin asignar.
- `tiene_docente_asignado`: BOOLEAN (`false` si docente contiene `NDOC`).
- `tiene_recurso_fisico_asignado`: BOOLEAN (`false` si aula contiene `NREF`).
- `materia_id`: FK -> `materias(id)`.
- `periodo_id`: FK -> `periodos_academicos(id)`.

### `sesiones_clase`
- `dia_semana`: VARCHAR(20), `LUNES` a `DOMINGO`.
- `hora_inicio`: TIME (ej: `08:00:00`).
- `hora_fin`: TIME (ej: `09:59:00`).
- `aula`: VARCHAR(120), salón específico de la sesión.
- `grupo_id`: FK -> `grupos(id)`.

### `horarios_guardados`
- `nombre`: VARCHAR(150), título asignado por el estudiante.
- `puntaje`: INTEGER (0 a 100).
- `desglose_puntaje_json`: TEXT, razones y penalizaciones calculadas.
- `usuario_id`: FK -> `usuarios(id)`.
- `periodo_id`: FK -> `periodos_academicos(id)`.

### `preferencias_horario`
- `prefiere_manana`, `prefiere_tarde`, `evitar_nocturna`, `evitar_sabado`, `quiere_dia_libre`, `minimizar_huecos`: BOOLEAN.
- `modalidad_preferida`: VARCHAR(30).
- `hora_maxima_salida`: TIME.
