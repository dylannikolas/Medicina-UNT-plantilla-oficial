import type { Edge } from "reactflow";

// Datos del plan de estudios de la escuela (contenido del perfil).
// El componente MallaFlow (sistema) consume estos datos vía @profile/content/malla.

// ── Tipos ──────────────────────────────────────────────────────────────────
export type AreaType = "general" | "especifico" | "especialidad";

export interface CourseData {
  id: string;
  name: string;
  type: AreaType;
  credits: number;
  hoursT: number;
  hoursP: number;
  cycle: string;
  isElective: boolean;
  description: string;
}

// ── Datos del plan de estudios (EJEMPLO de plantilla: Educación Primaria) ────
export const CURRICULUM_DATA: CourseData[] = [
  // CICLO I
  {
    id: "1892",
    name: "Desarrollo Personal",
    type: "general",
    credits: 3,
    hoursT: 2,
    hoursP: 2,
    cycle: "Ciclo I",
    isElective: false,
    description: "Ciencias Psicológicas",
  },
  {
    id: "1897",
    name: "Desarrollo del Pensamiento Lógico Matemático",
    type: "general",
    credits: 3,
    hoursT: 2,
    hoursP: 2,
    cycle: "Ciclo I",
    isElective: false,
    description: "Matemáticas",
  },
  {
    id: "1856",
    name: "Gestión de los Aprendizajes",
    type: "general",
    credits: 3,
    hoursT: 2,
    hoursP: 2,
    cycle: "Ciclo I",
    isElective: false,
    description: "Morfología Humana",
  },
  {
    id: "1901",
    name: "Lectura Crítica y Redacción de Textos Académicos",
    type: "general",
    credits: 3,
    hoursT: 2,
    hoursP: 2,
    cycle: "Ciclo I",
    isElective: false,
    description: "Lengua Nacional y Literatura",
  },
  {
    id: "1998",
    name: "Biología Molecular y Celular",
    type: "especifico",
    credits: 5,
    hoursT: 3,
    hoursP: 4,
    cycle: "Ciclo I",
    isElective: false,
    description: "Morfología Humana",
  },
  {
    id: "1915",
    name: "Química General",
    type: "especifico",
    credits: 4,
    hoursT: 2,
    hoursP: 4,
    cycle: "Ciclo I",
    isElective: false,
    description: "Bioquímica",
  },
  {
    id: "1891",
    name: "Taller de Música (Electivo)",
    type: "general",
    credits: 2,
    hoursT: 0,
    hoursP: 4,
    cycle: "Ciclo I",
    isElective: true,
    description: "Filosofía y Arte",
  },

  // CICLO II
  {
    id: "1925",
    name: "Sociedad, Cultura y Ecología",
    type: "general",
    credits: 3,
    hoursT: 2,
    hoursP: 2,
    cycle: "Ciclo II",
    isElective: false,
    description: "Medicina Preventiva y Salud Pública",
  },
  {
    id: "1926",
    name: "Cultura Investigativa y Pensamiento Crítico",
    type: "general",
    credits: 3,
    hoursT: 2,
    hoursP: 2,
    cycle: "Ciclo II",
    isElective: false,
    description: "Morfología Humana",
  },
  {
    id: "1927",
    name: "Ética, Convivencia Humana y Ciudadanía",
    type: "general",
    credits: 3,
    hoursT: 2,
    hoursP: 2,
    cycle: "Ciclo II",
    isElective: false,
    description: "Medicina",
  },
  {
    id: "1862",
    name: "Identidad Cultural Regional, Nacional e Internacional",
    type: "general",
    credits: 3,
    hoursT: 2,
    hoursP: 2,
    cycle: "Ciclo II",
    isElective: false,
    description: "Arqueología y Antropología",
  },
  {
    id: "2053",
    name: "Genética Médica",
    type: "especifico",
    credits: 5,
    hoursT: 3,
    hoursP: 4,
    cycle: "Ciclo II",
    isElective: false,
    description: "Morfología Humana",
  },
  {
    id: "1877",
    name: "Embriología",
    type: "especifico",
    credits: 4,
    hoursT: 2,
    hoursP: 4,
    cycle: "Ciclo II",
    isElective: false,
    description: "Morfología Humana",
  },
  {
    id: "1910",
    name: "Taller de Música (Electivo)",
    type: "general",
    credits: 2,
    hoursT: 0,
    hoursP: 4,
    cycle: "Ciclo II",
    isElective: true,
    description: "Filosofía y Arte",
  },

  // CICLO III
  {
    id: "2355",
    name: "Biofísica Médica",
    type: "especifico",
    credits: 3,
    hoursT: 2,
    hoursP: 2,
    cycle: "Ciclo III",
    isElective: false,
    description: "Ciencias Básicas Médicas",
  },
  {
    id: "2356",
    name: "Bioestadística I",
    type: "especifico",
    credits: 3,
    hoursT: 2,
    hoursP: 2,
    cycle: "Ciclo III",
    isElective: false,
    description: "Estadística",
  },
  {
    id: "2357",
    name: "Psicología Médica",
    type: "especifico",
    credits: 3,
    hoursT: 2,
    hoursP: 2,
    cycle: "Ciclo III",
    isElective: false,
    description: "Medicina",
  },
  {
    id: "2359",
    name: "Anatomía",
    type: "especifico",
    credits: 14,
    hoursT: 6,
    hoursP: 16,
    cycle: "Ciclo III",
    isElective: false,
    description: "Morfología Humana",
  },
  {
    id: "2360",
    name: "Histología",
    type: "especifico",
    credits: 12,
    hoursT: 6,
    hoursP: 12,
    cycle: "Ciclo III",
    isElective: false,
    description: "Morfología Humana",
  },
  {
    id: "2353",
    name: "Deporte (Electivo)",
    type: "general",
    credits: 1,
    hoursT: 0,
    hoursP: 2,
    cycle: "Ciclo III",
    isElective: true,
    description: "Salud Familiar y Comunitaria",
  },

  // CICLO IV
  {
    id: "2667",
    name: "Bioestadística II",
    type: "especifico",
    credits: 3,
    hoursT: 2,
    hoursP: 2,
    cycle: "Ciclo IV",
    isElective: false,
    description: "Estadística",
  },
  {
    id: "2668",
    name: "Inmunología",
    type: "especifico",
    credits: 3,
    hoursT: 2,
    hoursP: 2,
    cycle: "Ciclo IV",
    isElective: false,
    description: "Ciencias Básicas Médicas",
  },
  {
    id: "2669",
    name: "Investigación en Medicina I",
    type: "especifico",
    credits: 3,
    hoursT: 2,
    hoursP: 2,
    cycle: "Ciclo IV",
    isElective: false,
    description: "Ciencias Básicas Médicas",
  },
  {
    id: "2358",
    name: "Salud y Comunidad I",
    type: "especifico",
    credits: 4,
    hoursT: 2,
    hoursP: 4,
    cycle: "Ciclo IV",
    isElective: false,
    description: "Medicina Preventiva y Salud Pública",
  },
  {
    id: "2354",
    name: "Arte (Electivo)",
    type: "general",
    credits: 1,
    hoursT: 0,
    hoursP: 2,
    cycle: "Ciclo IV",
    isElective: true,
    description: "Filosofía y Arte",
  },

  // CICLO V
  {
    id: "2671",
    name: "Fisiología y Fisiopatología",
    type: "especifico",
    credits: 10,
    hoursT: 5,
    hoursP: 10,
    cycle: "Ciclo V",
    isElective: false,
    description: "Fisiología Humana",
  },
  {
    id: "2672",
    name: "Bioquímica",
    type: "especifico",
    credits: 8,
    hoursT: 4,
    hoursP: 8,
    cycle: "Ciclo V",
    isElective: false,
    description: "Ciencias Básicas Médicas",
  },
  {
    id: "2673",
    name: "Investigación en Medicina II",
    type: "especifico",
    credits: 3,
    hoursT: 2,
    hoursP: 2,
    cycle: "Ciclo V",
    isElective: false,
    description: "Fisiología Humana",
  },
  {
    id: "2670",
    name: "Salud y Comunidad II",
    type: "especifico",
    credits: 4,
    hoursT: 2,
    hoursP: 4,
    cycle: "Ciclo V",
    isElective: false,
    description: "Medicina Preventiva y Salud Pública",
  },
  {
    id: "2676",
    name: "Deporte (Electivo)",
    type: "general",
    credits: 1,
    hoursT: 0,
    hoursP: 2,
    cycle: "Ciclo V",
    isElective: true,
    description: "Salud Familiar y Comunitaria",
  },

  // CICLO VI
  {
    id: "2674",
    name: "Microbiología y Parasitología",
    type: "especifico",
    credits: 8,
    hoursT: 4,
    hoursP: 8,
    cycle: "Ciclo VI",
    isElective: false,
    description: "Ciencias Básicas Médicas",
  },
  {
    id: "2675",
    name: "Farmacología Básica",
    type: "especifico",
    credits: 8,
    hoursT: 4,
    hoursP: 8,
    cycle: "Ciclo VI",
    isElective: false,
    description: "Ciencias Básicas Médicas",
  },
  {
    id: "2677",
    name: "Arte (Electivo)",
    type: "general",
    credits: 1,
    hoursT: 0,
    hoursP: 2,
    cycle: "Ciclo VI",
    isElective: true,
    description: "Filosofía y Arte",
  },

  // CICLO VII
  {
    id: "3555",
    name: "Imagenología",
    type: "especifico",
    credits: 4,
    hoursT: 2,
    hoursP: 4,
    cycle: "Ciclo VII",
    isElective: false,
    description: "Medicina",
  },
  {
    id: "3556",
    name: "Laboratorio",
    type: "especifico",
    credits: 3,
    hoursT: 1,
    hoursP: 4,
    cycle: "Ciclo VII",
    isElective: false,
    description: "Medicina",
  },
  {
    id: "3557",
    name: "Patología",
    type: "especifico",
    credits: 7,
    hoursT: 3,
    hoursP: 8,
    cycle: "Ciclo VII",
    isElective: false,
    description: "Medicina",
  },

  // CICLO VIII
  {
    id: "3558",
    name: "Nutrición Humana",
    type: "especifico",
    credits: 4,
    hoursT: 2,
    hoursP: 4,
    cycle: "Ciclo VIII",
    isElective: false,
    description: "Ciencias Básicas Médicas",
  },
  {
    id: "3559",
    name: "Epidemiología",
    type: "especifico",
    credits: 5,
    hoursT: 2,
    hoursP: 6,
    cycle: "Ciclo VIII",
    isElective: false,
    description: "Medicina Preventiva y Salud Pública",
  },
  {
    id: "3560",
    name: "Investigación en Medicina III",
    type: "especifico",
    credits: 3,
    hoursT: 2,
    hoursP: 2,
    cycle: "Ciclo VIII",
    isElective: false,
    description: "Medicina",
  },
  {
    id: "3561",
    name: "Medicina I",
    type: "especifico",
    credits: 21,
    hoursT: 8,
    hoursP: 26,
    cycle: "Ciclo VIII",
    isElective: false,
    description: "Medicina",
  },
  {
    id: "3562",
    name: "Deporte (Electivo)",
    type: "general",
    credits: 1,
    hoursT: 0,
    hoursP: 2,
    cycle: "Ciclo VIII",
    isElective: true,
    description: "Salud Familiar y Comunitaria",
  },

  // CICLO IX
  {
    id: "3689",
    name: "Propedéutica Oncológica",
    type: "especifico",
    credits: 2,
    hoursT: 1,
    hoursP: 2,
    cycle: "Ciclo IX",
    isElective: false,
    description: "Medicina",
  },
  {
    id: "3683",
    name: "Investigación en Medicina IV",
    type: "especifico",
    credits: 4,
    hoursT: 2,
    hoursP: 4,
    cycle: "Ciclo IX",
    isElective: false,
    description: "Medicina",
  },
  {
    id: "3684",
    name: "Neurología Clínica",
    type: "especifico",
    credits: 4,
    hoursT: 2,
    hoursP: 4,
    cycle: "Ciclo IX",
    isElective: false,
    description: "Medicina",
  },
  {
    id: "3685",
    name: "Medicina II",
    type: "especifico",
    credits: 7,
    hoursT: 3,
    hoursP: 8,
    cycle: "Ciclo IX",
    isElective: false,
    description: "Medicina",
  },
  {
    id: "3686",
    name: "Cirugía I",
    type: "especifico",
    credits: 7,
    hoursT: 3,
    hoursP: 8,
    cycle: "Ciclo IX",
    isElective: false,
    description: "Cirugía",
  },
  {
    id: "3687",
    name: "Pediatría I",
    type: "especifico",
    credits: 7,
    hoursT: 3,
    hoursP: 8,
    cycle: "Ciclo IX",
    isElective: false,
    description: "Pediatría",
  },
  {
    id: "3688",
    name: "Ginecología-Obstetricia I",
    type: "especifico",
    credits: 7,
    hoursT: 3,
    hoursP: 8,
    cycle: "Ciclo IX",
    isElective: false,
    description: "Ginecología y Obstetricia",
  },

  // CICLO X
  {
    id: "3690",
    name: "Administración en Salud",
    type: "especifico",
    credits: 4,
    hoursT: 2,
    hoursP: 4,
    cycle: "Ciclo X",
    isElective: false,
    description: "Medicina Preventiva y Salud Pública",
  },

  // CICLO XI
  {
    id: "3691",
    name: "Ética, Medicina Legal",
    type: "especifico",
    credits: 3,
    hoursT: 2,
    hoursP: 2,
    cycle: "Ciclo XI",
    isElective: false,
    description: "Medicina",
  },
  {
    id: "3692",
    name: "Farmacología Clínica",
    type: "especifico",
    credits: 4,
    hoursT: 2,
    hoursP: 4,
    cycle: "Ciclo XI",
    isElective: false,
    description: "Ciencias Básicas Médicas",
  },
  {
    id: "3693",
    name: "Investigación en Medicina V",
    type: "especifico",
    credits: 3,
    hoursT: 2,
    hoursP: 2,
    cycle: "Ciclo XI",
    isElective: false,
    description: "Medicina",
  },
  {
    id: "3694",
    name: "Psiquiatría",
    type: "especifico",
    credits: 4,
    hoursT: 2,
    hoursP: 4,
    cycle: "Ciclo XI",
    isElective: false,
    description: "Medicina",
  },
  {
    id: "3695",
    name: "Medicina III",
    type: "especifico",
    credits: 7,
    hoursT: 3,
    hoursP: 8,
    cycle: "Ciclo XI",
    isElective: false,
    description: "Medicina",
  },
  {
    id: "3696",
    name: "Cirugía II",
    type: "especifico",
    credits: 7,
    hoursT: 3,
    hoursP: 8,
    cycle: "Ciclo XI",
    isElective: false,
    description: "Cirugía",
  },
  {
    id: "3697",
    name: "Pediatría II",
    type: "especifico",
    credits: 7,
    hoursT: 3,
    hoursP: 8,
    cycle: "Ciclo XI",
    isElective: false,
    description: "Pediatría",
  },
  {
    id: "3698",
    name: "Ginecología-Obstetricia II",
    type: "especifico",
    credits: 7,
    hoursT: 3,
    hoursP: 8,
    cycle: "Ciclo XI",
    isElective: false,
    description: "Ginecología y Obstetricia",
  },
  {
    id: "3699",
    name: "Gerencia en Salud",
    type: "especifico",
    credits: 4,
    hoursT: 2,
    hoursP: 4,
    cycle: "Ciclo XI",
    isElective: false,
    description: "Medicina Preventiva y Salud Pública",
  },

  // CICLO XII
  {
    id: "3700",
    name: "Medicina (Internado)",
    type: "especifico",
    credits: 16,
    hoursT: 0,
    hoursP: 32,
    cycle: "Ciclo XII",
    isElective: false,
    description: "Medicina",
  },
  {
    id: "3701",
    name: "Cirugía (Internado)",
    type: "especifico",
    credits: 16,
    hoursT: 0,
    hoursP: 32,
    cycle: "Ciclo XII",
    isElective: false,
    description: "Cirugía",
  },
  {
    id: "3702",
    name: "Pediatría (Internado)",
    type: "especifico",
    credits: 16,
    hoursT: 0,
    hoursP: 32,
    cycle: "Ciclo XII",
    isElective: false,
    description: "Pediatría",
  },
  {
    id: "3703",
    name: "Ginecología y Obstetricia (Internado)",
    type: "especifico",
    credits: 16,
    hoursT: 0,
    hoursP: 32,
    cycle: "Ciclo XII",
    isElective: false,
    description: "Ginecología y Obstetricia",
  },
];

// Líneas de prerrequisitos (muestra de flujos lógicos)
export const PREREQUISITES_EDGES: Edge[] = [
  // Prerrequisitos de Ciclo I y II hacia III
  {
    id: "e-1",
    source: "1998",
    target: "2359",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Bio. Mol. -> Anatomía
  {
    id: "e-2",
    source: "2053",
    target: "2359",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Genética -> Anatomía
  {
    id: "e-3",
    source: "1998",
    target: "2360",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Bio. Mol. -> Histología
  {
    id: "e-4",
    source: "2053",
    target: "2360",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Genética -> Histología
  {
    id: "e-5",
    source: "1877",
    target: "2360",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Embriología -> Histología

  // Prerrequisitos de Ciclo III hacia IV
  {
    id: "e-6",
    source: "2669",
    target: "2673",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Inv. I -> Inv. II
  {
    id: "e-7",
    source: "2358",
    target: "2670",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Salud I -> Salud II

  // Prerrequisitos hacia Ciclo V
  {
    id: "e-8",
    source: "2359",
    target: "2671",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Anatomía -> Fisiología
  {
    id: "e-9",
    source: "2360",
    target: "2671",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Histología -> Fisiología
  {
    id: "e-10",
    source: "1915",
    target: "2672",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Química -> Bioquímica
  {
    id: "e-11",
    source: "2355",
    target: "2672",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Biofísica -> Bioquímica
  {
    id: "e-12",
    source: "1998",
    target: "2672",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Bio. Mol. -> Bioquímica

  // Prerrequisitos hacia Ciclo VI
  {
    id: "e-13",
    source: "2359",
    target: "2674",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Anatomía -> Micro.
  {
    id: "e-14",
    source: "2360",
    target: "2674",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Histología -> Micro.

  // Prerrequisitos hacia Ciclo VII
  {
    id: "e-15",
    source: "2355",
    target: "3555",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Biofísica -> Imagenología
  {
    id: "e-16",
    source: "2359",
    target: "3555",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Anatomía -> Imagenología
  {
    id: "e-17",
    source: "2672",
    target: "3556",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Bioquímica -> Lab.
  {
    id: "e-18",
    source: "2671",
    target: "3556",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Fisiología -> Lab.
  {
    id: "e-19",
    source: "2359",
    target: "3557",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Anatomía -> Patología
  {
    id: "e-20",
    source: "2360",
    target: "3557",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Histología -> Patología

  // Prerrequisitos hacia Ciclo VIII
  {
    id: "e-21",
    source: "2672",
    target: "3558",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Bioquímica -> Nutrición
  {
    id: "e-22",
    source: "2671",
    target: "3558",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Fisiología -> Nutrición
  {
    id: "e-23",
    source: "2670",
    target: "3559",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Salud II -> Epidemiología
  {
    id: "e-24",
    source: "2673",
    target: "3560",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Inv. II -> Inv. III
  {
    id: "e-25",
    source: "2671",
    target: "3561",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Fisiología -> Medicina I

  // Prerrequisitos finales
  {
    id: "e-26",
    source: "3561",
    target: "3689",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Med I -> Propedéutica
  {
    id: "e-27",
    source: "3560",
    target: "3683",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Inv. III -> Inv. IV
  {
    id: "e-28",
    source: "3561",
    target: "3684",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Med I -> Neurología
  {
    id: "e-29",
    source: "3561",
    target: "3685",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Med I -> Med II
  {
    id: "e-30",
    source: "3561",
    target: "3686",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Med I -> Cirugía I
  {
    id: "e-31",
    source: "3561",
    target: "3687",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Med I -> Pediatría I
  {
    id: "e-32",
    source: "3561",
    target: "3688",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Med I -> Ginecología I
  {
    id: "e-33",
    source: "3559",
    target: "3690",
    style: { stroke: "#f97316", strokeWidth: 2 },
  }, // Epidemiología -> Admin.
];

export const CYCLE_COLUMNS: Record<string, number> = {
  "Ciclo I": 0,
  "Ciclo II": 320,
  "Ciclo III": 640,
  "Ciclo IV": 960,
  "Ciclo V": 1280,
  "Ciclo VI": 1600,
  "Ciclo VII": 1920,
  "Ciclo VIII": 2240,
  "Ciclo IX": 2560,
  "Ciclo X": 2880,
  "Ciclo XI": 3200,
  "Ciclo XII": 3520,
};
