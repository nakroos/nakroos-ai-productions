import React from 'react';
import { Project } from '../types';

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'BMW 2060: "The Petrol Soul"',
    description: 'A cinematic exploration of nostalgia in a futuristic world. Character consistency was maintained using Nano Banana Pro and Kling, with upscaling by Topaz.',
    youtubeId: 'zu2ekyGLmDk',
    stack: ['Nano Banana Pro', 'Kling AI', 'Topaz', 'Veo 3.1']
  },
  {
    id: '2',
    title: 'Real-to-Anime Mastery',
    description: 'UK Client Work. Translating real-world dance physics into high-fidelity Anime aesthetics. Created using Wan Animate and Runway.',
    youtubeId: 'j2GdN3Jd6jI',
    stack: ['Wan Animate', 'Runway', 'Magnific AI', 'Freepik AI']
  },
  {
    id: '3',
    title: 'Historical Short: "Moses"',
    description: 'Bridging the language gap for a Romanian client. Low-res source material was upscaled and transformed into a cinematic historical epic with perfect narrative timing.',
    youtubeId: 'N_2yKF2nVKY',
    stack: ['Midjourney', 'Kling', 'Magnific', 'ElevenLabs']
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black mb-32 text-center tracking-tighter text-white uppercase">
          RECENT <span className="text-purple-500">PRODUCTIONS</span>
        </h2>

        <div className="space-y-48">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className={`grid md:grid-cols-2 gap-20 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`glass p-3 rounded-3xl group ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <div className="aspect-video bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl relative">
                  <iframe 
                    className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity" 
                    src={`https://www.youtube.com/embed/${project.youtubeId}`} 
                    title={project.title}
                    frameBorder="0" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className={index % 2 !== 0 ? 'md:order-1' : ''}>
                <h3 className="text-3xl font-bold mb-6 text-white leading-tight uppercase tracking-tight">{project.title}</h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 rounded text-[10px] font-mono border border-white/10 text-gray-500">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;