# Especificación de la API REST — HorarioUPC

Todas las peticiones a la API utilizan el prefijo `/api/v1`. La autenticación se realiza mediante cabecera HTTP:
`Authorization: Bearer <TOKEN_JWT>`.

---

## 1. Módulo de Autenticación (`/api/v1/auth`)

### 1.1. Iniciar Sesión
- **Ruta:** `POST /api/v1/auth/login`
- **Acceso:** Público
- **Cuerpo de Solicitud:**
  ```json
  {
    "correo": "estudiante@unicesar.edu.co",
    "password": "Estudiante123*"
  }
  ```
- **Respuesta Exitosa (200 OK):**
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "tipo": "Bearer",
    "usuario": {
      "id": 2,
      "nombre": "Estudiante Sistemas",
      "correo": "estudiante@unicesar.edu.co",
      "rol": "ESTUDIANTE"
    }
  }
  ```

### 1.2. Registro
- **Ruta:** `POST /api/v1/auth/register`
- **Acceso:** Público
- **Cuerpo de Solicitud:**
  ```json
  {
    "nombre": "Carlos Gómez",
    "correo": "carlos.gomez@unicesar.edu.co",
    "password": "PasswordSegura123*",
    "rol": "ESTUDIANTE"
  }
  ```

### 1.3. Perfil del Usuario
- **Ruta:** `GET /api/v1/auth/me`
- **Acceso:** Autenticado

---

## 2. Módulo de Catálogo Académico (`/api/v1/catalog`)

### 2.1. Listar Materias con Filtros
- **Ruta:** `GET /api/v1/catalog/materias?semestre=2&search=programacion`
- **Acceso:** Autenticado
- **Respuesta Exitosa (200 OK):**
  ```json
  [
    {
      "id": 6,
      "codigo": "SS200",
      "nombre": "Programación de Computadores I",
      "creditos": 3,
      "semestreSugerido": 2,
      "programaId": 1,
      "programaNombre": "Ingeniería de Sistemas",
      "activa": true,
      "cantidadGrupos": 5
    }
  ]
  ```

### 2.2. Obtener Grupos de una Materia en un Período
- **Ruta:** `GET /api/v1/catalog/materias/{materiaId}/grupos?periodoId=1`
- **Acceso:** Autenticado

---

## 3. Módulo de Generación y Validación de Horarios (`/api/v1/schedules`)

### 3.1. Validar Choques en Tiempo Real
- **Ruta:** `POST /api/v1/schedules/validate-conflicts`
- **Acceso:** Autenticado
- **Cuerpo de Solicitud:**
  ```json
  {
    "grupoIds": [101, 301, 401]
  }
  ```
- **Respuesta (200 OK):**
  ```json
  {
    "esValido": true,
    "cantidadConflictos": 0,
    "conflictos": [],
    "advertencias": []
  }
  ```

### 3.2. Generar Combinaciones Automáticas sin Conflicto (CSP)
- **Ruta:** `POST /api/v1/schedules/generate`
- **Acceso:** Autenticado
- **Cuerpo de Solicitud:**
  ```json
  {
    "periodoId": 1,
    "materiaIds": [6, 11, 12],
    "preferencias": {
      "prefiereManana": true,
      "evitarSabado": true,
      "minimizarHuecos": true
    },
    "limite": 20
  }
  ```
- **Respuesta (200 OK):** Lista de opciones ordenadas por puntaje (0 a 100) con desglose de razones.

### 3.3. Guardar Horario Favorito
- **Ruta:** `POST /api/v1/schedules/save`
- **Acceso:** Estudiante

### 3.4. Exportar a Calendario (.ics RFC 5545)
- **Ruta:** `GET /api/v1/schedules/{id}/export/ics`
- **Acceso:** Autenticado
- **Respuesta:** Stream de texto con `Content-Type: text/calendar; charset=UTF-8`.

---

## 4. Módulo de Administración (`/api/v1/admin`)

### 4.1. Importar Archivo CSV Masivo
- **Ruta:** `POST /api/v1/admin/import/csv`
- **Acceso:** Rol `ADMIN`
- **Consumo:** `multipart/form-data` con parámetro `file`.
