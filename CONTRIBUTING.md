# Guía de Contribución a HorarioUPC

¡Gracias por tu interés en colaborar con **HorarioUPC**! Este proyecto tiene como objetivo brindar a los estudiantes de la Universidad Popular del Cesar una herramienta moderna y eficiente para planificar sus matrículas académicas.

---

## Código de Conducta
Al participar en este proyecto, te comprometes a mantener un ambiente respetuoso, inclusivo y constructivo. Por favor, consulta nuestro [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

---

## Flujo de Trabajo y Ramas

1. **Haz un Fork** del repositorio oficial.
2. Clona tu bifurcación en local:
   ```bash
   git clone https://github.com/TU-USUARIO/horario-upc.git
   cd horario-upc
   ```
3. Crea una rama descriptiva para tu característica o corrección:
   - `feat/nombre-funcionalidad`
   - `fix/descripcion-bug`
   - `docs/actualizacion-guia`
   - `refactor/modulo-especifico`

---

## Formato de Commits (Conventional Commits)

Utilizamos el estándar **Conventional Commits**:
- `feat:` Nueva funcionalidad para el usuario.
- `fix:` Corrección de un error en el código.
- `docs:` Cambios únicamente en la documentación.
- `style:` Formateo de código sin cambio de lógica (espacios, comas, etc.).
- `refactor:` Refactorización de código sin añadir features ni corregir bugs.
- `test:` Adición o modificación de pruebas unitarias/integración.
- `chore:` Tareas de mantenimiento, dependencias o tooling.

**Ejemplos:**
```text
feat(backend): implement schedule conflict detection algorithm
fix(frontend): resolve timetable block overlapping on mobile view
docs(api): document schedule generation endpoint parameters
```

---

## Ejecución Local y Pruebas

### Backend (Spring Boot 3 / Java 21)
```bash
cd backend
mvn clean test
mvn spring-boot:run
```

### Frontend (React / Vite)
```bash
cd frontend
npm install
npm run lint
npm run build
npm run dev
```

### Docker Compose
```bash
docker compose up -d
```

---

## Envío de Pull Requests (PR)

1. Asegúrate de que todas las pruebas pasen y no existan errores de linting (`npm run lint`, `mvn test`).
2. Haz push de tus cambios a tu repositorio remoto:
   ```bash
   git push origin feat/mi-funcionalidad
   ```
3. Abre un Pull Request hacia la rama `main` del repositorio principal detallando:
   - Resumen del cambio.
   - Motivación o issue asociado (`Fixes #12`).
   - Pruebas realizadas.
   - Capturas de pantalla (si aplica a UI).
