import React from 'react';
import { ShoppingBag, Calendar, Layout, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: ShoppingBag,
    title: 'Sistemas de Pedidos',
    desc: 'Experiencias de compra ágiles para restaurantes y comercios, con flujos personalizados para comer aquí o para llevar.',
    tags: ['MENÚ DIGITAL', 'PANEL ADMIN', 'RESPONSIVE']
  },
  {
    icon: Calendar,
    title: 'Gestión de Citas',
    desc: 'Agenda automatizada para clínicas, barberías y consultorías. Menos mensajes, más tiempo para atender tu negocio.',
    tags: ['RESERVAS', 'RECORDATORIOS', 'DISPONIBILIDAD']
  },
  {
    icon: Layout,
    title: 'Diseño UI/UX',
    desc: 'Interfaces claras que convierten ideas en productos. Wireframes, prototipos interactivos y maquetación fiel en Figma.',
    tags: ['PROTOTIPOS', 'DESIGN SYSTEM', 'USABILIDAD']
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#f4f1ea] text-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-6">
  <div>
  
    <div className="flex items-center gap-2 text-sm md:text-base font-mono uppercase tracking-widest text-[#e5382b] font-bold">
      <span className="w-8 h-[2px] bg-[#e5382b]"></span> LO QUE PUEDO HACER POR TI
    </div>
    <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
      Soluciones que hacen <span className="text-[#e5382b]">crecer tu negocio.</span>
    </h2>
  </div>

  
  <p className="text-zinc-600 max-w-lg text-base md:text-xl leading-relaxed">
    Construyo herramientas digitales claras, funcionales y pensadas para resolver problemas reales de negocios locales.
  </p>
</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.num} className="bg-[#ede9e0] border border-[#e2ddd3] p-8 rounded-xl flex flex-col justify-between hover:border-[#e5382b]/50 transition-all">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#e5382b]/10 flex items-center justify-center text-[#e5382b]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-zinc-400">{item.num}</span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2.5 py-1 bg-[#f4f1ea] border border-[#e2ddd3] rounded text-zinc-600">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a href="#contacto" className="inline-flex items-center gap-2 text-xs font-bold text-[#e5382b] uppercase tracking-wider hover:gap-3 transition-all">
                    Explorar solución <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}