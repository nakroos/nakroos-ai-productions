import { ViralScript } from "../types";

const isBrowser = typeof window !== 'undefined';

export const generateViralBlueprint = async (topic: string): Promise<ViralScript> => {
  if (isBrowser) {
    await new Promise((r) => setTimeout(r, 600));
    return {
      hook: `${topic} — a shocking reveal in 3s`,
      retentionStrategy: 'Pattern interrupt + emotional payoff + escalating visuals',
      viralityScore: Math.floor(60 + Math.random() * 30),
      explanation: 'This script uses a short unexpected intro, quick edits and a tactile CTA.',
      editMarkers: ['0:00 Pattern-Interrupt', '0:03 Visual-Switch', '0:08 CTA'],
    } as ViralScript;
  }
  throw new Error('Server API not available in this build');
};

export const generateAudioPitch = async (description: string): Promise<string> => {
  if (isBrowser) {
    const sampleRate = 24000;
    const duration = 0.5;
    const freq = 440;
    const frameCount = Math.floor(sampleRate * duration);
    const buffer = new Int16Array(frameCount);
    for (let i = 0; i < frameCount; i++) {
      const t = i / sampleRate;
      buffer[i] = Math.floor(Math.sin(2 * Math.PI * freq * t) * 32767 * 0.2);
    }
    let binary = '';
    for (let i = 0; i < buffer.length; i++) {
      const v = buffer[i];
      binary += String.fromCharCode(v & 0xff, (v >> 8) & 0xff);
    }
    return btoa(binary);
  }
  throw new Error('Server API not available in this build');
};
