
import React from 'react';
import { ValueProp } from '../types';

const features: ValueProp[] = [
  {
    title: "AI-Powered SDR Engines",
    description: "Our proprietary systems identify and engage prospects across multiple platforms 24/7, booking qualified meetings directly into your stack.",
    type: 'positive',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Architectural Automation",
    description: "Eliminate repetitive bottleneck workflows. We implement AI infrastructure that handles content, data, and client success automatically.",
    type: 'positive',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    title: "Predictive Intelligence",
    description: "Deep-dive AI audits into your current funnel. We spot leakage and repair it using advanced predictive modeling and neural insights.",
    type: 'positive',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

const ValuePropSection: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block bg-purple-500/10 text-purple-400 font-black px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] mb-6 border border-purple-500/20">
          The Solution
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
          Engineering the <br className="hidden md:block" /> absolute speed of growth.
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
          SysAgen Lab goes beyond tools. We build the core infrastructure that converts manual operations into a scalable, automated powerhouse.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-[#0f0f0f] border border-white/5 p-8 rounded-[2rem] group hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/5 flex items-center justify-center text-purple-500 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 shadow-inner">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{feature.title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm font-medium">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Comparison Style Visual */}
      <div className="mt-24 bg-gradient-to-br from-purple-900/10 to-indigo-900/10 rounded-[3rem] p-8 md:p-16 border border-white/5 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full"></div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tighter">Why businesses hit a ceiling?</h3>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="mt-1 w-8 h-8 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-500 text-sm font-bold">✕</span>
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Manual Bottlenecks</p>
                  <p className="text-gray-500 font-medium">Human follow-ups take hours, resulting in lead decay and lost revenue.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="mt-1 w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-500 text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="text-white font-bold text-lg text-purple-400">The Lab Advantage</p>
                  <p className="text-gray-400 font-medium">Instant AI response 24/7/365 results in up to 4x higher closing velocity.</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
               <a href="#contact" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold transition-all inline-flex items-center gap-3">
                See Our Framework
                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
             <img src="https://picsum.photos/800/600?grayscale&blur=5" className="object-cover w-full h-full opacity-30 group-hover:scale-110 transition-transform duration-[2000ms]" alt="Comparison" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/40 p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-3xl text-center">
                   <div className="text-6xl font-black text-white mb-2 tracking-tighter">+248%</div>
                   <div className="text-[10px] text-purple-400 font-black uppercase tracking-[0.3em]">Growth Unlocked</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropSection;
