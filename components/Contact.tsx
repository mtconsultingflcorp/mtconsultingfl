"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        
        {/* TARJETA NEGRA PRINCIPAL */}
        <div className="bg-neutral-900 rounded-[3rem] p-12 md:p-24 text-center overflow-hidden relative shadow-2xl shadow-neutral-900/40">
          
          {/* Decoración de Fondo (Luz Roja) */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none animate-pulse"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              ¿Listo para empezar?
            </h2>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Deja tus trámites en manos expertas. Estamos listos para ayudarte con tus impuestos, inmigración y seguros en Kissimmee.
            </p>
            
            {/* BOTONES DE ACCIÓN */}
            <div className="flex flex-col md:flex-row justify-center gap-6">
              
              {/* Botón WhatsApp */}
              <a 
                href="https://wa.me/14078029204" 
                target="_blank" 
                className="group bg-red-600 hover:bg-red-500 text-white px-8 py-5 rounded-full font-bold transition-all flex items-center justify-center gap-3 shadow-lg shadow-red-900/50 hover:shadow-red-600/50 hover:-translate-y-1"
              >
                {/* SVG WhatsApp */}
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                +1 (407) 802-9204
              </a>

              {/* Botón Email */}
              <a 
                href="mailto:info@mtconsultingfl.com" 
                className="group bg-white text-neutral-900 px-8 py-5 rounded-full font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-3 hover:-translate-y-1"
              >
                {/* SVG Email */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-red-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                info@mtconsultingfl.com
              </a>

            </div>
            
            {/* DIRECCIÓN CON ENLACE A MAPS */}
            <div className="mt-16 pt-8 border-t border-neutral-800">
              <a 
                href="https://maps.google.com/?q=421+W+Vine+St,+Kissimmee,+FL+34741" 
                target="_blank"
                className="text-gray-400 text-sm font-bold uppercase tracking-widest inline-flex items-center justify-center gap-3 hover:text-white transition-colors"
              >
                <span className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center text-red-500">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </span>
                421 W Vine St, Kissimmee, Florida 34741
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}