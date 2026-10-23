import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-[#0e0e10] border-t border-white/10 text-xs text-gray-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="font-mono text-white font-bold text-sm">
          <span className="text-[#e5382b]">&gt;_</span> Dev.Portfolio
        </a>

        <p>© 2026 Giovani Damian. Diseñado y desarrollado con intención.</p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 hover:text-white transition-colors uppercase font-mono text-[10px]"
        >
          VOLVER ARRIBA <ArrowUp className="w-3 h-3" />
        </button>
      </div>
    </footer>
  );
}