
import { GoogleGenAI, Type, Modality } from "@google/genai";
import { ViralScript } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateViralBlueprint = async (topic: string): Promise<ViralScript> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Act as a senior AI Content Architect. topic: "${topic}". Engineer a viral short-form script.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          hook: { type: Type.STRING },
          retentionStrategy: { type: Type.STRING },
          viralityScore: { type: Type.NUMBER },
          explanation: { type: Type.STRING },
          editMarkers: { 
            import { ViralScript } from "../types";

            // Detect browser to avoid importing server-only SDKs on the client
            const isBrowser = typeof window !== 'undefined';

            export const generateViralBlueprint = async (topic: string): Promise<ViralScript> => {
              if (isBrowser) {
                // Mocked response for browser usage so UI works without API keys
                await new Promise((r) => setTimeout(r, 600));
                return {
                  hook: `${topic} — a shocking reveal in 3s`,
                  retentionStrategy: 'Pattern interrupt + emotional payoff + escalating visuals',
                  viralityScore: Math.floor(60 + Math.random() * 30),
                  explanation: 'This script uses a short unexpected intro, quick edits and a tactile CTA.',
                  editMarkers: ['0:00 Pattern-Interrupt', '0:03 Visual-Switch', '0:08 CTA'],
                } as ViralScript;
              }

              // Server-side: dynamically import the official SDK and call the API if API key provided
              const { GoogleGenAI, Type } = await import('@google/genai');
              const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

              const response = await ai.models.generateContent({
                model: "gemini-3-flash-preview",
                contents: `Act as a senior AI Content Architect. topic: "${topic}". Engineer a viral short-form script.`,
                config: {
                  responseMimeType: "application/json",
                  responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                      hook: { type: Type.STRING },
                      retentionStrategy: { type: Type.STRING },
                      viralityScore: { type: Type.NUMBER },
                      explanation: { type: Type.STRING },
                      editMarkers: { 
                        type: Type.ARRAY, 
                        items: { type: Type.STRING },
                        description: "Psychological edit points (e.g., [0:03] Pattern Interrupt)"
                      },
                    },
                    required: ["hook", "retentionStrategy", "viralityScore", "explanation", "editMarkers"],
                  },
                },
              });

              const text = response.text;
              if (!text) throw new Error("Empty response");
              return JSON.parse(text.trim());
            };

            export const generateAudioPitch = async (description: string): Promise<string> => {
              if (isBrowser) {
                // Produce a short 24000Hz 16-bit PCM mono 0.5s sine wave as base64 so playback works in the browser
                const sampleRate = 24000;
                const duration = 0.5;
                const freq = 440;
                const frameCount = Math.floor(sampleRate * duration);
                const buffer = new Int16Array(frameCount);
                for (let i = 0; i < frameCount; i++) {
                  const t = i / sampleRate;
                  buffer[i] = Math.floor(Math.sin(2 * Math.PI * freq * t) * 32767 * 0.2);
                }
                // Convert to base64
                let binary = '';
                for (let i = 0; i < buffer.length; i++) {
                  const v = buffer[i];
                  binary += String.fromCharCode(v & 0xff, (v >> 8) & 0xff);
                }
                return btoa(binary);
              }

              const { GoogleGenAI, Modality } = await import('@google/genai');
              const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

              const prompt = `Act as a charismatic, high-energy AI Content Strategist. Pitch this project idea convincingly in 30 seconds: "${description}"`;
  
              const response = await ai.models.generateContent({
                model: "gemini-2.5-flash-preview-tts",
                contents: [{ parts: [{ text: prompt }] }],
                config: {
                  responseModalities: [Modality.AUDIO],
                  speechConfig: {
                    voiceConfig: {
                      prebuiltVoiceConfig: { voiceName: 'Kore' },
                    },
                  },
                },
              });

              const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
              if (!base64Audio) throw new Error("No audio generated");
              return base64Audio;
            };
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      const prompt = `Act as a charismatic, high-energy AI Content Strategist. Pitch this project idea convincingly in 30 seconds: "${description}"`;
  
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: prompt }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (!base64Audio) throw new Error("No audio generated");
      return base64Audio;
    };
