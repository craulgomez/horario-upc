# Arquitectura del Sistema — HorarioUPC

## 1. Visión General

HorarioUPC es una plataforma monorepo estructurada bajo el principio de separación de responsabilidades (SoC), diseñada para la comunidad universitaria de la **Universidad Popular del Cesar (UPC)**.

```
+-------------------------------------------------------------+
|                      CLIENTE WEB (SPA)                      |
|           React 18 + TypeScript + Vite + Tailwind CSS       |
|          TanStack Query v5 + Context API + Lucide UI        |
+------------------------------+------------------------------+
                               | HTTPS / JSON (REST API v1)
                               v
+-------------------------------------------------------------+
|               BACKEND SPRING BOOT 3 (Java 21)               |
|  +-------------------------------------------------------+  |
|  | Security Filter: Spring Security 6 + JWT Stateless    |  |
|  +-------------------------------------------------------+  |
|  | REST Controllers (OpenAPI / Swagger Documentation)    |  |
|  +-------------------------------------------------------+  |
|  | Application Services & Domain Core:                   |  |
|  |  * AcademicCatalogService                             |  |
|  |  * ScheduleEngineService (Backtracking CSP + Pruning) |  |
|  |  * ScheduleScoringService (Heurística de Ponderación) |  |
|  |  * SavedScheduleService & IcsExportService            |  |
|  |  * CsvImportService (Academusoft Report Parser)       |  |
|  +-------------------------------------------------------+  |
|  | Data Access Layer: Spring Data JPA + Hibernate       |  |
|  +-------------------------------------------------------+  |
+------------------------------+------------------------------+
                               | JDBC (HikariCP)
                               v
+-------------------------------------------------------------+
|                  BASE DE DATOS POSTGRESQL 16                |
|           Esquema Relacional + Migraciones Flyway           |
+-------------------------------------------------------------+
```

## 2. Decisiones Arquitectónicas Clave

### 2.1. Desacoplamiento del Motor de Planificación (CSP)
El motor de resolución de horarios opera como un módulo determinista en memoria. Dado que el catálogo de materias para un estudiante en un semestre determinado oscila entre 4 y 7 asignaturas, el problema se modela como un **Constraint Satisfaction Problem (CSP)** resuelto mediante **Backtracking con Poda Temprana (Early Pruning)** y heurística **MRV (Minimum Remaining Values)**.

### 2.2. Seguridad Stateless basada en JWT
- Tokens HMAC-SHA256 con expiración configurable (24 horas por defecto).
- Roles definidos en sistema: `ROLE_ESTUDIANTE` y `ROLE_ADMIN`.
- Inyección de credenciales contextuales vía `@AuthenticationPrincipal`.

### 2.3. Persistencia y Control de Versiones de Base de Datos
- Las migraciones se gestionan exclusivamente mediante **Flyway** (`V1__create_schema.sql`, `V2__seed_upc_systems_engineering_2026_2.sql`).
- Integridad referencial con borrado en cascada controlado y unicidad en la tupla `(materia_id, periodo_id, numero_grupo)`.
