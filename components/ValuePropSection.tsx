
import React from 'react';
import { ValueProp } from '../types';

const features: ValueProp[] = [
  {
    title: "AI-Driven Lead Generation",
    description: "Our proprietary AI agents identify and engage prospects across multiple platforms 24/7, booking meetings directly into your calendar.",
    type: 'positive',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Automated Fulfillment",
    description: "Eliminate bottleneck workflows. We implement AI that handles content creation, data entry, and basic customer success automatically.",
    type: 'positive',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    title: "Insight Analysis",
    description: "Deep-dive AI audits into your current funnel. We spot the leaking points and fix them with predictive modeling.",
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
        <div className="inline-block bg-purple-500/20 text-purple-400 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4">
          The Solution
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Everything you need to <br className="hidden md:block" /> scale at the speed of light.
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          We don't just give you tools. We build the entire infrastructure required to turn your agency or SaaS into an automated powerhouse.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-[#111] border-gradient-shadow p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-purple-500 mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Comparison Style Visual */}
      <div className="mt-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-[2.5rem] p-8 md:p-12 border border-white/5 relative overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Why businesses fail to scale?</h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="mt-1 w-6 h-6 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-500 text-xs">✕</span>
                </div>
                <div>
                  <p className="text-white font-medium">Leaking conversion funnels</p>
                  <p className="text-sm text-gray-500">Most traffic is lost because of manual follow-ups that take too long.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-500 text-xs">✓</span>
                </div>
                <div>
                  <p className="text-white font-medium">The SysAgen Lab Advantage</p>
                  <p className="text-sm text-gray-500">Instant AI responses 24/7 lead to 4x higher closing rates.</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
               <a href="#contact" className="text-purple-400 font-bold hover:text-purple-300 transition-colors inline-flex items-center gap-2">
                See it in action
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-2xl">
             <img src="https://picsum.photos/600/400?blur=5" className="object-cover w-full h-full opacity-40" alt="Comparison" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/60 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                   <div className="text-4xl font-bold text-white mb-1">+248%</div>
                   <div className="text-xs text-gray-400 uppercase tracking-widest">Growth identified</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropSection;
