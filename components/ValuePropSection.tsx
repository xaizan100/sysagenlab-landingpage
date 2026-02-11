
import React, { useMemo } from 'react';

const ValuePropSection: React.FC = () => {
  const problems = useMemo(() => [
    {
      title: "Your Leads Are Cooling",
      desc: "You're spending money to get people interested, but if you don't reply in seconds, you're throwing that investment away. We fix your response time instantly.",
      icon: "📩"
    },
    {
      title: "You're Trapped in Admin",
      desc: "You didn't start your business to update CRMs. You're losing hours every week that should be spent on high-level direction and growth.",
      icon: "⌨️"
    },
    {
      title: "Your Payroll is Bloated",
      desc: "You feel like you need more people just to keep up, but more staff means more management for you. There is a more efficient way to scale your output.",
      icon: "📉"
    },
    {
      title: "Wasted Sales Energy",
      desc: "You're taking calls with people who aren't ready to buy. Your calendar should only have qualified buyers who are a perfect match for your specific service.",
      icon: "🛑"
    },
    {
      title: "Your Content is Stalling",
      desc: "You know you need to be visible, but creating assets takes too much of your focus. We build custom models that speak in your specific brand voice.",
      icon: "✍️"
    },
    {
      title: "Flying Blind",
      desc: "You don't have a clear, real-time view of your ROI because your data is scattered. We build a unified brain for your specific business metrics.",
      icon: "📊"
    }
  ], []);

  const solutions = useMemo(() => [
    {
      title: "Your Custom AI Receptionist",
      desc: "A bot trained specifically on your product, your pricing, and your tone of voice. It nurtures your leads exactly the way you would.",
      icon: "🤖"
    },
    {
      title: "Workflow Architecture",
      desc: "We don't just 'connect' apps. We architect a custom flow that mirrors your ideal operations, removing every manual click you currently make.",
      icon: "⚙️"
    },
    {
      title: "10x Revenue Software",
      desc: "Beyond automation, we build proprietary AI-driven software tools that act as high-output revenue engines for your specific bottom line.",
      icon: "🚀"
    },
    {
      title: "ICP Vetting Agents",
      desc: "Custom AI filters that check every prospect against your specific ICP. No more tire-kickers on your calendar, ever again.",
      icon: "🛡️"
    },
    {
      title: "Personalized Outreach Engine",
      desc: "Outreach that doesn't look like spam. Our models use your specific case studies and results to build trust automatically at scale.",
      icon: "💡"
    },
    {
      title: "Your Proprietary Dashboard",
      desc: "A custom-built data command center that gives you the exact insights you need to make decisions for your specific business.",
      icon: "📈"
    }
  ], []);

  const cardStyle: React.CSSProperties = {
    contain: 'content',
    transform: 'translateZ(0)',
    willChange: 'transform'
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto section-optimized">
      {/* THE PROBLEMS - Personal and Specific */}
      <div className="mb-40">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block bg-red-500/10 text-red-400 font-black px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] mb-6 border border-red-500/20">
            Your Specific Growth Blockers
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-[1.1]">
            Is your business <br className="hidden md:block" /> actually working for you?
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-medium">
            You are likely feeling the friction of manual work every single day. We don't provide generic software; we solve the specific issues that keep you awake at night.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((item, idx) => (
            <div 
              key={idx} 
              style={cardStyle}
              className="bg-[#0f0f0f] border border-white/5 p-8 rounded-3xl transition-all hover:border-red-500/20 group"
            >
              <div className="text-3xl mb-6 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* THE SOLUTIONS - Emphasizing Customization & Software */}
      <div className="pt-24 border-t border-white/5">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block bg-green-500/10 text-green-400 font-black px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] mb-6 border border-green-500/20">
            Tailored AI Engineering
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-[1.1]">
            Custom software built <br className="hidden md:block" /> to drive 10x revenue.
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-medium">
            We don't do 'off-the-shelf'. We audit your unique process and engineer custom AI-driven software and automation that fits your business like a glove.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((item, idx) => (
            <div 
              key={idx} 
              style={cardStyle}
              className="bg-[#0f0f0f] border border-white/5 p-8 rounded-3xl group hover:border-purple-500/30 transition-all"
            >
              <div className="text-3xl mb-6 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ROI SUMMARY */}
      <div className="mt-32 bg-[#0f0f0f] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 border border-white/5 relative overflow-hidden" style={{ contain: 'layout' }}>
        <div className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)' }}></div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 tracking-tight text-left">The Difference is Design</h3>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10">
                <p className="text-red-400 font-bold mb-3">Generic SaaS Solutions</p>
                <ul className="text-gray-500 text-sm space-y-3 font-medium">
                  <li>• You have to change your business to fit the tool</li>
                  <li>• Static features that don't scale with your revenue</li>
                  <li>• Fragmented data and zero competitive edge</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/10">
                <p className="text-green-400 font-bold mb-3">SysAgen Custom AI Software</p>
                <ul className="text-gray-400 text-sm space-y-3 font-medium">
                  <li>• Proprietary tools built for your unfair advantage</li>
                  <li>• High-output AI software engineered for 10x ROI</li>
                  <li>• Fully managed, scalable infrastructure</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 p-10 text-center shadow-2xl">
            <div className="text-6xl font-black text-white mb-2">10x</div>
            <div className="text-[10px] text-purple-400 font-black uppercase tracking-[0.2em] mb-8">Targeted Revenue Growth</div>
            <a href="#contact" className="w-full bg-purple-600 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-purple-500 transition-all active:scale-95 shadow-lg shadow-purple-500/20">
              Book a Free Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropSection;
