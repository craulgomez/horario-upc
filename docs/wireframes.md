# Wireframes y Diseño UX/UI — HorarioUPC

Este documento describe la estructura visual y distribución de componentes en las pantallas principales del sistema.

---

## 1. Constructor de Horarios (`/planificador`)

```
+--------------------------------------------------------------------------------------------------+
|  [UPC] HorarioUPC    Dashboard    Materias    Constructor    Guardados    [Admin]      Juan (Salir)  |
+--------------------------------------------------------------------------------------------------+
|  Constructor de Horario  [2026-2]             [Preferencias] [Generar Automáticos] [Guardar] [Exportar] |
+------------------------------------+-------------------------------------------------------------+
|  MIS MATERIAS (4)     [+ Agregar]  |  [LUNES]   [MARTES]   [MIERCOLES]  [JUEVES]   [VIERNES]  [SABADO]  |
|  +-------------------------------+ | 06:00                                                       |
|  | SS200 - Programación I [G01]  | | 07:00                                                       |
|  | SS301 - Estructuras   [G02]   | | 08:00  [SS200-G01]            [SS200-G01]                       |
|  | MT303B - Cálculo Int  [G04]   | | 09:00  (Prof. Oñate)          (Prof. Oñate)                     |
|  | FS202 - Mecánica      [G01]   | | 10:00             [SS301-G02]            [SS301-G02]           |
|  +-------------------------------+ | 11:00             (Aula 202)             (Aula 202)            |
|                                    | 12:00                                                       |
|  GRUPOS DISPONIBLES PARA SS200     | 13:00                                                       |
|  * Grupo 01-CAMPUS [Presencial]    | 14:00                                                       |
|    Lunes y Miércoles 08:00-09:59   | 15:00                                                       |
|  * Grupo 02-CAMPUS [Presencial]    | 16:00                                                       |
|    Lunes y Miércoles 10:00-11:59   | 17:00                                                       |
|  * Grupo 10-BANCO  [Virtual] (NDOC)| 18:00                                                       |
+------------------------------------+-------------------------------------------------------------+
|  [v] 0 Choques Horarios | Horario 100% compatible y validado                                     |
+--------------------------------------------------------------------------------------------------+
```

---

## 2. Resultados del Generador Inteligente (`/generados`)

```
+--------------------------------------------------------------------------------------------------+
|  <- Volver    Horarios Generados (14 Alternativas)             [Ajustar Criterios] [Exportar]    |
+------------------------------------+-------------------------------------------------------------+
|  LISTA DE ALTERNATIVAS             |  VISTA PREVIA: OPCIÓN OPT-1 (Puntaje: 95/100)               |
|                                    |                                                             |
|  +-------------------------------+ |  [Lunes a Sábado - Rejilla Interactiva]                     |
|  | OPCIÓN OPT-1      [95 pts]    | |                                                             |
|  | 5 Materias • 15 Créditos      | |  - Clases compactas en la mañana (08:00 a 12:00)          |
|  | 1 Día Libre • 0 Horas Muertas | |  - Sábado completamente libre                             |
|  | [*] Todos con docente asignado| |  - Viernes completamente libre                            |
|  | [Aplicar]  [Guardar]          | |                                                             |
|  +-------------------------------+ |                                                             |
|                                    |                                                             |
|  +-------------------------------+ |  ¿Por qué tiene este puntaje?                               |
|  | OPCIÓN OPT-2      [88 pts]    | |  [+] Día viernes completamente libre (+15 pts)            |
|  | 5 Materias • 15 Créditos      | |  [+] 0 horas muertas entre clases (+10 pts)               |
|  | 0 Días Libres • 2 Horas Muert | |  [-] Termina a las 16:00 el día martes (-5 pts)           |
|  | [Aplicar]  [Guardar]          | |                                                             |
|  +-------------------------------+ |  [ Aplicar este Horario al Constructor ]                    |
+------------------------------------+-------------------------------------------------------------+
```

---

## 3. Panel de Administración (`/admin`)

```
+--------------------------------------------------------------------------------------------------+
|  Panel de Administración  [ADMIN]                                              admin@unicesar.edu|
+--------------------------------------------------------------------------------------------------+
|  [ Importación Masiva desde CSV de Academusoft ]                                                |
|  Arrastra tu archivo CSV con el reporte oficial de horarios de la UPC                            |
|  [ Seleccionar archivo .csv ]   ->   [ Procesar e Importar ]                                     |
+--------------------------------------------------------------------------------------------------+
|  CATÁLOGO DE ASIGNATURAS                                                [Buscar materia: _____]  |
|  Codigo   Nombre                         Semestre  Créditos  Grupos  Estado                      |
|  SS200    Programación de Computadores I    2°        3        5     [Activa]                    |
|  SS300    Programación de Computadores II   3°        3        4     [Activa]                    |
|  SS301    Estructura de Datos               3°        3        4     [Activa]                    |
+--------------------------------------------------------------------------------------------------+
```
