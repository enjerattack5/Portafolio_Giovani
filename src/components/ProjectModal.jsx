import React from 'react';
import { X } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-[#16161a] border border-white/10 rounded-2xl max-w-2xl w-full p-6 text-white relative space-y-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-xs font-mono text-[#e5382b] uppercase font-bold">{project.category}</span>
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
        
        <div className="border-t border-white/10 pt-4">
          <p className="text-xs font-mono text-gray-400 mb-2 uppercase">Tecnologías aplicadas:</p>
          <div className="flex gap-2">
            {project.tags.map(t => (
              <span key={t} className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 rounded text-gray-300">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#e5382b] hover:bg-[#cf2d21] text-xs font-bold rounded"
          >
            Cerrar caso de estudio
          </button>
        </div>
      </div>
    </div>
  );
}