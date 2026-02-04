
import React, { useEffect } from 'react';

declare global {
  interface Window {
    Cal?: any;
  }
}

const BookingSection: React.FC = () => {
  useEffect(() => {
    (function (C, A, L) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          let s = d.createElement("script");
          s.src = A;
          d.head.appendChild(s);
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", "30min", { origin: "https://app.cal.com" });

    window.Cal.ns["30min"]("inline", {
      elementOrSelector: "#my-cal-inline-30min",
      config: { 
        layout: "month_view", 
        useSlotsViewOnSmallScreen: true,
        theme: "dark" // Explicitly setting dark theme for coherence
      },
      calLink: "sysagenlab/30min",
    });

    window.Cal.ns["30min"]("ui", { 
      styles: { branding: { brandColor: "#8b5cf6" } },
      hideEventTypeDetails: false, 
      layout: "month_view" 
    });
  }, []);

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="bg-[#111] border border-white/10 rounded-[3rem] overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side: Conversion Copy */}
          <div className="lg:w-1/3 p-8 md:p-16 bg-gradient-to-br from-purple-900/10 to-transparent border-b lg:border-b-0 lg:border-r border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter leading-tight">
              Book Your 30-Min <br />
              <span className="text-purple-500">Discovery Call.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
              Select a time that works for you. In this 30-minute discovery session, we will deep-dive into your manual bottlenecks and provide a concrete ROI roadmap for AI automation.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Instant Scheduling</h4>
                  <p className="text-gray-500 text-xs mt-1">No back-and-forth emails. Sync directly with our calendar.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">30-Minute Deep Dive</h4>
                  <p className="text-gray-500 text-xs mt-1">Comprehensive, straightforward analysis of your business operations.</p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5">
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-3">Questions?</p>
                <a href="mailto:Hello@sysagenlab.co.uk" className="text-white font-bold hover:text-purple-400 transition-colors flex items-center gap-2 group">
                  Hello@sysagenlab.co.uk
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Cal.com Embed */}
          <div className="lg:w-2/3 min-h-[600px] relative bg-[#0a0a0a]">
            {/* Calendar Container */}
            <div 
              id="my-cal-inline-30min" 
              className="w-full h-full min-h-[600px] overflow-auto scrollbar-hide"
            ></div>
            
            {/* Subtle Overlay Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 blur-[60px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-600/5 blur-[60px] pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
