import type { SiteConfig } from "@/profile-types";

/**
 * Identidad del programa de estudios. Editar este archivo (y `branding.ts`) cubre
 * la mayor parte de la re-tematización para un programa nuevo.
 *
 * Los textos de abajo son PLANTILLA: describen qué va en cada campo. Reemplázalos
 * por los datos de tu programa.
 */
export const site: SiteConfig = {
  programa: {
    nombre: "Programa de Estudios de medicina",
    nombreCorto: "medicina",
  },
  universidad: {
    nombre: "Universidad Nacional de Trujillo",
    siglas: "UNT",
    url: "#",
    // Dominio para acotar el buscador del navbar (site:dominio). Déjalo vacío
    // para una búsqueda general en Google.
    dominio: "",
  },
  facultad: "Facultad de Medicina",

  // Denominación del tipo de unidad académica. Se usa en subtítulos genéricos.
  denominacion: "Medicina",

  // Wordmark del navbar: se muestra en dos líneas (línea 1 en azul, línea 2 en dorado).
  wordmark: { linea1: "Escuela de", linea2: "Medicina" },

  tagline:
    "Nuestra visión es consolidar una Escuela de Medicina moderna, abierta al cambio, alineada con los estándares nacionales e internacionales de calidad.",

  hero: {
    eyebrow: "Programa de Estudios de Medicina",
    titulo: { linea1: "Escuela de", linea2: "Medicina" },
    descripcion:
      "Nuestra visión es consolidar una Escuela de Medicina moderna, abierta al cambio, alineada con los estándares nacionales e internacionales de calidad.",
    ctas: {
      primary: {
        label: "Ver Plan de Estudios",
        to: "/academico/malla-curricular",
      },
      secondary: { label: "Perfiles académicos", to: "/academico/perfiles" },
    },
  },

  // Sello de acreditación (badge del hero). Si tu programa no está acreditado,
  // pon `mostrarSello: false` y ajusta `estado`.
  acreditacion: {
    entidad: "Entidad Acreditadora",
    estado: "acreditada",
    texto: "Acreditada por la Entidad",
    mostrarSello: true,
  },

  // Cifras destacadas de la franja del hero. Reemplaza números y etiquetas.
  cifras: [
    {
      numero: "+75",
      etiqueta: "Años de exelencia académica",
      sub: "Creando profesionales de la salud altamente capacitados y comprometidos con la sociedad.",
    },
    {
      numero: "+100",
      etiqueta: "vacantes de ingreso anuales",
      sub: "Vacantes en la cede central, para formar a los futuros médicos de la región y el país.",
    },
    {
      numero: "95%",
      etiqueta: "Taza de titulación",
      sub: "Porcentaje estimado de egresados de la escuela de Medicina",
    },
  ],

  decana: {
    nombre: "Dr. José Gustavo Gonzáles Zavala.",
    cargo: "Director de la escuela de Medicina",
    mensaje:
      "Les doy la más cordial bienvenida al portal web de la Escuela Profesional de Medicina de la Facultad de Medicina de la Universidad Nacional de Trujillo. Este espacio ha sido concebido como un punto de encuentro para estudiantes, docentes, egresados, personal administrativo y toda la comunidad interesada en nuestra Escuela. Aquí encontrarán información académica, actividades institucionales, oportunidades de formación e iniciativas que reflejan nuestro compromiso con una educación médica de calidad. Asumo la Dirección de la Escuela con la convicción de que la excelencia no se alcanza únicamente mediante el prestigio de nuestra historia, sino a través del trabajo diario, la transparencia en la gestión, la innovación permanente y la mejora continua. Somos conscientes de los desafíos que enfrenta la educación médica en el siglo XXI y de la responsabilidad que tenemos de formar médicos con sólidas competencias científicas, profundo sentido ético, pensamiento crítico, capacidad de investigación y genuino compromiso con la sociedad. Nuestra visión es consolidar una Escuela de Medicina moderna, abierta al cambio, alineada con los estándares nacionales e internacionales de calidad, que promueva la innovación educativa, la investigación y la transformación digital, sin perder el humanismo que distingue a la profesión médica. Este objetivo solo será posible con la participación de toda nuestra comunidad universitaria. Creemos en el trabajo colaborativo, en el diálogo permanente y en una gestión basada en la evidencia, la planificación y la mejora continua. Los invito a ser parte de este proceso de transformación y crecimiento institucional. Juntos construiremos una Escuela de Medicina que honre el legado de nuestra Universidad y responda con excelencia a las necesidades de salud de nuestro país. Sean todos bienvenidos.",
    // ID del video de YouTube para el mensaje de bienvenida. Déjalo vacío hasta
    // tener el video de tu programa; al ponerlo, el reproductor aparece solo.
    video: { youtubeId: "", start: 0 },
  },

  enlaces: {
    libroReclamaciones: "https://reclamos.servicios.gob.pe/?institution_id=247",
    bolsaTrabajo: "https://use-dpa.unitru.edu.pe/bolsadetrabajo",
  },

  enlacesInstitucionales: [
    {
      label: "Sistema universitario virtual de la UNT",
      url: "https://www.suv2.unitru.edu.pe/index.php",
    },
    {
      label: "Plataforma virtual de la UNT",
      url: "https://aulavirtual2.unitru.edu.pe/login/index.php",
    },
    {
      label: "Sistema de gestión de trámites de la UNT",
      url: "https://tramites-uraa.unitru.edu.pe/sign-in?redirectURL=%2Finicio",
    },
  ],
};
