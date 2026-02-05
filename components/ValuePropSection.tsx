
import React from 'react';

const ValuePropSection: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      {/* THE PROBLEMS - 6 Targeted Bottlenecks */}
      <div className="mb-40">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block bg-red-500/10 text-red-400 font-black px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] mb-6 border border-red-500/20">
            The Scaling Killers
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-[1.1]">
            Why Your Agency <br className="hidden md:block" /> Isn't Growing Faster.
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-medium">
            Most agencies hit a wall because they are powered by manual labor. If you don't fix these 6 leaks, you are capping your own revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              title: "Cold Lead Decay",
              desc: "Leads get cold in minutes. If you aren't replying instantly, your competitors are stealing your future revenue.",
              icon: "📩"
            },
            {
              title: "The 'Admin' Tax",
              desc: "Your best staff are wasting 10+ hours a week on CRM updates and scheduling instead of focusing on high-level strategy.",
              icon: "⌨️"
            },
            {
              title: "Profit-Eating Payroll",
              desc: "Scaling typically means hiring more people, which increases your overhead and crushes your profit margins.",
              icon: "📉"
            },
            {
              title: "Unqualified Meetings",
              desc: "Your calendar is full of 'tire-kickers' who aren't a fit. You are wasting your most valuable asset: time.",
              icon: "🛑"
            },
            {
              title: "Content Burnout",
              desc: "Producing personalized outreach and social assets manually is slow and impossible to scale without errors.",
              icon: "✍️"
            },
            {
              title: "Reporting Chaos",
              desc: "Fragmented data across tools means you have no clear picture of your ROI, leading to guesswork in your business.",
              icon: "📊"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#0f0f0f] border border-white/5 p-8 rounded-3xl transition-all hover:border-red-500/20 group">
              <div className="text-3xl mb-6 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* THE SOLUTIONS - 6 Direct AI Benefits */}
      <div className="pt-24 border-t border-white/5">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block bg-green-500/10 text-green-400 font-black px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] mb-6 border border-green-500/20">
            The AI Transformation
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-[1.1]">
            Build a Machine <br className="hidden md:block" /> That Scales Without You.
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-medium">
            We engineer the infrastructure that automates the grunt work, ensuring 100% consistency and zero burnout.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              title: "24/7 AI Receptionist",
              desc: "Instantly capture and nurture leads at any time of day. Our bots answer questions and book calls while you sleep.",
              icon: "🤖"
            },
            {
              title: "Self-Updating Systems",
              desc: "We sync your CRM, Email, and Slack so data flows automatically. No more manual entry or missed follow-ups.",
              icon: "⚙️"
            },
            {
              title: "High-Margin Delivery",
              desc: "Automate parts of your service delivery to handle 5x more clients with the same team size and zero quality drop.",
              icon: "🚀"
            },
            {
              title: "Lead Vetting Agents",
              desc: "Our AI qualifies leads based on your specific criteria before they can book. Only spend time with high-intent buyers.",
              icon: "🛡️"
            },
            {
              title: "AI Content Engine",
              desc: "Scale your outreach with hyper-personalized messaging and assets generated by custom-trained AI models.",
              icon: "💡"
            },
            {
              title: "Unified ROI Dashboards",
              desc: "Get real-time, automated reports that pull data from across your stack into one clear view of your business health.",
              icon: "📈"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#0f0f0f] border border-white/5 p-8 rounded-3xl group hover:border-purple-500/30 transition-all">
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
      <div className="mt-32 bg-[#0f0f0f] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 blur-[100px] pointer-events-none"></div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 tracking-tight text-left">The Competitive Advantage</h3>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10">
                <p className="text-red-400 font-bold mb-3">Manual Agency (Low Margin)</p>
                <ul className="text-gray-500 text-sm space-y-3 font-medium">
                  <li>• Reactive lead management</li>
                  <li>• High human error & churn</li>
                  <li>• Profit disappears into overhead</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/10">
                <p className="text-green-400 font-bold mb-3">SysAgen Agency (High Margin)</p>
                <ul className="text-gray-400 text-sm space-y-3 font-medium">
                  <li>• Proactive, instant automation</li>
                  <li>• 100% data accuracy & speed</li>
                  <li>• Infinite scalability with fixed costs</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 p-10 text-center shadow-2xl">
            <div className="text-6xl font-black text-white mb-2">3.5x</div>
            <div className="text-[10px] text-purple-400 font-black uppercase tracking-[0.2em] mb-8">Average Profit Margin Increase</div>
            <a href="#contact" className="w-full bg-purple-600 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-purple-500 transition-all active:scale-95 shadow-lg shadow-purple-500/20">
              Claim Your Free Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropSection;
