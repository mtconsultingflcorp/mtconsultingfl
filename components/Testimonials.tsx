"use client";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-black relative overflow-hidden">
      
      {/* Fondo decorativo (Luz roja central) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          <h4 className="text-red-600 font-bold uppercase tracking-widest mb-2 text-sm">Testimonios</h4>
          <h2 className="text-4xl font-black text-white">Clientes Felices</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>
        </div>
        
        {/* GRID DE TESTIMONIOS */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Tarjeta 1 */}
          <div className="bg-neutral-900 p-10 rounded-3xl border border-neutral-800 hover:border-red-600 transition-all duration-300 group relative">
            {/* Icono de Comillas Gigante */}
            <div className="absolute top-6 right-8 text-6xl font-serif text-neutral-800 opacity-50 group-hover:text-red-900/50 transition-colors">
              "
            </div>
            
            {/* Estrellas */}
            <div className="flex gap-1 text-yellow-500 mb-6 text-sm">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              ))}
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">Excelente servicio</h3>
            <p className="text-gray-400 mb-8 leading-relaxed font-medium">
              "Gracias a MT CONSULTING, gestioné mis impuestos rápido y sin complicaciones. El equipo fue muy atento y resolvieron todas mis dudas al instante."
            </p>
            
            {/* Usuario */}
            <div className="flex items-center gap-4 border-t border-neutral-800 pt-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                AB
              </div>
              <div>
                <h4 className="font-bold text-white">Aleesha Brown</h4>
                <span className="text-gray-500 text-xs uppercase tracking-wider">United States</span>
              </div>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-neutral-900 p-10 rounded-3xl border border-neutral-800 hover:border-red-600 transition-all duration-300 group relative">
            {/* Icono de Comillas Gigante */}
            <div className="absolute top-6 right-8 text-6xl font-serif text-neutral-800 opacity-50 group-hover:text-red-900/50 transition-colors">
              "
            </div>

            {/* Estrellas */}
            <div className="flex gap-1 text-yellow-500 mb-6 text-sm">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              ))}
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">Servicio de primera</h3>
            <p className="text-gray-400 mb-8 leading-relaxed font-medium">
              "La asesoría en inmigración fue excepcional. Me guiaron paso a paso, haciéndome sentir seguro en todo el proceso. Altamente recomendados."
            </p>
            
            {/* Usuario */}
            <div className="flex items-center gap-4 border-t border-neutral-800 pt-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                AL
              </div>
              <div>
                <h4 className="font-bold text-white">Anderson Lugo</h4>
                <span className="text-gray-500 text-xs uppercase tracking-wider">United States</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}