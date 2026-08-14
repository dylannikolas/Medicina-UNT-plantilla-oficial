import { SectionTitle } from "../../components/ui/SectionTitle";

export default function ResponsabilidadSocial() {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Responsabilidad **Social**"
          center
          subtitle="El modelo de responsabilidad social universitaria asumido por la UNT es fundamentalmente territorial con participación activa y responsable de las comunidades, organizaciones o grupos de interés en la que se incluye la gestión de la formación académica socialmente responsable, la gestión de la investigación socialmente útil y gestión social del conocimiento."
        />
        <div className="max-w-5xl mx-auto mt-12 text-gray-700 font-body space-y-6">
          <p>
            Este eje propicia la actitud de servicio que contribuye al
            mejoramiento de su entorno, a resolver los problemas
            socioculturales, al mejoramiento de las condiciones de vida de sus
            semejantes y al cuidado del medio ambiente.
          </p>
          <p>
            A través de todas las experiencias curriculares, se tendrá en cuenta
            la responsabilidad social y ambiental, en el desarrollo de proyectos
            y actividades específicas del itinerario formativo para consolidar
            su enfoque, interpretación y relación con el mundo en forma social y
            ambientalmente responsable.
          </p>
        </div>
      </div>
    </div>
  );
}
