export const director = {
  nombre: "Nombre del Director(a)",
  cargo: "Director(a) de Escuela",
  correo: "direccion@universidad.edu.pe",
  bio: "Breve reseña del director(a): grado académico, especialidad y experiencia. Reemplaza este texto por la del director(a) de tu programa.",
  foto: null // Reemplaza por la ruta de la foto o deja null para la silueta
};

export const coordinadores = [
  {
    nombre: "Nombre del Coordinador(a)",
    cargo: "Coordinador(a) Académico",
    correo: "coordinacion.academica@universidad.edu.pe"
  },
  {
    nombre: "Nombre del Coordinador(a)",
    cargo: "Coordinador(a) de Investigación",
    correo: "coordinacion.investigacion@universidad.edu.pe"
  },
  {
    nombre: "Nombre del Coordinador(a)",
    cargo: "Coordinador(a) de Prácticas Preprofesionales",
    correo: "coordinacion.practicas@universidad.edu.pe"
  }
];

// Estructura organizacional de la Facultad de Medicina – UNT
// Según el Estatuto UNT vigente y la estructura oficial de la Facultad.
export const organigrama = {
  nombre: "Consejo de Facultad",
  cargo: "",
  hijos: [
    {
      nombre: "Decanato",
      cargo: "",
      hijos: [
        // ── Órganos de soporte y asesoría (nivel intermedio) ──
        { nombre: "Dirección de Escuela de Medicina", cargo: "" },
        { nombre: "Administración", cargo: "" },
        { nombre: "Dirección de Segunda Especialización en Ciencias Médicas", cargo: "" },
        { nombre: "Comités Permanentes", cargo: "" },

        // ── Unidades dependientes (nivel inferior / línea) ──
        { nombre: "Unidad de Posgrado", cargo: "" },
        { nombre: "Unidad de Investigación", cargo: "" },
        { nombre: "Unidad de Segunda Especialización", cargo: "" },
        { nombre: "Escuela Profesional", cargo: "Director(a) de Escuela" },
        { nombre: "Institutos de Investigación", cargo: "" },
        {
          nombre: "Departamentos Académicos",
          cargo: "Jefe(s) de Departamento",
          hijos: [
            { nombre: "Ciencias Básicas Médicas", cargo: "" },
            { nombre: "Cirugía", cargo: "" },
            { nombre: "Fisiología Humana", cargo: "" },
            { nombre: "Ginecología y Obstetricia", cargo: "" },
            { nombre: "Medicina", cargo: "" },
            { nombre: "Medicina Preventiva y Salud Pública", cargo: "" },
            { nombre: "Morfología Humana", cargo: "" },
            { nombre: "Pediatría", cargo: "" }
          ]
        }
      ]
    }
  ]
};
