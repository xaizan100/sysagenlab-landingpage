
import React from 'react';

const ValuePropSection: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      {/* THE PROBLEMS */}
      <div className="mb-40">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-500/10 text-red-400 font-black px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] mb-6 border border-red-500/20">
            The Cost of Inefficiency
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
            Where your revenue is leaking.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            Manual processes are expensive, slow, and prone to human error. If you are not using AI, your operating costs are higher than they should be.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Slow Lead Response",
              desc: "Leads go cold if not contacted within 5 minutes. Most businesses take hours to respond, losing 60% of potential sales opportunities.",
              icon: "⏱️"
            },
            {
              title: "Disconnected Data",
              desc: "Manually moving info between CRM, Slack, and Sheets wastes employee time and leads to data entry mistakes.",
              icon: "📁"
            },
            {
              title: "Inconsistent Outreach",
              desc: "Human sales teams can only send so many emails. They get tired, forget to follow up, and miss revenue targets.",
              icon: "📉"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#0f0f0f] border border-white/5 p-8 rounded-3xl">
              <div className="text-3xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* THE SOLUTIONS */}
      <div className="pt-24 border-t border-white/5">
        <div className="text-center mb-16">
          <div className="inline-block bg-green-500/10 text-green-400 font-black px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] mb-6 border border-green-500/20">
            The Solution
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
            Automated Systems That Work 24/7.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#0f0f0f] border border-white/5 p-8 rounded-3xl group hover:border-purple-500/30 transition-all">
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">AI Lead Qualification</h3>
            <p className="text-gray-500 leading-relaxed text-sm font-medium">
              Automated agents respond to inquiries instantly. They qualify prospects based on your criteria and book meetings directly into your calendar.
            </p>
          </div>

          <div className="bg-[#0f0f0f] border border-white/5 p-8 rounded-3xl group hover:border-purple-500/30 transition-all">
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Full Software Integration</h3>
            <p className="text-gray-500 leading-relaxed text-sm font-medium">
              We connect your entire tech stack. Data flows automatically between your marketing, sales, and fulfillment tools without any manual input.
            </p>
          </div>

          <div className="bg-[#0f0f0f] border border-white/5 p-8 rounded-3xl group hover:border-purple-500/30 transition-all">
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">24/7 Sales Outreach</h3>
            <p className="text-gray-500 leading-relaxed text-sm font-medium">
              AI-driven outreach that never stops. Personalized messaging at scale that handles the initial conversation and follow-ups automatically.
            </p>
          </div>
        </div>
      </div>

      {/* COMPARISON */}
      <div className="mt-32 bg-[#0f0f0f] rounded-[3rem] p-8 md:p-16 border border-white/5">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Direct Comparison</h3>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10">
                <p className="text-red-400 font-bold mb-2">Human-Led Operations</p>
                <ul className="text-gray-500 text-sm space-y-2 list-disc pl-4">
                  <li>Salary + Benefits costs</li>
                  <li>Inconsistent performance</li>
                  <li>Data entry errors</li>
                  <li>8-hour work days</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/10">
                <p className="text-green-400 font-bold mb-2">AI-Driven Infrastructure</p>
                <ul className="text-gray-400 text-sm space-y-2 list-disc pl-4">
                  <li>Fixed setup costs</li>
                  <li>100% consistent results</li>
                  <li>Zero data entry errors</li>
                  <li>24/7/365 availability</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-black/50 rounded-3xl border border-white/5 p-10 text-center">
            <div className="text-5xl font-black text-white mb-2">80%</div>
            <div className="text-xs text-purple-400 font-bold uppercase tracking-widest mb-6">Reduction in Operating Costs</div>
            <a href="#contact" className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold hover:bg-purple-500 transition-all">
              Book Discovery Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropSection;
