import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-40 px-6 text-center border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter text-white uppercase">PAID PROJECTS <br />ONLY.</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-14 text-lg leading-relaxed">
          Limited availability for brands ready to dominate. If you want to command global attention with movie-level quality, let's talk.
        </p>
        <a 
          href="mailto:nakroosai@gmail.com" 
          className="inline-block bg-purple-600 text-white px-14 py-6 rounded-full font-black text-xl hover:scale-110 transition-transform shadow-2xl shadow-purple-600/30 uppercase"
        >
          Start Your Production
        </a>
        
        <div className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-center gap-10 text-[10px] text-gray-600 font-mono tracking-[0.4em] uppercase">
          <a href="https://nakroosai.webflow.io/" className="hover:text-white transition-colors">Thumbnail Portfolio</a>
          <span>© Nakroos AI Productions</span>
          <a href="#philosophy" className="hover:text-white transition-colors">The Method</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;