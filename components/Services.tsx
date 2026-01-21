"use client";

import Image from "next/image";

// DATOS DE LOS SERVICIOS (Imágenes estables)
const services = [
  {
    title: "Taxes Personales y de Corporación",
    // Imagen: Calculadora y finanzas
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    desc: "Ofrecemos un servicio integral de preparación y presentación de impuestos para individuos y corporaciones, asegurando el cumplimiento fiscal y maximizando tus beneficios."
  },
  {
    title: "Inmigración",
    // Imagen: Pasaporte USA (Link Estable)
    image: "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?auto=format&fit=crop&q=80&w=800",
    desc: "Nos encargamos de completar todas las solicitudes y formularios para tus trámites migratorios, ofreciéndote asesoría personalizada para un proceso ágil y seguro."
  },
  {
    title: "Seguros Médicos",
    // Imagen: Salud y familia
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    desc: "Protege tu salud y la de tu familia con nuestros planes de seguros médicos integrales, diseñados para adaptarse a tus necesidades y presupuesto."
  },
  {
    title: "Corporaciones",
    // Imagen: Edificios y negocios
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    desc: "Te acompañamos en la formación y gestión de tu corporación, garantizando el cumplimiento de requisitos para que tu empresa crezca con bases sólidas."
  },
  {
    title: "Contabilidad",
    // Imagen: Tecnología financiera
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    desc: "Brindamos servicios de contabilidad profesional para mantener tus finanzas en orden con precisión y confianza."
  },
  {
    title: "Payroll",
    // Imagen: Trabajo en equipo
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",
    desc: "Administración de nómina rápida y confiable, garantizando el cumplimiento laboral y fiscal."
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          <h4 className="text-red-600 font-bold uppercase tracking-widest mb-2 text-sm">Los mejores servicios</h4>
          <h2 className="text-4xl md:text-5xl font-black text-black">A tu alcance</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>
        </div>
        
        {/* GRID DE TARJETAS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group rounded-3xl bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-slate-100 hover:border-black"
            >
              {/* --- IMAGEN --- */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-red-900/0 transition-colors duration-500 group-hover:bg-red-900/20 mix-blend-multiply"></div>
              </div>

              {/* --- TEXTO (Tipografía Ajustada) --- */}
              <div className="p-8 flex flex-col flex-grow bg-white transition-colors duration-500 group-hover:bg-black">
                
                {/* Título: Grande y con peso */}
                <h3 className="text-2xl font-black text-slate-900 mb-4 transition-colors duration-300 group-hover:text-white leading-tight">
                  {s.title}
                </h3>
                
                {/* Descripción: Letra más grande (text-base) y con mejor espaciado (leading-7) */}
                <p className="text-slate-600 text-base leading-7 mb-6 flex-grow transition-colors duration-300 group-hover:text-gray-300 font-normal">
                  {s.desc}
                </p>
                
                <div className="mt-auto">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-red-600 transition-all duration-300 group-hover:text-red-500 hover:gap-4"
                  >
                    Contáctanos <span className="text-xl">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}