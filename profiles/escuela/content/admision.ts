// Contenido del panel lateral de Admisión (FloatingAdmissions).
// Las modalidades se muestran como tarjetas (en el orden de la lista).

export interface ModalidadAdmision {
  titulo: string;
  dirigidoA: string;
  vacantes: string;
  descripcion: string;
}

export interface InfoUtilItem {
  titulo: string;
  detalle: string;
}

export const modalidadesAdmision: ModalidadAdmision[] = [
  {
    titulo: "Examen ordinario",
    dirigidoA: "Publico en general",
    vacantes: "Aprox. 24 vacantes",
    descripcion: "Modalidad de ingreso para el público en general.",
  },
  {
    titulo: "CEPUNT",
    dirigidoA: "Estudiantes de CEPUNT",
    vacantes: "Aprox. 18 vacantes",
    descripcion:
      "Modalidad de ingreso para estudiantes del centro preuniversitario.",
  },
  {
    titulo: "Personas con discapacidad",
    dirigidoA: "A personas con discapacidad.",
    vacantes: "Aprox. 02 vacantes",
    descripcion: "Modalidad de ingreso para personas con discapacidad.",
  },
  {
    titulo: "Quinto de secundaria",
    dirigidoA: "A estudiantes de quinto de secundaria.",
    vacantes: "Aprox. 03 vacantes",
    descripcion:
      "Modalidad de ingreso para estudiantes de quinto de secundaria.",
  },
  {
    titulo: "Premios de excelencia",
    dirigidoA: "A estudiantes con mérito académico.",
    vacantes: "Aprox. 04 vacantes",
    descripcion: "Modalidad de ingreso para estudiantes con mérito académico.",
  },
];

export const infoUtilAdmision: InfoUtilItem[] = [
  {
    titulo: "Requisitos",
    detalle:
      "Al precenstarse al examen de admisión, el postulante debe cumplir con los requisitos establecidos por la universidad.",
  },
  {
    titulo: "Fechas",
    detalle:
      "Las fechas de inscripción y examen de admisión se publicarán en el portal oficial de la universidad.",
  },
];

// Botón inferior: portal oficial de admisión de la universidad.
export const portalAdmision = {
  label: "Portal de Admisión",
  url: "https://www.admisionunt.info/",
};
