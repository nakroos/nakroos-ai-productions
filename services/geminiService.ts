
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
