import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 glass border-b border-white/5 px-8 py-5 flex justify-between items-center">
      <div className="font-bold text-2xl tracking-tighter text-white font-heading uppercase">
        NAKROOS<span className="text-purple-500">AI</span>
      </div>
      <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-bold text-gray-500">
        <a href="#philosophy" className="hover:text-white transition-colors">Methodology</a>
        <a href="#work" className="hover:text-white transition-colors">Productions</a>
        <a href="https://nakroosai.webflow.io/" target="_blank" className="hover:text-white transition-colors">Thumbnails</a>
      </div>
      <a href="#contact" className="bg-white text-black px-6 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all shadow-lg">
        Secure Contract
      </a>
    </nav>
  );
};

export default Navbar;