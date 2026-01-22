import React from 'react';

const FAQS = [
  {
    q: "How do we handle international billing?",
    a: "I use Payoneer for all global contracts. I generate a secure invoice; you pay via Credit Card, PayPal, or Bank Transfer. Fast, professional, and zero friction."
  },
  {
    q: "What is the implication of choosing cheaper AI services?",
    a: "(Neil Rackham Strategy): Cheap AI content looks like 'spam' and can actually damage your brand's reputation permanently. I focus on high-fidelity, cinematic quality so your brand gains Authority, not just noise."
  },
  {
    q: "How do you minimize my 'Time Delay' to success?",
    a: "(Alex Hormozi Strategy): Most creators spend months 'testing.' Because I have already edited 900+ reels and gained 200M views, we skip the learning phase. You get the Dream Outcome (Virality) much faster."
  },
  {
    q: "What do you need from me to start?",
    a: "For custom person-consistent AI work, 4K high-resolution footage/images of the subject are mandatory. Quality AI requires quality data."
  }
];

const FAQ: React.FC = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 border-l-4 border-purple-500 pl-6 uppercase tracking-widest text-white">Expert Intelligence (FAQ)</h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl group hover:bg-white/5 transition-all">
              <h4 className="font-bold text-white mb-3 text-lg">{faq.q}</h4>
              <p className="text-gray-400 leading-relaxed text-sm">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;