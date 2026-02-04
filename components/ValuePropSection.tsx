
import React from 'react';

const ValuePropSection: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      {/* THE PAIN: INTENSIFYING THE PROBLEM */}
      <div className="mb-40">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-500/10 text-red-400 font-black px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] mb-6 border border-red-500/20">
            The Scaling Ceiling
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
            Manual work doesn't scale. <br className="hidden md:block" /> It just breaks.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            While you're managing spreadsheets and chasing follow-ups, your competitors are using AI to out-pace you in every metric.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "The Silent Profit Killer",
              desc: "A lead left for 10 minutes is a lead lost. If your triage isn't instant and automated, you're lighting your marketing budget on fire.",
              icon: "💸"
            },
            {
              title: "Digital Chaos Syndrome",
              desc: "Is your data scattered across Slack, Sheets, and 5 different apps? Fragmented info is the #1 cause of operational friction.",
              icon: "📉"
            },
            {
              title: "The Outreach Trap",
              desc: "Generic, manual outreach is dead. Without AI-driven personalization, your emails are just noise in a crowded inbox.",
              icon: "🚫"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/5 p-8 rounded-[2rem] hover:bg-red-500/5 transition-all duration-500">
              <div className="text-3xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm font-medium italic">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* THE SOLUTION: INTRODUCING THE INFRASTRUCTURE */}
      <div className="pt-24 border-t border-white/5">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-500/10 text-purple-400 font-black px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] mb-6 border border-purple-500/20">
            The SysAgen Protocol
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
            Intelligence-First Systems <br className="hidden md:block" /> for Zero-Friction Growth.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Solution 1: CRM */}
          <div className="bg-[#0f0f0f] border border-white/5 p-8 rounded-[2rem] group hover:border-purple-500/30 transition-all duration-500">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/5 flex items-center justify-center text-purple-500 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 shadow-inner">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">The Living CRM</h3>
            <p className="text-gray-500 leading-relaxed text-sm font-medium">
              We replace static lists with intelligent databases that automatically enrich leads, score intent, and trigger sales actions without human intervention.
            </p>
          </div>

          {/* Solution 2: App Automation */}
          <div className="bg-[#0f0f0f] border border-white/5 p-8 rounded-[2rem] group hover:border-purple-500/30 transition-all duration-500">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/5 flex items-center justify-center text-purple-500 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 shadow-inner">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Neural Link Automation</h3>
            <p className="text-gray-500 leading-relaxed text-sm font-medium">
              Your apps should talk to each other. We build the "Neural Links" that sync your marketing, fulfillment, and finance into one autonomous organism.
            </p>
          </div>

          {/* Solution 3: AI Marketing */}
          <div className="bg-[#0f0f0f] border border-white/5 p-8 rounded-[2rem] group hover:border-purple-500/30 transition-all duration-500">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/5 flex items-center justify-center text-purple-500 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 shadow-inner">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Autonomous Outreach</h3>
            <p className="text-gray-500 leading-relaxed text-sm font-medium">
              Scale your personalized communication to thousands. Our AI agents handle the first 80% of the sales conversation, handing off only warm, ready-to-buy leads.
            </p>
          </div>
        </div>
      </div>

      {/* THE RESULT: PROOF OF TRANSFORMATION */}
      <div className="mt-32 bg-gradient-to-br from-purple-900/10 to-indigo-900/10 rounded-[3rem] p-8 md:p-16 border border-white/5 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full"></div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tighter">Your Business, Upgraded.</h3>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="mt-1 w-8 h-8 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 text-red-500 font-bold text-xs uppercase tracking-tighter">BEFORE</div>
                <div>
                  <p className="text-white font-bold text-lg">The Human Ceiling</p>
                  <p className="text-gray-500 font-medium">Growth is capped by your team's energy and hours. Errors are inevitable.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="mt-1 w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 text-purple-500 font-bold text-xs uppercase tracking-tighter">AFTER</div>
                <div>
                  <p className="text-white font-bold text-lg text-purple-400">Autonomous Flow</p>
                  <p className="text-gray-400 font-medium italic">Your systems work 24/7. Scaling is as simple as turning a dial.</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
               <a href="#contact" className="bg-white text-black px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 inline-flex items-center gap-3">
                Unlock This Transformation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
             <img src="https://picsum.photos/800/600?grayscale&blur=5" className="object-cover w-full h-full opacity-30 group-hover:scale-110 transition-transform duration-[2000ms]" alt="Comparison" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/40 p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-3xl text-center">
                   <div className="text-6xl font-black text-white mb-2 tracking-tighter">+40hrs</div>
                   <div className="text-[10px] text-purple-400 font-black uppercase tracking-[0.3em]">Saved per week / per employee</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropSection;
