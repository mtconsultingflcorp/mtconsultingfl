"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decoración de fondo sutil (Blob rojo suave) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
         <div className="absolute top-20 -left-20 w-96 h-96 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* --- COLUMNA IMAGEN --- */}
        <div className="relative">
          {/* Imagen Principal - ALTA DEFINICIÓN (Mantenemos la que te gustó) */}
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative shadow-2xl border-4 border-white">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000" 
              alt="Equipo MT Consulting"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Cuadro Flotante (Actualizado a Soluciones Integrales) */}
          <div className="absolute -bottom-8 -right-4 md:-right-10 bg-red-700 text-white p-8 md:p-10 rounded-tr-[3rem] rounded-bl-[3rem] shadow-xl shadow-red-900/30 animate-fade-in-up">
            {/* Icono decorativo */}
            <div className="text-3xl mb-2 text-white/80"><i className="fas fa-check-circle"></i></div>
            <p className="text-sm font-bold uppercase tracking-widest leading-tight opacity-100">
              Soluciones<br/>Integrales
            </p>
          </div>
        </div>

        {/* --- COLUMNA TEXTO --- */}
        <div>
          {/* Título Pequeño */}
          <h4 className="text-red-600 font-bold uppercase tracking-widest mb-4 text-sm">
            Nosotros
          </h4>
          
          {/* Titular Principal (Derivado de tu texto para impacto visual) */}
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
            Tu aliado de confianza en <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">
              temas financieros y legales.
            </span>
          </h2>

          {/* Texto Principal */}
          <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium text-justify">
            En <strong>MT CONSULTING FL CORP</strong> trabajamos para ser tu aliado de confianza en temas financieros, legales y migratorios. Ofrecemos asesoría personalizada en <strong>impuestos, inmigración, seguros médicos, creación de corporaciones, contabilidad y payroll</strong>, siempre adaptándonos a tus necesidades.
          </p>

          <p className="text-lg text-slate-600 mb-6 leading-relaxed text-justify">
            Estamos en el corazón de Kissimmee, en <strong className="text-red-600">421 W Vine St</strong>, y contamos con un equipo de expertos listos para atenderte con cercanía, profesionalismo y compromiso.
          </p>

          {/* Bloque de Objetivo */}
          <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-red-600 mb-8">
            <p className="text-slate-800 font-bold italic">
              "Nuestro objetivo es darte tranquilidad: soluciones claras, eficientes y sin complicaciones."
            </p>
          </div>

          {/* Lista de Puntos (Inspirada en el final de tu mensaje) */}
          <ul className="space-y-4">
            <li className="flex items-center gap-3 group">
              <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <i className="fas fa-building text-sm"></i>
              </span>
              <span className="text-slate-700 font-bold text-lg">Empresas Asesoradas</span>
            </li>
            <li className="flex items-center gap-3 group">
              <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <i className="fas fa-star text-sm"></i>
              </span>
              <span className="text-slate-700 font-bold text-lg">Soluciones Integrales</span>
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}