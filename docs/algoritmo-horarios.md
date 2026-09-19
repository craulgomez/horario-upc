# Algoritmo de Generación y Ponderación de Horarios — HorarioUPC

## 1. Planteamiento como Problema de Satisfacción de Restricciones (CSP)

El problema de generar un horario universitario libre de choques se modela formalmente como un **Problema de Satisfacción de Restricciones (CSP - Constraint Satisfaction Problem)**:

- **Variables ($X$):** El conjunto de materias elegidas por el estudiante:
  $$X = \{M_1, M_2, \dots, M_k\}$$
- **Dominios ($D$):** Para cada materia $M_i$, su dominio $D(M_i)$ es el conjunto de grupos ofertados para dicha materia en el período activo:
  $$D(M_i) = \{g_{i,1}, g_{i,2}, \dots, g_{i,m_i}\}$$
- **Restricciones Duras (Hard Constraints - Obligatorias):**
  1. **Unicidad por Materia:** Exactamente un grupo debe ser seleccionado por materia.
  2. **Ausencia de Cruces Horarios:** Para cualesquiera dos grupos asignados $g_a$ y $g_b$, ninguna de sus sesiones semanales $s_a \in g_a$ y $s_b \in g_b$ puede intersectarse en tiempo:
     $$s_a.\text{dia} = s_b.\text{dia} \implies \left(s_a.\text{inicio} \ge s_b.\text{fin} \lor s_b.\text{inicio} \ge s_a.\text{fin}\right)$$

---

## 2. Estrategia de Búsqueda: Backtracking con Poda Temprana

El algoritmo explora el espacio de combinaciones posibles $\prod_{i=1}^k |D(M_i)|$ usando las siguientes técnicas de optimización:

1. **Heurística MRV (Minimum Remaining Values):**
   Las materias se ordenan de menor a mayor cantidad de grupos disponibles. Esto sitúa las asignaturas más restringidas al inicio del árbol de recursión, garantizando que las ramas sin salida se detecten y poden lo antes posible.
2. **Poda Temprana (Early Pruning):**
   En el momento en que se evalúa un grupo candidato $g$ para la materia en profundidad $d$, se verifica su compatibilidad con los $d-1$ grupos ya fijados. Si existe cualquier choque de sesión, la rama se poda de inmediato en tiempo $O(\text{sesiones})$, evitando explorar subárboles completos.
3. **Cota Superior de Búsqueda:**
   Para preservar la latencia interactiva, el algoritmo limita el número de soluciones recolectadas a un máximo de 1000 candidatos antes de proceder a la fase de ordenación y filtrado de las mejores 20 o 50 opciones.

---

## 3. Función Multiobjetivo de Aptitud (Scoring Engine)

Cada combinación válida parte de una base de **100 puntos** y es ajustada mediante la evaluación de las preferencias del estudiante:

$$\text{Puntaje} = \max\left(0, \min\left(100, 100 - \sum \text{Penalizaciones} + \sum \text{Bonificaciones}\right)\right)$$

### Criterios y Ponderaciones:

| Criterio | Condición Evaluada | Impacto |
| :--- | :--- | :--- |
| **0 Conflictos** | Restricción dura | Obligatorio (los horarios con cruces se descartan) |
| **Horas Muertas** | Espacios libres $> 15$ min entre clases del mismo día | $-5$ pts por hora de hueco (máx $-25$ pts) |
| **Día Libre** | Estudiante solicita día libre y no se logra | $-15$ pts |
| **Día Libre Conseguido** | Al menos 1 día hábil (lunes a sábado) sin clases | Explicación positiva en desglose |
| **Clases en Sábado** | Horario incluye sesiones en sábado (si `evitarSabado=true`) | $-15$ pts |
| **Clases Nocturnas** | Sesiones que finalizan después de las 18:00 (si `evitarNocturna=true`) | $-15$ pts |
| **Jornada Mañana** | Clases programadas a partir de las 12:00 (si prefiere mañana) | $-4$ pts por sesión fuera de jornada (máx $-20$ pts) |
| **Jornada Tarde** | Clases programadas antes de las 12:00 (si prefiere tarde) | $-4$ pts por sesión fuera de jornada (máx $-20$ pts) |
| **Hora de Salida** | Alguna sesión supera la `horaMaximaSalida` | $-10$ pts |
| **Docente Pendiente (NDOC)** | Grupo sin docente asignado en el reporte oficial | $-8$ pts por grupo |
| **Aula Pendiente (NREF)** | Grupo sin salón asignado en el reporte oficial | $-5$ pts por grupo |
| **Modalidad no deseada** | Grupo difiere de la modalidad preferida | $-5$ pts por grupo (máx $-15$ pts) |
