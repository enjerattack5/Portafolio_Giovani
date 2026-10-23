import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function OpenToWork() {
  return (
    <section className="py-20 bg-[#e5382b] text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-8 space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-white/80 font-bold">
            — MÁS QUE CÓDIGO
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Busco crecer <br />
            con un gran equipo.
          </h2>
          <p className="text-white/90 text-base md:text-lg max-w-2xl">
            Estoy abierto a oportunidades como desarrollador junior, prácticas, residencia profesional o a colaborar dando soporte a desarrolladores con más experiencia.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 text-sm font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white" /> Roles junior
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white" /> Prácticas profesionales
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white" /> Residencia
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white" /> Colaboraciones
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/80 font-bold">ACTUALMENTE</span>
          <h3 className="text-2xl font-bold mt-1 mb-3">Abierto a Trabajar</h3>
          <div className="flex items-center gap-2 text-xs text-white/90 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            En linea
          </div>
          <a
            href="#contacto"
            className="w-full py-3.5 bg-white text-[#e5382b] font-bold rounded-lg hover:bg-white/90 transition-all flex items-center justify-center gap-2 text-sm"
          >
            Conversemos <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}