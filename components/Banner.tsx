"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// CONFIGURACIÓN DE SLIDES (IMÁGENES ACTUALIZADAS Y ESTABLES)
const slides = [
  {
    id: 1,
    highlight: "Expertos en Inmigración",
    title: "Tu Estatus Legal",
    titleSuffix: "En Buenas Manos",
    subtitle: "Asesoría profesional en llenado de formas y gestión de procesos migratorios. Te acompañamos paso a paso en tu camino en USA.",
    // IMAGEN 1: Pasaporte USA (Link Estable Verificado)
    image: "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?auto=format&fit=crop&q=80&w=1920"
  },
  {
    id: 2,
    highlight: "Seguros y Corporaciones",
    title: "Protección Total y",
    titleSuffix: "Nuevos Negocios",
    subtitle: "Cuidamos tu salud con los mejores seguros médicos y estructuramos tu empresa (LLC/Corp) en Florida correctamente.",
    // IMAGEN 2: Edificio Corporativo / Negocios
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920"
  },
  {
    id: 3,
    highlight: "Soluciones Integrales",
    title: "Impuestos Claros y",
    titleSuffix: "Contabilidad Exacta",
    subtitle: "Expertos en Taxes Personales y Corporativos. Maximizamos tus resultados financieros con total transparencia.",
    // IMAGEN 3: Finanzas / Calculadora
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1920"
  }
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotación automática cada 6 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* --- FONDO DINÁMICO (CARRUSEL) --- */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          />
        </AnimatePresence>
      </div>

      {/* --- FILTROS OSCUROS (Para legibilidad del texto) --- */}
      {/* Capa 1: Degradado negro vertical */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/90 z-10"></div>
      {/* Capa 2: Tinte rojo sutil para marca */}
      <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay z-10"></div>

      {/* --- CONTENIDO DE TEXTO --- */}
      <div className="relative container mx-auto px-6 text-center z-20 pt-20">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex} 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            
            {/* Etiqueta superior */}
            <span className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-red-400 font-bold tracking-[0.2em] uppercase text-xs mb-6 shadow-lg">
              {slides[currentIndex].highlight}
            </span>
            
            {/* Título Principal */}
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 drop-shadow-2xl">
              {slides[currentIndex].title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 filter brightness-110">
                {slides[currentIndex].titleSuffix}
              </span>
            </h1>
            
            {/* Subtítulo */}
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
              {slides[currentIndex].subtitle}
            </p>
            
            {/* Botones */}
            <div className="flex flex-col md:flex-row justify-center gap-5">
              <a 
                href="#contact" 
                className="bg-red-600 text-white px-10 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-red-500 transition-all shadow-lg shadow-red-900/50 hover:shadow-red-600/50 hover:-translate-y-1"
              >
                Agendar Cita
              </a>
              <a 
                href="#services" 
                className="bg-white/5 text-white border border-white/20 px-10 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-white hover:text-red-900 transition-all backdrop-blur-sm hover:-translate-y-1"
              >
                Servicios
              </a>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- PUNTOS INDICADORES --- */}
      <div className="absolute bottom-12 left-0 w-full flex justify-center gap-4 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentIndex === index ? "w-12 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]" : "w-2 bg-gray-500/50 hover:bg-white"
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}