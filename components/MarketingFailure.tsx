
import React from 'react';

const MarketingFailure: React.FC = () => {
  const points = [
    {
      title: "Marketing Agencies focus on Ads only",
      desc: "They generate leads but take no responsibility for what happens after the click. If your internal systems are broken, their ads are just an expensive way to fail.",
      icon: "📣"
    },
    {
      title: "Software Companies focus on Tools",
      desc: "They sell you a platform and leave you to figure it out. Without a strategic revenue framework, you just end up with another monthly subscription you don't use.",
      icon: "💻"
    },
    {
      title: "Consultants focus on Theory",
      desc: "They give you a 50-page strategy document but no way to implement it. You need infrastructure that works, not more advice to manage.",
      icon: "📜"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto section-optimized bg-gradient-to-b from-transparent to-[#050505] rounded-[3rem]">
      <div className="text-center mb-16 md:mb-20">
        <div className="inline-block bg-purple-500/10 text-purple-400 font-black px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] mb-6 border border-purple-500/20">
          The Industry Gap
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-[1.1]">
          Why most marketing <br className="hidden md:block" /> fails private clinics.
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-medium">
          The gap isn't in the marketing; it's in the infrastructure. We don't just provide services; we build end-to-end revenue systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {points.map((point, idx) => (
          <div key={idx} className="relative">
            <div className="text-4xl mb-6">{point.icon}</div>
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{point.title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm font-medium">
              {point.desc}
            </p>
            {idx < 2 && (
              <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-20 p-8 md:p-12 bg-white/5 border border-white/10 rounded-[2rem] text-center">
        <p className="text-white text-lg md:text-xl font-bold tracking-tight">
          We position ourselves as <span className="text-purple-400">Infrastructure Builders</span>. We install the predictable systems that allow your clinic to scale with total control.
        </p>
      </div>
    </section>
  );
};

export default MarketingFailure;
