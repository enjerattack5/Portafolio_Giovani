import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e0e10]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="font-mono text-lg font-bold tracking-tight text-white flex items-center gap-1">
          <span className="text-[#e5382b]">&gt;_</span> Dev.Portfolio
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
          <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
          <a href="#metodologia" className="hover:text-white transition-colors">Stack</a>
          <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
        </nav>

        <a
          href="#contacto"
          className="px-5 py-2.5 text-sm font-medium border border-white/20 text-white rounded-md hover:bg-white/10 transition-all flex items-center gap-2"
        >
          Hablemos <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}