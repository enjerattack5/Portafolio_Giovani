import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Projects from './components/Projects';
import OpenToWork from './components/OpenToWork';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#0e0e10] text-slate-100 font-sans selection:bg-[#e5382b] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Methodology />
        <Projects onOpenModal={(p) => setSelectedProject(p)} />
        <OpenToWork />
        <Contact />
      </main>
      <Footer />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}