import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import dentalImg from '../assets/dental.jpeg';
import granoImg from '../assets/Menu_Grano.png';

export default function Projects({ onOpenModal }) {
  const projects = [
    {
      id: 'dentalcare',
      category: 'HEALTHTECH · WEB APP',
      title: 'DentalCare Consultoría App',
      description: 'Plataforma integral para gestionar expedientes de pacientes, doctores y citas desde una interfaz clara y segura.',
      tags: ['REACT', 'NODE.JS', 'MONGODB'],
      image: dentalImg,
      liveUrl: 'https://consultorio-app-seven.vercel.app/',
      githubUrl: 'https://github.com/enjerattack5/Dentista'
    },
    {
      id: 'grano-de-oro',
      category: 'FOODTECH · E-COMMERCE',
      title: 'Café Grano de Oro',
      description: 'Experiencia responsiva de pedidos con menú visual y flujos personalizados para consumo local o para llevar.',
      tags: ['UI/UX', 'REACT', 'FIGMA'],
      image: granoImg,
      liveUrl: 'https://grano-oro.vercel.app/',
      githubUrl: 'https://github.com/Jose-Diaz58/Grano-Oro-Cafeteria'
    }
  ];

  return (
    <section id="proyectos" className="py-24 bg-[#0e0e10] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e5382b] font-semibold">
              <span className="w-6 h-[2px] bg-[#e5382b]"></span> TRABAJO SELECCIONADO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
              Ideas convertidas en <br />
              <span className="text-[#e5382b]">productos reales.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm md:text-base">
            Cada proyecto parte de una necesidad concreta y termina en una experiencia simple, útil y escalable.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((p) => (
            <div key={p.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Marco de ventana de navegador con imagen del proyecto */}
              <div className="lg:col-span-7 bg-[#16161a] border border-white/10 rounded-2xl p-3 md:p-4 shadow-2xl overflow-hidden group">
                <div className="flex items-center gap-2 mb-3 px-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>

                <div className="rounded-xl overflow-hidden border border-white/5 bg-black/40">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Información del Proyecto */}
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#e5382b] font-bold">{p.category}</span>
                <h3 className="text-3xl font-bold">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-[10px] font-mono px-3 py-1 bg-white/5 border border-white/10 rounded text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Acciones */}
                <div className="pt-4 space-y-3">
                  <div>
                    <button
                      onClick={() => onOpenModal(p)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#e5382b] uppercase tracking-wider border-b border-[#e5382b] pb-1 transition-all"
                    >
                      VER CASO DE ESTUDIO <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-1">
                    {/* Enlace a la demo en vivo */}
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 uppercase tracking-wider transition-all"
                      >
                        VISITAR SITIO WEB <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {/* Enlace al Repositorio de GitHub */}
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-white uppercase tracking-wider transition-all"
                      >
                        REPOSITORIO GITHUB <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}