"use client";

import { useState } from "react";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  
  const faqs = [
    { 
      title: "¿Qué documentos necesito para preparar mis impuestos personales?", 
      content: (
        <>
          Para preparar tus impuestos personales, necesitarás documentos como tu <strong>identificación oficial</strong> (ID o pasaporte), <strong>formularios fiscales</strong>, <strong>recibos de gastos deducibles</strong>, <strong>registros de inversiones</strong> y cualquier otra documentación relacionada con tus ingresos y deducciones. Si tienes dudas sobre qué documentos específicos debes presentar, nuestro equipo en <strong>MT CONSULTING FL CORP</strong> está listo para ayudarte a reunir toda la información necesaria.
        </>
      )
    },
    { 
      title: "¿Cómo puedo iniciar el proceso de formación de una corporación?", 
      content: (
        <>
          Para iniciar el proceso de formación de una corporación, primero debes elegir el nombre de tu empresa y definir el tipo de entidad que deseas crear (por ejemplo, LLC o S-Corp). Después, reunimos la información básica sobre los propietarios y los estatutos de la compañía. En <strong>MT CONSULTING FL CORP</strong> nos encargamos de presentar todos los documentos necesarios ante las autoridades estatales y te acompañamos en cada paso para garantizar que tu corporación se establezca de manera <strong>legal, rápida y efectiva</strong>.
        </>
      )
    },
    { 
      title: "¿Qué servicios de contabilidad ofrecen y cómo pueden beneficiarme?", 
      content: (
        <>
          Ofrecemos una amplia gama de servicios de contabilidad que incluyen la <strong>gestión diaria de registros</strong>, <strong>preparación de estados financieros</strong>, administración de cuentas por pagar y por cobrar, así como <strong>asesoría fiscal especializada</strong>. Nuestros servicios están diseñados para mantener tus finanzas organizadas y optimizadas, lo que te permitirá tomar decisiones estratégicas. Al confiar tu contabilidad a los expertos de <strong>MT CONSULTING FL CORP</strong>, podrás concentrarte en desarrollar tu empresa mientras garantizamos que tus libros se mantengan en orden y en <strong>cumplimiento</strong> con todas las regulaciones fiscales.
        </>
      )
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white relative">
      
      {/* Fondo decorativo muy sutil */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-full z-0 opacity-50"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          <h4 className="text-red-600 font-bold uppercase tracking-widest mb-2 text-sm">¿Tienes dudas?</h4>
          <h2 className="text-4xl font-black text-slate-900 mb-4">Preguntas Frecuentes</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        {/* LISTA DE PREGUNTAS (ACORDEÓN) */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                activeIndex === index 
                  ? "border-red-600 shadow-lg shadow-red-900/5 bg-white" // Estilo Activo
                  : "border-slate-200 bg-slate-50 hover:border-slate-300" // Estilo Inactivo
              }`}
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg pr-8 ${activeIndex === index ? "text-red-700" : "text-slate-800"}`}>
                  {item.title}
                </span>
                
                {/* Icono de flecha animado */}
                <span className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${activeIndex === index ? "bg-red-100 text-red-600 rotate-180" : "bg-white text-slate-400"}`}>
                  <i className="fas fa-chevron-down"></i>
                </span>
              </button>

              {/* CONTENIDO DESPLEGABLE */}
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed text-base border-t border-dashed border-slate-200 mt-2">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}