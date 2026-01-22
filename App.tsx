import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import ViralArchitect from './components/ViralArchitect';
import VoicePitch from './components/VoicePitch';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-[#030303] min-h-screen text-gray-200 selection:bg-purple-600 selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Philosophy Section */}
        <section id="philosophy" className="py-40 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-purple-500 font-mono text-sm tracking-[0.3em] mb-6 uppercase font-bold text-center">The Journey</h2>
            <h3 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter text-white leading-[1.1] text-center">Built on 5 Years <br /><span className="text-gray-500 text-3xl md:text-5xl block mt-2">of Failure.</span></h3>
            
            <div className="space-y-10 text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                I didn't wake up with 200 million views. I started 6 YouTube channels that died. I launched 5 Instagram pages that gathered zero traction. I wasn't consistent because I was looking for "luck."
              </p>
              <p className="text-white font-bold text-2xl tracking-tight">
                Then I stopped guessing. I learned that virality is a <span className="gradient-text">System.</span>
              </p>
              <p>
                I spent years mastering <strong>Photoshop</strong> (150+ Thumbnails), <strong>Premiere Pro</strong>, and <strong>Generative AI</strong>. It’s about triggering "System 1" (instinctive) attention within the first 0.5 seconds.
              </p>
              <p>
                Today, <strong>Nakroos AI Productions</strong> is the culmination of those 900+ AI reels. We don't just "edit." We manufacture content that dominates global feeds.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack Horizontal Grid */}
        <section className="py-24 px-6 border-y border-white/5 bg-[#050505]">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center group">
              <h4 className="text-3xl font-black text-white mb-2 group-hover:text-purple-500 transition-colors">Photoshop</h4>
              <p className="text-[10px] text-gray-600 font-mono uppercase tracking-[0.2em]">Hook Design Expert</p>
            </div>
            <div className="text-center group">
              <h4 className="text-3xl font-black text-white mb-2 group-hover:text-purple-500 transition-colors">Premiere Pro</h4>
              <p className="text-[10px] text-gray-600 font-mono uppercase tracking-[0.2em]">Cinematic Flow</p>
            </div>
            <div className="text-center group">
              <h4 className="text-3xl font-black text-white mb-2 group-hover:text-purple-500 transition-colors">Vibe Coder</h4>
              <p className="text-[10px] text-gray-600 font-mono uppercase tracking-[0.2em]">AI Architecture</p>
            </div>
            <div className="text-center group">
              <h4 className="text-3xl font-black text-white mb-2 group-hover:text-purple-500 transition-colors">CapCut Win</h4>
              <p className="text-[10px] text-gray-600 font-mono uppercase tracking-[0.2em]">Viral Velocity</p>
            </div>
          </div>
        </section>

        <Portfolio />

        {/* Architect Section */}
        <ViralArchitect />

        {/* Voice Section */}
        <section className="py-20 px-6 bg-[#080808]">
          <div className="max-w-4xl mx-auto">
             <VoicePitch />
          </div>
        </section>

        <Services />
        <FAQ />
        <Contact />
      </main>
      
      {/* Mesh Gradients */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-50 opacity-[0.07]">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-indigo-600 rounded-full blur-[180px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-700 rounded-full blur-[180px]"></div>
      </div>
    </div>
  );
};

export default App;