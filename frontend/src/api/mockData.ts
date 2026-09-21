import { Group, Period, Program, Subject, UserPreference } from '../types';

export const MOCK_PROGRAMS: Program[] = [
  {
    id: 1,
    codigo: 'ING-SISTEMAS',
    nombre: 'Ingeniería de Sistemas',
    universidad: 'Universidad Popular del Cesar',
    activo: true,
  }
];

export const MOCK_PERIODS: Period[] = [
  {
    id: 1,
    nombre: '2026-2',
    fechaInicio: '2026-08-03',
    fechaFin: '2026-12-15',
    activo: true,
  }
];

// Pensum V-0402-IS-D-07 Oficial de Ingeniería de Sistemas UPC (9 Semestres)
// NOTA INSTITUCIONAL: El 1° Semestre se omite del planificador porque la UPC asigna horario cerrado.
export const MOCK_SUBJECTS: Subject[] = [
  {
    "id": 1,
    "codigo": "UPC08",
    "nombre": "Actividad Deportiva",
    "creditos": 1,
    "semestreSugerido": 2,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 24,
    "prerequisitos": [],
    "abre": []
  },
  {
    "id": 2,
    "codigo": "MT301B",
    "nombre": "Álgebra Lineal",
    "creditos": 3,
    "semestreSugerido": 2,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 10,
    "prerequisitos": [
      "MT117"
    ],
    "abre": [
      "MT403"
    ]
  },
  {
    "id": 3,
    "codigo": "MT303B",
    "nombre": "Cálculo Integral",
    "creditos": 3,
    "semestreSugerido": 2,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 16,
    "prerequisitos": [
      "MT104"
    ],
    "abre": [
      "MT331"
    ]
  },
  {
    "id": 4,
    "codigo": "PG200",
    "nombre": "Comunicación Oral y Escrita II",
    "creditos": 2,
    "semestreSugerido": 2,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 8,
    "prerequisitos": [
      "PG102"
    ],
    "abre": [
      "SS303"
    ]
  },
  {
    "id": 5,
    "codigo": "HM202",
    "nombre": "Humanidades II",
    "creditos": 2,
    "semestreSugerido": 2,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 13,
    "prerequisitos": [
      "HM201"
    ],
    "abre": []
  },
  {
    "id": 6,
    "codigo": "FS202",
    "nombre": "Mecánica",
    "creditos": 3,
    "semestreSugerido": 2,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 24,
    "prerequisitos": [
      "MT104"
    ],
    "abre": [
      "FS400"
    ]
  },
  {
    "id": 7,
    "codigo": "SS200",
    "nombre": "Programación de Computadores I",
    "creditos": 3,
    "semestreSugerido": 2,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 11,
    "prerequisitos": [
      "SS407"
    ],
    "abre": [
      "SS301",
      "SS300"
    ]
  },
  {
    "id": 8,
    "codigo": "ID212",
    "nombre": "Tech English I",
    "creditos": 1,
    "semestreSugerido": 2,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 9,
    "prerequisitos": [],
    "abre": [
      "ID341"
    ]
  },
  {
    "id": 9,
    "codigo": "UPC09",
    "nombre": "Actividad Cultural",
    "creditos": 1,
    "semestreSugerido": 3,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 34,
    "prerequisitos": [],
    "abre": []
  },
  {
    "id": 10,
    "codigo": "MT331",
    "nombre": "Cálculo Multivariable",
    "creditos": 3,
    "semestreSugerido": 3,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 8,
    "prerequisitos": [
      "MT303B"
    ],
    "abre": [
      "MT402"
    ]
  },
  {
    "id": 11,
    "codigo": "FS400",
    "nombre": "Electromagnetismo",
    "creditos": 3,
    "semestreSugerido": 3,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 12,
    "prerequisitos": [
      "FS202"
    ],
    "abre": [
      "FS329"
    ]
  },
  {
    "id": 12,
    "codigo": "MT403",
    "nombre": "Estadística Descriptiva e Inferencial",
    "creditos": 3,
    "semestreSugerido": 3,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 7,
    "prerequisitos": [
      "MT301B"
    ],
    "abre": [
      "AI432"
    ]
  },
  {
    "id": 13,
    "codigo": "SS301",
    "nombre": "Estructura de Datos",
    "creditos": 3,
    "semestreSugerido": 3,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 7,
    "prerequisitos": [
      "SS200"
    ],
    "abre": [
      "SS463"
    ]
  },
  {
    "id": 14,
    "codigo": "SS300",
    "nombre": "Programación de Computadores II",
    "creditos": 3,
    "semestreSugerido": 3,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 6,
    "prerequisitos": [
      "SS200"
    ],
    "abre": [
      "SS462"
    ]
  },
  {
    "id": 15,
    "codigo": "SS303",
    "nombre": "Semillero de Investigación",
    "creditos": 2,
    "semestreSugerido": 3,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 6,
    "prerequisitos": [
      "PG200"
    ],
    "abre": [
      "ING301"
    ]
  },
  {
    "id": 16,
    "codigo": "ID341",
    "nombre": "Tech English II",
    "creditos": 1,
    "semestreSugerido": 3,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 8,
    "prerequisitos": [
      "ID212"
    ],
    "abre": []
  },
  {
    "id": 17,
    "codigo": "ING301",
    "nombre": "Metodología de la Investigación",
    "creditos": 2,
    "semestreSugerido": 4,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 7,
    "prerequisitos": [
      "SS303"
    ],
    "abre": [
      "ING302"
    ]
  },
  {
    "id": 18,
    "codigo": "SS463",
    "nombre": "Base de Datos",
    "creditos": 3,
    "semestreSugerido": 4,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 8,
    "prerequisitos": [
      "SS301"
    ],
    "abre": [
      "SS802",
      "SS502"
    ]
  },
  {
    "id": 19,
    "codigo": "MT402",
    "nombre": "Ecuaciones Diferenciales",
    "creditos": 3,
    "semestreSugerido": 4,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 4,
    "prerequisitos": [
      "MT331"
    ],
    "abre": [
      "MT309B"
    ]
  },
  {
    "id": 20,
    "codigo": "SS705",
    "nombre": "Electiva Ciencias Admin Económicas y Contables",
    "creditos": 2,
    "semestreSugerido": 4,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 2,
    "prerequisitos": [],
    "abre": []
  },
  {
    "id": 21,
    "codigo": "AI432",
    "nombre": "Investigación de Operaciones",
    "creditos": 3,
    "semestreSugerido": 4,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 4,
    "prerequisitos": [
      "MT403"
    ],
    "abre": []
  },
  {
    "id": 22,
    "codigo": "FS329",
    "nombre": "Ondas",
    "creditos": 3,
    "semestreSugerido": 4,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 7,
    "prerequisitos": [
      "FS400"
    ],
    "abre": [
      "SS500"
    ]
  },
  {
    "id": 23,
    "codigo": "SS462",
    "nombre": "Programación de Computadores III",
    "creditos": 3,
    "semestreSugerido": 4,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 7,
    "prerequisitos": [
      "SS300"
    ],
    "abre": [
      "SS501"
    ]
  },
  {
    "id": 24,
    "codigo": "ING302",
    "nombre": "Seminario de Investigación",
    "creditos": 2,
    "semestreSugerido": 5,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 7,
    "prerequisitos": [
      "ING301"
    ],
    "abre": [
      "SS604"
    ]
  },
  {
    "id": 25,
    "codigo": "MT309B",
    "nombre": "Análisis Numérico",
    "creditos": 3,
    "semestreSugerido": 5,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 5,
    "prerequisitos": [
      "MT402"
    ],
    "abre": [
      "SS601"
    ]
  },
  {
    "id": 26,
    "codigo": "SS500",
    "nombre": "Arquitectura de Computadores",
    "creditos": 3,
    "semestreSugerido": 5,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 4,
    "prerequisitos": [
      "FS329"
    ],
    "abre": [
      "SS600"
    ]
  },
  {
    "id": 27,
    "codigo": "SS802",
    "nombre": "Base de Datos Avanzadas",
    "creditos": 3,
    "semestreSugerido": 5,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 5,
    "prerequisitos": [
      "SS463"
    ],
    "abre": []
  },
  {
    "id": 28,
    "codigo": "UPC23",
    "nombre": "Cátedra de la Paz",
    "creditos": 1,
    "semestreSugerido": 5,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 9,
    "prerequisitos": [],
    "abre": []
  },
  {
    "id": 29,
    "codigo": "SS502",
    "nombre": "Ingeniería de Software I",
    "creditos": 3,
    "semestreSugerido": 5,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 3,
    "prerequisitos": [
      "SS463"
    ],
    "abre": [
      "SS602"
    ]
  },
  {
    "id": 30,
    "codigo": "SS501",
    "nombre": "Programación Web",
    "creditos": 3,
    "semestreSugerido": 5,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 4,
    "prerequisitos": [
      "SS462"
    ],
    "abre": [
      "SS603"
    ]
  },
  {
    "id": 31,
    "codigo": "UPC25",
    "nombre": "Cátedra Ambiental y Desarrollo Sostenible",
    "creditos": 1,
    "semestreSugerido": 6,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 4,
    "prerequisitos": [],
    "abre": []
  },
  {
    "id": 32,
    "codigo": "SS602",
    "nombre": "Ingeniería de Software II",
    "creditos": 3,
    "semestreSugerido": 6,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 4,
    "prerequisitos": [
      "SS502"
    ],
    "abre": [
      "SS706"
    ]
  },
  {
    "id": 33,
    "codigo": "AI700",
    "nombre": "Ingeniería Económica",
    "creditos": 3,
    "semestreSugerido": 6,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 1,
    "prerequisitos": [],
    "abre": [
      "FC407"
    ]
  },
  {
    "id": 34,
    "codigo": "SS604",
    "nombre": "Innovación y Emprendimiento Tecnológico",
    "creditos": 2,
    "semestreSugerido": 6,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 2,
    "prerequisitos": [
      "ING302"
    ],
    "abre": [
      "SS708"
    ]
  },
  {
    "id": 35,
    "codigo": "SS601",
    "nombre": "Modelos y Simulación",
    "creditos": 3,
    "semestreSugerido": 6,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 3,
    "prerequisitos": [
      "MT309B"
    ],
    "abre": [
      "SS702"
    ]
  },
  {
    "id": 36,
    "codigo": "SS603",
    "nombre": "Programación Móvil",
    "creditos": 3,
    "semestreSugerido": 6,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 4,
    "prerequisitos": [
      "SS501"
    ],
    "abre": [
      "SS707"
    ]
  },
  {
    "id": 37,
    "codigo": "SS600",
    "nombre": "Sistemas Operativos",
    "creditos": 3,
    "semestreSugerido": 6,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 5,
    "prerequisitos": [
      "SS500"
    ],
    "abre": [
      "SS701"
    ]
  },
  {
    "id": 38,
    "codigo": "UPC24",
    "nombre": "Cátedra de Emprendimiento",
    "creditos": 1,
    "semestreSugerido": 7,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 5,
    "prerequisitos": [],
    "abre": []
  },
  {
    "id": 39,
    "codigo": "FC407",
    "nombre": "Formulación y Evalu de Proyec en Ingeniería",
    "creditos": 3,
    "semestreSugerido": 7,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 10,
    "prerequisitos": [
      "AI700"
    ],
    "abre": []
  },
  {
    "id": 40,
    "codigo": "SS706",
    "nombre": "Ingeniería de Software III",
    "creditos": 3,
    "semestreSugerido": 7,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 1,
    "prerequisitos": [
      "SS602"
    ],
    "abre": [
      "SS809"
    ]
  },
  {
    "id": 41,
    "codigo": "SS702",
    "nombre": "Inteligencia Artificial",
    "creditos": 3,
    "semestreSugerido": 7,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 3,
    "prerequisitos": [
      "SS601"
    ],
    "abre": []
  },
  {
    "id": 42,
    "codigo": "SS701",
    "nombre": "Redes y Comunicaciones",
    "creditos": 3,
    "semestreSugerido": 7,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 3,
    "prerequisitos": [
      "SS600"
    ],
    "abre": []
  },
  {
    "id": 43,
    "codigo": "SS708",
    "nombre": "Research Project",
    "creditos": 1,
    "semestreSugerido": 7,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 1,
    "prerequisitos": [
      "SS604"
    ],
    "abre": [
      "SS812"
    ]
  },
  {
    "id": 44,
    "codigo": "SS707",
    "nombre": "Tecnologías Inmersivas",
    "creditos": 3,
    "semestreSugerido": 7,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 1,
    "prerequisitos": [
      "SS603"
    ],
    "abre": []
  },
  {
    "id": 45,
    "codigo": "SS810",
    "nombre": "Electiva Básica de Ingeniería",
    "creditos": 2,
    "semestreSugerido": 8,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 2,
    "prerequisitos": [],
    "abre": []
  },
  {
    "id": 46,
    "codigo": "SS811",
    "nombre": "Ética Profesional",
    "creditos": 1,
    "semestreSugerido": 8,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 1,
    "prerequisitos": [],
    "abre": []
  },
  {
    "id": 47,
    "codigo": "SS809",
    "nombre": "Gestión de Proyectos TI",
    "creditos": 3,
    "semestreSugerido": 8,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 2,
    "prerequisitos": [
      "SS706"
    ],
    "abre": []
  },
  {
    "id": 48,
    "codigo": "SS807",
    "nombre": "Optativa de Profundización I",
    "creditos": 3,
    "semestreSugerido": 8,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 2,
    "prerequisitos": [],
    "abre": []
  },
  {
    "id": 49,
    "codigo": "SS808",
    "nombre": "Optativa de Profundización II",
    "creditos": 3,
    "semestreSugerido": 8,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 2,
    "prerequisitos": [],
    "abre": []
  },
  {
    "id": 50,
    "codigo": "SS812",
    "nombre": "Proyecto de Grado I",
    "creditos": 2,
    "semestreSugerido": 8,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 1,
    "prerequisitos": [
      "SS708"
    ],
    "abre": [
      "SS909"
    ]
  },
  {
    "id": 51,
    "codigo": "SS806",
    "nombre": "Seguridad de la Información",
    "creditos": 3,
    "semestreSugerido": 8,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 1,
    "prerequisitos": [],
    "abre": []
  },
  {
    "id": 52,
    "codigo": "SS906",
    "nombre": "Optativa de Profundización III",
    "creditos": 3,
    "semestreSugerido": 9,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 2,
    "prerequisitos": [],
    "abre": []
  },
  {
    "id": 53,
    "codigo": "SS907",
    "nombre": "Optativa de Profundización IV",
    "creditos": 3,
    "semestreSugerido": 9,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 2,
    "prerequisitos": [],
    "abre": []
  },
  {
    "id": 54,
    "codigo": "SS908",
    "nombre": "Optativa de Profundización V",
    "creditos": 3,
    "semestreSugerido": 9,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 2,
    "prerequisitos": [],
    "abre": []
  },
  {
    "id": 55,
    "codigo": "SS909",
    "nombre": "Trabajo de Grado II",
    "creditos": 4,
    "semestreSugerido": 9,
    "programaId": 1,
    "programaNombre": "Ingeniería de Sistemas",
    "activa": true,
    "cantidadGrupos": 1,
    "prerequisitos": [
      "SS812"
    ],
    "abre": []
  }
];

export const MOCK_GROUPS: Group[] = [
  {
    "id": 1001,
    "numeroGrupo": "",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "CESAR AUGUSTO PINEDA GALVIS",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 1,
    "materiaCodigo": "UPC08",
    "materiaNombre": "Actividad Deportiva",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "MARTES",
        "horaInicio": "15:00",
        "horaFin": "17:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "15:00",
        "horaFin": "16:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "SABADO",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "SABADO",
        "horaInicio": "09:00",
        "horaFin": "11:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1002,
    "numeroGrupo": "18-",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "KAREN MARCELA MEJIA PEÑUELA",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 1,
    "materiaCodigo": "UPC08",
    "materiaNombre": "Actividad Deportiva",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "15:00",
        "horaFin": "17:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1003,
    "numeroGrupo": "26-VOLEIBOL",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JOSE LUIS SANCHEZ HERNANDEZ",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 1,
    "materiaCodigo": "UPC08",
    "materiaNombre": "Actividad Deportiva",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "17:00",
        "horaFin": "19:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1004,
    "numeroGrupo": "15-FUTBOL",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JOSE DEL ROSARIO ARAMENDIZ MEJIA",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 1,
    "materiaCodigo": "UPC08",
    "materiaNombre": "Actividad Deportiva",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1005,
    "numeroGrupo": "27-FUTBOL",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ELKIS JOSE DE LA ROSA AGUILAR",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 1,
    "materiaCodigo": "UPC08",
    "materiaNombre": "Actividad Deportiva",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1006,
    "numeroGrupo": "34- BANCO (MAGDALENA)",
    "modalidad": "VIRTUAL",
    "sede": "SEDE_BANCO",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 1,
    "materiaCodigo": "UPC08",
    "materiaNombre": "Actividad Deportiva",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1007,
    "numeroGrupo": "22-RUGBY",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "CESAR AUGUSTO PINEDA GALVIS",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 1,
    "materiaCodigo": "UPC08",
    "materiaNombre": "Actividad Deportiva",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1008,
    "numeroGrupo": "16-FUTBOL",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JOSE IGNACIO VILARDY ARMENTA",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 1,
    "materiaCodigo": "UPC08",
    "materiaNombre": "Actividad Deportiva",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "15:00",
        "horaFin": "17:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1009,
    "numeroGrupo": "24-VOLEIBOL",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "LUIS HERNAN OSPINA ARIAS",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 1,
    "materiaCodigo": "UPC08",
    "materiaNombre": "Actividad Deportiva",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "09:00",
        "horaFin": "11:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1010,
    "numeroGrupo": "07-FUTBOL",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "INGRITH CAROLINA PAVAS ROMERO",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 1,
    "materiaCodigo": "UPC08",
    "materiaNombre": "Actividad Deportiva",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1011,
    "numeroGrupo": "28-VOLEIBOL",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "IVAN DAVID HERRERA OJITO",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 1,
    "materiaCodigo": "UPC08",
    "materiaNombre": "Actividad Deportiva",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1012,
    "numeroGrupo": "05-FUTBOL",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JOSE IGNACIO VILARDY ARMENTA",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 1,
    "materiaCodigo": "UPC08",
    "materiaNombre": "Actividad Deportiva",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "14:00",
        "horaFin": "16:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1013,
    "numeroGrupo": "11-FUTBOL",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "IVAN DAVID HERRERA OJITO",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 1,
    "materiaCodigo": "UPC08",
    "materiaNombre": "Actividad Deportiva",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "20:00",
        "horaFin": "21:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1014,
    "numeroGrupo": "06-FUTBOL",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JOSE IGNACIO VILARDY ARMENTA",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 1,
    "materiaCodigo": "UPC08",
    "materiaNombre": "Actividad Deportiva",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "14:00",
        "horaFin": "16:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1015,
    "numeroGrupo": "08-VOLEIBOL",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JOSE LUIS SANCHEZ HERNANDEZ",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 1,
    "materiaCodigo": "UPC08",
    "materiaNombre": "Actividad Deportiva",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "06:00",
        "horaFin": "08:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1016,
    "numeroGrupo": "29-VOLEIBOL",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "IVAN DAVID HERRERA OJITO",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 1,
    "materiaCodigo": "UPC08",
    "materiaNombre": "Actividad Deportiva",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "07:00",
        "horaFin": "08:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1017,
    "numeroGrupo": "33-PRIMER",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "CESAR AUGUSTO PINEDA GALVIS",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 1,
    "materiaCodigo": "UPC08",
    "materiaNombre": "Actividad Deportiva",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1018,
    "numeroGrupo": "20-FUTBOL",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "KAREN MARCELA MEJIA PEÑUELA",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 1,
    "materiaCodigo": "UPC08",
    "materiaNombre": "Actividad Deportiva",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "17:00",
        "horaFin": "19:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1019,
    "numeroGrupo": "25-VOLEIBOL",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JOSE LUIS SANCHEZ HERNANDEZ",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 1,
    "materiaCodigo": "UPC08",
    "materiaNombre": "Actividad Deportiva",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "06:00",
        "horaFin": "08:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1020,
    "numeroGrupo": "12-FUTBOL",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "IVAN DAVID HERRERA OJITO",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 1,
    "materiaCodigo": "UPC08",
    "materiaNombre": "Actividad Deportiva",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "17:00",
        "horaFin": "19:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1021,
    "numeroGrupo": "03-FUTBOL",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JOSE CARLOS SANCHEZ HERNANDEZ",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 1,
    "materiaCodigo": "UPC08",
    "materiaNombre": "Actividad Deportiva",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1022,
    "numeroGrupo": "09-VOLEIBOL",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JOSE DEL ROSARIO ARAMENDIZ MEJIA",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 1,
    "materiaCodigo": "UPC08",
    "materiaNombre": "Actividad Deportiva",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "06:00",
        "horaFin": "08:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1023,
    "numeroGrupo": "04-FUTBOL",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "KAREN MARCELA MEJIA PEÑUELA",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 1,
    "materiaCodigo": "UPC08",
    "materiaNombre": "Actividad Deportiva",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "06:00",
        "horaFin": "08:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1024,
    "numeroGrupo": "30-VOLEIBOL",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ELKIS JOSE DE LA ROSA AGUILAR",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 1,
    "materiaCodigo": "UPC08",
    "materiaNombre": "Actividad Deportiva",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1025,
    "numeroGrupo": "",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "MANUEL JULIAN REINA CUADRADO",
    "aula": "303-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 2,
    "materiaCodigo": "MT301B",
    "materiaNombre": "Álgebra Lineal",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "303-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "LUNES",
        "horaInicio": "06:00",
        "horaFin": "06:59",
        "aula": "402-BLQ C-CAMPUS"
      },
      {
        "diaSemana": "MARTES",
        "horaInicio": "16:00",
        "horaFin": "16:59",
        "aula": "302-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "MARTES",
        "horaInicio": "13:00",
        "horaFin": "13:59",
        "aula": "202-BLQ C-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "504-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "502-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "16:00",
        "horaFin": "16:59",
        "aula": "205-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "301-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "15:00",
        "horaFin": "15:59",
        "aula": "201-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1026,
    "numeroGrupo": "04-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ALCIDES SEGUNDO PAEZ SOTO",
    "aula": "104-BLQ C-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 2,
    "materiaCodigo": "MT301B",
    "materiaNombre": "Álgebra Lineal",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "104-BLQ C-CAMPUS"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "17:00",
        "horaFin": "17:59",
        "aula": "204-BLQ C-CAMPUS"
      }
    ]
  },
  {
    "id": 1027,
    "numeroGrupo": "10-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "MANUEL JULIAN REINA CUADRADO",
    "aula": "507-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 2,
    "materiaCodigo": "MT301B",
    "materiaNombre": "Álgebra Lineal",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "507-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "16:00",
        "horaFin": "16:59",
        "aula": "204-BLQ C-CAMPUS"
      }
    ]
  },
  {
    "id": 1028,
    "numeroGrupo": "15- BANCO",
    "modalidad": "VIRTUAL",
    "sede": "SEDE_BANCO",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 2,
    "materiaCodigo": "MT301B",
    "materiaNombre": "Álgebra Lineal",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1029,
    "numeroGrupo": "11-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JORGE ALFONSO GUTIERREZ SILVA",
    "aula": "207-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 2,
    "materiaCodigo": "MT301B",
    "materiaNombre": "Álgebra Lineal",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "207-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "09:00",
        "horaFin": "09:59",
        "aula": "505-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1030,
    "numeroGrupo": "06-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JOSE MANUEL MEJIA REALES",
    "aula": "302-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 2,
    "materiaCodigo": "MT301B",
    "materiaNombre": "Álgebra Lineal",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "302-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "14:00",
        "horaFin": "14:59",
        "aula": "101-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1031,
    "numeroGrupo": "01-AMBIENTAL",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "RICHARD ANDRES RAMIREZ MERCADO",
    "aula": "401-BLQ A-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 2,
    "materiaCodigo": "MT301B",
    "materiaNombre": "Álgebra Lineal",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "08:00",
        "horaFin": "08:59",
        "aula": "401-BLQ A-CAMPUS"
      }
    ]
  },
  {
    "id": 1032,
    "numeroGrupo": "14- PLATO",
    "modalidad": "VIRTUAL",
    "sede": "SEDE_PLATO",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 2,
    "materiaCodigo": "MT301B",
    "materiaNombre": "Álgebra Lineal",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "MARTES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1033,
    "numeroGrupo": "13-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JOHANNA PATRICIA INCIARTE LIZARAZO",
    "aula": "303-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 2,
    "materiaCodigo": "MT301B",
    "materiaNombre": "Álgebra Lineal",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "303-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "MARTES",
        "horaInicio": "18:00",
        "horaFin": "18:59",
        "aula": "204-BLQ A-CAMPUS"
      }
    ]
  },
  {
    "id": 1034,
    "numeroGrupo": "05-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "GILBERTO JOSE CUJIA ROMERO",
    "aula": "208-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 2,
    "materiaCodigo": "MT301B",
    "materiaNombre": "Álgebra Lineal",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "208-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "17:00",
        "horaFin": "17:59",
        "aula": "205-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1035,
    "numeroGrupo": "15-PLATO (MAGDALENA)",
    "modalidad": "VIRTUAL",
    "sede": "SEDE_PLATO",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 3,
    "materiaCodigo": "MT303B",
    "materiaNombre": "Cálculo Integral",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1036,
    "numeroGrupo": "02-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "EVER ENRIQUE DE LA HOZ MOLINARES",
    "aula": "102-BLQ C-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 3,
    "materiaCodigo": "MT303B",
    "materiaNombre": "Cálculo Integral",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "17:00",
        "horaFin": "17:59",
        "aula": "102-BLQ C-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "402-BLQ A-CAMPUS"
      }
    ]
  },
  {
    "id": 1037,
    "numeroGrupo": "11-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JAIME GUILLERMO BERMUDEZ SOSA",
    "aula": "404-BLQ A-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 3,
    "materiaCodigo": "MT303B",
    "materiaNombre": "Cálculo Integral",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "404-BLQ A-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1038,
    "numeroGrupo": "07-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "77169599",
    "aula": "303-BLQ A-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 3,
    "materiaCodigo": "MT303B",
    "materiaNombre": "Cálculo Integral",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "12:00",
        "horaFin": "12:59",
        "aula": "303-BLQ A-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "104-BLQ C-CAMPUS"
      }
    ]
  },
  {
    "id": 1039,
    "numeroGrupo": "16-BANCO (MAGDALENA)",
    "modalidad": "VIRTUAL",
    "sede": "SEDE_BANCO",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 3,
    "materiaCodigo": "MT303B",
    "materiaNombre": "Cálculo Integral",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1040,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "RICHARD ANDRES RAMIREZ MERCADO",
    "aula": "303-BLQ A-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 3,
    "materiaCodigo": "MT303B",
    "materiaNombre": "Cálculo Integral",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "06:00",
        "horaFin": "06:59",
        "aula": "303-BLQ A-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "202-BLQ C-CAMPUS"
      }
    ]
  },
  {
    "id": 1041,
    "numeroGrupo": "04-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "AILETH PAOLA ROJANO ESQUEA",
    "aula": "302-BLQ A-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 3,
    "materiaCodigo": "MT303B",
    "materiaNombre": "Cálculo Integral",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "10:00",
        "horaFin": "10:59",
        "aula": "302-BLQ A-CAMPUS"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "202-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1042,
    "numeroGrupo": "13-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "OVIDIO VILLA CELEDON",
    "aula": "303-BLQ E-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 3,
    "materiaCodigo": "MT303B",
    "materiaNombre": "Cálculo Integral",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "303-BLQ E-CAMPUS"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "302-BLQ E-CAMPUS"
      }
    ]
  },
  {
    "id": 1043,
    "numeroGrupo": "03-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "EVER ENRIQUE DE LA HOZ MOLINARES",
    "aula": "202-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 3,
    "materiaCodigo": "MT303B",
    "materiaNombre": "Cálculo Integral",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "202-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "16:00",
        "horaFin": "16:59",
        "aula": "201-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1044,
    "numeroGrupo": "12-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "DAVID ENRIQUE ARAGON PEÑA",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 3,
    "materiaCodigo": "MT303B",
    "materiaNombre": "Cálculo Integral",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1045,
    "numeroGrupo": "09-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "HEBERT ALBERTO DELGADO MIER",
    "aula": "302-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 3,
    "materiaCodigo": "MT303B",
    "materiaNombre": "Cálculo Integral",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "17:00",
        "horaFin": "17:59",
        "aula": "302-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "404-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1046,
    "numeroGrupo": "05-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "DAVID ENRIQUE ARAGON PEÑA",
    "aula": "405-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 3,
    "materiaCodigo": "MT303B",
    "materiaNombre": "Cálculo Integral",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "405-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "18:00",
        "horaFin": "18:59",
        "aula": "305-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1047,
    "numeroGrupo": "08-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "RALFIS RAFAEL CASSIANI SANTANA",
    "aula": "405-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 3,
    "materiaCodigo": "MT303B",
    "materiaNombre": "Cálculo Integral",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "08:00",
        "horaFin": "08:59",
        "aula": "405-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "402-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1048,
    "numeroGrupo": "14 -COPEY",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 3,
    "materiaCodigo": "MT303B",
    "materiaNombre": "Cálculo Integral",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "14:00",
        "horaFin": "17:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1049,
    "numeroGrupo": "10-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "RICHARD ANDRES RAMIREZ MERCADO",
    "aula": "204-BLQ A-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 3,
    "materiaCodigo": "MT303B",
    "materiaNombre": "Cálculo Integral",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "09:00",
        "horaFin": "11:59",
        "aula": "204-BLQ A-CAMPUS"
      }
    ]
  },
  {
    "id": 1050,
    "numeroGrupo": "06-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JOSE ANGEL MENDINUETA ALFARO",
    "aula": "202-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 3,
    "materiaCodigo": "MT303B",
    "materiaNombre": "Cálculo Integral",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "13:00",
        "horaFin": "15:59",
        "aula": "202-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1051,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "BEANNY JOYDETH ALVAREZ ROMERO",
    "aula": "207-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 4,
    "materiaCodigo": "PG200",
    "materiaNombre": "Comunicación Oral y Escrita II",
    "materiaCreditos": 2,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "207-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1052,
    "numeroGrupo": "04-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "YULIBETH ROMERO ESCORCIA",
    "aula": "408-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 4,
    "materiaCodigo": "PG200",
    "materiaNombre": "Comunicación Oral y Escrita II",
    "materiaCreditos": 2,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "408-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1053,
    "numeroGrupo": "07- BANCO ING SISTEMAS",
    "modalidad": "VIRTUAL",
    "sede": "SEDE_BANCO",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 4,
    "materiaCodigo": "PG200",
    "materiaNombre": "Comunicación Oral y Escrita II",
    "materiaCreditos": 2,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1054,
    "numeroGrupo": "05-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JHONATAN STEVEN CASTRO MOLINA",
    "aula": "204-BLQ C-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 4,
    "materiaCodigo": "PG200",
    "materiaNombre": "Comunicación Oral y Escrita II",
    "materiaCreditos": 2,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "204-BLQ C-CAMPUS"
      }
    ]
  },
  {
    "id": 1055,
    "numeroGrupo": "08- PLATO ING SISTEMAS",
    "modalidad": "VIRTUAL",
    "sede": "SEDE_PLATO",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 4,
    "materiaCodigo": "PG200",
    "materiaNombre": "Comunicación Oral y Escrita II",
    "materiaCreditos": 2,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1056,
    "numeroGrupo": "03-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "HEBER DIAZ OSPINO",
    "aula": "407-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 4,
    "materiaCodigo": "PG200",
    "materiaNombre": "Comunicación Oral y Escrita II",
    "materiaCreditos": 2,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "407-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1057,
    "numeroGrupo": "06-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "LUZ DARYS CLAVIJO MORA",
    "aula": "403-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 4,
    "materiaCodigo": "PG200",
    "materiaNombre": "Comunicación Oral y Escrita II",
    "materiaCreditos": 2,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "15:00",
        "horaFin": "16:59",
        "aula": "403-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1058,
    "numeroGrupo": "02- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "BEANNY JOYDETH ALVAREZ ROMERO",
    "aula": "302-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 4,
    "materiaCodigo": "PG200",
    "materiaNombre": "Comunicación Oral y Escrita II",
    "materiaCreditos": 2,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "302-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1059,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JAIRO ANTONIO GUEVARA GOMEZ",
    "aula": "201-BLQ A-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 5,
    "materiaCodigo": "HM202",
    "materiaNombre": "Humanidades II",
    "materiaCreditos": 2,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "201-BLQ A-CAMPUS"
      }
    ]
  },
  {
    "id": 1060,
    "numeroGrupo": "06-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "LUIS FELIPE LAGOS BELLO",
    "aula": "202-BLQ E-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 5,
    "materiaCodigo": "HM202",
    "materiaNombre": "Humanidades II",
    "materiaCreditos": 2,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "202-BLQ E-CAMPUS"
      }
    ]
  },
  {
    "id": 1061,
    "numeroGrupo": "10-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "SANDY MARCELA BARROS CORPAS",
    "aula": "306-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 5,
    "materiaCodigo": "HM202",
    "materiaNombre": "Humanidades II",
    "materiaCreditos": 2,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "306-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1062,
    "numeroGrupo": "05-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "SANDY MARCELA BARROS CORPAS",
    "aula": "101-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 5,
    "materiaCodigo": "HM202",
    "materiaNombre": "Humanidades II",
    "materiaCreditos": 2,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "101-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1063,
    "numeroGrupo": "03-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JAIRO ANTONIO GUEVARA GOMEZ",
    "aula": "202-BLQ A-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 5,
    "materiaCodigo": "HM202",
    "materiaNombre": "Humanidades II",
    "materiaCreditos": 2,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "202-BLQ A-CAMPUS"
      }
    ]
  },
  {
    "id": 1064,
    "numeroGrupo": "09-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JOSE OMAR VARELA HERRERA",
    "aula": "303-BLQ A-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 5,
    "materiaCodigo": "HM202",
    "materiaNombre": "Humanidades II",
    "materiaCreditos": 2,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "20:00",
        "horaFin": "21:59",
        "aula": "303-BLQ A-CAMPUS"
      }
    ]
  },
  {
    "id": 1065,
    "numeroGrupo": "12- PLATO ING SISTEMAS",
    "modalidad": "VIRTUAL",
    "sede": "SEDE_PLATO",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 5,
    "materiaCodigo": "HM202",
    "materiaNombre": "Humanidades II",
    "materiaCreditos": 2,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1066,
    "numeroGrupo": "13- BANCO ING SISTEMAS",
    "modalidad": "VIRTUAL",
    "sede": "SEDE_BANCO",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 5,
    "materiaCodigo": "HM202",
    "materiaNombre": "Humanidades II",
    "materiaCreditos": 2,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1067,
    "numeroGrupo": "07-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JULIO MANUEL OLIVARES MARTINEZ",
    "aula": "201-BLQ E-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 5,
    "materiaCodigo": "HM202",
    "materiaNombre": "Humanidades II",
    "materiaCreditos": 2,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "201-BLQ E-CAMPUS"
      }
    ]
  },
  {
    "id": 1068,
    "numeroGrupo": "",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 5,
    "materiaCodigo": "HM202",
    "materiaNombre": "Humanidades II",
    "materiaCreditos": 2,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1069,
    "numeroGrupo": "02-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "DIANIS ESTHER MARCHENA CABARCAS",
    "aula": "201-BLQ A-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 5,
    "materiaCodigo": "HM202",
    "materiaNombre": "Humanidades II",
    "materiaCreditos": 2,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "201-BLQ A-CAMPUS"
      }
    ]
  },
  {
    "id": 1070,
    "numeroGrupo": "08-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "LUIS FELIPE LAGOS BELLO",
    "aula": "301-BLQ A-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 5,
    "materiaCodigo": "HM202",
    "materiaNombre": "Humanidades II",
    "materiaCreditos": 2,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "301-BLQ A-CAMPUS"
      }
    ]
  },
  {
    "id": 1071,
    "numeroGrupo": "04-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JAIRO ANTONIO GUEVARA GOMEZ",
    "aula": "202-BLQ A-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 5,
    "materiaCodigo": "HM202",
    "materiaNombre": "Humanidades II",
    "materiaCreditos": 2,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "202-BLQ A-CAMPUS"
      }
    ]
  },
  {
    "id": 1072,
    "numeroGrupo": "05-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "HUGO ALBERTO PEREIRA MARTINEZ",
    "aula": "P1-01-CAMPUS LAB",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 6,
    "materiaCodigo": "FS202",
    "materiaNombre": "Mecánica",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "P1-01-CAMPUS LAB"
      },
      {
        "diaSemana": "MARTES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "204-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "204-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1073,
    "numeroGrupo": "13-VIRTUAL",
    "modalidad": "VIRTUAL",
    "sede": "CAMPUS",
    "docente": "EDGAR DAVID PEDUZINE OROZCO",
    "aula": "507-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 6,
    "materiaCodigo": "FS202",
    "materiaNombre": "Mecánica",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "507-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "P1-01-CAMPUS LAB FIS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "205-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1074,
    "numeroGrupo": "09-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "CESAR AUGUSTO TELLEZ SOLANO",
    "aula": "402-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 6,
    "materiaCodigo": "FS202",
    "materiaNombre": "Mecánica",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "402-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "P1-01-CAMPUS LAB FIS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "402-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1075,
    "numeroGrupo": "14-VIRTUAL",
    "modalidad": "VIRTUAL",
    "sede": "CAMPUS",
    "docente": "EDGAR DAVID PEDUZINE OROZCO",
    "aula": "507-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 6,
    "materiaCodigo": "FS202",
    "materiaNombre": "Mecánica",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "507-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "205-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "MARTES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "P1-02-CAMPUS LAB"
      }
    ]
  },
  {
    "id": 1076,
    "numeroGrupo": "23-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "CAMILA ANDREA NOREÑA JULIO",
    "aula": "205-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 6,
    "materiaCodigo": "FS202",
    "materiaNombre": "Mecánica",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "09:00",
        "horaFin": "10:59",
        "aula": "205-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "405-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "P1-01-CAMPUS LAB"
      }
    ]
  },
  {
    "id": 1077,
    "numeroGrupo": "11-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "DIVA JIMENEZ CORZO",
    "aula": "P1-01-CAMPUS LAB",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 6,
    "materiaCodigo": "FS202",
    "materiaNombre": "Mecánica",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "P1-01-CAMPUS LAB"
      },
      {
        "diaSemana": "MARTES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "401-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "402-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1078,
    "numeroGrupo": "10-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "CESAR AUGUSTO TELLEZ SOLANO",
    "aula": "402-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 6,
    "materiaCodigo": "FS202",
    "materiaNombre": "Mecánica",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "402-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "P1-03-CAMPUS LAB"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "402-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1079,
    "numeroGrupo": "22-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "CAMILA ANDREA NOREÑA JULIO",
    "aula": "205-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 6,
    "materiaCodigo": "FS202",
    "materiaNombre": "Mecánica",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "09:00",
        "horaFin": "10:59",
        "aula": "205-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "405-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1080,
    "numeroGrupo": "07-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "CESAR AUGUSTO TELLEZ SOLANO",
    "aula": "302-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 6,
    "materiaCodigo": "FS202",
    "materiaNombre": "Mecánica",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "302-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "MARTES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "P1-01-CAMPUS LAB"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "204-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1081,
    "numeroGrupo": "18-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "OSNAIDER ROCHA ROCHA",
    "aula": "301-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 6,
    "materiaCodigo": "FS202",
    "materiaNombre": "Mecánica",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "301-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "401-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "P1-02-CAMPUS LAB"
      }
    ]
  },
  {
    "id": 1082,
    "numeroGrupo": "06-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "HUGO ALBERTO PEREIRA MARTINEZ",
    "aula": "204-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 6,
    "materiaCodigo": "FS202",
    "materiaNombre": "Mecánica",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "204-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "204-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "P1-01-CAMPUS LAB"
      }
    ]
  },
  {
    "id": 1083,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "EDWIN SMITH RIVERA FERNANDEZ",
    "aula": "P1-01-CAMPUS LAB",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 6,
    "materiaCodigo": "FS202",
    "materiaNombre": "Mecánica",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "P1-01-CAMPUS LAB"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "204-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "LUNES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "204-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1084,
    "numeroGrupo": "17-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "OSNAIDER ROCHA ROCHA",
    "aula": "301-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 6,
    "materiaCodigo": "FS202",
    "materiaNombre": "Mecánica",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "301-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "P1-02-CAMPUS LAB FIS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "401-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1085,
    "numeroGrupo": "24-PLATO (MAGDALENA)",
    "modalidad": "VIRTUAL",
    "sede": "SEDE_PLATO",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 6,
    "materiaCodigo": "FS202",
    "materiaNombre": "Mecánica",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1086,
    "numeroGrupo": "03-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JESUS DANIEL AMADOR MARTINEZ",
    "aula": "202-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 6,
    "materiaCodigo": "FS202",
    "materiaNombre": "Mecánica",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "202-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "202-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "LUNES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "P1-01-CAMPUS LAB"
      }
    ]
  },
  {
    "id": 1087,
    "numeroGrupo": "19-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "HUGO ALBERTO PEREIRA MARTINEZ",
    "aula": "P1-03-CAMPUS LAB FIS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 6,
    "materiaCodigo": "FS202",
    "materiaNombre": "Mecánica",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "P1-03-CAMPUS LAB FIS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "403-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "LUNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "401-BLQ C-CAMPUS"
      }
    ]
  },
  {
    "id": 1088,
    "numeroGrupo": "02-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "EDWIN SMITH RIVERA FERNANDEZ",
    "aula": "204-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 6,
    "materiaCodigo": "FS202",
    "materiaNombre": "Mecánica",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "204-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "LUNES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "204-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "P1-01-CAMPUS LAB"
      }
    ]
  },
  {
    "id": 1089,
    "numeroGrupo": "08-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "CESAR AUGUSTO TELLEZ SOLANO",
    "aula": "P1-01-CAMPUS LAB",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 6,
    "materiaCodigo": "FS202",
    "materiaNombre": "Mecánica",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "P1-01-CAMPUS LAB"
      },
      {
        "diaSemana": "LUNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "302-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "204-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1090,
    "numeroGrupo": "15 CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JESUS DANIEL AMADOR MARTINEZ",
    "aula": "P1-01-CAMPUS LAB",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 6,
    "materiaCodigo": "FS202",
    "materiaNombre": "Mecánica",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "P1-01-CAMPUS LAB"
      },
      {
        "diaSemana": "SABADO",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "P1-02-CAMPUS LAB"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "P1-01-CAMPUS LAB"
      }
    ]
  },
  {
    "id": 1091,
    "numeroGrupo": "04-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JESUS DANIEL AMADOR MARTINEZ",
    "aula": "P1-01-CAMPUS LAB",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 6,
    "materiaCodigo": "FS202",
    "materiaNombre": "Mecánica",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "P1-01-CAMPUS LAB"
      },
      {
        "diaSemana": "MARTES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "202-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "202-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1092,
    "numeroGrupo": "12-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "DIVA JIMENEZ CORZO",
    "aula": "P1-03-CAMPUS LAB",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 6,
    "materiaCodigo": "FS202",
    "materiaNombre": "Mecánica",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "P1-03-CAMPUS LAB"
      },
      {
        "diaSemana": "MARTES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "401-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "402-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1093,
    "numeroGrupo": "21-COPEY",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 6,
    "materiaCodigo": "FS202",
    "materiaNombre": "Mecánica",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1094,
    "numeroGrupo": "20-COPEY",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 6,
    "materiaCodigo": "FS202",
    "materiaNombre": "Mecánica",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "08:00",
        "horaFin": "13:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1095,
    "numeroGrupo": "25-BANCO (MAGDALENA)",
    "modalidad": "VIRTUAL",
    "sede": "SEDE_BANCO",
    "docente": "JHON DENYLSON ESPINOSA MONSALVO",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 6,
    "materiaCodigo": "FS202",
    "materiaNombre": "Mecánica",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "MARTES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1096,
    "numeroGrupo": "03- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "CARLOS EMILIANO OÑATE GOMEZ",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 7,
    "materiaCodigo": "SS200",
    "materiaNombre": "Programación de Computadores I",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1097,
    "numeroGrupo": "09-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "SADAINER FERNEY HERNANDEZ CHACON",
    "aula": "402-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 7,
    "materiaCodigo": "SS200",
    "materiaNombre": "Programación de Computadores I",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "402-SALA INTERNET"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "402-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1098,
    "numeroGrupo": "06-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "EDWARD FABIAN MENDOZA USTARIZ",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 7,
    "materiaCodigo": "SS200",
    "materiaNombre": "Programación de Computadores I",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1099,
    "numeroGrupo": "08-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "EDWARD FABIAN MENDOZA USTARIZ",
    "aula": "401-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 7,
    "materiaCodigo": "SS200",
    "materiaNombre": "Programación de Computadores I",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "401-SALA INTERNET"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "401-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1100,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "CARLOS EMILIANO OÑATE GOMEZ",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 7,
    "materiaCodigo": "SS200",
    "materiaNombre": "Programación de Computadores I",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1101,
    "numeroGrupo": "07-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "SADAINER FERNEY HERNANDEZ CHACON",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 7,
    "materiaCodigo": "SS200",
    "materiaNombre": "Programación de Computadores I",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1102,
    "numeroGrupo": "04-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "BRAULIO BARRIOS ZUÑIGA",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 7,
    "materiaCodigo": "SS200",
    "materiaNombre": "Programación de Computadores I",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1103,
    "numeroGrupo": "05-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "BRAULIO BARRIOS ZUÑIGA",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 7,
    "materiaCodigo": "SS200",
    "materiaNombre": "Programación de Computadores I",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1104,
    "numeroGrupo": "02- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "CARLOS EMILIANO OÑATE GOMEZ",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 7,
    "materiaCodigo": "SS200",
    "materiaNombre": "Programación de Computadores I",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1105,
    "numeroGrupo": "10-BANCO ING SISTEMAS",
    "modalidad": "VIRTUAL",
    "sede": "SEDE_BANCO",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 7,
    "materiaCodigo": "SS200",
    "materiaNombre": "Programación de Computadores I",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1106,
    "numeroGrupo": "11-PLATO ING SISTEMAS",
    "modalidad": "VIRTUAL",
    "sede": "SEDE_PLATO",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 7,
    "materiaCodigo": "SS200",
    "materiaNombre": "Programación de Computadores I",
    "materiaCreditos": 3,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1107,
    "numeroGrupo": "06-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ELIANA ROCIO CORTES ROZO",
    "aula": "204-BLQ E-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 8,
    "materiaCodigo": "ID212",
    "materiaNombre": "Tech English I",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "204-BLQ E-CAMPUS"
      }
    ]
  },
  {
    "id": 1108,
    "numeroGrupo": "07-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ELIANA ROCIO CORTES ROZO",
    "aula": "201-BLQ C-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 8,
    "materiaCodigo": "ID212",
    "materiaNombre": "Tech English I",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "201-BLQ C-CAMPUS"
      }
    ]
  },
  {
    "id": 1109,
    "numeroGrupo": "03-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "GABRIEL EDUARDO VASQUEZ PEREZ",
    "aula": "201D-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 8,
    "materiaCodigo": "ID212",
    "materiaNombre": "Tech English I",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "201D-CAMPUS"
      }
    ]
  },
  {
    "id": 1110,
    "numeroGrupo": "05-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "GABRIEL EDUARDO VASQUEZ PEREZ",
    "aula": "304-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 8,
    "materiaCodigo": "ID212",
    "materiaNombre": "Tech English I",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "304-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1111,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ELIANA ROCIO CORTES ROZO",
    "aula": "202-BLQ E-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 8,
    "materiaCodigo": "ID212",
    "materiaNombre": "Tech English I",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "202-BLQ E-CAMPUS"
      }
    ]
  },
  {
    "id": 1112,
    "numeroGrupo": "10-VIRTUAL",
    "modalidad": "VIRTUAL",
    "sede": "CAMPUS",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 8,
    "materiaCodigo": "ID212",
    "materiaNombre": "Tech English I",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1113,
    "numeroGrupo": "9-VIRTUAL",
    "modalidad": "VIRTUAL",
    "sede": "CAMPUS",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 8,
    "materiaCodigo": "ID212",
    "materiaNombre": "Tech English I",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1114,
    "numeroGrupo": "04-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "GABRIEL EDUARDO VASQUEZ PEREZ",
    "aula": "408-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 8,
    "materiaCodigo": "ID212",
    "materiaNombre": "Tech English I",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "408-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1115,
    "numeroGrupo": "08-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ELKIN YAMIT CONTRERAS SILVA",
    "aula": "301-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 8,
    "materiaCodigo": "ID212",
    "materiaNombre": "Tech English I",
    "materiaCreditos": 1,
    "semestreSugerido": 2,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "301-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1116,
    "numeroGrupo": "35-MUSICA",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ALBERTO ALONSO OROZCO GONZALEZ",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1117,
    "numeroGrupo": "01-DIBUJO",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JULIO CESAR DAZA DAZA",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1118,
    "numeroGrupo": "34-MUSICA",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JUAN GABRIEL DE LA ROSA LOPEZ",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1119,
    "numeroGrupo": "23-DANZAS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "OLGER RAFAEL BAENA MEJIA",
    "aula": "16- LAB. DE DANZA",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "16- LAB. DE DANZA"
      }
    ]
  },
  {
    "id": 1120,
    "numeroGrupo": "31-MUSICA",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JOSE RICARDO VILLAFAÑE ALVAREZ",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1121,
    "numeroGrupo": "02-DIBUJO",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JULIO CESAR DAZA DAZA",
    "aula": "15- LAB. DE DIBUJO",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "15- LAB. DE DIBUJO"
      }
    ]
  },
  {
    "id": 1122,
    "numeroGrupo": "07-DIBUJO",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JUAN MANUEL RUBIO DANGOND",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1123,
    "numeroGrupo": "17-DIBUJO",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JULIO CESAR DAZA DAZA",
    "aula": "15- LAB. DE DIBUJO",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "15- LAB. DE DIBUJO"
      }
    ]
  },
  {
    "id": 1124,
    "numeroGrupo": "66-LENGUAJE",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "AXELL RICARDO VERGEL BAQUERO",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1125,
    "numeroGrupo": "65-LENGUAJE",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "AXELL RICARDO VERGEL BAQUERO",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1126,
    "numeroGrupo": "",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JAEEL ADRIANA OTERO MUÑOZ",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "SABADO",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "SABADO",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "LUNES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1127,
    "numeroGrupo": "36-MUSICA",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ALAN LUIS ANDRADE ZABALETA",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1128,
    "numeroGrupo": "50-CERAMICA",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "OMAIRA MARIA ROMERO OSPINO",
    "aula": "14- LAB. DE CERAMICA",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "14- LAB. DE CERAMICA"
      }
    ]
  },
  {
    "id": 1129,
    "numeroGrupo": "38-MUSICA",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JOSE RICARDO VILLAFAÑE ALVAREZ",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1130,
    "numeroGrupo": "62-NARRACIÓN",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "DONALD XAVIER HERRERA MIEL",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1131,
    "numeroGrupo": "51-",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "OMAIRA MARIA ROMERO OSPINO",
    "aula": "14- LAB. DE",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "14- LAB. DE"
      }
    ]
  },
  {
    "id": 1132,
    "numeroGrupo": "45-TEATRO",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "NAUDITH RODRIGUEZ MORENO",
    "aula": "17- LAB. DE TEATRO",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "17- LAB. DE TEATRO"
      }
    ]
  },
  {
    "id": 1133,
    "numeroGrupo": "12-DIBUJO",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JULIO CESAR DAZA DAZA",
    "aula": "15- LAB. DE DIBUJO",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "15- LAB. DE DIBUJO"
      }
    ]
  },
  {
    "id": 1134,
    "numeroGrupo": "13-DIBUJO",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JULIO CESAR DAZA DAZA",
    "aula": "15- LAB. DE DIBUJO",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "15- LAB. DE DIBUJO"
      }
    ]
  },
  {
    "id": 1135,
    "numeroGrupo": "32-MUSICA",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "DONALD XAVIER HERRERA MIEL",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1136,
    "numeroGrupo": "03-DIBUJO",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JHON DAVID MAESTRE MENDEZ",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1137,
    "numeroGrupo": "08-DIBUJO",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JULIO CESAR DAZA DAZA",
    "aula": "15- LAB. DE DIBUJO",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "15- LAB. DE DIBUJO"
      }
    ]
  },
  {
    "id": 1138,
    "numeroGrupo": "21-PINTURA",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ALVARO ALONSO BOLIVAR OCHOA",
    "aula": "14- LAB. DE",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "14- LAB. DE"
      }
    ]
  },
  {
    "id": 1139,
    "numeroGrupo": "20-PINTURA",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ALVARO ALONSO BOLIVAR OCHOA",
    "aula": "14- LAB. DE",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "14- LAB. DE"
      }
    ]
  },
  {
    "id": 1140,
    "numeroGrupo": "10-DIBUJO",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "GEANNINA TORRES VILORIA",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1141,
    "numeroGrupo": "22- DANZAS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "VICTOR LEONARDO JIMENEZ RODRIGUEZ",
    "aula": "16- LAB. DE DANZA",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "16- LAB. DE DANZA"
      }
    ]
  },
  {
    "id": 1142,
    "numeroGrupo": "42-TEATRO",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JHONATAN LUIS YERENA RINCONES",
    "aula": "17- LAB. DE TEATRO",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "20:00",
        "horaFin": "21:59",
        "aula": "17- LAB. DE TEATRO"
      }
    ]
  },
  {
    "id": 1143,
    "numeroGrupo": "41-TEATRO",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "CLAUDETTE AMINTA DIAZ ZULETA",
    "aula": "17- LAB. DE TEATRO",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "17- LAB. DE TEATRO"
      }
    ]
  },
  {
    "id": 1144,
    "numeroGrupo": "16-DIBUJO",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "GEANNINA TORRES VILORIA",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1145,
    "numeroGrupo": "67-LENGUAJE",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "AXELL RICARDO VERGEL BAQUERO",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1146,
    "numeroGrupo": "15-DIBUJO",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ALVARO ALONSO BOLIVAR OCHOA",
    "aula": "15- LAB. DE DIBUJO",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "15- LAB. DE DIBUJO"
      }
    ]
  },
  {
    "id": 1147,
    "numeroGrupo": "05-DIBUJO",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JOSE ANIBAL MOYA DAZA",
    "aula": "15- LAB. DE DIBUJO",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "15- LAB. DE DIBUJO"
      }
    ]
  },
  {
    "id": 1148,
    "numeroGrupo": "18-DIBUJO",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "GEANNINA TORRES VILORIA",
    "aula": "15- LAB. DE DIBUJO",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "15- LAB. DE DIBUJO"
      }
    ]
  },
  {
    "id": 1149,
    "numeroGrupo": "11-DIBUJO",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "DONALD XAVIER HERRERA MIEL",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 9,
    "materiaCodigo": "UPC09",
    "materiaNombre": "Actividad Cultural",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1150,
    "numeroGrupo": "07-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "RAFAEL ARTURO FRAGOZO RUIZ",
    "aula": "302-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 10,
    "materiaCodigo": "MT331",
    "materiaNombre": "Cálculo Multivariable",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "302-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "505-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1151,
    "numeroGrupo": "05-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "CARLOS CARLOS MOSCOTE FUENTES",
    "aula": "402-BLQ A-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 10,
    "materiaCodigo": "MT331",
    "materiaNombre": "Cálculo Multivariable",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "402-BLQ A-CAMPUS"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "401-BLQ A-CAMPUS"
      }
    ]
  },
  {
    "id": 1152,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "DANIEL DAVID MEZA PAYARES",
    "aula": "102-BLQ C-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 10,
    "materiaCodigo": "MT331",
    "materiaNombre": "Cálculo Multivariable",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "102-BLQ C-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "102-BLQ C-CAMPUS"
      }
    ]
  },
  {
    "id": 1153,
    "numeroGrupo": "08-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "DAVID ENRIQUE ARAGON PEÑA",
    "aula": "304-BLQ A-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 10,
    "materiaCodigo": "MT331",
    "materiaNombre": "Cálculo Multivariable",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "304-BLQ A-CAMPUS"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "19:00",
        "horaFin": "20:59",
        "aula": "303-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1154,
    "numeroGrupo": "03-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "MANUEL JULIAN REINA CUADRADO",
    "aula": "301-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 10,
    "materiaCodigo": "MT331",
    "materiaNombre": "Cálculo Multivariable",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "301-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "204-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1155,
    "numeroGrupo": "02-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JHONYS ENRIQUE BOLAÑO OSPINO",
    "aula": "404-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 10,
    "materiaCodigo": "MT331",
    "materiaNombre": "Cálculo Multivariable",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "404-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "406-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1156,
    "numeroGrupo": "06-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "LACIDES ALFONSO BALETA PALOMINO",
    "aula": "101-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 10,
    "materiaCodigo": "MT331",
    "materiaNombre": "Cálculo Multivariable",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "101-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "202-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1157,
    "numeroGrupo": "04-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "77169599",
    "aula": "301-BLQ A-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 10,
    "materiaCodigo": "MT331",
    "materiaNombre": "Cálculo Multivariable",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "301-BLQ A-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "401-BLQ A-CAMPUS"
      }
    ]
  },
  {
    "id": 1158,
    "numeroGrupo": "07-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "FRANKLIN ANTONIO MORA MAESTRE",
    "aula": "501-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 11,
    "materiaCodigo": "FS400",
    "materiaNombre": "Electromagnetismo",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "501-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "P1-02-CAMPUS LAB FIS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "302-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1159,
    "numeroGrupo": "02-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "DANIELA TELLEZ DIAZ",
    "aula": "304-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 11,
    "materiaCodigo": "FS400",
    "materiaNombre": "Electromagnetismo",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "304-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "203-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "P1-02-CAMPUS LAB"
      }
    ]
  },
  {
    "id": 1160,
    "numeroGrupo": "12-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "RODIAN ENRIQUE TAPIA ROYERO",
    "aula": "402-BLQ C-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 11,
    "materiaCodigo": "FS400",
    "materiaNombre": "Electromagnetismo",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "402-BLQ C-CAMPUS"
      },
      {
        "diaSemana": "MARTES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "P1-03-CAMPUS LAB"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "303-BLQ A-CAMPUS"
      }
    ]
  },
  {
    "id": 1161,
    "numeroGrupo": "04-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "LUIS ARTURO ESCOBAR CARO",
    "aula": "304-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 11,
    "materiaCodigo": "FS400",
    "materiaNombre": "Electromagnetismo",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "304-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "304-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "P1-03-CAMPUS LAB"
      }
    ]
  },
  {
    "id": 1162,
    "numeroGrupo": "10-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "SHIRLENE PATRICIA VEGA ROYERO",
    "aula": "304-BLQ A-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 11,
    "materiaCodigo": "FS400",
    "materiaNombre": "Electromagnetismo",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "304-BLQ A-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "302-BLQ C-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "P1-04-CAMPUS LAB"
      }
    ]
  },
  {
    "id": 1163,
    "numeroGrupo": "05-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "DANIELA TELLEZ DIAZ",
    "aula": "508-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 11,
    "materiaCodigo": "FS400",
    "materiaNombre": "Electromagnetismo",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "508-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "206-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "P1-02-CAMPUS LAB"
      }
    ]
  },
  {
    "id": 1164,
    "numeroGrupo": "09-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "SHIRLENE PATRICIA VEGA ROYERO",
    "aula": "304-BLQ A-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 11,
    "materiaCodigo": "FS400",
    "materiaNombre": "Electromagnetismo",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "304-BLQ A-CAMPUS"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "P1-01-CAMPUS LAB FIS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "302-BLQ C-CAMPUS"
      }
    ]
  },
  {
    "id": 1165,
    "numeroGrupo": "08-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "FRANKLIN ANTONIO MORA MAESTRE",
    "aula": "501-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 11,
    "materiaCodigo": "FS400",
    "materiaNombre": "Electromagnetismo",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "501-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "MARTES",
        "horaInicio": "07:00",
        "horaFin": "08:59",
        "aula": "P1-03-CAMPUS LAB"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "302-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1166,
    "numeroGrupo": "11-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "RODIAN ENRIQUE TAPIA ROYERO",
    "aula": "402-BLQ C-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 11,
    "materiaCodigo": "FS400",
    "materiaNombre": "Electromagnetismo",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "402-BLQ C-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "P1-03-CAMPUS LAB"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "303-BLQ A-CAMPUS"
      }
    ]
  },
  {
    "id": 1167,
    "numeroGrupo": "03- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "LUIS ARTURO ESCOBAR CARO",
    "aula": "304-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 11,
    "materiaCodigo": "FS400",
    "materiaNombre": "Electromagnetismo",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "304-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "MARTES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "P1-03-CAMPUS LAB"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "304-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1168,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "DANIELA TELLEZ DIAZ",
    "aula": "304-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 11,
    "materiaCodigo": "FS400",
    "materiaNombre": "Electromagnetismo",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "304-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "MARTES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "P1-02-CAMPUS LAB"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "203-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1169,
    "numeroGrupo": "06-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "DANIELA TELLEZ DIAZ",
    "aula": "508-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 11,
    "materiaCodigo": "FS400",
    "materiaNombre": "Electromagnetismo",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "508-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "206-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "P1-02-CAMPUS LAB"
      }
    ]
  },
  {
    "id": 1170,
    "numeroGrupo": "03- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "MARCO JAVIER PEÑALOZA PEREZ",
    "aula": "304-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 12,
    "materiaCodigo": "MT403",
    "materiaNombre": "Estadística Descriptiva e Inferencial",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "304-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "103-BLQ C-CAMPUS"
      }
    ]
  },
  {
    "id": 1171,
    "numeroGrupo": "06-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "MARCO JAVIER PEÑALOZA PEREZ",
    "aula": "502-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 12,
    "materiaCodigo": "MT403",
    "materiaNombre": "Estadística Descriptiva e Inferencial",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "502-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "203-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1172,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "MARCO JAVIER PEÑALOZA PEREZ",
    "aula": "202-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 12,
    "materiaCodigo": "MT403",
    "materiaNombre": "Estadística Descriptiva e Inferencial",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "202-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "202-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1173,
    "numeroGrupo": "04-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "LACIDES ALFONSO BALETA PALOMINO",
    "aula": "203-BLQ C-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 12,
    "materiaCodigo": "MT403",
    "materiaNombre": "Estadística Descriptiva e Inferencial",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "203-BLQ C-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "204-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1174,
    "numeroGrupo": "07-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "AILETH PAOLA ROJANO ESQUEA",
    "aula": "202-BLQ C-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 12,
    "materiaCodigo": "MT403",
    "materiaNombre": "Estadística Descriptiva e Inferencial",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "202-BLQ C-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "104-BLQ C-CAMPUS"
      }
    ]
  },
  {
    "id": 1175,
    "numeroGrupo": "05-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "CARLOS MARTINEZ ACUÑA",
    "aula": "304-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 12,
    "materiaCodigo": "MT403",
    "materiaNombre": "Estadística Descriptiva e Inferencial",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "304-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "203-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1176,
    "numeroGrupo": "02-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ANDRES FELIPE CARVAJAL ORREGO",
    "aula": "303-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 12,
    "materiaCodigo": "MT403",
    "materiaNombre": "Estadística Descriptiva e Inferencial",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "303-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "SABADO",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "406-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1177,
    "numeroGrupo": "03-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "BRAULIO BARRIOS ZUÑIGA",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 13,
    "materiaCodigo": "SS301",
    "materiaNombre": "Estructura de Datos",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "402-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1178,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "CARLOS EMILIANO OÑATE GOMEZ",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 13,
    "materiaCodigo": "SS301",
    "materiaNombre": "Estructura de Datos",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1179,
    "numeroGrupo": "06-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ADITH BISMARCK PEREZ OROZCO",
    "aula": "403-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 13,
    "materiaCodigo": "SS301",
    "materiaNombre": "Estructura de Datos",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "403-SALA INTERNET"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "403-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1180,
    "numeroGrupo": "04-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "BRAULIO BARRIOS ZUÑIGA",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 13,
    "materiaCodigo": "SS301",
    "materiaNombre": "Estructura de Datos",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1181,
    "numeroGrupo": "05-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ADITH BISMARCK PEREZ OROZCO",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 13,
    "materiaCodigo": "SS301",
    "materiaNombre": "Estructura de Datos",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1182,
    "numeroGrupo": "02-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ROBERTO ENRIQUE QUIROZ MOSCARELLA",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 13,
    "materiaCodigo": "SS301",
    "materiaNombre": "Estructura de Datos",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1183,
    "numeroGrupo": "08-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ADITH BISMARCK PEREZ OROZCO",
    "aula": "402-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 13,
    "materiaCodigo": "SS301",
    "materiaNombre": "Estructura de Datos",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "402-SALA INTERNET"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "402-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1184,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "AMILKAR JOSE HERNANDEZ OÑATE",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 14,
    "materiaCodigo": "SS300",
    "materiaNombre": "Programación de Computadores II",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1185,
    "numeroGrupo": "02-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "PATRICIA ISABEL ALVAREZ ORTEGA",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 14,
    "materiaCodigo": "SS300",
    "materiaNombre": "Programación de Computadores II",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1186,
    "numeroGrupo": "05-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ROBERTO AUGUSTO FERNANDEZ RAMIREZ",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 14,
    "materiaCodigo": "SS300",
    "materiaNombre": "Programación de Computadores II",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1187,
    "numeroGrupo": "04-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ROBERTO AUGUSTO FERNANDEZ RAMIREZ",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 14,
    "materiaCodigo": "SS300",
    "materiaNombre": "Programación de Computadores II",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1188,
    "numeroGrupo": "03-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ROBERTO AUGUSTO FERNANDEZ RAMIREZ",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 14,
    "materiaCodigo": "SS300",
    "materiaNombre": "Programación de Computadores II",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1189,
    "numeroGrupo": "06-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ROBERTO AUGUSTO FERNANDEZ RAMIREZ",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 14,
    "materiaCodigo": "SS300",
    "materiaNombre": "Programación de Computadores II",
    "materiaCreditos": 3,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1190,
    "numeroGrupo": "02-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ARMANDO JAVIER LOPEZ SIERRA",
    "aula": "302-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 15,
    "materiaCodigo": "SS303",
    "materiaNombre": "Semillero de Investigación",
    "materiaCreditos": 2,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "302-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1191,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ARMANDO JAVIER LOPEZ SIERRA",
    "aula": "202-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 15,
    "materiaCodigo": "SS303",
    "materiaNombre": "Semillero de Investigación",
    "materiaCreditos": 2,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "202-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1192,
    "numeroGrupo": "03-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ARMANDO JAVIER LOPEZ SIERRA",
    "aula": "407-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 15,
    "materiaCodigo": "SS303",
    "materiaNombre": "Semillero de Investigación",
    "materiaCreditos": 2,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "407-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1193,
    "numeroGrupo": "04-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ARMANDO JAVIER LOPEZ SIERRA",
    "aula": "406-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 15,
    "materiaCodigo": "SS303",
    "materiaNombre": "Semillero de Investigación",
    "materiaCreditos": 2,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "406-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1194,
    "numeroGrupo": "06-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "HEIDYS MARIA STUMMO NAVARRO",
    "aula": "402-BLQ C-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 15,
    "materiaCodigo": "SS303",
    "materiaNombre": "Semillero de Investigación",
    "materiaCreditos": 2,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "402-BLQ C-CAMPUS"
      }
    ]
  },
  {
    "id": 1195,
    "numeroGrupo": "05-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "HEIDYS MARIA STUMMO NAVARRO",
    "aula": "203-BLQ C-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 15,
    "materiaCodigo": "SS303",
    "materiaNombre": "Semillero de Investigación",
    "materiaCreditos": 2,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "203-BLQ C-CAMPUS"
      }
    ]
  },
  {
    "id": 1196,
    "numeroGrupo": "05-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ELIANA ROCIO CORTES ROZO",
    "aula": "305-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 16,
    "materiaCodigo": "ID341",
    "materiaNombre": "Tech English II",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "305-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1197,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "GABRIEL EDUARDO VASQUEZ PEREZ",
    "aula": "303-BLQ E-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 16,
    "materiaCodigo": "ID341",
    "materiaNombre": "Tech English II",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "303-BLQ E-CAMPUS"
      }
    ]
  },
  {
    "id": 1198,
    "numeroGrupo": "06-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JOHANY MICHEL GUERRA PRETEL",
    "aula": "204-BLQ E-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 16,
    "materiaCodigo": "ID341",
    "materiaNombre": "Tech English II",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "204-BLQ E-CAMPUS"
      }
    ]
  },
  {
    "id": 1199,
    "numeroGrupo": "08-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "RONALD OCTAVIO GOMEZ PACHECO",
    "aula": "204D-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 16,
    "materiaCodigo": "ID341",
    "materiaNombre": "Tech English II",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "204D-CAMPUS"
      }
    ]
  },
  {
    "id": 1200,
    "numeroGrupo": "04-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JOHANY MICHEL GUERRA PRETEL",
    "aula": "204-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 16,
    "materiaCodigo": "ID341",
    "materiaNombre": "Tech English II",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "204-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1201,
    "numeroGrupo": "07-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "RONALD OCTAVIO GOMEZ PACHECO",
    "aula": "204D-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 16,
    "materiaCodigo": "ID341",
    "materiaNombre": "Tech English II",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "204D-CAMPUS"
      }
    ]
  },
  {
    "id": 1202,
    "numeroGrupo": "02-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "GABRIEL EDUARDO VASQUEZ PEREZ",
    "aula": "302-BLQ E-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 16,
    "materiaCodigo": "ID341",
    "materiaNombre": "Tech English II",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "302-BLQ E-CAMPUS"
      }
    ]
  },
  {
    "id": 1203,
    "numeroGrupo": "03-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "GABRIEL EDUARDO VASQUEZ PEREZ",
    "aula": "201-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 16,
    "materiaCodigo": "ID341",
    "materiaNombre": "Tech English II",
    "materiaCreditos": 1,
    "semestreSugerido": 3,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "201-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1204,
    "numeroGrupo": "05-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "NDOC (Docente por asignar)",
    "aula": "403-BLQ C-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 17,
    "materiaCodigo": "ING301",
    "materiaNombre": "Metodología de la Investigación",
    "materiaCreditos": 2,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "403-BLQ C-CAMPUS"
      }
    ]
  },
  {
    "id": 1205,
    "numeroGrupo": "04-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "LINA PATRICIA RODRIGUEZ BECERRA",
    "aula": "403-BLQ C-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 17,
    "materiaCodigo": "ING301",
    "materiaNombre": "Metodología de la Investigación",
    "materiaCreditos": 2,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "403-BLQ C-CAMPUS"
      }
    ]
  },
  {
    "id": 1206,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "NEHEMIAS SARABIA DIAZ",
    "aula": "203-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 17,
    "materiaCodigo": "ING301",
    "materiaNombre": "Metodología de la Investigación",
    "materiaCreditos": 2,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "203-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1207,
    "numeroGrupo": "07-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "HAROLD MORENO BONILLA",
    "aula": "402-BLQ A-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 17,
    "materiaCodigo": "ING301",
    "materiaNombre": "Metodología de la Investigación",
    "materiaCreditos": 2,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "402-BLQ A-CAMPUS"
      }
    ]
  },
  {
    "id": 1208,
    "numeroGrupo": "06-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "NEHEMIAS SARABIA DIAZ",
    "aula": "404-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 17,
    "materiaCodigo": "ING301",
    "materiaNombre": "Metodología de la Investigación",
    "materiaCreditos": 2,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "404-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1209,
    "numeroGrupo": "02- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "MARIA JOHANA CARVAJALINO QUINTERO",
    "aula": "407-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 17,
    "materiaCodigo": "ING301",
    "materiaNombre": "Metodología de la Investigación",
    "materiaCreditos": 2,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "407-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1210,
    "numeroGrupo": "03- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "MARIA JOHANA CARVAJALINO QUINTERO",
    "aula": "407-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 17,
    "materiaCodigo": "ING301",
    "materiaNombre": "Metodología de la Investigación",
    "materiaCreditos": 2,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "407-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1211,
    "numeroGrupo": "07- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "YAIR ALFREDO VARGAS DELGADO",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 18,
    "materiaCodigo": "SS463",
    "materiaNombre": "Base de Datos",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1212,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "AMILKAR SIERRA ROMANO",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 18,
    "materiaCodigo": "SS463",
    "materiaNombre": "Base de Datos",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1213,
    "numeroGrupo": "03- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "AMILKAR SIERRA ROMANO",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 18,
    "materiaCodigo": "SS463",
    "materiaNombre": "Base de Datos",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1214,
    "numeroGrupo": "08- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "YAIR ALFREDO VARGAS DELGADO",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 18,
    "materiaCodigo": "SS463",
    "materiaNombre": "Base de Datos",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1215,
    "numeroGrupo": "02- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "AMILKAR SIERRA ROMANO",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 18,
    "materiaCodigo": "SS463",
    "materiaNombre": "Base de Datos",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1216,
    "numeroGrupo": "05- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "YAIR ALFREDO VARGAS DELGADO",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 18,
    "materiaCodigo": "SS463",
    "materiaNombre": "Base de Datos",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1217,
    "numeroGrupo": "04- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ROBERTO ENRIQUE QUIROZ MOSCARELLA",
    "aula": "402-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 18,
    "materiaCodigo": "SS463",
    "materiaNombre": "Base de Datos",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "402-SALA INTERNET"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "402-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1218,
    "numeroGrupo": "06- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "YAIR ALFREDO VARGAS DELGADO",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 18,
    "materiaCodigo": "SS463",
    "materiaNombre": "Base de Datos",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1219,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JHONATAN DAVID SIERRA JAIME",
    "aula": "304-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 19,
    "materiaCodigo": "MT402",
    "materiaNombre": "Ecuaciones Diferenciales",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "304-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "204-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1220,
    "numeroGrupo": "03-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "DANIEL DAVID MEZA PAYARES",
    "aula": "407-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 19,
    "materiaCodigo": "MT402",
    "materiaNombre": "Ecuaciones Diferenciales",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "407-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "402H-CAMPUS"
      }
    ]
  },
  {
    "id": 1221,
    "numeroGrupo": "04-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JAIME GUILLERMO BERMUDEZ SOSA",
    "aula": "403-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 19,
    "materiaCodigo": "MT402",
    "materiaNombre": "Ecuaciones Diferenciales",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "403-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "408-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1222,
    "numeroGrupo": "02- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "HEBERT ALBERTO DELGADO MIER",
    "aula": "304-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 19,
    "materiaCodigo": "MT402",
    "materiaNombre": "Ecuaciones Diferenciales",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "304-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "204-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1223,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "DOCENTE CIENCIAS ECONOMICAS UPC",
    "aula": "104-BLQ C-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 20,
    "materiaCodigo": "SS705",
    "materiaNombre": "Electiva Ciencias Admin Económicas y Contables",
    "materiaCreditos": 2,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "104-BLQ C-CAMPUS"
      }
    ]
  },
  {
    "id": 1224,
    "numeroGrupo": "02-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "DOCENTE CIENCIAS ECONOMICAS UPC",
    "aula": "105-BLQ C-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 20,
    "materiaCodigo": "SS705",
    "materiaNombre": "Electiva Ciencias Admin Económicas y Contables",
    "materiaCreditos": 2,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "105-BLQ C-CAMPUS"
      }
    ]
  },
  {
    "id": 1225,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JORGE IVAN HINOJOSA CALDERON",
    "aula": "101-BLQ C-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 21,
    "materiaCodigo": "AI432",
    "materiaNombre": "Investigación de Operaciones",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "101-BLQ C-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "301-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1226,
    "numeroGrupo": "03-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JORGE IVAN HINOJOSA CALDERON",
    "aula": "203-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 21,
    "materiaCodigo": "AI432",
    "materiaNombre": "Investigación de Operaciones",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "203-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "203-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1227,
    "numeroGrupo": "04-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JORGE IVAN HINOJOSA CALDERON",
    "aula": "507-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 21,
    "materiaCodigo": "AI432",
    "materiaNombre": "Investigación de Operaciones",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "507-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "304-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1228,
    "numeroGrupo": "02-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "DELAYNE PAOLA MENDOZA OLIVELLA",
    "aula": "101-BLQ C-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 21,
    "materiaCodigo": "AI432",
    "materiaNombre": "Investigación de Operaciones",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "101-BLQ C-CAMPUS"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "407-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1229,
    "numeroGrupo": "03-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "RODIAN ENRIQUE TAPIA ROYERO",
    "aula": "P1-04-CAMPUS LAB",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 22,
    "materiaCodigo": "FS329",
    "materiaNombre": "Ondas",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "P1-04-CAMPUS LAB"
      },
      {
        "diaSemana": "MARTES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "503-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "407-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1230,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ROOSEVELT CARRILLO MARTINEZ",
    "aula": "201-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 22,
    "materiaCodigo": "FS329",
    "materiaNombre": "Ondas",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "201-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "P1-04-CAMPUS LAB FIS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "508-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1231,
    "numeroGrupo": "07-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "MARIA CLAUDIA CALDERON MARTINEZ",
    "aula": "P1-04-CAMPUS LAB",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 22,
    "materiaCodigo": "FS329",
    "materiaNombre": "Ondas",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "P1-04-CAMPUS LAB"
      },
      {
        "diaSemana": "MARTES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "SALA DE PROF-501"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "SALA DE PROF-501"
      }
    ]
  },
  {
    "id": 1232,
    "numeroGrupo": "06-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "SHIRLENE PATRICIA VEGA ROYERO",
    "aula": "407-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 22,
    "materiaCodigo": "FS329",
    "materiaNombre": "Ondas",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "407-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "P1-04-CAMPUS LAB"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "407-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1233,
    "numeroGrupo": "05-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "SHIRLENE PATRICIA VEGA ROYERO",
    "aula": "P1-03-CAMPUS LAB",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 22,
    "materiaCodigo": "FS329",
    "materiaNombre": "Ondas",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "P1-03-CAMPUS LAB"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "407-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1234,
    "numeroGrupo": "04-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "RODIAN ENRIQUE TAPIA ROYERO",
    "aula": "503-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 22,
    "materiaCodigo": "FS329",
    "materiaNombre": "Ondas",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "503-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "P1-04-CAMPUS LAB FIS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "407-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1235,
    "numeroGrupo": "02-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ROOSEVELT CARRILLO MARTINEZ",
    "aula": "P1-04-CAMPUS LAB",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 22,
    "materiaCodigo": "FS329",
    "materiaNombre": "Ondas",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "P1-04-CAMPUS LAB"
      },
      {
        "diaSemana": "LUNES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "201-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1236,
    "numeroGrupo": "02- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ALFREDO DAVID BAUTISTA ROMERO",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 23,
    "materiaCodigo": "SS462",
    "materiaNombre": "Programación de Computadores III",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1237,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ALFREDO DAVID BAUTISTA ROMERO",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 23,
    "materiaCodigo": "SS462",
    "materiaNombre": "Programación de Computadores III",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1238,
    "numeroGrupo": "07- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JOHN JAIRO PATIÑO VANEGAS",
    "aula": "402-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 23,
    "materiaCodigo": "SS462",
    "materiaNombre": "Programación de Computadores III",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "402-SALA INTERNET"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "402-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1239,
    "numeroGrupo": "04- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JOHN JAIRO PATIÑO VANEGAS",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 23,
    "materiaCodigo": "SS462",
    "materiaNombre": "Programación de Computadores III",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1240,
    "numeroGrupo": "05- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ALFREDO DAVID BAUTISTA ROMERO",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 23,
    "materiaCodigo": "SS462",
    "materiaNombre": "Programación de Computadores III",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1241,
    "numeroGrupo": "03- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JOHN JAIRO PATIÑO VANEGAS",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 23,
    "materiaCodigo": "SS462",
    "materiaNombre": "Programación de Computadores III",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1242,
    "numeroGrupo": "06- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ALFREDO DAVID BAUTISTA ROMERO",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 23,
    "materiaCodigo": "SS462",
    "materiaNombre": "Programación de Computadores III",
    "materiaCreditos": 3,
    "semestreSugerido": 4,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1243,
    "numeroGrupo": "01- ING. SISTEMAS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "MARIA JOHANA CARVAJALINO QUINTERO",
    "aula": "102-BLQ C-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 24,
    "materiaCodigo": "ING302",
    "materiaNombre": "Seminario de Investigación",
    "materiaCreditos": 2,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "102-BLQ C-CAMPUS"
      }
    ]
  },
  {
    "id": 1244,
    "numeroGrupo": "02-ING SISTEMAS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "MARIA JOHANA CARVAJALINO QUINTERO",
    "aula": "102-BLQ C-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 24,
    "materiaCodigo": "ING302",
    "materiaNombre": "Seminario de Investigación",
    "materiaCreditos": 2,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "102-BLQ C-CAMPUS"
      }
    ]
  },
  {
    "id": 1245,
    "numeroGrupo": "04- ING. SISTEMAS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "MARIA JOHANA CARVAJALINO QUINTERO",
    "aula": "102-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 24,
    "materiaCodigo": "ING302",
    "materiaNombre": "Seminario de Investigación",
    "materiaCreditos": 2,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "102-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1246,
    "numeroGrupo": "03-ING SISTEMAS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "MARIA JOHANA CARVAJALINO QUINTERO",
    "aula": "303-BLQ C-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 24,
    "materiaCodigo": "ING302",
    "materiaNombre": "Seminario de Investigación",
    "materiaCreditos": 2,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "303-BLQ C-CAMPUS"
      }
    ]
  },
  {
    "id": 1247,
    "numeroGrupo": "05-ING SISTEMAS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ALVARO AGUSTIN OÑATE BOWEN",
    "aula": "202-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 24,
    "materiaCodigo": "ING302",
    "materiaNombre": "Seminario de Investigación",
    "materiaCreditos": 2,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "202-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1248,
    "numeroGrupo": "08- ING",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "39460933",
    "aula": "301-BLQ A-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 24,
    "materiaCodigo": "ING302",
    "materiaNombre": "Seminario de Investigación",
    "materiaCreditos": 2,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "301-BLQ A-CAMPUS"
      },
      {
        "diaSemana": "SABADO",
        "horaInicio": "15:00",
        "horaFin": "15:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1249,
    "numeroGrupo": "",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 24,
    "materiaCodigo": "ING302",
    "materiaNombre": "Seminario de Investigación",
    "materiaCreditos": 2,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "16:00",
        "horaFin": "16:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "SABADO",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "301-BLQ A-CAMPUS"
      }
    ]
  },
  {
    "id": 1250,
    "numeroGrupo": "05-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JOHNNY ANTONIO RIVERA VERGEL",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 25,
    "materiaCodigo": "MT309B",
    "materiaNombre": "Análisis Numérico",
    "materiaCreditos": 3,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "07:00",
        "horaFin": "09:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1251,
    "numeroGrupo": "02- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "OVIDIO VILLA CELEDON",
    "aula": "203 -BLQ",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 25,
    "materiaCodigo": "MT309B",
    "materiaNombre": "Análisis Numérico",
    "materiaCreditos": 3,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "09:00",
        "horaFin": "11:59",
        "aula": "203 -BLQ"
      }
    ]
  },
  {
    "id": 1252,
    "numeroGrupo": "03- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "OVIDIO VILLA CELEDON",
    "aula": "203 -BLQ",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 25,
    "materiaCodigo": "MT309B",
    "materiaNombre": "Análisis Numérico",
    "materiaCreditos": 3,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "06:00",
        "horaFin": "08:59",
        "aula": "203 -BLQ"
      }
    ]
  },
  {
    "id": 1253,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JOHNNY ANTONIO RIVERA VERGEL",
    "aula": "203 -BLQ",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 25,
    "materiaCodigo": "MT309B",
    "materiaNombre": "Análisis Numérico",
    "materiaCreditos": 3,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "06:00",
        "horaFin": "08:59",
        "aula": "203 -BLQ"
      }
    ]
  },
  {
    "id": 1254,
    "numeroGrupo": "04-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JOHNNY ANTONIO RIVERA VERGEL",
    "aula": "203 -BLQ",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 25,
    "materiaCodigo": "MT309B",
    "materiaNombre": "Análisis Numérico",
    "materiaCreditos": 3,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "09:00",
        "horaFin": "11:59",
        "aula": "203 -BLQ"
      }
    ]
  },
  {
    "id": 1255,
    "numeroGrupo": "04- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "MIGUEL ANGEL AROCA CERVANTES",
    "aula": "404-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 26,
    "materiaCodigo": "SS500",
    "materiaNombre": "Arquitectura de Computadores",
    "materiaCreditos": 3,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "404-SALA INTERNET"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "404-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1256,
    "numeroGrupo": "02- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "MIGUEL ANGEL AROCA CERVANTES",
    "aula": "404-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 26,
    "materiaCodigo": "SS500",
    "materiaNombre": "Arquitectura de Computadores",
    "materiaCreditos": 3,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "404-SALA INTERNET"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "404-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1257,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "MIGUEL ANGEL AROCA CERVANTES",
    "aula": "404-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 26,
    "materiaCodigo": "SS500",
    "materiaNombre": "Arquitectura de Computadores",
    "materiaCreditos": 3,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "404-SALA INTERNET"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "404-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1258,
    "numeroGrupo": "03- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "PABLO ANDRES GUERRA GONZALEZ",
    "aula": "403-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 26,
    "materiaCodigo": "SS500",
    "materiaNombre": "Arquitectura de Computadores",
    "materiaCreditos": 3,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "403-SALA INTERNET"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "403-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1259,
    "numeroGrupo": "05- VIRTUAL",
    "modalidad": "VIRTUAL",
    "sede": "CAMPUS",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 27,
    "materiaCodigo": "SS802",
    "materiaNombre": "Base de Datos Avanzadas",
    "materiaCreditos": 3,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1260,
    "numeroGrupo": "03- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "AMILKAR SIERRA ROMANO",
    "aula": "LAB TECH I",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 27,
    "materiaCodigo": "SS802",
    "materiaNombre": "Base de Datos Avanzadas",
    "materiaCreditos": 3,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "LAB TECH I"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "LAB TECH I"
      }
    ]
  },
  {
    "id": 1261,
    "numeroGrupo": "01- VIRTUAL",
    "modalidad": "VIRTUAL",
    "sede": "CAMPUS",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 27,
    "materiaCodigo": "SS802",
    "materiaNombre": "Base de Datos Avanzadas",
    "materiaCreditos": 3,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1262,
    "numeroGrupo": "02- VIRTUAL",
    "modalidad": "VIRTUAL",
    "sede": "CAMPUS",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 27,
    "materiaCodigo": "SS802",
    "materiaNombre": "Base de Datos Avanzadas",
    "materiaCreditos": 3,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1263,
    "numeroGrupo": "04- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "AMILKAR SIERRA ROMANO",
    "aula": "LAB TECH I",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 27,
    "materiaCodigo": "SS802",
    "materiaNombre": "Base de Datos Avanzadas",
    "materiaCreditos": 3,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "LAB TECH I"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "LAB TECH I"
      }
    ]
  },
  {
    "id": 1264,
    "numeroGrupo": "",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "DAILYNG KARINA BOOM CARCAMO",
    "aula": "201-BLQ C-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 28,
    "materiaCodigo": "UPC23",
    "materiaNombre": "Cátedra de la Paz",
    "materiaCreditos": 1,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "201-BLQ C-CAMPUS"
      },
      {
        "diaSemana": "MARTES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "104-BLQ C-CAMPUS"
      }
    ]
  },
  {
    "id": 1265,
    "numeroGrupo": "05-NOCHE",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ARCELIA ROSA ESCOBAR BROCHERO",
    "aula": "304-BLQ C-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 28,
    "materiaCodigo": "UPC23",
    "materiaNombre": "Cátedra de la Paz",
    "materiaCreditos": 1,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "304-BLQ C-CAMPUS"
      }
    ]
  },
  {
    "id": 1266,
    "numeroGrupo": "03-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "EILEEN MARGARITA ARIAS PACHECO",
    "aula": "403-BLQ E-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 28,
    "materiaCodigo": "UPC23",
    "materiaNombre": "Cátedra de la Paz",
    "materiaCreditos": 1,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "403-BLQ E-CAMPUS"
      }
    ]
  },
  {
    "id": 1267,
    "numeroGrupo": "07-VIRTUAL",
    "modalidad": "VIRTUAL",
    "sede": "CAMPUS",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 28,
    "materiaCodigo": "UPC23",
    "materiaNombre": "Cátedra de la Paz",
    "materiaCreditos": 1,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "18:00",
        "horaFin": "19:39",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1268,
    "numeroGrupo": "08-VIRTUAL",
    "modalidad": "VIRTUAL",
    "sede": "CAMPUS",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 28,
    "materiaCodigo": "UPC23",
    "materiaNombre": "Cátedra de la Paz",
    "materiaCreditos": 1,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1269,
    "numeroGrupo": "09-VIRTUAL",
    "modalidad": "VIRTUAL",
    "sede": "CAMPUS",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 28,
    "materiaCodigo": "UPC23",
    "materiaNombre": "Cátedra de la Paz",
    "materiaCreditos": 1,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1270,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "EILEEN MARGARITA ARIAS PACHECO",
    "aula": "304-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 28,
    "materiaCodigo": "UPC23",
    "materiaNombre": "Cátedra de la Paz",
    "materiaCreditos": 1,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "304-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1271,
    "numeroGrupo": "10-VIRTUAL",
    "modalidad": "VIRTUAL",
    "sede": "CAMPUS",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 28,
    "materiaCodigo": "UPC23",
    "materiaNombre": "Cátedra de la Paz",
    "materiaCreditos": 1,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1272,
    "numeroGrupo": "06-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 28,
    "materiaCodigo": "UPC23",
    "materiaNombre": "Cátedra de la Paz",
    "materiaCreditos": 1,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1273,
    "numeroGrupo": "02- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JOHN JAIRO PATIÑO VANEGAS",
    "aula": "401-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 29,
    "materiaCodigo": "SS502",
    "materiaNombre": "Ingeniería de Software I",
    "materiaCreditos": 3,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "401-SALA INTERNET"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "401-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1274,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "PATRICIA ISABEL ALVAREZ ORTEGA",
    "aula": "401-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 29,
    "materiaCodigo": "SS502",
    "materiaNombre": "Ingeniería de Software I",
    "materiaCreditos": 3,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "401-SALA INTERNET"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "401-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1275,
    "numeroGrupo": "03- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "PATRICIA ISABEL ALVAREZ ORTEGA",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 29,
    "materiaCodigo": "SS502",
    "materiaNombre": "Ingeniería de Software I",
    "materiaCreditos": 3,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1276,
    "numeroGrupo": "02- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "WILMAN JOSE VEGA CASTILLA",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 30,
    "materiaCodigo": "SS501",
    "materiaNombre": "Programación Web",
    "materiaCreditos": 3,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1277,
    "numeroGrupo": "04- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "WILMAN JOSE VEGA CASTILLA",
    "aula": "401-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 30,
    "materiaCodigo": "SS501",
    "materiaNombre": "Programación Web",
    "materiaCreditos": 3,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "401-SALA INTERNET"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "401-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1278,
    "numeroGrupo": "03- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "SADAINER FERNEY HERNANDEZ CHACON",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 30,
    "materiaCodigo": "SS501",
    "materiaNombre": "Programación Web",
    "materiaCreditos": 3,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1279,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "SADAINER FERNEY HERNANDEZ CHACON",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 30,
    "materiaCodigo": "SS501",
    "materiaNombre": "Programación Web",
    "materiaCreditos": 3,
    "semestreSugerido": 5,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1280,
    "numeroGrupo": "",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "LUZ ANAYS BALLESTEROS GALVIS",
    "aula": "102-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 31,
    "materiaCodigo": "UPC25",
    "materiaNombre": "Cátedra Ambiental y Desarrollo Sostenible",
    "materiaCreditos": 1,
    "semestreSugerido": 6,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "102-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "102-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "LUNES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "407-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1281,
    "numeroGrupo": "05-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "YERIS KARINA FLOREZ AVENDAÑO",
    "aula": "202-BLQ E-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 31,
    "materiaCodigo": "UPC25",
    "materiaNombre": "Cátedra Ambiental y Desarrollo Sostenible",
    "materiaCreditos": 1,
    "semestreSugerido": 6,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "202-BLQ E-CAMPUS"
      }
    ]
  },
  {
    "id": 1282,
    "numeroGrupo": "06-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "HELMER JAVIER MUEGUES RINCON",
    "aula": "202-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 31,
    "materiaCodigo": "UPC25",
    "materiaNombre": "Cátedra Ambiental y Desarrollo Sostenible",
    "materiaCreditos": 1,
    "semestreSugerido": 6,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "202-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1283,
    "numeroGrupo": "07-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "HELMER JAVIER MUEGUES RINCON",
    "aula": "505-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 31,
    "materiaCodigo": "UPC25",
    "materiaNombre": "Cátedra Ambiental y Desarrollo Sostenible",
    "materiaCreditos": 1,
    "semestreSugerido": 6,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "505-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1284,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "MARIBEL ROMERO MESTRE",
    "aula": "401-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 32,
    "materiaCodigo": "SS602",
    "materiaNombre": "Ingeniería de Software II",
    "materiaCreditos": 3,
    "semestreSugerido": 6,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "401-SALA INTERNET"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "401-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1285,
    "numeroGrupo": "04-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "MARIBEL ROMERO MESTRE",
    "aula": "401-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 32,
    "materiaCodigo": "SS602",
    "materiaNombre": "Ingeniería de Software II",
    "materiaCreditos": 3,
    "semestreSugerido": 6,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "401-SALA INTERNET"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "401-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1286,
    "numeroGrupo": "02- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "MARIBEL ROMERO MESTRE",
    "aula": "401-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 32,
    "materiaCodigo": "SS602",
    "materiaNombre": "Ingeniería de Software II",
    "materiaCreditos": 3,
    "semestreSugerido": 6,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "401-SALA INTERNET"
      },
      {
        "diaSemana": "MARTES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "401-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1287,
    "numeroGrupo": "03- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "MARIBEL ROMERO MESTRE",
    "aula": "401-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 32,
    "materiaCodigo": "SS602",
    "materiaNombre": "Ingeniería de Software II",
    "materiaCreditos": 3,
    "semestreSugerido": 6,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "401-SALA INTERNET"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "401-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1288,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "CESAR AUGUSTO CORTES GARCIA",
    "aula": "503-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 33,
    "materiaCodigo": "AI700",
    "materiaNombre": "Ingeniería Económica",
    "materiaCreditos": 3,
    "semestreSugerido": 6,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "503-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1289,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JENIS DEL CARMEN SAGBINI ECHAVEZ",
    "aula": "LAB TECH I",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 34,
    "materiaCodigo": "SS604",
    "materiaNombre": "Innovación y Emprendimiento Tecnológico",
    "materiaCreditos": 2,
    "semestreSugerido": 6,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "LAB TECH I"
      }
    ]
  },
  {
    "id": 1290,
    "numeroGrupo": "02-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "STEFANIE PAOLA SAENZ SEVILLA",
    "aula": "LAB TECH I",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 34,
    "materiaCodigo": "SS604",
    "materiaNombre": "Innovación y Emprendimiento Tecnológico",
    "materiaCreditos": 2,
    "semestreSugerido": 6,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "LAB TECH I"
      }
    ]
  },
  {
    "id": 1291,
    "numeroGrupo": "02-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ANDRES RENE PERPIÑAN RTEYES",
    "aula": "LAB TECH I",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 35,
    "materiaCodigo": "SS601",
    "materiaNombre": "Modelos y Simulación",
    "materiaCreditos": 3,
    "semestreSugerido": 6,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "LAB TECH I"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "LAB TECH I"
      }
    ]
  },
  {
    "id": 1292,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ANDRES RENE PERPIÑAN RTEYES",
    "aula": "LAB TECH I",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 35,
    "materiaCodigo": "SS601",
    "materiaNombre": "Modelos y Simulación",
    "materiaCreditos": 3,
    "semestreSugerido": 6,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "LAB TECH I"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "LAB TECH I"
      }
    ]
  },
  {
    "id": 1293,
    "numeroGrupo": "03-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ANDRES RENE PERPIÑAN RTEYES",
    "aula": "LAB TECH II",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 35,
    "materiaCodigo": "SS601",
    "materiaNombre": "Modelos y Simulación",
    "materiaCreditos": 3,
    "semestreSugerido": 6,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "LAB TECH II"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "LAB TECH II"
      }
    ]
  },
  {
    "id": 1294,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "RONALD ALEXANDER VACCA ASCANIO",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 36,
    "materiaCodigo": "SS603",
    "materiaNombre": "Programación Móvil",
    "materiaCreditos": 3,
    "semestreSugerido": 6,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1295,
    "numeroGrupo": "04- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "RONALD ALEXANDER VACCA ASCANIO",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 36,
    "materiaCodigo": "SS603",
    "materiaNombre": "Programación Móvil",
    "materiaCreditos": 3,
    "semestreSugerido": 6,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1296,
    "numeroGrupo": "02- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "RONALD ALEXANDER VACCA ASCANIO",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 36,
    "materiaCodigo": "SS603",
    "materiaNombre": "Programación Móvil",
    "materiaCreditos": 3,
    "semestreSugerido": 6,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1297,
    "numeroGrupo": "03- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "RONALD ALEXANDER VACCA ASCANIO",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 36,
    "materiaCodigo": "SS603",
    "materiaNombre": "Programación Móvil",
    "materiaCreditos": 3,
    "semestreSugerido": 6,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1298,
    "numeroGrupo": "02- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "WILLIAM ENRIQUE CASTRO CABARCAS",
    "aula": "403-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 37,
    "materiaCodigo": "SS600",
    "materiaNombre": "Sistemas Operativos",
    "materiaCreditos": 3,
    "semestreSugerido": 6,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "403-SALA INTERNET"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "403-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1299,
    "numeroGrupo": "04- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "OSWALDO RUEDA CARREÑO",
    "aula": "403-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 37,
    "materiaCodigo": "SS600",
    "materiaNombre": "Sistemas Operativos",
    "materiaCreditos": 3,
    "semestreSugerido": 6,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "403-SALA INTERNET"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "403-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1300,
    "numeroGrupo": "05- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "OSWALDO RUEDA CARREÑO",
    "aula": "403-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 37,
    "materiaCodigo": "SS600",
    "materiaNombre": "Sistemas Operativos",
    "materiaCreditos": 3,
    "semestreSugerido": 6,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "403-SALA INTERNET"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "403-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1301,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "OSWALDO RUEDA CARREÑO",
    "aula": "403-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 37,
    "materiaCodigo": "SS600",
    "materiaNombre": "Sistemas Operativos",
    "materiaCreditos": 3,
    "semestreSugerido": 6,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "403-SALA INTERNET"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "403-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1302,
    "numeroGrupo": "03- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "OSWALDO RUEDA CARREÑO",
    "aula": "403-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 37,
    "materiaCodigo": "SS600",
    "materiaNombre": "Sistemas Operativos",
    "materiaCreditos": 3,
    "semestreSugerido": 6,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "403-SALA INTERNET"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "403-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1303,
    "numeroGrupo": "03-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "TERESITA DEJESUS VERDECIA MONTERO",
    "aula": "506-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 38,
    "materiaCodigo": "UPC24",
    "materiaNombre": "Cátedra de Emprendimiento",
    "materiaCreditos": 1,
    "semestreSugerido": 7,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "506-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1304,
    "numeroGrupo": "05-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "TERESITA DEJESUS VERDECIA MONTERO",
    "aula": "404-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 38,
    "materiaCodigo": "UPC24",
    "materiaNombre": "Cátedra de Emprendimiento",
    "materiaCreditos": 1,
    "semestreSugerido": 7,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "404-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1305,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "TERESITA DEJESUS VERDECIA MONTERO",
    "aula": "205-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 38,
    "materiaCodigo": "UPC24",
    "materiaNombre": "Cátedra de Emprendimiento",
    "materiaCreditos": 1,
    "semestreSugerido": 7,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "205-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1306,
    "numeroGrupo": "02-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "TERESITA DEJESUS VERDECIA MONTERO",
    "aula": "503-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 38,
    "materiaCodigo": "UPC24",
    "materiaNombre": "Cátedra de Emprendimiento",
    "materiaCreditos": 1,
    "semestreSugerido": 7,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "503-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1307,
    "numeroGrupo": "04-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "TERESITA DEJESUS VERDECIA MONTERO",
    "aula": "504-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 38,
    "materiaCodigo": "UPC24",
    "materiaNombre": "Cátedra de Emprendimiento",
    "materiaCreditos": 1,
    "semestreSugerido": 7,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "504-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1308,
    "numeroGrupo": "02-CAMPUS AMBIENTAL",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ADALGIZA OVALLE FELIZZOLA",
    "aula": "202-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 39,
    "materiaCodigo": "FC407",
    "materiaNombre": "Formulación y Evalu de Proyec en Ingeniería",
    "materiaCreditos": 3,
    "semestreSugerido": 7,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "16:00",
        "horaFin": "18:59",
        "aula": "202-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1309,
    "numeroGrupo": "08-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "NAISSIR MELISA ABAD JELE",
    "aula": "101-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 39,
    "materiaCodigo": "FC407",
    "materiaNombre": "Formulación y Evalu de Proyec en Ingeniería",
    "materiaCreditos": 3,
    "semestreSugerido": 7,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "12:00",
        "horaFin": "12:59",
        "aula": "101-BLQ B-CAMPUS"
      },
      {
        "diaSemana": "MARTES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1310,
    "numeroGrupo": "06-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JHON FREEDY MONTERO PULGARIN",
    "aula": "201-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 39,
    "materiaCodigo": "FC407",
    "materiaNombre": "Formulación y Evalu de Proyec en Ingeniería",
    "materiaCreditos": 3,
    "semestreSugerido": 7,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "12:00",
        "horaFin": "12:59",
        "aula": "201-BLQ-H-CAMPUS"
      },
      {
        "diaSemana": "MARTES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "403-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1311,
    "numeroGrupo": "04-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ADALGIZA OVALLE FELIZZOLA",
    "aula": "401H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 39,
    "materiaCodigo": "FC407",
    "materiaNombre": "Formulación y Evalu de Proyec en Ingeniería",
    "materiaCreditos": 3,
    "semestreSugerido": 7,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "10:00",
        "horaFin": "12:59",
        "aula": "401H-CAMPUS"
      }
    ]
  },
  {
    "id": 1312,
    "numeroGrupo": "05-CAMPUS SISTEMAS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "NAISSIR MELISA ABAD JELE",
    "aula": "402-BLQ B-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 39,
    "materiaCodigo": "FC407",
    "materiaNombre": "Formulación y Evalu de Proyec en Ingeniería",
    "materiaCreditos": 3,
    "semestreSugerido": 7,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "13:00",
        "horaFin": "15:59",
        "aula": "402-BLQ B-CAMPUS"
      }
    ]
  },
  {
    "id": 1313,
    "numeroGrupo": "03-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "NDOC (Docente por asignar)",
    "aula": "205-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 39,
    "materiaCodigo": "FC407",
    "materiaNombre": "Formulación y Evalu de Proyec en Ingeniería",
    "materiaCreditos": 3,
    "semestreSugerido": 7,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "16:00",
        "horaFin": "18:59",
        "aula": "205-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1314,
    "numeroGrupo": "11-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JHON FREEDY MONTERO PULGARIN",
    "aula": "303-BLQ C-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 39,
    "materiaCodigo": "FC407",
    "materiaNombre": "Formulación y Evalu de Proyec en Ingeniería",
    "materiaCreditos": 3,
    "semestreSugerido": 7,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "JUEVES",
        "horaInicio": "13:00",
        "horaFin": "15:59",
        "aula": "303-BLQ C-CAMPUS"
      }
    ]
  },
  {
    "id": 1315,
    "numeroGrupo": "01-CAMPUS AMBIENTAL",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ADALGIZA OVALLE FELIZZOLA",
    "aula": "202-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 39,
    "materiaCodigo": "FC407",
    "materiaNombre": "Formulación y Evalu de Proyec en Ingeniería",
    "materiaCreditos": 3,
    "semestreSugerido": 7,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "10:00",
        "horaFin": "12:59",
        "aula": "202-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1316,
    "numeroGrupo": "09-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "NDOC (Docente por asignar)",
    "aula": "104-BLQ C-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 39,
    "materiaCodigo": "FC407",
    "materiaNombre": "Formulación y Evalu de Proyec en Ingeniería",
    "materiaCreditos": 3,
    "semestreSugerido": 7,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "10:00",
        "horaFin": "12:59",
        "aula": "104-BLQ C-CAMPUS"
      }
    ]
  },
  {
    "id": 1317,
    "numeroGrupo": "07-CAMPUS SISTEMAS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "NAISSIR MELISA ABAD JELE",
    "aula": "304-BLQ-H-CAMPUS",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 39,
    "materiaCodigo": "FC407",
    "materiaNombre": "Formulación y Evalu de Proyec en Ingeniería",
    "materiaCreditos": 3,
    "semestreSugerido": 7,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "08:00",
        "horaFin": "10:59",
        "aula": "304-BLQ-H-CAMPUS"
      }
    ]
  },
  {
    "id": 1318,
    "numeroGrupo": "01- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "JUAN ANDRES YANETH RINCON",
    "aula": "402-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 40,
    "materiaCodigo": "SS706",
    "materiaNombre": "Ingeniería de Software III",
    "materiaCreditos": 3,
    "semestreSugerido": 7,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "402-SALA INTERNET"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "402-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1319,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "TONNY ENRIQUE JIMENEZ MARQUEZ",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 41,
    "materiaCodigo": "SS702",
    "materiaNombre": "Inteligencia Artificial",
    "materiaCreditos": 3,
    "semestreSugerido": 7,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1320,
    "numeroGrupo": "03-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "TONNY ENRIQUE JIMENEZ MARQUEZ",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 41,
    "materiaCodigo": "SS702",
    "materiaNombre": "Inteligencia Artificial",
    "materiaCreditos": 3,
    "semestreSugerido": 7,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1321,
    "numeroGrupo": "02- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "TONNY ENRIQUE JIMENEZ MARQUEZ",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 41,
    "materiaCodigo": "SS702",
    "materiaNombre": "Inteligencia Artificial",
    "materiaCreditos": 3,
    "semestreSugerido": 7,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1322,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "WILLIAM ENRIQUE CASTRO CABARCAS",
    "aula": "404-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 42,
    "materiaCodigo": "SS701",
    "materiaNombre": "Redes y Comunicaciones",
    "materiaCreditos": 3,
    "semestreSugerido": 7,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "404-SALA INTERNET"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "403-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1323,
    "numeroGrupo": "03- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "PABLO ANDRES GUERRA GONZALEZ",
    "aula": "403-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 42,
    "materiaCodigo": "SS701",
    "materiaNombre": "Redes y Comunicaciones",
    "materiaCreditos": 3,
    "semestreSugerido": 7,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "403-SALA INTERNET"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "403-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1324,
    "numeroGrupo": "02- CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "WILLIAM ENRIQUE CASTRO CABARCAS",
    "aula": "403-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 42,
    "materiaCodigo": "SS701",
    "materiaNombre": "Redes y Comunicaciones",
    "materiaCreditos": 3,
    "semestreSugerido": 7,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "403-SALA INTERNET"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "403-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1325,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "NELSON ANIBAL FELIZZOLA DELGADO",
    "aula": "LAB TECH II",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 43,
    "materiaCodigo": "SS708",
    "materiaNombre": "Research Project",
    "materiaCreditos": 1,
    "semestreSugerido": 7,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "LAB TECH II"
      }
    ]
  },
  {
    "id": 1326,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "LUIS ALFREDO PEREZ PEREZ",
    "aula": "LAB TECH I",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 44,
    "materiaCodigo": "SS707",
    "materiaNombre": "Tecnologías Inmersivas",
    "materiaCreditos": 3,
    "semestreSugerido": 7,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "LAB TECH I"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "LAB TECH I"
      }
    ]
  },
  {
    "id": 1327,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "DOCENTE FACULTAD INGENIERIA UPC",
    "aula": "203-BLQ I-INFORMATI",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 45,
    "materiaCodigo": "SS810",
    "materiaNombre": "Electiva Básica de Ingeniería",
    "materiaCreditos": 2,
    "semestreSugerido": 8,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "203-BLQ I-INFORMATI"
      }
    ]
  },
  {
    "id": 1328,
    "numeroGrupo": "02-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "DOCENTE FACULTAD INGENIERIA UPC",
    "aula": "204-BLQ I-INFORMATI",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 45,
    "materiaCodigo": "SS810",
    "materiaNombre": "Electiva Básica de Ingeniería",
    "materiaCreditos": 2,
    "semestreSugerido": 8,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "204-BLQ I-INFORMATI"
      }
    ]
  },
  {
    "id": 1329,
    "numeroGrupo": "01-VIRTUAL",
    "modalidad": "VIRTUAL",
    "sede": "CAMPUS",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 46,
    "materiaCodigo": "SS811",
    "materiaNombre": "Ética Profesional",
    "materiaCreditos": 1,
    "semestreSugerido": 8,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "12:00",
        "horaFin": "13:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1330,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "LUIS CARLOS MARTINEZ ROJAS",
    "aula": "402-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 47,
    "materiaCodigo": "SS809",
    "materiaNombre": "Gestión de Proyectos TI",
    "materiaCreditos": 3,
    "semestreSugerido": 8,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "402-SALA INTERNET"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "402-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1331,
    "numeroGrupo": "02-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "ALEXANDER ARAGON CABARCAS",
    "aula": "403-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 47,
    "materiaCodigo": "SS809",
    "materiaNombre": "Gestión de Proyectos TI",
    "materiaCreditos": 3,
    "semestreSugerido": 8,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "403-SALA INTERNET"
      },
      {
        "diaSemana": "VIERNES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "403-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1332,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "EDWARD FABIAN MENDOZA USTARIZ",
    "aula": "301-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 48,
    "materiaCodigo": "SS807",
    "materiaNombre": "Optativa de Profundización I",
    "materiaCreditos": 3,
    "semestreSugerido": 8,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "301-SALA INTERNET"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "10:00",
        "horaFin": "11:59",
        "aula": "301-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1333,
    "numeroGrupo": "02-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "CARLOS EMILIANO OÑATE GOMEZ",
    "aula": "402-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 48,
    "materiaCodigo": "SS807",
    "materiaNombre": "Optativa de Profundización I",
    "materiaCreditos": 3,
    "semestreSugerido": 8,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "402-SALA INTERNET"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "402-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1334,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "OSWALDO RUEDA CARREÑO",
    "aula": "404-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 49,
    "materiaCodigo": "SS808",
    "materiaNombre": "Optativa de Profundización II",
    "materiaCreditos": 3,
    "semestreSugerido": 8,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "404-SALA INTERNET"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "404-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1335,
    "numeroGrupo": "02-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "PABLO ANDRES GUERRA GONZALEZ",
    "aula": "403-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 49,
    "materiaCodigo": "SS808",
    "materiaNombre": "Optativa de Profundización II",
    "materiaCreditos": 3,
    "semestreSugerido": 8,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "403-SALA INTERNET"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "14:00",
        "horaFin": "15:59",
        "aula": "403-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1336,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 50,
    "materiaCodigo": "SS812",
    "materiaNombre": "Proyecto de Grado I",
    "materiaCreditos": 2,
    "semestreSugerido": 8,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "06:00",
        "horaFin": "07:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1337,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "NDOC (Docente por asignar)",
    "aula": "NREF",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": false,
    "tieneRecursoFisicoAsignado": false,
    "materiaId": 51,
    "materiaCodigo": "SS806",
    "materiaNombre": "Seguridad de la Información",
    "materiaCreditos": 3,
    "semestreSugerido": 8,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "NREF"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "NREF"
      }
    ]
  },
  {
    "id": 1338,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "SADAINER FERNEY HERNANDEZ CHACON",
    "aula": "401-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 52,
    "materiaCodigo": "SS906",
    "materiaNombre": "Optativa de Profundización III",
    "materiaCreditos": 3,
    "semestreSugerido": 9,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "401-SALA INTERNET"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "08:00",
        "horaFin": "09:59",
        "aula": "401-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1339,
    "numeroGrupo": "02-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "AMILKAR SIERRA ROMANO",
    "aula": "402-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 52,
    "materiaCodigo": "SS906",
    "materiaNombre": "Optativa de Profundización III",
    "materiaCreditos": 3,
    "semestreSugerido": 9,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "402-SALA INTERNET"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "18:00",
        "horaFin": "19:59",
        "aula": "402-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1340,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "WILLIAM ENRIQUE CASTRO CABARCAS",
    "aula": "403-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 53,
    "materiaCodigo": "SS907",
    "materiaNombre": "Optativa de Profundización IV",
    "materiaCreditos": 3,
    "semestreSugerido": 9,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "LUNES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "403-SALA INTERNET"
      },
      {
        "diaSemana": "MIERCOLES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "403-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1341,
    "numeroGrupo": "02-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "BRAULIO BARRIOS ZUÑIGA",
    "aula": "404-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 53,
    "materiaCodigo": "SS907",
    "materiaNombre": "Optativa de Profundización IV",
    "materiaCreditos": 3,
    "semestreSugerido": 9,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "MARTES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "404-SALA INTERNET"
      },
      {
        "diaSemana": "JUEVES",
        "horaInicio": "16:00",
        "horaFin": "17:59",
        "aula": "404-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1342,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "DOCENTE INGENIERIA DE SISTEMAS UPC",
    "aula": "401-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 54,
    "materiaCodigo": "SS908",
    "materiaNombre": "Optativa de Profundización V",
    "materiaCreditos": 3,
    "semestreSugerido": 9,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "VIERNES",
        "horaInicio": "08:00",
        "horaFin": "11:59",
        "aula": "401-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1343,
    "numeroGrupo": "02-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "DOCENTE INGENIERIA DE SISTEMAS UPC",
    "aula": "402-SALA INTERNET",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 54,
    "materiaCodigo": "SS908",
    "materiaNombre": "Optativa de Profundización V",
    "materiaCreditos": 3,
    "semestreSugerido": 9,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "08:00",
        "horaFin": "11:59",
        "aula": "402-SALA INTERNET"
      }
    ]
  },
  {
    "id": 1344,
    "numeroGrupo": "01-CAMPUS",
    "modalidad": "PRESENCIAL",
    "sede": "CAMPUS",
    "docente": "COMITE DE TRABAJOS DE GRADO UPC",
    "aula": "SALA DE CONFERENCIAS P1",
    "estado": "ACTIVO",
    "tieneDocenteAsignado": true,
    "tieneRecursoFisicoAsignado": true,
    "materiaId": 55,
    "materiaCodigo": "SS909",
    "materiaNombre": "Trabajo de Grado II",
    "materiaCreditos": 4,
    "semestreSugerido": 9,
    "periodoId": 1,
    "periodoNombre": "2026-2",
    "sesiones": [
      {
        "diaSemana": "SABADO",
        "horaInicio": "08:00",
        "horaFin": "11:59",
        "aula": "SALA DE CONFERENCIAS P1"
      }
    ]
  }
];

// Respaldo dinámico en caso de requerirse grupos adicionales
export function getFallbackGroupsForSubject(sub: Subject): Group[] {
  const baseId = sub.id * 100;
  return [
    {
      id: baseId + 1,
      numeroGrupo: '01-CAMPUS',
      modalidad: 'PRESENCIAL',
      sede: 'CAMPUS',
      docente: 'DOCENTE ASIGNADO UPC',
      aula: '302-BLOQ I-INFORMATI',
      estado: 'ACTIVO',
      tieneDocenteAsignado: true,
      tieneRecursoFisicoAsignado: true,
      materiaId: sub.id,
      materiaCodigo: sub.codigo,
      materiaNombre: sub.nombre,
      materiaCreditos: sub.creditos,
      semestreSugerido: sub.semestreSugerido,
      periodoId: 1,
      periodoNombre: '2026-2',
      sesiones: [
        { diaSemana: 'LUNES', horaInicio: '08:00', horaFin: '09:59', aula: '302-BLOQ I-INFORMATI' },
        { diaSemana: 'MIERCOLES', horaInicio: '08:00', horaFin: '09:59', aula: '302-BLOQ I-INFORMATI' },
      ]
    },
    {
      id: baseId + 2,
      numeroGrupo: '02-CAMPUS',
      modalidad: 'PRESENCIAL',
      sede: 'CAMPUS',
      docente: 'DOCENTE ASIGNADO UPC',
      aula: '303-BLOQ I-INFORMATI',
      estado: 'ACTIVO',
      tieneDocenteAsignado: true,
      tieneRecursoFisicoAsignado: true,
      materiaId: sub.id,
      materiaCodigo: sub.codigo,
      materiaNombre: sub.nombre,
      materiaCreditos: sub.creditos,
      semestreSugerido: sub.semestreSugerido,
      periodoId: 1,
      periodoNombre: '2026-2',
      sesiones: [
        { diaSemana: 'MARTES', horaInicio: '10:00', horaFin: '11:59', aula: '303-BLOQ I-INFORMATI' },
        { diaSemana: 'JUEVES', horaInicio: '10:00', horaFin: '11:59', aula: '303-BLOQ I-INFORMATI' },
      ]
    }
  ];
}
