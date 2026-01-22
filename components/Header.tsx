"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // CONFIGURACIÓN DE LINKS
  const navItems = [
    { name: "Inicio", link: "#inicio" },
    { name: "Servicios", link: "#services" },
    { name: "Nosotros", link: "#about" },
    { name: "Contacto", link: "#contact" }
  ];

  // Detectar Scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md py-2 shadow-lg border-gray-200" // Reduje py-3 a py-2 para compensar el logo más grande
          : "bg-transparent py-5 border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* --- LOGO DINÁMICO (TAMAÑO AUMENTADO) --- */}
        {/* Antes: h-[45px] w-[180px] */}
        {/* Ahora: h-[55px] w-[200px] en móvil | md:h-[70px] md:w-[250px] en escritorio */}
        <Link href="/" className="relative h-[55px] w-[200px] md:h-[70px] md:w-[250px] transition-all duration-300">
            {/* Logo Oscuro (Para fondo blanco al bajar) */}
            <Image 
              src="/assets/img/logo.png" 
              alt="MT CONSULTING" 
              fill
              className={`object-contain object-left transition-all duration-300 ${
                isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              priority
            />
            {/* Logo Claro (Para fondo transparente al inicio) */}
            <Image 
              src="/assets/img/logo-light.png" 
              alt="MT CONSULTING" 
              fill
              className={`object-contain object-left transition-all duration-300 ${
                isScrolled ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
              priority
            />
        </Link>

        {/* --- MENÚ DE ESCRITORIO --- */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.link} 
              className={`text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                isScrolled 
                  ? "text-red-600 hover:text-black" 
                  : "text-red-500 hover:text-white"
              }`}
            >
              {item.name}
            </a>
          ))}
          
          {/* Botón CTA */}
          <a 
            href="https://wa.me/14078029204" 
            target="_blank"
            className="bg-red-600 text-white px-7 py-3 rounded-full font-bold text-xs uppercase hover:bg-black transition-all shadow-lg hover:shadow-red-600/40 transform hover:-translate-y-0.5"
          >
            Consulta Gratis
          </a>
        </nav>

        {/* --- BOTÓN MÓVIL (SVG) --- */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className={`md:hidden p-2 transition-colors duration-300 focus:outline-none ${
            isScrolled || isOpen ? "text-red-600" : "text-white"
          }`}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-9 h-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-9 h-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* --- MENÚ MÓVIL DESPLEGABLE --- */}
      <div 
        className={`absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl md:hidden transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible"
        }`}
      >
        <div className="flex flex-col p-6 gap-6 items-center text-center">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.link} 
              onClick={() => setIsOpen(false)} 
              className="text-lg font-bold text-red-600 hover:text-black transition-colors w-full py-2 border-b border-gray-50 last:border-0"
            >
              {item.name}
            </a>
          ))}
          
          <a 
            href="https://wa.me/14078029204" 
            className="w-full bg-red-600 text-white py-3 rounded-xl font-bold uppercase shadow-lg shadow-red-200 hover:bg-black transition-colors"
          >
            Agendar Cita
          </a>
        </div>
      </div>

    </header>
  );
}