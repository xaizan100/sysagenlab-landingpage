
import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    Cal?: any;
  }
}

const BookingSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Start loading slightly before it enters the viewport
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Only load the script and init if visible
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
        theme: "dark" 
      },
      calLink: "sysagenlab/30min",
    });

    window.Cal.ns["30min"]("ui", { 
      styles: { branding: { brandColor: "#8b5cf6" } },
      hideEventTypeDetails: false, 
      layout: "month_view" 
    });
  }, [isVisible]);

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto section-optimized">
      <div className="bg-white border border-brand-border rounded-[24px] overflow-hidden shadow-premium">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side: Personal Conversion Copy */}
          <div className="lg:w-1/3 p-10 md:p-16 lg:p-20 bg-brand-surface border-b lg:border-b-0 lg:border-r border-brand-border">
            <div className="flex items-start gap-6 mb-12">
              <div className="w-1 h-20 bg-brand-black"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-black tracking-tighter leading-tight uppercase">
                Book Your <br />
                Revenue Audit.
              </h2>
            </div>
            
            <p className="text-brand-grey text-lg mb-12 leading-relaxed font-light">
              This is a diagnostic call, not a sales pitch. We will audit your current patient acquisition and conversion systems to identify exactly where your revenue is leaking.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-2 h-2 rounded-none bg-brand-black flex-shrink-0 mt-2 group-hover:scale-150 transition-transform"></div>
                <div>
                  <h4 className="text-brand-black font-bold text-sm uppercase tracking-tight">Diagnostic Approach</h4>
                  <p className="text-brand-grey text-xs mt-2 font-light leading-relaxed">If we don't believe we can create a measurable impact for your clinic, we will say so immediately.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-2 h-2 rounded-none bg-brand-black flex-shrink-0 mt-2 group-hover:scale-150 transition-transform"></div>
                <div>
                  <h4 className="text-brand-black font-bold text-sm uppercase tracking-tight">Infrastructure Blueprint</h4>
                  <p className="text-brand-grey text-xs mt-2 font-light leading-relaxed">Leave the call with a clear understanding of the systems required to scale your clinic's revenue.</p>
                </div>
              </div>

              <div className="pt-12 border-t border-brand-border">
                <p className="text-[10px] text-brand-grey font-bold uppercase tracking-[0.3em] mb-4">Direct Support</p>
                <a href="mailto:Hello@sysagenlab.co.uk" className="text-brand-black font-bold hover:opacity-60 transition-opacity flex items-center gap-3 group text-sm md:text-base uppercase tracking-widest">
                  Hello@sysagenlab.co.uk
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Cal.com Embed */}
          <div className="lg:w-2/3 min-h-[500px] md:min-h-[600px] relative bg-white">
            {!isVisible && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 border-2 border-brand-border border-t-brand-black rounded-none animate-spin"></div>
              </div>
            )}
            <div 
              id="my-cal-inline-30min" 
              className="w-full h-full min-h-[500px] md:min-h-[600px] overflow-auto scrollbar-hide"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
