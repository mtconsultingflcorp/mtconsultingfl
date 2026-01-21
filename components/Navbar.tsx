"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detectar scroll para cambiar el fondo
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/90 backdrop-blur-md py-4 shadow-lg shadow-black/20" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* --- LOGOTIPO --- */}
        <Link href="/" className="relative z-50">
          <h1 className="text-2xl font-black text-white tracking-tighter">
            MT <span className="text-red-600">CONSULTING</span>
            <span className="block text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">
              FL Corp
            </span>
          </h1>
        </Link>

        {/* --- MENÚ DE ESCRITORIO (Desktop) --- */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider text-white">
          <li>
            <Link href="/" className="hover:text-red-500 transition-colors">Inicio</Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-red-500 transition-colors">Nosotros</Link>
          </li>
          <li>
            <Link href="#services" className="hover:text-red-500 transition-colors">Servicios</Link>
          </li>
          <li>
            <Link href="#testimonials" className="hover:text-red-500 transition-colors">Testimonios</Link>
          </li>
        </ul>

        {/* --- BOTÓN DE ACCIÓN (Desktop) --- */}
        <div className="hidden md:block">
          <Link 
            href="#contact" 
            className="bg-red-700 hover:bg-red-600 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-red-900/40"
          >
            Contáctanos
          </Link>
        </div>

        {/* --- BOTÓN HAMBURGUESA (Móvil) --- */}
        <button 
          className="md:hidden text-white text-2xl z-50 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <i className="fas fa-times"></i> // Icono X
          ) : (
            <i className="fas fa-bars"></i>  // Icono Menú
          )}
        </button>

        {/* --- MENÚ MÓVIL (Overlay) --- */}
        <div 
          className={`fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <ul className="text-center space-y-8 text-xl font-bold text-white uppercase tracking-widest">
            <li><Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Inicio</Link></li>
            <li><Link href="#about" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</Link></li>
            <li><Link href="#services" onClick={() => setIsMobileMenuOpen(false)}>Servicios</Link></li>
            <li><Link href="#testimonials" onClick={() => setIsMobileMenuOpen(false)}>Testimonios</Link></li>
            <li><Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-red-600">Contacto</Link></li>
          </ul>
        </div>

      </div>
    </nav>
  );
}
