
import React, { useMemo } from 'react';

const ValuePropSection: React.FC = () => {
  const problems = useMemo(() => [
    {
      title: "Slow Response Times",
      desc: "Patient enquiries cool rapidly. If you don't respond within minutes, they've already called the next clinic on Google. We eliminate this leak.",
      icon: "📩"
    },
    {
      title: "Missed Procedure Calls",
      desc: "Your front-of-house is busy assisting patients. Every missed call is a potential high-value treatment plan lost to a competitor.",
      icon: "📞"
    },
    {
      title: "No Structured Follow-Up",
      desc: "Leads that don't book immediately are often forgotten. Without a multi-touch follow-up system, your cost-per-acquisition skyrockets.",
      icon: "🔄"
    },
    {
      title: "No Deposit Enforcement",
      desc: "No-shows and late cancellations drain your clinic's profitability. We install automated deposit systems to protect your practitioners' time.",
      icon: "💳"
    },
    {
      title: "Zero Conversion Visibility",
      desc: "If you can't see exactly which marketing channels are producing booked treatments, you're guessing with your growth budget.",
      icon: "📊"
    },
    {
      title: "Dormant Patient Databases",
      desc: "Your existing patients are your most valuable asset. Most clinics leave thousands in revenue on the table by failing to reactivate them.",
      icon: "💤"
    }
  ], []);

  const solutions = useMemo(() => [
    {
      title: "Demand Creation Systems",
      desc: "We don't just 'run ads'. We build predictable demand engines that attract high-intent patients looking for specific specialist treatments.",
      icon: "🧲"
    },
    {
      title: "Lead Capture & Speed-to-Lead",
      desc: "Instant, professional responses to every enquiry, 24/7. We ensure no patient is left waiting, regardless of when they reach out.",
      icon: "⚡"
    },
    {
      title: "Conversion & Follow-Up",
      desc: "Automated, ethical nurture sequences that educate patients and build trust, leading to higher consultation booking rates.",
      icon: "📈"
    },
    {
      title: "Retention & Reactivation",
      desc: "Systems that keep your clinic top-of-mind and automatically reach out to past patients for follow-up treatments and maintenance.",
      icon: "🔁"
    },
    {
      title: "Reporting & Revenue Visibility",
      desc: "A clear, real-time dashboard showing your exact ROI, conversion rates, and revenue pipeline. No more guesswork.",
      icon: "🖥️"
    },
    {
      title: "Infrastructure Management",
      desc: "We install and manage the entire revenue system, ensuring your clinic's growth is supported by a robust, scalable foundation.",
      icon: "🏗️"
    }
  ], []);

  const cardStyle: React.CSSProperties = {
    contain: 'content',
    transform: 'translateZ(0)',
    willChange: 'transform'
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto section-optimized">
      {/* THE PROBLEMS - The Hidden Revenue Leak */}
      <div className="mb-40">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block bg-red-500/10 text-red-400 font-black px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] mb-6 border border-red-500/20">
            The Hidden Revenue Leak
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-[1.1]">
            Is your clinic losing <br className="hidden md:block" /> revenue to poor infrastructure?
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-medium">
            Most clinics don't have a lead problem; they have a system problem. We identify and fix the structural gaps that are costing you patients every single day.
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

      {/* THE SOLUTIONS - Revenue Infrastructure */}
      <div className="pt-24 border-t border-white/5">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block bg-green-500/10 text-green-400 font-black px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] mb-6 border border-green-500/20">
            Our Approach
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-[1.1]">
            Revenue Infrastructure <br className="hidden md:block" /> built for modern clinics.
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-medium">
            We install end-to-end systems that manage the entire patient journey, from initial interest to long-term retention and advocacy.
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
            <h3 className="text-3xl font-bold text-white mb-8 tracking-tight text-left">Strategic Infrastructure</h3>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10">
                <p className="text-red-400 font-bold mb-3">Traditional Marketing Agencies</p>
                <ul className="text-gray-500 text-sm space-y-3 font-medium">
                  <li>• Focus solely on lead volume, not conversion</li>
                  <li>• No integration with your clinic's operations</li>
                  <li>• Fragmented reporting and zero accountability</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/10">
                <p className="text-green-400 font-bold mb-3">SysAgen Revenue Systems</p>
                <ul className="text-gray-400 text-sm space-y-3 font-medium">
                  <li>• End-to-end systems built for patient conversion</li>
                  <li>• Seamless integration with your existing team</li>
                  <li>• Full visibility on revenue and ROI metrics</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 p-10 text-center shadow-2xl">
            <div className="text-6xl font-black text-white mb-2">ROI</div>
            <div className="text-[10px] text-purple-400 font-black uppercase tracking-[0.2em] mb-8">Predictable Growth Engine</div>
            <a href="#contact" className="w-full bg-purple-600 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-purple-500 transition-all active:scale-95 shadow-lg shadow-purple-500/20">
              Book a Revenue Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropSection;
