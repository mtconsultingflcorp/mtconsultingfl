"use client";

// Importaciones de todos tus componentes
import Header from "../components/Header";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Services from "../components/Services";
import About from "../components/About";
import Faq from "../components/Faq";
import Testimonials from "../components/Testimonials";
import FunFactor from "../components/FunFactor";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    // Agregamos id="inicio" para que el botón del menú funcione
    <div id="inicio" className="bg-slate-50 min-h-screen overflow-x-hidden">
      
      <Header />
      
      <main>
        <Banner />
        <Features />
        <Services />
        <About />
        
        {/* Reordené FunFactor aquí para romper el blanco entre About y FAQ con datos visuales */}
        <FunFactor />
        
        <Faq />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      
    </div>
  );
}