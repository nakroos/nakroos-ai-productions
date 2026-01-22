
import React, { useState } from 'react';
import { generateViralBlueprint } from '../services/geminiService';
import { ViralScript } from '../types';

const ViralArchitect: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [blueprint, setBlueprint] = useState<ViralScript | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setError('');
    try {
      const data = await generateViralBlueprint(topic);
      setBlueprint(data);
    } catch (err) {
      setError('The algorithm is recalibrating. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="architect" className="py-32 px-6 bg-[#080808] border-y border-white/5 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-[10px] font-mono mb-4 uppercase tracking-[0.2em]">
            Script Engineering Engine v4.2
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Viral <span className="text-purple-500">Architect</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Input your niche. The model will simulate the exact psychological sequence I use for 200M+ view campaigns.</p>
        </div>

        <div className="glass p-8 md:p-12 rounded-3xl shadow-2xl border-white/10">
          <form onSubmit={handleGenerate} className="flex flex-col md:flex-row gap-4 mb-12">
            <input 
              type="text" 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. AI-Powered Coffee Roasting"
              className="flex-1 bg-black/40 border border-white/10 rounded-xl px-6 py-4 focus:border-purple-500/50 outline-none transition-all text-white font-mono text-sm"
            />
            <button 
              disabled={loading}
              className="bg-white text-black font-bold px-10 py-4 rounded-xl transition-all hover:bg-gray-200 disabled:opacity-50"
            >
              {loading ? 'Initializing...' : 'Engineer Script'}
            </button>
          </form>

          {error && <div className="text-red-400 text-sm mb-6 font-mono">ERROR: {error}</div>}

          {blueprint && (
            <div className="grid md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-bold text-purple-400 mb-2 font-mono uppercase tracking-widest">The Scroll Stopper:</h4>
                  <p className="text-2xl font-bold text-white leading-tight">"{blueprint.hook}"</p>
                </div>
                
                <div>
                  <h4 className="text-[10px] font-bold text-purple-400 mb-2 font-mono uppercase tracking-widest">Retention Markers:</h4>
                  <div className="space-y-2">
                    {blueprint.editMarkers.map((marker, i) => (
                      <div key={i} className="flex gap-4 items-center group">
                        <span className="text-gray-600 font-mono text-xs">{marker.split(' ')[0]}</span>
                        <div className="h-px flex-1 bg-white/5 group-hover:bg-purple-500/20 transition-colors"></div>
                        <span className="text-gray-400 text-xs font-mono">{marker.split(' ').slice(1).join(' ')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <h4 className="text-[10px] font-bold text-gray-500 font-mono uppercase tracking-widest">Predicted Virality</h4>
                    <span className="text-4xl font-bold text-white">{blueprint.viralityScore}%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-1 mb-8 overflow-hidden">
                    <div 
                      className="bg-purple-500 h-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(168,85,247,0.5)]" 
                      style={{ width: `${blueprint.viralityScore}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-400 italic font-mono leading-relaxed">"{blueprint.explanation}"</p>
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/5">
                  <h4 className="text-[10px] font-bold text-gray-600 mb-4 font-mono uppercase tracking-widest">Psychological Strategy</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">{blueprint.retentionStrategy}</p>
                </div>
              </div>
            </div>
          )}
          
          {!blueprint && !loading && (
            <div className="text-center py-20 border-2 border-dashed border-white/5 rounded-2xl bg-black/20">
              <p className="text-gray-600 font-mono text-[10px] uppercase tracking-[0.3em]">Awaiting topic parameters for generation.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Decorative side text */}
      <div className="absolute top-1/2 -right-40 -translate-y-1/2 rotate-90 hidden xl:block">
        <span className="text-white/5 font-mono text-8xl font-bold select-none">ARCHITECT</span>
      </div>
    </section>
  );
};

export default ViralArchitect;
