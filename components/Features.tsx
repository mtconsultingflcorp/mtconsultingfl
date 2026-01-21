"use client";

export default function Features() {
  return (
    <section id="features" className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      
      {/* Decoración de fondo (Líneas sutiles) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* --- COLUMNA IZQUIERDA (Texto y Estadísticas) --- */}
        <div>
          <h4 className="text-red-500 font-bold uppercase tracking-widest mb-4 text-sm">
            ¿Por qué elegirnos?
          </h4>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Flexibilidad y <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Tranquilidad Total.
            </span>
          </h2>
          <p className="text-gray-400 mb-10 text-lg leading-relaxed max-w-md">
            En Kissimmee, nos destacamos por brindar un servicio excepcional, eliminando la burocracia y simplificando tu vida financiera y legal.
          </p>
          
          {/* Estadísticas Reales */}
          <div className="flex gap-12 border-t border-neutral-800 pt-8">
            <div>
              <div className="text-4xl font-black text-white mb-1">+500</div>
              <div className="text-xs font-bold text-red-500 tracking-[0.2em] uppercase">Clientes Felices</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-1">100%</div>
              <div className="text-xs font-bold text-red-500 tracking-[0.2em] uppercase">Transparencia</div>
            </div>
          </div>
        </div>

        {/* --- COLUMNA DERECHA (Tarjetas Flotantes) --- */}
        <div className="space-y-6">
          
          {/* Tarjeta 1 */}
          <div className="bg-white p-8 rounded-3xl flex gap-6 items-center shadow-xl shadow-black/50 hover:transform hover:-translate-y-2 transition-all duration-300 border-l-8 border-red-600">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-2xl text-red-600 shrink-0">
              <i className="fas fa-handshake"></i> {/* Icono Trato */}
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-xl mb-1">Atención Personalizada</h4>
              <p className="text-slate-500 text-sm font-medium">No eres un número. Diseñamos soluciones a tu medida.</p>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-white p-8 rounded-3xl flex gap-6 items-center shadow-xl shadow-black/50 hover:transform hover:-translate-y-2 transition-all duration-300 border-l-8 border-slate-900">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-2xl text-slate-900 shrink-0">
              <i className="fas fa-certificate"></i> {/* Icono Experiencia */}
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-xl mb-1">Amplia Experiencia</h4>
              <p className="text-slate-500 text-sm font-medium">Gestión eficiente en impuestos, inmigración y corporaciones.</p>
            </div>
          </div>

           {/* Tarjeta 3 (Extra) */}
           <div className="bg-white p-8 rounded-3xl flex gap-6 items-center shadow-xl shadow-black/50 hover:transform hover:-translate-y-2 transition-all duration-300 border-l-8 border-gray-400">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-2xl text-gray-600 shrink-0">
              <i className="fas fa-globe-americas"></i> {/* Icono Bilingüe */}
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-xl mb-1">Servicio Bilingüe</h4>
              <p className="text-slate-500 text-sm font-medium">Te atendemos en tu idioma para que entiendas cada paso.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}