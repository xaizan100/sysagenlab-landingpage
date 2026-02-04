
import React from 'react';

const ValuePropSection: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      {/* PAIN POINT SECTION */}
      <div className="mb-32">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-500/10 text-red-400 font-black px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] mb-6 border border-red-500/20">
            The Bottlenecks
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
            Why your growth <br className="hidden md:block" /> has hit a ceiling.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              problem: "Lead Decay",
              consequence: "Responding in 30 mins instead of 30 seconds reduces close rates by 80%.",
              icon: "⏳"
            },
            {
              problem: "App Chaos",
              consequence: "Your team wastes 15+ hours weekly moving data between tools manually.",
              icon: "🧩"
            },
            {
              problem: "Silent Pipelines",
              consequence: "Potential clients slip through the cracks due to zero follow-up systems.",
              icon: "📉"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/5 p-8 rounded-[2rem] relative overflow-hidden group hover:bg-red-500/5 transition-all duration-500">
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{item.problem}</h3>
              <p className="text-gray-500 leading-relaxed text-sm font-medium italic">
                {item.consequence}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SOLUTION SECTION */}
      <div className="pt-24 border-t border-white/5">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-500/10 text-purple-400 font-black px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] mb-6 border border-purple-500/20">
            The SysAgen Lab Protocol
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
            The Infrastructure <br className="hidden md:block" /> for Exponential Scale.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#0f0f0f] border border-white/10 p-8 rounded-[2rem] hover:border-purple-500/40 transition-all duration-500 group">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Custom-Built AI CRMs</h3>
            <p className="text-gray-500 leading-relaxed text-sm font-medium">
              We don't just set up a CRM; we build a living database that uses AI to qualify leads, predict churn, and tell your sales team exactly who to call and when.
            </p>
          </div>

          <div className="bg-[#0f0f0f] border border-white/10 p-8 rounded-[2rem] hover:border-purple-500/40 transition-all duration-500 group">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2H3m14 0a2 2 0 012 2v1a2 2 0 01-2 2H3m14 0a2 2 0 012 2v1a2 2 0 01-2 2H3" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Full-Stack App Automation</h3>
            <p className="text-gray-500 leading-relaxed text-sm font-medium">
              We bridge the gap between Slack, Sheets, Shopify, and your proprietary tools. Automate 90% of your administrative workload so your team can focus on strategy.
            </p>
          </div>

          <div className="bg-[#0f0f0f] border border-white/10 p-8 rounded-[2rem] hover:border-purple-500/40 transition-all duration-500 group">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">AI Email & SMS Marketing</h3>
            <p className="text-gray-500 leading-relaxed text-sm font-medium">
              Highly personalized outreach that doesn't feel like a bot. Our AI generates unique scripts for every prospect, driving engagement rates up by 300%.
            </p>
          </div>
        </div>
      </div>

      {/* BEFORE/AFTER TRANSFORMATION */}
      <div className="mt-32 bg-gradient-to-br from-purple-900/10 to-indigo-900/10 rounded-[3rem] p-8 md:p-16 border border-white/5 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full"></div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tighter">The Transformation</h3>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="mt-1 w-8 h-8 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 text-red-500 font-bold">✕</div>
                <div>
                  <p className="text-white font-bold text-lg">Manual Grind</p>
                  <p className="text-gray-500 font-medium italic">"We spent all day in spreadsheets and still missed the best leads."</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="mt-1 w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 text-purple-500 font-bold">✓</div>
                <div>
                  <p className="text-white font-bold text-lg text-purple-400">The SysAgen Future</p>
                  <p className="text-gray-400 font-medium italic">"The AI finds, qualifies, and books the meetings. We just close them."</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-[#0d0d0d] flex items-center justify-center p-8">
             <div className="text-center">
                <div className="text-8xl mb-4">🚀</div>
                <div className="text-4xl font-black text-white mb-2 tracking-tighter">10X</div>
                <div className="text-[10px] text-purple-400 font-black uppercase tracking-[0.3em]">Operational Velocity</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropSection;
