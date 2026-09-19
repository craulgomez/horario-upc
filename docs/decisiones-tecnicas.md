# Registro de Decisiones Técnicas (ADR) — HorarioUPC

## ADR-01: Arquitectura Monorepo vs Multi-repo
- **Decisión:** Adoptar estructura monorepo conteniendo `/backend`, `/frontend`, `/docs` y `docker-compose.yml` en la raíz.
- **Razón:** Facilita la orquestación local con Docker Compose, unifica el control de versiones en GitHub y sincroniza esquemas DTO y migraciones Flyway en un único ciclo de vida de desarrollo.

## ADR-02: Spring Boot 3 y Java 21 en Backend
- **Decisión:** Emplear Java 21 LTS con Spring Boot 3.3+.
- **Razón:** Acceso a Virtual Threads (Project Loom), APIs de colección inmutables modernas, Spring Security 6 con filtrado funcional y soporte a largo plazo.

## ADR-03: Algoritmo CSP en Memoria vs Solver Externo (OptaPlanner/Choco)
- **Decisión:** Implementar un algoritmo nativo de Backtracking Recursivo con poda temprana en `ScheduleEngineService.java`.
- **Razón:** Las bibliotecas de optimización externa (como Timefold o OptaPlanner) introducen overhead significativo de configuración, dependencias pesadas y consumo de memoria. Dado que el espacio de búsqueda para un estudiante comprende entre 4 y 7 materias con 2 a 6 grupos por materia, el algoritmo nativo resuelve las mejores 20 combinaciones en menos de **15 milisegundos**.

## ADR-04: Rejilla Semanal Dinámica en React (Tailwind vs FullCalendar pesado)
- **Decisión:** Implementar `WeeklyGridCalendar.tsx` con posicionamiento porcentual absoluto en base horaria (06:00 - 22:00) y Tailwind CSS.
- **Razón:** Las bibliotecas de calendario comerciales están concebidas para agendas de oficina o eventos de día completo, requiriendo complejas adaptaciones para mostrar códigos de materia, número de grupo, alertas NDOC/NREF y docentes simultáneamente. La rejilla a medida permite renderizado instantáneo y captura directa en alta definición para exportación a PDF e imagen.

## ADR-05: Generación Dual de Calendario (.ics y PDF)
- **Decisión:** Implementar exportación `.ics` tanto en backend como en frontend, junto con renderizado cliente de PDF mediante `jsPDF` y `html2canvas`.
- **Razón:** Permite que los estudiantes descarguen su horario incluso sin conexión constante al servidor, y que puedan sincronizar las clases recurrentes de todo el semestre directamente en Google Calendar en sus celulares.
