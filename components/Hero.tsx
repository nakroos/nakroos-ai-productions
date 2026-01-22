import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden text-center pt-20">
      <div className="hero-glow"></div>
      <div className="max-w-6xl mx-auto">
        <div className="inline-block px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-10">
          Nakroos AI Productions © 2024
        </div>
        
        <h1 className="text-6xl md:text-[9rem] font-black leading-[0.85] mb-12 tracking-tighter text-white uppercase">
          DON'T GUESS <br /> 
          <span className="gradient-text">VIRALITY.</span> <br />
          ENGINEER IT.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-14 max-w-2xl mx-auto leading-relaxed">
          <strong className="text-white">200 Million+ Views. 115k Followers.</strong> <br />
          I failed for 5 years so you don't have to. We build high-retention AI cinematic assets for brands that refuse to be ignored.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <a href="#work" className="px-10 py-5 bg-purple-600 text-white font-black rounded-xl hover:bg-purple-500 transition-all text-lg shadow-xl shadow-purple-500/20">
            VIEW RECENT PRODUCTIONS
          </a>
          
          <div className="flex gap-4">
            <a href="https://www.instagram.com/nakroos" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-white/10 transition-colors">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="w-6 h-6 invert" alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/@nakrooos" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-white/10 transition-colors">
              <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" className="w-6 h-6 invert" alt="YouTube" />
            </a>
            <a href="https://tiktok.com/@nakroosai" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-white/10 transition-colors">
              <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" className="w-6 h-6 invert" alt="TikTok" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;