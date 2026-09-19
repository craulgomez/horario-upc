-- =========================================================================
-- HorarioUPC Seed Migration (V2)
-- Datos Semilla Reales: Ingeniería de Sistemas - Período 2026-2
-- Fuente: Academusoft 4.0 - Universidad Popular del Cesar (Pensum V-0402-IS-D-07)
-- =========================================================================

-- 1. Usuarios Iniciales (Contraseñas iniciales serán re-aseguradas en startup)
INSERT INTO usuarios (id, nombre, correo, password_hash, rol, created_at, updated_at)
VALUES 
(1, 'Administrador UPC', 'admin@unicesar.edu.co', '$2a$10$dXJ3SW6G7P50lGmMkkmwe.20cQQubK3.HZWzG3YB1tlRy.fqvM/BG', 'ADMIN', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'Estudiante Sistemas', 'estudiante@unicesar.edu.co', '$2a$10$dXJ3SW6G7P50lGmMkkmwe.20cQQubK3.HZWzG3YB1tlRy.fqvM/BG', 'ESTUDIANTE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT (correo) DO NOTHING;

-- Preferencia por defecto para el estudiante de prueba
INSERT INTO preferencias_horario (usuario_id, prefiere_manana, prefiere_tarde, evitar_nocturna, evitar_sabado, quiere_dia_libre, minimizar_huecos, modalidad_preferida, hora_maxima_salida)
VALUES (2, TRUE, FALSE, TRUE, TRUE, TRUE, TRUE, 'PRESENCIAL', '18:00:00')
ON CONFLICT (usuario_id) DO NOTHING;

-- 2. Programa Académico
INSERT INTO programas (id, codigo, nombre, universidad, activo)
VALUES (1, 'ING-SISTEMAS', 'Ingeniería de Sistemas', 'Universidad Popular del Cesar', TRUE)
ON CONFLICT (codigo) DO NOTHING;

-- 3. Período Académico
INSERT INTO periodos_academicos (id, nombre, fecha_inicio, fecha_fin, activo)
VALUES (1, '2026-2', '2026-08-03', '2026-12-15', TRUE)
ON CONFLICT (nombre) DO NOTHING;

-- 4. Materias
INSERT INTO materias (id, codigo, nombre, creditos, semestre_sugerido, programa_id, activa) VALUES
-- Semestre 1
(1, 'MT104', 'Cálculo Diferencial', 4, 1, 1, TRUE),
(2, 'MT117', 'Lógica Matemática', 3, 1, 1, TRUE),
(3, 'PG102', 'Comunicación Oral y Escrita I', 2, 1, 1, TRUE),
(4, 'SS105', 'Introducción a la Ingeniería de Sistemas', 2, 1, 1, TRUE),
(5, 'UPC01', 'Cátedra Upecista', 1, 1, 1, TRUE),
-- Semestre 2
(6, 'SS200', 'Programación de Computadores I', 3, 2, 1, TRUE),
(7, 'MT301B', 'Álgebra Lineal', 3, 2, 1, TRUE),
(8, 'MT303B', 'Cálculo Integral', 4, 2, 1, TRUE),
(9, 'FS202', 'Mecánica', 4, 2, 1, TRUE),
(10, 'PG200', 'Comunicación Oral y Escrita II', 2, 2, 1, TRUE),
-- Semestre 3
(11, 'SS300', 'Programación de Computadores II', 3, 3, 1, TRUE),
(12, 'SS301', 'Estructura de Datos', 3, 3, 1, TRUE),
(13, 'MT331', 'Cálculo Multivariable', 4, 3, 1, TRUE),
(14, 'MT309B', 'Análisis Numérico', 3, 3, 1, TRUE),
(15, 'FS329', 'Ondas', 4, 3, 1, TRUE),
(16, 'ID212', 'Tech English I', 2, 3, 1, TRUE),
-- Semestre 4
(17, 'SS462', 'Programación de Computadores III', 3, 4, 1, TRUE),
(18, 'SS463', 'Base de Datos', 3, 4, 1, TRUE),
(19, 'MT402', 'Ecuaciones Diferenciales', 3, 4, 1, TRUE),
(20, 'MT403', 'Estadística Descriptiva e Inferencial', 3, 4, 1, TRUE),
(21, 'FS400', 'Electromagnetismo', 4, 4, 1, TRUE),
(22, 'ID341', 'Tech English II', 2, 4, 1, TRUE),
-- Semestre 5
(23, 'SS500', 'Arquitectura de Computadores', 3, 5, 1, TRUE),
(24, 'SS501', 'Programación Web', 3, 5, 1, TRUE),
(25, 'SS502', 'Ingeniería de Software I', 3, 5, 1, TRUE),
(26, 'AI432', 'Investigación de Operaciones', 3, 5, 1, TRUE),
(27, 'ING301', 'Metodología de la Investigación', 2, 5, 1, TRUE),
-- Semestre 6
(28, 'SS600', 'Sistemas Operativos', 3, 6, 1, TRUE),
(29, 'SS601', 'Modelos y Simulación', 3, 6, 1, TRUE),
(30, 'SS602', 'Ingeniería de Software II', 3, 6, 1, TRUE),
(31, 'SS603', 'Programación Móvil', 3, 6, 1, TRUE),
(32, 'SS604', 'Innovación y Emprendimiento Tecnológico', 2, 6, 1, TRUE),
-- Semestre 7
(33, 'SS701', 'Redes y Comunicaciones', 3, 7, 1, TRUE),
(34, 'SS702', 'Inteligencia Artificial', 3, 7, 1, TRUE),
(35, 'SS706', 'Ingeniería de Software III', 3, 7, 1, TRUE),
(36, 'SS707', 'Tecnologías Inmersivas', 3, 7, 1, TRUE),
(37, 'SS708', 'Research Project', 2, 7, 1, TRUE),
(38, 'AI700', 'Ingeniería Económica', 3, 7, 1, TRUE),
-- Semestre 8
(39, 'SS802', 'Base de Datos Avanzadas', 3, 8, 1, TRUE),
(40, 'SS806', 'Seguridad de la Información', 3, 8, 1, TRUE),
(41, 'SS811', 'Ética Profesional', 2, 8, 1, TRUE),
(42, 'SS812', 'Proyecto de Grado I', 3, 8, 1, TRUE)
ON CONFLICT (codigo) DO NOTHING;

-- 5. Grupos de Materias Representativas (Con docentes reales y aulas del PDF)

-- SS200: Programación de Computadores I
INSERT INTO grupos (id, numero_grupo, modalidad, sede, docente, aula, estado, tiene_docente_asignado, tiene_recurso_fisico_asignado, materia_id, periodo_id) VALUES
(101, '01-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'CARLOS EMILIANO OÑATE GOMEZ', '202-BLOQ I-INFORMATI', 'ACTIVO', TRUE, TRUE, 6, 1),
(102, '02-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'CARLOS EMILIANO OÑATE GOMEZ', '202-BLOQ I-INFORMATI', 'ACTIVO', TRUE, TRUE, 6, 1),
(103, '03-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'CARLOS EMILIANO OÑATE GOMEZ', '202-BLOQ I-INFORMATI', 'ACTIVO', TRUE, TRUE, 6, 1),
(104, '04-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'BRAULIO BARRIOS ZUÑIGA', '202-BLOQ I-INFORMATI', 'ACTIVO', TRUE, TRUE, 6, 1),
(105, '10-BANCO ING SISTEMAS', 'VIRTUAL', 'SEDE_BANCO', 'NDOC', 'NREF', 'ACTIVO', FALSE, FALSE, 6, 1)
ON CONFLICT (materia_id, periodo_id, numero_grupo) DO NOTHING;

-- Sesiones SS200
INSERT INTO sesiones_clase (dia_semana, hora_inicio, hora_fin, aula, grupo_id) VALUES
-- Grupo 01: Lunes y Miércoles 08:00 - 09:59
('LUNES', '08:00:00', '09:59:00', '202-BLOQ I-INFORMATI', 101),
('MIERCOLES', '08:00:00', '09:59:00', '202-BLOQ I-INFORMATI', 101),
-- Grupo 02: Lunes y Miércoles 10:00 - 11:59
('LUNES', '10:00:00', '11:59:00', '202-BLOQ I-INFORMATI', 102),
('MIERCOLES', '10:00:00', '11:59:00', '202-BLOQ I-INFORMATI', 102),
-- Grupo 03: Martes y Jueves 08:00 - 09:59
('MARTES', '08:00:00', '09:59:00', '202-BLOQ I-INFORMATI', 103),
('JUEVES', '08:00:00', '09:59:00', '202-BLOQ I-INFORMATI', 103),
-- Grupo 04: Martes y Jueves 14:00 - 15:59 (Tarde)
('MARTES', '14:00:00', '15:59:00', '202-BLOQ I-INFORMATI', 104),
('JUEVES', '14:00:00', '15:59:00', '202-BLOQ I-INFORMATI', 104),
-- Grupo 10: Viernes 18:00 - 21:59 (Nocturna / Banco / Alerta NDOC y NREF)
('VIERNES', '18:00:00', '21:59:00', 'NREF', 105);

-- SS300: Programación de Computadores II
INSERT INTO grupos (id, numero_grupo, modalidad, sede, docente, aula, estado, tiene_docente_asignado, tiene_recurso_fisico_asignado, materia_id, periodo_id) VALUES
(201, '01-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'AMILKAR JOSE HERNANDEZ OÑATE', '301-INFORMATICA', 'ACTIVO', TRUE, TRUE, 11, 1),
(202, '02-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'PATRICIA ISABEL ALVAREZ ORTEGA', '301-INFORMATICA', 'ACTIVO', TRUE, TRUE, 11, 1),
(203, '03-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'ROBERTO AUGUSTO FERNANDEZ RAMIREZ', '301-INFORMATICA', 'ACTIVO', TRUE, TRUE, 11, 1),
(204, '04-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'ROBERTO AUGUSTO FERNANDEZ RAMIREZ', '301-INFORMATICA', 'ACTIVO', TRUE, TRUE, 11, 1)
ON CONFLICT (materia_id, periodo_id, numero_grupo) DO NOTHING;

-- Sesiones SS300
INSERT INTO sesiones_clase (dia_semana, hora_inicio, hora_fin, aula, grupo_id) VALUES
('LUNES', '06:00:00', '07:59:00', '301-INFORMATICA', 201),
('MIERCOLES', '06:00:00', '07:59:00', '301-INFORMATICA', 201),
('LUNES', '08:00:00', '09:59:00', '301-INFORMATICA', 202),
('MIERCOLES', '08:00:00', '09:59:00', '301-INFORMATICA', 202),
('MARTES', '14:00:00', '15:59:00', '301-INFORMATICA', 203),
('JUEVES', '14:00:00', '15:59:00', '301-INFORMATICA', 203),
('MARTES', '16:00:00', '17:59:00', '301-INFORMATICA', 204),
('JUEVES', '16:00:00', '17:59:00', '301-INFORMATICA', 204);

-- SS301: Estructura de Datos
INSERT INTO grupos (id, numero_grupo, modalidad, sede, docente, aula, estado, tiene_docente_asignado, tiene_recurso_fisico_asignado, materia_id, periodo_id) VALUES
(301, '01-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'CARLOS EMILIANO OÑATE GOMEZ', '202-BLOQ I-INFORMATI', 'ACTIVO', TRUE, TRUE, 12, 1),
(302, '02-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'ROBERTO ENRIQUE QUIROZ MOSCARELLA', '202-BLOQ I-INFORMATI', 'ACTIVO', TRUE, TRUE, 12, 1),
(303, '03-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'BRAULIO BARRIOS ZUÑIGA', '202-BLOQ I-INFORMATI', 'ACTIVO', TRUE, TRUE, 12, 1),
(304, '05-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'ADITH BISMARCK PEREZ OROZCO', '202-BLOQ I-INFORMATI', 'ACTIVO', TRUE, TRUE, 12, 1)
ON CONFLICT (materia_id, periodo_id, numero_grupo) DO NOTHING;

-- Sesiones SS301
INSERT INTO sesiones_clase (dia_semana, hora_inicio, hora_fin, aula, grupo_id) VALUES
('MARTES', '06:00:00', '07:59:00', '202-BLOQ I-INFORMATI', 301),
('JUEVES', '06:00:00', '07:59:00', '202-BLOQ I-INFORMATI', 301),
('MARTES', '06:00:00', '07:59:00', '202-BLOQ I-INFORMATI', 302),
('VIERNES', '06:00:00', '07:59:00', '202-BLOQ I-INFORMATI', 302),
('LUNES', '14:00:00', '15:59:00', '202-BLOQ I-INFORMATI', 303),
('MIERCOLES', '14:00:00', '15:59:00', '402-SALA INTERNET', 303),
('MARTES', '12:00:00', '13:59:00', '202-BLOQ I-INFORMATI', 304),
('JUEVES', '12:00:00', '13:59:00', '202-BLOQ I-INFORMATI', 304);

-- SS462: Programación de Computadores III
INSERT INTO grupos (id, numero_grupo, modalidad, sede, docente, aula, estado, tiene_docente_asignado, tiene_recurso_fisico_asignado, materia_id, periodo_id) VALUES
(401, '01-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'ALFREDO DAVID BAUTISTA ROMERO', '303-INFORMATICA', 'ACTIVO', TRUE, TRUE, 17, 1),
(402, '02-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'ALFREDO DAVID BAUTISTA ROMERO', '303-INFORMATICA', 'ACTIVO', TRUE, TRUE, 17, 1),
(403, '03-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'JOHN JAIRO PATIÑO VANEGAS', '303-INFORMATICA', 'ACTIVO', TRUE, TRUE, 17, 1),
(404, '04-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'JOHN JAIRO PATIÑO VANEGAS', '302-INFORMATICA', 'ACTIVO', TRUE, TRUE, 17, 1)
ON CONFLICT (materia_id, periodo_id, numero_grupo) DO NOTHING;

-- Sesiones SS462
INSERT INTO sesiones_clase (dia_semana, hora_inicio, hora_fin, aula, grupo_id) VALUES
('LUNES', '08:00:00', '09:59:00', '303-INFORMATICA', 401),
('MIERCOLES', '08:00:00', '09:59:00', '303-INFORMATICA', 401),
('LUNES', '10:00:00', '11:59:00', '303-INFORMATICA', 402),
('MIERCOLES', '10:00:00', '11:59:00', '303-INFORMATICA', 402),
('MARTES', '14:00:00', '15:59:00', '303-INFORMATICA', 403),
('JUEVES', '14:00:00', '15:59:00', '303-INFORMATICA', 403),
('MARTES', '16:00:00', '17:59:00', '302-INFORMATICA', 404),
('JUEVES', '16:00:00', '17:59:00', '302-INFORMATICA', 404);

-- SS463: Base de Datos
INSERT INTO grupos (id, numero_grupo, modalidad, sede, docente, aula, estado, tiene_docente_asignado, tiene_recurso_fisico_asignado, materia_id, periodo_id) VALUES
(501, '01-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'AMILKAR SIERRA ROMANO', '303-INFORMATICA', 'ACTIVO', TRUE, TRUE, 18, 1),
(502, '02-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'AMILKAR SIERRA ROMANO', '303-INFORMATICA', 'ACTIVO', TRUE, TRUE, 18, 1),
(503, '07-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'YAIR ALFREDO VARGAS DELGADO', '302-INFORMATICA', 'ACTIVO', TRUE, TRUE, 18, 1),
(504, '08-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'YAIR ALFREDO VARGAS DELGADO', '302-INFORMATICA', 'ACTIVO', TRUE, TRUE, 18, 1)
ON CONFLICT (materia_id, periodo_id, numero_grupo) DO NOTHING;

-- Sesiones SS463
INSERT INTO sesiones_clase (dia_semana, hora_inicio, hora_fin, aula, grupo_id) VALUES
('LUNES', '06:00:00', '07:59:00', '303-INFORMATICA', 501),
('MIERCOLES', '06:00:00', '07:59:00', '303-INFORMATICA', 501),
('MARTES', '08:00:00', '09:59:00', '303-INFORMATICA', 502),
('JUEVES', '08:00:00', '09:59:00', '303-INFORMATICA', 502),
('LUNES', '12:00:00', '13:59:00', '302-INFORMATICA', 503),
('MIERCOLES', '12:00:00', '13:59:00', '302-INFORMATICA', 503),
('MARTES', '12:00:00', '13:59:00', '302-INFORMATICA', 504),
('JUEVES', '12:00:00', '13:59:00', '302-INFORMATICA', 504);

-- SS500: Arquitectura de Computadores
INSERT INTO grupos (id, numero_grupo, modalidad, sede, docente, aula, estado, tiene_docente_asignado, tiene_recurso_fisico_asignado, materia_id, periodo_id) VALUES
(601, '01-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'MIGUEL ANGEL AROCA CERVANTES', '404-SALA INTERNET', 'ACTIVO', TRUE, TRUE, 23, 1),
(602, '03-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'PABLO ANDRES GUERRA GONZALEZ', '403-SALA INTERNET', 'ACTIVO', TRUE, TRUE, 23, 1),
(603, '04-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'MIGUEL ANGEL AROCA CERVANTES', '404-SALA INTERNET', 'ACTIVO', TRUE, TRUE, 23, 1)
ON CONFLICT (materia_id, periodo_id, numero_grupo) DO NOTHING;

-- Sesiones SS500
INSERT INTO sesiones_clase (dia_semana, hora_inicio, hora_fin, aula, grupo_id) VALUES
('LUNES', '16:00:00', '17:59:00', '404-SALA INTERNET', 601),
('MIERCOLES', '16:00:00', '17:59:00', '404-SALA INTERNET', 601),
('MARTES', '14:00:00', '15:59:00', '403-SALA INTERNET', 602),
('JUEVES', '14:00:00', '15:59:00', '403-SALA INTERNET', 602),
('LUNES', '14:00:00', '15:59:00', '404-SALA INTERNET', 603),
('MIERCOLES', '14:00:00', '15:59:00', '404-SALA INTERNET', 603);

-- SS501: Programación Web
INSERT INTO grupos (id, numero_grupo, modalidad, sede, docente, aula, estado, tiene_docente_asignado, tiene_recurso_fisico_asignado, materia_id, periodo_id) VALUES
(701, '01-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'SADAINER FERNEY HERNANDEZ CHACON', '301-INFORMATICA', 'ACTIVO', TRUE, TRUE, 24, 1),
(702, '02-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'WILMAN JOSE VEGA CASTILLA', '301-INFORMATICA', 'ACTIVO', TRUE, TRUE, 24, 1),
(703, '03-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'SADAINER FERNEY HERNANDEZ CHACON', '301-INFORMATICA', 'ACTIVO', TRUE, TRUE, 24, 1),
(704, '04-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'WILMAN JOSE VEGA CASTILLA', '401-SALA INTERNET', 'ACTIVO', TRUE, TRUE, 24, 1)
ON CONFLICT (materia_id, periodo_id, numero_grupo) DO NOTHING;

-- Sesiones SS501
INSERT INTO sesiones_clase (dia_semana, hora_inicio, hora_fin, aula, grupo_id) VALUES
('LUNES', '18:00:00', '19:59:00', '301-INFORMATICA', 701),
('MIERCOLES', '18:00:00', '19:59:00', '301-INFORMATICA', 701),
('MARTES', '18:00:00', '19:59:00', '301-INFORMATICA', 702),
('JUEVES', '18:00:00', '19:59:00', '301-INFORMATICA', 702),
('MARTES', '06:00:00', '07:59:00', '301-INFORMATICA', 703),
('JUEVES', '06:00:00', '07:59:00', '301-INFORMATICA', 703),
('MARTES', '12:00:00', '13:59:00', '401-SALA INTERNET', 704),
('JUEVES', '12:00:00', '13:59:00', '401-SALA INTERNET', 704);

-- SS502: Ingeniería de Software I
INSERT INTO grupos (id, numero_grupo, modalidad, sede, docente, aula, estado, tiene_docente_asignado, tiene_recurso_fisico_asignado, materia_id, periodo_id) VALUES
(801, '01-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'PATRICIA ISABEL ALVAREZ ORTEGA', '401-SALA INTERNET', 'ACTIVO', TRUE, TRUE, 25, 1),
(802, '02-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'JOHN JAIRO PATIÑO VANEGAS', '401-SALA INTERNET', 'ACTIVO', TRUE, TRUE, 25, 1),
(803, '03-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'PATRICIA ISABEL ALVAREZ ORTEGA', '302-INFORMATICA', 'ACTIVO', TRUE, TRUE, 25, 1)
ON CONFLICT (materia_id, periodo_id, numero_grupo) DO NOTHING;

-- Sesiones SS502
INSERT INTO sesiones_clase (dia_semana, hora_inicio, hora_fin, aula, grupo_id) VALUES
('LUNES', '08:00:00', '09:59:00', '401-SALA INTERNET', 801),
('MIERCOLES', '08:00:00', '09:59:00', '401-SALA INTERNET', 801),
('MARTES', '10:00:00', '11:59:00', '401-SALA INTERNET', 802),
('JUEVES', '10:00:00', '11:59:00', '401-SALA INTERNET', 802),
('MARTES', '06:00:00', '07:59:00', '302-INFORMATICA', 803),
('JUEVES', '06:00:00', '07:59:00', '302-INFORMATICA', 803);

-- SS600: Sistemas Operativos
INSERT INTO grupos (id, numero_grupo, modalidad, sede, docente, aula, estado, tiene_docente_asignado, tiene_recurso_fisico_asignado, materia_id, periodo_id) VALUES
(901, '01-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'OSWALDO RUEDA CARREÑO', '403-SALA INTERNET', 'ACTIVO', TRUE, TRUE, 28, 1),
(902, '02-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'WILLIAM ENRIQUE CASTRO CABARCAS', '403-SALA INTERNET', 'ACTIVO', TRUE, TRUE, 28, 1),
(903, '03-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'OSWALDO RUEDA CARREÑO', '403-SALA INTERNET', 'ACTIVO', TRUE, TRUE, 28, 1),
(904, '05-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'OSWALDO RUEDA CARREÑO', '403-SALA INTERNET', 'ACTIVO', TRUE, TRUE, 28, 1)
ON CONFLICT (materia_id, periodo_id, numero_grupo) DO NOTHING;

-- Sesiones SS600
INSERT INTO sesiones_clase (dia_semana, hora_inicio, hora_fin, aula, grupo_id) VALUES
('LUNES', '12:00:00', '13:59:00', '403-SALA INTERNET', 901),
('MIERCOLES', '12:00:00', '13:59:00', '403-SALA INTERNET', 901),
('MARTES', '06:00:00', '07:59:00', '403-SALA INTERNET', 902),
('JUEVES', '06:00:00', '07:59:00', '403-SALA INTERNET', 902),
('MARTES', '06:00:00', '07:59:00', '403-SALA INTERNET', 903),
('JUEVES', '06:00:00', '07:59:00', '403-SALA INTERNET', 903),
('MARTES', '18:00:00', '19:59:00', '403-SALA INTERNET', 904),
('JUEVES', '18:00:00', '19:59:00', '403-SALA INTERNET', 904);

-- SS601: Modelos y Simulación
INSERT INTO grupos (id, numero_grupo, modalidad, sede, docente, aula, estado, tiene_docente_asignado, tiene_recurso_fisico_asignado, materia_id, periodo_id) VALUES
(1001, '01-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'ANDRES RENE PERPIÑAN RTEYES', 'LAB TECH I', 'ACTIVO', TRUE, TRUE, 29, 1),
(1002, '02-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'ANDRES RENE PERPIÑAN RTEYES', 'LAB TECH I', 'ACTIVO', TRUE, TRUE, 29, 1),
(1003, '03-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'ANDRES RENE PERPIÑAN RTEYES', 'LAB TECH II', 'ACTIVO', TRUE, TRUE, 29, 1)
ON CONFLICT (materia_id, periodo_id, numero_grupo) DO NOTHING;

-- Sesiones SS601
INSERT INTO sesiones_clase (dia_semana, hora_inicio, hora_fin, aula, grupo_id) VALUES
('LUNES', '12:00:00', '13:59:00', 'LAB TECH I', 1001),
('MIERCOLES', '12:00:00', '13:59:00', 'LAB TECH I', 1001),
('MARTES', '12:00:00', '13:59:00', 'LAB TECH I', 1002),
('JUEVES', '12:00:00', '13:59:00', 'LAB TECH I', 1002),
('LUNES', '06:00:00', '07:59:00', 'LAB TECH II', 1003),
('MIERCOLES', '06:00:00', '07:59:00', 'LAB TECH II', 1003);

-- SS602: Ingeniería de Software II
INSERT INTO grupos (id, numero_grupo, modalidad, sede, docente, aula, estado, tiene_docente_asignado, tiene_recurso_fisico_asignado, materia_id, periodo_id) VALUES
(1101, '01-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'MARIBEL ROMERO MESTRE', '401-SALA INTERNET', 'ACTIVO', TRUE, TRUE, 30, 1),
(1102, '02-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'MARIBEL ROMERO MESTRE', '401-SALA INTERNET', 'ACTIVO', TRUE, TRUE, 30, 1),
(1103, '03-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'MARIBEL ROMERO MESTRE', '401-SALA INTERNET', 'ACTIVO', TRUE, TRUE, 30, 1),
(1104, '04-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'MARIBEL ROMERO MESTRE', '401-SALA INTERNET', 'ACTIVO', TRUE, TRUE, 30, 1)
ON CONFLICT (materia_id, periodo_id, numero_grupo) DO NOTHING;

-- Sesiones SS602
INSERT INTO sesiones_clase (dia_semana, hora_inicio, hora_fin, aula, grupo_id) VALUES
('LUNES', '14:00:00', '15:59:00', '401-SALA INTERNET', 1101),
('MIERCOLES', '14:00:00', '15:59:00', '401-SALA INTERNET', 1101),
('MARTES', '16:00:00', '17:59:00', '401-SALA INTERNET', 1102),
('JUEVES', '16:00:00', '17:59:00', '401-SALA INTERNET', 1102),
('MARTES', '08:00:00', '09:59:00', '401-SALA INTERNET', 1103),
('JUEVES', '08:00:00', '09:59:00', '401-SALA INTERNET', 1103),
('MARTES', '10:00:00', '11:59:00', '401-SALA INTERNET', 1104),
('JUEVES', '10:00:00', '11:59:00', '401-SALA INTERNET', 1104);

-- SS603: Programación Móvil
INSERT INTO grupos (id, numero_grupo, modalidad, sede, docente, aula, estado, tiene_docente_asignado, tiene_recurso_fisico_asignado, materia_id, periodo_id) VALUES
(1201, '01-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'RONALD ALEXANDER VACCA ASCANIO', '302-INFORMATICA', 'ACTIVO', TRUE, TRUE, 31, 1),
(1202, '02-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'RONALD ALEXANDER VACCA ASCANIO', '302-INFORMATICA', 'ACTIVO', TRUE, TRUE, 31, 1),
(1203, '03-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'RONALD ALEXANDER VACCA ASCANIO', '302-INFORMATICA', 'ACTIVO', TRUE, TRUE, 31, 1)
ON CONFLICT (materia_id, periodo_id, numero_grupo) DO NOTHING;

-- Sesiones SS603
INSERT INTO sesiones_clase (dia_semana, hora_inicio, hora_fin, aula, grupo_id) VALUES
('LUNES', '14:00:00', '15:59:00', '302-INFORMATICA', 1201),
('MIERCOLES', '14:00:00', '15:59:00', '302-INFORMATICA', 1201),
('MARTES', '08:00:00', '09:59:00', '302-INFORMATICA', 1202),
('JUEVES', '08:00:00', '09:59:00', '302-INFORMATICA', 1202),
('MARTES', '10:00:00', '11:59:00', '302-INFORMATICA', 1203),
('JUEVES', '10:00:00', '11:59:00', '302-INFORMATICA', 1203);

-- SS701: Redes y Comunicaciones
INSERT INTO grupos (id, numero_grupo, modalidad, sede, docente, aula, estado, tiene_docente_asignado, tiene_recurso_fisico_asignado, materia_id, periodo_id) VALUES
(1301, '01-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'WILLIAM ENRIQUE CASTRO CABARCAS', '404-SALA INTERNET', 'ACTIVO', TRUE, TRUE, 33, 1),
(1302, '02-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'WILLIAM ENRIQUE CASTRO CABARCAS', '403-SALA INTERNET', 'ACTIVO', TRUE, TRUE, 33, 1),
(1303, '03-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'PABLO ANDRES GUERRA GONZALEZ', '403-SALA INTERNET', 'ACTIVO', TRUE, TRUE, 33, 1)
ON CONFLICT (materia_id, periodo_id, numero_grupo) DO NOTHING;

-- Sesiones SS701
INSERT INTO sesiones_clase (dia_semana, hora_inicio, hora_fin, aula, grupo_id) VALUES
('LUNES', '08:00:00', '09:59:00', '404-SALA INTERNET', 1301),
('MIERCOLES', '08:00:00', '09:59:00', '404-SALA INTERNET', 1301),
('MARTES', '10:00:00', '11:59:00', '403-SALA INTERNET', 1302),
('JUEVES', '10:00:00', '11:59:00', '403-SALA INTERNET', 1302),
('LUNES', '18:00:00', '19:59:00', '403-SALA INTERNET', 1303),
('MIERCOLES', '18:00:00', '19:59:00', '403-SALA INTERNET', 1303);

-- SS702: Inteligencia Artificial
INSERT INTO grupos (id, numero_grupo, modalidad, sede, docente, aula, estado, tiene_docente_asignado, tiene_recurso_fisico_asignado, materia_id, periodo_id) VALUES
(1401, '01-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'TONNY ENRIQUE JIMENEZ MARQUEZ', '303-INFORMATICA', 'ACTIVO', TRUE, TRUE, 34, 1),
(1402, '02-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'TONNY ENRIQUE JIMENEZ MARQUEZ', '302-INFORMATICA', 'ACTIVO', TRUE, TRUE, 34, 1),
(1403, '03-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'TONNY ENRIQUE JIMENEZ MARQUEZ', '303-INFORMATICA', 'ACTIVO', TRUE, TRUE, 34, 1)
ON CONFLICT (materia_id, periodo_id, numero_grupo) DO NOTHING;

-- Sesiones SS702
INSERT INTO sesiones_clase (dia_semana, hora_inicio, hora_fin, aula, grupo_id) VALUES
('LUNES', '14:00:00', '15:59:00', '303-INFORMATICA', 1401),
('MIERCOLES', '14:00:00', '15:59:00', '303-INFORMATICA', 1401),
('MARTES', '14:00:00', '15:59:00', '302-INFORMATICA', 1402),
('JUEVES', '14:00:00', '15:59:00', '302-INFORMATICA', 1402),
('MARTES', '12:00:00', '13:59:00', '303-INFORMATICA', 1403),
('JUEVES', '12:00:00', '13:59:00', '303-INFORMATICA', 1403);

-- SS706: Ingeniería de Software III
INSERT INTO grupos (id, numero_grupo, modalidad, sede, docente, aula, estado, tiene_docente_asignado, tiene_recurso_fisico_asignado, materia_id, periodo_id) VALUES
(1501, '01-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'JUAN ANDRES YANETH RINCON', '402-SALA INTERNET', 'ACTIVO', TRUE, TRUE, 35, 1)
ON CONFLICT (materia_id, periodo_id, numero_grupo) DO NOTHING;

INSERT INTO sesiones_clase (dia_semana, hora_inicio, hora_fin, aula, grupo_id) VALUES
('MIERCOLES', '10:00:00', '11:59:00', '402-SALA INTERNET', 1501),
('VIERNES', '10:00:00', '11:59:00', '402-SALA INTERNET', 1501);

-- SS707: Tecnologías Inmersivas
INSERT INTO grupos (id, numero_grupo, modalidad, sede, docente, aula, estado, tiene_docente_asignado, tiene_recurso_fisico_asignado, materia_id, periodo_id) VALUES
(1601, '01-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'LUIS ALFREDO PEREZ PEREZ', 'LAB TECH I', 'ACTIVO', TRUE, TRUE, 36, 1)
ON CONFLICT (materia_id, periodo_id, numero_grupo) DO NOTHING;

INSERT INTO sesiones_clase (dia_semana, hora_inicio, hora_fin, aula, grupo_id) VALUES
('MARTES', '08:00:00', '09:59:00', 'LAB TECH I', 1601),
('JUEVES', '08:00:00', '09:59:00', 'LAB TECH I', 1601);

-- SS708: Research Project
INSERT INTO grupos (id, numero_grupo, modalidad, sede, docente, aula, estado, tiene_docente_asignado, tiene_recurso_fisico_asignado, materia_id, periodo_id) VALUES
(1701, '01-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'NELSON ANIBAL FELIZZOLA DELGADO', 'LAB TECH II', 'ACTIVO', TRUE, TRUE, 37, 1)
ON CONFLICT (materia_id, periodo_id, numero_grupo) DO NOTHING;

INSERT INTO sesiones_clase (dia_semana, hora_inicio, hora_fin, aula, grupo_id) VALUES
('MARTES', '18:00:00', '19:59:00', 'LAB TECH II', 1701);

-- SS802: Base de Datos Avanzadas
INSERT INTO grupos (id, numero_grupo, modalidad, sede, docente, aula, estado, tiene_docente_asignado, tiene_recurso_fisico_asignado, materia_id, periodo_id) VALUES
(1801, '01-VIRTUAL', 'VIRTUAL', 'CAMPUS', 'NDOC', 'NREF', 'ACTIVO', FALSE, FALSE, 39, 1),
(1802, '03-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'AMILKAR SIERRA ROMANO', 'LAB TECH I', 'ACTIVO', TRUE, TRUE, 39, 1)
ON CONFLICT (materia_id, periodo_id, numero_grupo) DO NOTHING;

INSERT INTO sesiones_clase (dia_semana, hora_inicio, hora_fin, aula, grupo_id) VALUES
('LUNES', '06:00:00', '07:59:00', 'NREF', 1801),
('MIERCOLES', '06:00:00', '07:59:00', 'NREF', 1801),
('LUNES', '10:00:00', '11:59:00', 'LAB TECH I', 1802),
('MIERCOLES', '10:00:00', '11:59:00', 'LAB TECH I', 1802);

-- SS806: Seguridad de la Información
INSERT INTO grupos (id, numero_grupo, modalidad, sede, docente, aula, estado, tiene_docente_asignado, tiene_recurso_fisico_asignado, materia_id, periodo_id) VALUES
(1901, '01-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'NDOC', 'NREF', 'ACTIVO', FALSE, FALSE, 40, 1)
ON CONFLICT (materia_id, periodo_id, numero_grupo) DO NOTHING;

INSERT INTO sesiones_clase (dia_semana, hora_inicio, hora_fin, aula, grupo_id) VALUES
('LUNES', '18:00:00', '19:59:00', 'NREF', 1901),
('MIERCOLES', '18:00:00', '19:59:00', 'NREF', 1901);

-- SS811: Ética Profesional
INSERT INTO grupos (id, numero_grupo, modalidad, sede, docente, aula, estado, tiene_docente_asignado, tiene_recurso_fisico_asignado, materia_id, periodo_id) VALUES
(2001, '01-VIRTUAL', 'VIRTUAL', 'CAMPUS', 'NDOC', 'NREF', 'ACTIVO', FALSE, FALSE, 41, 1)
ON CONFLICT (materia_id, periodo_id, numero_grupo) DO NOTHING;

INSERT INTO sesiones_clase (dia_semana, hora_inicio, hora_fin, aula, grupo_id) VALUES
('MIERCOLES', '12:00:00', '13:59:00', 'NREF', 2001);

-- SS812: Proyecto de Grado I
INSERT INTO grupos (id, numero_grupo, modalidad, sede, docente, aula, estado, tiene_docente_asignado, tiene_recurso_fisico_asignado, materia_id, periodo_id) VALUES
(2101, '01-CAMPUS', 'PRESENCIAL', 'CAMPUS', 'NDOC', 'NREF', 'ACTIVO', FALSE, FALSE, 42, 1)
ON CONFLICT (materia_id, periodo_id, numero_grupo) DO NOTHING;

INSERT INTO sesiones_clase (dia_semana, hora_inicio, hora_fin, aula, grupo_id) VALUES
('VIERNES', '06:00:00', '07:59:00', 'NREF', 2101);

-- Ajustar los contadores de secuencias de PostgreSQL
SELECT setval('usuarios_id_seq', (SELECT COALESCE(MAX(id), 1) FROM usuarios));
SELECT setval('programas_id_seq', (SELECT COALESCE(MAX(id), 1) FROM programas));
SELECT setval('periodos_academicos_id_seq', (SELECT COALESCE(MAX(id), 1) FROM periodos_academicos));
SELECT setval('materias_id_seq', (SELECT COALESCE(MAX(id), 1) FROM materias));
SELECT setval('grupos_id_seq', (SELECT COALESCE(MAX(id), 1) FROM grupos));
SELECT setval('sesiones_clase_id_seq', (SELECT COALESCE(MAX(id), 1) FROM sesiones_clase));
