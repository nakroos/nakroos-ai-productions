import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-40 px-6 bg-purple-900/5 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black mb-20 tracking-tighter text-center text-white uppercase">The Grand Slam Offers</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass p-10 rounded-3xl border-t-4 border-t-purple-600 hover:bg-white/5 transition-all">
            <h4 className="text-xl font-bold mb-4 text-white">0-to-Million Marketing</h4>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              Full social page handling from scratch. We dominate your country or the global market in a small timespan using System 1 psychology.
            </p>
            <ul className="text-[10px] space-y-3 text-gray-500 font-mono uppercase tracking-widest">
              <li className="flex items-center gap-2"><span className="text-purple-500">[+]</span> Target Market Siege</li>
              <li className="flex items-center gap-2"><span className="text-purple-500">[+]</span> Hook Engineering</li>
              <li className="flex items-center gap-2"><span className="text-purple-500">[+]</span> Page Growth Architecture</li>
            </ul>
          </div>

          <div className="glass p-10 rounded-3xl hover:bg-white/5 transition-all">
            <h4 className="text-xl font-bold mb-4 text-white">Custom AI Reels</h4>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              High-volume viral assets. 900+ reels of experience distilled into a content strategy that maintains presence and kills competition.
            </p>
            <ul className="text-[10px] space-y-3 text-gray-500 font-mono uppercase tracking-widest">
              <li className="flex items-center gap-2"><span className="text-purple-500">[+]</span> Viral Flow Dynamics</li>
              <li className="flex items-center gap-2"><span className="text-purple-500">[+]</span> Latent Aesthetic Shift</li>
              <li className="flex items-center gap-2"><span className="text-purple-500">[+]</span> Fast-Paced Narrative</li>
            </ul>
          </div>

          <div className="glass p-10 rounded-3xl hover:bg-white/5 transition-all">
            <h4 className="text-xl font-bold mb-4 text-white">Cinematic VFX</h4>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              Movie and documentary grade AI shots. Custom character training and 4K photorealistic output at a fraction of standard costs.
            </p>
            <ul className="text-[10px] space-y-3 text-gray-500 font-mono uppercase tracking-widest">
              <li className="flex items-center gap-2"><span className="text-purple-500">[+]</span> 4K Character Training</li>
              <li className="flex items-center gap-2"><span className="text-purple-500">[+]</span> Photoreal Latent Space</li>
              <li className="flex items-center gap-2"><span className="text-purple-500">[+]</span> Topaz/Magnific Pipeline</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;