import React from 'react';
import { ArrowRight, Code, ShieldCheck, Server } from 'lucide-react';
import Gio from '../assets/Perfil_Giovani.jpeg';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-[#0e0e10] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Lado Izquierdo: Textos */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            DISPONIBLE PARA NUEVOS PROYECTOS
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Transforma tu negocio con <span className="text-[#e5382b]">soluciones web a medida.</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-xl">
            Soy <strong className="text-white">Giovani Damian</strong>, estudiante de Ingeniería en Sistemas Computacionales en el Tec de los Ríos. Full Stack Junior y diseñador UI/UX enfocado en ayudar a las PyMEs a crecer.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#proyectos"
              className="px-6 py-3.5 bg-[#e5382b] hover:bg-[#cf2d21] text-white font-medium rounded-md transition-all flex items-center gap-2"
            >
              Ver proyectos <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contacto"
              className="px-6 py-3.5 border border-white/20 text-white font-medium rounded-md hover:bg-white/5 transition-all"
            >
              Contáctame
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10 max-w-md">
            <div>
              <p className="text-3xl font-mono font-bold text-white">02</p>
              <p className="text-xs uppercase text-gray-400 tracking-wider">Proyectos Completados</p>
            </div>
            <div>
              <p className="text-3xl font-mono font-bold text-white">100%</p>
              <p className="text-xs uppercase text-gray-400 tracking-wider">Compromiso con tu Idea</p>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Imagen y Tarjetas flotantes */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border border-white/10 p-3">
            <img
              src={Gio}
              alt="Giovani Damian"
              className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
            />

            {/* Badge React */}
            <div className="absolute top-4 left-0 bg-[#16161a] border border-white/10 p-3 rounded-lg flex items-center gap-3 shadow-xl">
              <Code className="w-5 h-5 text-[#e5382b]" />
              <div className="text-left">
                <p className="text-xs font-bold text-white">React</p>
                <p className="text-[10px] text-gray-400 uppercase">Frontend</p>
              </div>
            </div>

            {/* Badge Node.js */}
            <div className="absolute top-1/2 -right-4 bg-[#16161a] border border-white/10 p-3 rounded-lg flex items-center gap-3 shadow-xl">
              <Server className="w-5 h-5 text-[#e5382b]" />
              <div className="text-left">
                <p className="text-xs font-bold text-white">Node.js</p>
                <p className="text-[10px] text-gray-400 uppercase">Backend</p>
              </div>
            </div>

            {/* Badge JWT */}
            <div className="absolute bottom-4 left-6 bg-[#16161a] border border-white/10 p-3 rounded-lg flex items-center gap-3 shadow-xl">
              <ShieldCheck className="w-5 h-5 text-[#e5382b]" />
              <div className="text-left">
                <p className="text-xs font-bold text-white">JWT</p>
                <p className="text-[10px] text-gray-400 uppercase">Security</p>
              </div>
            </div>

            {/* Badge Rol Junior */}
            <div className="absolute -bottom-6 right-0 bg-[#e5382b] text-white p-4 rounded-xl shadow-2xl">
              <p className="text-2xl font-mono font-bold">01</p>
              <p className="text-xs font-semibold uppercase">Full Stack Developer</p>
              <p className="text-[10px] opacity-80">Balancán, Tabasco, MX</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}