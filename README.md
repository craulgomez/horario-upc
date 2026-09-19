# HorarioUPC — Planificador Académico Inteligente

<p align="center">
  <img src="frontend/public/upc-logo.svg" alt="UPC Logo" width="90" />
</p>

<p align="center">
  <b>Plataforma web de optimización y construcción de horarios universitarios para estudiantes de la Universidad Popular del Cesar (UPC), Valledupar, Colombia.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Java-21_LTS-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java 21" />
  <img src="https://img.shields.io/badge/Spring_Boot-3.3.4-6DB33F?style=for-the-badge&logo=spring&logoColor=white" alt="Spring Boot 3" />
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 18" />
  <img src="https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/PostgreSQL-16-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License MIT" />
</p>

---

## 📌 Contexto del Problema

Al inicio de cada período semestral, la Universidad Popular del Cesar publica un reporte masivo (en formato PDF desde Academusoft 4.0) con cientos de materias, grupos, docentes, salones, modalidades y sedes. Para los estudiantes de **Ingeniería de Sistemas**, consultar manualmente este reporte genera:
- Cruces accidentales de clases en el mismo día y hora.
- Horas muertas excesivas entre clases.
- Clases nocturnas o en sábado no deseadas.
- Dificultad para saber si un grupo tiene docente asignado o aula confirmada (`NDOC` / `NREF`).

**HorarioUPC** es una herramienta externa de planificación académica que automatiza la búsqueda, previene conflictos de horario y genera las combinaciones óptimas según las preferencias del estudiante, lista para exportar en **PDF**, **PNG** y formato estándar **.ICS (Google Calendar / Apple Calendar)**.

> [!NOTE]
> Esta aplicación **NO** automatiza ni realiza trámites ni matrículas en la plataforma institucional de la universidad. Es un asistente de planificación previo a la matrícula oficial.

---

## 🚀 Características Principales

1. **Rejilla Semanal Visual**: Calendario interactivo de lunes a sábado de 06:00 a 22:00 con bloques de colores diferenciados por materia, docente, salón y horario.
2. **Generador con Inteligencia CSP**: Motor de Backtracking con Poda Temprana que descarta choques horarios y devuelve las mejores alternativas clasificadas de 0 a 100 puntos.
3. **Puntaje Explicable**: Cada horario cuenta con un desglose detallado explicando por qué obtuvo su calificación (+15 pts por día libre, -5 pts por horas muertas, etc.).
4. **Alertas Académicas Oficiales**: Detección visual de grupos sin docente asignado (`NDOC`), sin salón asignado (`NREF`), modalidades virtuales y sedes externas.
5. **Exportación Universal**:
   - Descarga en **PDF** de alta resolución listo para imprimir.
   - Imagen **PNG** para compartir por WhatsApp o redes.
   - Archivo **.ICS** compatible con Google Calendar, Apple Calendar y Outlook.
6. **Panel de Administración**: Carga masiva de datos mediante archivos CSV y gestión completa del catálogo.

---

## 🏗️ Arquitectura del Monorepo

```text
horario-upc/
├── backend/            # API REST Spring Boot 3 (Java 21)
├── frontend/           # SPA React 18 + TypeScript + Vite + Tailwind CSS
├── docs/               # Arquitectura, Modelo de datos, API, Algoritmo, ADRs, Wireframes
├── .github/workflows/  # Pipeline de Integración Continua (CI)
├── docker-compose.yml  # Orquestación de Postgres, Backend y Frontend
├── .env.example        # Plantilla de variables de entorno
└── README.md
```

---

## 💻 Requisitos Previos

- **Java 21 LTS**
- **Node.js 20+** y **npm**
- **Docker** y **Docker Compose** *(opcional para despliegue en contenedores)*
- **PostgreSQL 16+** *(si ejecutas el backend localmente sin Docker)*

---

## ⚡ Puesta en Marcha Rápida (Local)

### Opción A: Con Docker Compose (Recomendada)

1. Clona el repositorio:
   ```bash
   git clone https://github.com/TU-USUARIO/horario-upc.git
   cd horario-upc
   ```
2. Inicia los servicios con Docker Compose:
   ```bash
   docker compose up --build -d
   ```
3. Abre tu navegador:
   - **Frontend:** [http://localhost:5173](http://localhost:5173) (o puerto 80)
   - **Backend API Docs (Swagger):** [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

---

### Opción B: Ejecución Manual

#### 1. Base de Datos (PostgreSQL)
Crea una base de datos llamada `horario_upc_db`:
```sql
CREATE DATABASE horario_upc_db;
```

#### 2. Backend (Spring Boot 3)
```bash
cd backend
mvn spring-boot:run
```
*Flyway ejecutará automáticamente las migraciones `V1__create_schema.sql` y `V2__seed_upc_systems_engineering_2026_2.sql` con los datos semilla de la UPC.*

#### 3. Frontend (React / Vite)
```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Credenciales de Prueba por Defecto

El sistema incluye usuarios preconfigurados listos para probar:

| Rol | Correo Electrónico | Contraseña | Acceso |
| :--- | :--- | :--- | :--- |
| **Estudiante** | `estudiante@unicesar.edu.co` | `Estudiante123*` | Planificador, explorador, generador, horarios guardados |
| **Administrador** | `admin@unicesar.edu.co` | `Admin123*` | Panel administrativo, importador masivo CSV, catálogo |

---

## 📊 Datos Semilla Reales (Pensum V-0402-IS-D-07)

El sistema viene precargado con las materias troncales y complementarias del reporte oficial:
- **SS200** - Programación de Computadores I
- **SS300** - Programación de Computadores II
- **SS301** - Estructura de Datos
- **SS462** - Programación de Computadores III
- **SS463** - Base de Datos
- **SS500** - Arquitectura de Computadores
- **SS501** - Programación Web
- **SS502** - Ingeniería de Software I
- **SS600** - Sistemas Operativos
- **SS601** - Modelos y Simulación
- **SS602** - Ingeniería de Software II
- **SS603** - Programación Móvil
- **SS701** - Redes y Comunicaciones
- **SS702** - Inteligencia Artificial
- **SS706** - Ingeniería de Software III
- **SS707** - Tecnologías Inmersivas
- **SS708** - Research Project
- **SS802** - Base de Datos Avanzadas
- **SS806** - Seguridad de la Información
- **SS811** - Ética Profesional
- **SS812** - Proyecto de Grado I
- *Asignaturas complementarias:* Cálculo (Diferencial, Integral, Multivariable), Mecánica, Ondas, Electromagnetismo, etc.

---

## 🧪 Pruebas Automatizadas

### Backend (JUnit 5 + Mockito)
```bash
cd backend
mvn test
```

### Frontend (Type Checking & Lint)
```bash
cd frontend
npm run build
```

---

## 📋 Lista de Commits Sugeridos (Conventional Commits)

Si deseas recrear el historial paso a paso o estructurar tus ramas:
1. `chore: initialize repository structure and configuration files`
2. `feat(db): add flyway schema V1 and upc 2026-2 seed migration V2`
3. `feat(backend): implement domain entities, repositories, and exception handling`
4. `feat(backend): configure spring security 6 with stateless jwt authentication`
5. `feat(backend): implement CSP schedule engine and scoring service`
6. `test(backend): add unit test suite for schedule overlap detection and scoring`
7. `feat(backend): add csv bulk ingestion service and ics calendar exporter`
8. `feat(frontend): initialize react typescript vite tailwind project and types`
9. `feat(frontend): create weekly calendar grid with subject block rendering`
10. `feat(frontend): implement schedule builder, preferences drawer, and conflict box`
11. `feat(frontend): add generated alternatives view and pdf/png/ics export actions`
12. `feat(frontend): add student dashboard and admin csv import panel`
13. `ci: setup github actions automated build and test pipeline`
14. `docs: add comprehensive system architecture, api specs, and user guide`

---

## 📌 Issues Iniciales y Tablero de GitHub Projects Sugerido

Para gestionar el ciclo de vida del repositorio en GitHub Projects:

### Columnas del Tablero:
`Backlog` ➔ `En Progreso` ➔ `En Revisión / PR` ➔ `Completado`

### Issues Iniciales:
1. **[Core]** Implementar motor CSP de combinación de grupos con poda de conflictos en memoria. *(Completado)*
2. **[Security]** Autenticación JWT stateless con roles `ESTUDIANTE` y `ADMIN`. *(Completado)*
3. **[UI]** Rejilla semanal interactiva con renderizado porcentual y bloques con contraste accesible. *(Completado)*
4. **[Export]** Exportador RFC 5545 `.ics` para sincronización con Google Calendar. *(Completado)*
5. **[Export]** Exportador visual en PDF e imagen PNG de alta definición. *(Completado)*
6. **[Admin]** Parser CSV para carga de reportes de Academusoft con detección de `NDOC` y `NREF`. *(Completado)*
7. **[Feature Futura]** Soporte para carga directa del PDF oficial de la UPC mediante OCR / extracción tabular.

---

## 📤 Instrucciones Paso a Paso para Subir a GitHub

### Opción 1: Mediante GitHub CLI (`gh`) — *La más rápida*
1. Abre tu terminal en la carpeta `horario-upc`:
   ```powershell
   cd C:\Users\USUARIO\horario-upc
   ```
2. Inicia sesión en tu cuenta de GitHub (solo la primera vez):
   ```powershell
   gh auth login
   ```
   *(Sigue las instrucciones en pantalla: presiona Enter, selecciona GitHub.com, HTTPS, autoriza en el navegador).*
3. Crea y sube el repositorio automáticamente:
   ```powershell
   gh repo create horario-upc --public --source=. --remote=origin --push
   ```

---

### Opción 2: Mediante la Web de GitHub
1. Ve a [https://github.com/new](https://github.com/new).
2. Crea un nuevo repositorio con el nombre `horario-upc` (déjalo **vacío**, sin README ni .gitignore).
3. En tu terminal local:
   ```powershell
   cd C:\Users\USUARIO\horario-upc
   git remote add origin https://github.com/TU-USUARIO/horario-upc.git
   git branch -M main
   git push -u origin main
   ```

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
