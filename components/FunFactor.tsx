"use client";

export default function FunFactor() {
  const stats = [
    {
      id: 1,
      number: "+1,500", // Número realista y fuerte
      label: "Clientes Satisfechos",
      icon: "fa-users"
    },
    {
      id: 2,
      number: "+300",
      label: "Empresas Registradas",
      icon: "fa-building"
    },
    {
      id: 3,
      number: "+2,000",
      label: "Trámites Exitosos", // Abarca taxes, inmigración, seguros
      icon: "fa-file-signature"
    }
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="group p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-red-900/10 border border-slate-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Icono Flotante */}
              <div className="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <i className={`fas ${stat.icon} text-lg`}></i>
              </div>

              {/* Número Grande */}
              <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                {stat.number}
              </div>
              
              {/* Etiqueta */}
              <div className="text-slate-500 font-bold uppercase tracking-wider text-xs">
                {stat.label}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}