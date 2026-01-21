import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Título optimizado para Google y clientes reales
  title: "MT CONSULTING FL CORP | Impuestos, Inmigración y Seguros",
  description: "Tu aliado en Kissimmee para Taxes Personales y Corporativos, Trámites de Inmigración, Seguros Médicos, Contabilidad y Payroll. Soluciones integrales y confianza.",
  keywords: "Taxes Kissimmee, Inmigración Florida, Seguros Médicos, Contabilidad, MT Consulting, Asesoría Legal",
  
  // --- CONFIGURACIÓN DEL FAVICON CON RUTA ASSETS ---
  icons: {
    icon: "/assets/img/favicon.png",
    shortcut: "/assets/img/favicon.png",
    apple: "/assets/img/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Mantenemos FontAwesome porque lo usamos en la sección "Nosotros" */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      
      {/* Estilos de selección en rojo para mantener la identidad de marca */}
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased selection:bg-red-600 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
