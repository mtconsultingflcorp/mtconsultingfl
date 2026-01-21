export default function Welcome() {
  return (
    <section className="bg-neutral-50 border-b border-neutral-200 py-16">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        
        {/* TÍTULO */}
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
          Soluciones Integrales en <br className="hidden md:block" />
          <span className="text-red-600">Impuestos, Inmigración y Seguros</span>
        </h2>
        
        {/* TEXTO */}
        <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
          <strong>MT CONSULTING FL CORP</strong> es tu punto de apoyo en <span className="text-slate-900 font-bold underline decoration-red-600 decoration-2 underline-offset-4">Kissimmee, Florida</span>. 
          Unificamos servicios de impuestos, trámites migratorios, corporaciones, contabilidad y payroll bajo un mismo techo.
        </p>

        {/* DATOS RÁPIDOS (Iconos) */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-8 pt-8 border-t border-neutral-200">
          <div className="flex items-center gap-2 text-slate-700 font-bold uppercase text-sm tracking-wide">
            <i className="fas fa-map-marker-alt text-red-600"></i> Kissimmee, FL
          </div>
          <div className="flex items-center gap-2 text-slate-700 font-bold uppercase text-sm tracking-wide">
            <i className="fas fa-check-circle text-red-600"></i> Atención Bilingüe
          </div>
          <div className="flex items-center gap-2 text-slate-700 font-bold uppercase text-sm tracking-wide">
            <i className="fas fa-star text-red-600"></i> 5 Años Exp.
          </div>
        </div>

      </div>
    </section>
  );
}
