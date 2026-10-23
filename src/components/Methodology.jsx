import React from 'react';
import { Code2, Server, ShieldCheck, Sparkles } from 'lucide-react';

export default function Methodology() {
  return (
    <section id="metodologia" className="py-24 bg-[#f4f1ea] border-t border-[#e2ddd3] text-zinc-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 text-sm md:text-base  font-mono uppercase tracking-widest text-[#e5382b] font-semibold">
            <span className="w-6 h-[2px] bg-[#e5382b]"></span> MI FORMA DE TRABAJAR
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Tecnología con propósito.
          </h2>
          <p className="text-zinc-600 text-sm md:text-2xl leading-relaxed">
            No se trata de usar herramientas por usarlas. Elijo la tecnología que mejor resuelve el reto, cuidando la experiencia y la mantenibilidad.
          </p>
          <div className="pt-6 border-t border-[#e2ddd3]">
            <blockquote className="flex items-start gap-3 text-zinc-800 font-medium italic text-sm md:text-base">
              <Sparkles className="w-5 h-5 text-[#e5382b] shrink-0 mt-0.5" />
              “Aprendo, pregunto lo necesario y construyo con intención.”
            </blockquote>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          
          <div className="p-6 bg-[#ede9e0] border border-[#e2ddd3] rounded-xl flex items-start justify-between gap-4">
            <div className="flex gap-4">
              <div className="p-3 bg-[#f4f1ea] rounded-lg text-[#e5382b] shrink-0">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[15px] font-mono uppercase tracking-wider text-[#e5382b] font-bold">FRONTEND</span>
                <h3 className="text-lg font-bold text-zinc-900">Interfaces rápidas y responsivas</h3>
                <p className="text-sm md:text-base text-zinc-500 font-mono mt-1">HTML · CSS · JavaScript · JSX · React</p>
              </div>
            </div>
            <span className="font-mono text-2xl font-bold text-zinc-300"></span>
          </div>

          <div className="p-6 bg-[#ede9e0] border border-[#e2ddd3] rounded-xl flex items-start justify-between gap-4">
            <div className="flex gap-4">
              <div className="p-3 bg-[#f4f1ea] rounded-lg text-[#e5382b] shrink-0">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[15px] font-mono uppercase tracking-wider text-[#e5382b] font-bold">BACKEND</span>
                <h3 className="text-lg font-bold text-zinc-900">Sistemas sólidos y escalables</h3>
                <p className="text-sm md:text-base text-zinc-500 font-mono mt-1">Node.js · Express · MongoDB Atlas · MySQL</p>
              </div>
            </div>
            <span className="font-mono text-2xl font-bold text-zinc-300"></span>
          </div>

          <div className="p-6 bg-[#ede9e0] border border-[#e2ddd3] rounded-xl flex items-start justify-between gap-4">
            <div className="flex gap-4">
              <div className="p-3 bg-[#f4f1ea] rounded-lg text-[#e5382b] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[15px] font-mono uppercase tracking-wider text-[#e5382b] font-bold">SEGURIDAD & IA</span>
                <h3 className="text-lg font-bold text-zinc-900">Desarrollo moderno y seguro</h3>
                <p className="text-sm md:text-base text-zinc-500 font-mono mt-1">JWT Auth · APIs REST · Desarrollo asistido por IA</p>
              </div>
            </div>
            <span className="font-mono text-2xl font-bold text-zinc-300"></span>
          </div>

        </div>

      </div>
    </section>
  );
}