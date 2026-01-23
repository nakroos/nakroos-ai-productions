
import React, { useState, useRef } from 'react';
import { generateAudioPitch } from '../services/geminiService.client';

const VoicePitch: React.FC = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const playAudio = async (base64Data: string) => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    }
    const ctx = audioContextRef.current;
    
    // Decode base64
    const binaryString = atob(base64Data);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    const dataInt16 = new Int16Array(bytes.buffer);
    const frameCount = dataInt16.length;
    const buffer = ctx.createBuffer(1, frameCount, 24000);
    const channelData = buffer.getChannelData(0);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i] / 32768.0;
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);
    source.onended = () => setIsPlaying(false);
    
    setIsPlaying(true);
    source.start();
  };

  const handlePitch = async () => {
    if (!text || loading) return;
    setLoading(true);
    try {
      const audioData = await generateAudioPitch(text);
      await playAudio(audioData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass p-8 rounded-3xl border border-purple-500/20 max-w-2xl mx-auto mt-20 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
        <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
        The Architect's Voice
      </h3>
      <p className="text-gray-400 text-sm mb-6">Hear the AI Content Architect pitch your vision in high-fidelity TTS.</p>
      
      <div className="space-y-4">
        <textarea 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Describe your project (e.g. A documentary about Mars colonization using cinematic AI VFX)"
          className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-gray-200 outline-none focus:border-purple-500/50 transition-all resize-none h-24"
        />
        
        <button 
          onClick={handlePitch}
          disabled={loading || !text}
          className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
            isPlaying ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'bg-white text-black hover:scale-[1.02]'
          }`}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              Generating Audio...
            </span>
          ) : isPlaying ? (
            <span className="flex items-center gap-2">
              <span className="flex gap-1 h-3 items-end">
                <span className="w-1 bg-purple-400 animate-[bounce_0.6s_infinite]"></span>
                <span className="w-1 bg-purple-400 animate-[bounce_0.8s_infinite_0.1s]"></span>
                <span className="w-1 bg-purple-400 animate-[bounce_0.7s_infinite_0.2s]"></span>
              </span>
              Playing Pitch...
            </span>
          ) : 'Generate Audio Pitch'}
        </button>
      </div>
    </div>
  );
};

export default VoicePitch;
