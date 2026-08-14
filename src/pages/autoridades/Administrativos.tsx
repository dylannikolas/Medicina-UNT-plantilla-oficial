import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { administrativos } from '@profile/content/administrativos';
import { Search, User, Briefcase, BadgeCheck, FileText } from 'lucide-react';

/**
 * AdministrativoCard — Tarjeta del personal administrativo.
 * Muestra nombre, cargo, condición laboral y tipo de contrato.
 * Diseño coherente con DocenteCard pero sin flip (no hay especialidades).
 */
function AdministrativoCard({ admin }: { admin: typeof administrativos[number] }) {
  // Badge color según condición
  const badgeColor =
    admin.condicion === 'Nombrado' || admin.condicion === 'Nombrada'
      ? 'bg-emerald-100 text-emerald-700'
      : admin.condicion === 'Indeterminado'
        ? 'bg-amber-100 text-amber-700'
        : 'bg-sky-100 text-sky-700';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-gold/30 transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Franja superior con avatar */}
      <div className="relative bg-gradient-to-br from-primary to-primary pt-6 pb-10 flex justify-center items-end shrink-0">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        />
        <div className="relative w-20 h-24 bg-white overflow-hidden border-4 border-white/20 shadow-xl rounded-sm">
          <div className="w-full h-full bg-gray-100 flex items-end justify-center">
            <User className="w-16 h-16 text-gray-300 -mb-1.5" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-5 text-center gap-3">
        {/* Badge condición */}
        <span
          className={`self-center px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${badgeColor}`}
        >
          {admin.condicion}
        </span>

        {/* Nombre */}
        <h4 className="font-display font-bold text-primary text-sm leading-tight">
          {admin.nombre}
        </h4>

        <div className="border-t border-gray-100" />

        {/* Cargo */}
        <div className="flex items-start gap-2 text-left">
          <Briefcase className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
          <p className="text-gray-600 text-xs leading-relaxed">{admin.cargo}</p>
        </div>

        {/* Tipo de contrato */}
        <div className="flex items-start gap-2 text-left">
          <FileText className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
          <p className="text-gray-500 text-[11px] leading-relaxed">{admin.tipoContrato}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Administrativos() {
  const [condicion, setCondicion] = useState('Todos');
  const [query, setQuery] = useState('');

  // Condiciones únicas para los filtros
  const condiciones = useMemo(() => {
    const set = new Set(administrativos.map((a) => a.condicion).filter(Boolean));
    return ['Todos', ...set];
  }, []);

  const filtrados = useMemo(() => {
    const q = query.trim().toLowerCase();
    return administrativos.filter((a) => {
      const okCond = condicion === 'Todos' || a.condicion === condicion;
      const okQuery =
        !q || a.nombre.toLowerCase().includes(q) || a.cargo.toLowerCase().includes(q);
      return okCond && okQuery;
    });
  }, [condicion, query]);

  return (
    <div className="bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Personal **Administrativo**"
          subtitle="Equipo comprometido con la gestión y el soporte de la Facultad de Medicina."
          center
        />

        {/* Filtros: condición + búsqueda */}
        <div className="mt-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por condición">
            {condiciones.map((cond) => (
              <button
                key={cond}
                type="button"
                onClick={() => setCondicion(cond)}
                aria-pressed={condicion === cond}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                  condicion === cond
                    ? 'bg-primary text-white'
                    : 'bg-white text-primary border border-gray-200 hover:border-gold/50'
                }`}
              >
                {cond}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              aria-hidden="true"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por nombre o cargo..."
              aria-label="Buscar administrativo"
              className="w-full pl-9 pr-3 py-2 text-base rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>

        {/* Contador */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Mostrando <span className="font-semibold text-primary">{filtrados.length}</span> de{' '}
          <span className="font-semibold">{administrativos.length}</span> administrativos
        </p>

        {filtrados.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-8 max-w-7xl mx-auto">
            {filtrados.map((admin, idx) => (
              <AdministrativoCard key={`${admin.nombre}-${idx}`} admin={admin} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-12">
            No se encontraron administrativos con esos criterios. Prueba con otra condición o
            búsqueda.
          </p>
        )}
      </div>
    </div>
  );
}
