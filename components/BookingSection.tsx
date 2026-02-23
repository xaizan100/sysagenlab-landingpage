
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

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
        theme: "light" 
      },
      calLink: "sysagenlab/30min",
    });

    window.Cal.ns["30min"]("ui", { 
      styles: { branding: { brandColor: "#111111" } },
      hideEventTypeDetails: false, 
      layout: "month_view" 
    });
  }, [isVisible]);

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto section-optimized px-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="editorial-card overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left Side: Personal Conversion Copy */}
          <div className="lg:w-1/3 p-10 md:p-16 lg:p-20 bg-brand-white border-b lg:border-b-0 lg:border-r border-brand-border">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-[1px] bg-brand-black"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-grey">Strategic Audit</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-black tracking-[-0.05em] leading-[0.85] uppercase">
                Book Your <br />
                <span className="text-brand-grey">Revenue Audit.</span>
              </h2>
            </motion.div>
            
            <p className="text-brand-grey text-lg mb-16 leading-relaxed font-light">
              This is a diagnostic assessment, not a sales pitch. We will audit your demand generation strength, your conversion infrastructure, and your revenue leak points.
            </p>

            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="flex items-start gap-6"
              >
                <div className="text-[10px] font-black text-brand-black mt-1">01</div>
                <div>
                  <h4 className="text-brand-black font-black text-sm uppercase tracking-tight">Diagnostic Assessment</h4>
                  <p className="text-brand-grey text-xs mt-3 font-light leading-relaxed">If we cannot create a measurable, significant impact for your clinic, we will say so immediately.</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex items-start gap-6"
              >
                <div className="text-[10px] font-black text-brand-black mt-1">02</div>
                <div>
                  <h4 className="text-brand-black font-black text-sm uppercase tracking-tight">Growth Engineering</h4>
                  <p className="text-brand-grey text-xs mt-3 font-light leading-relaxed">Growth should be engineered — not left to chance. Leave the call with a clear blueprint for your revenue infrastructure.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="pt-16 border-t border-brand-border"
              >
                <p className="text-[9px] text-brand-grey font-black uppercase tracking-[0.5em] mb-6">Direct Support</p>
                <a href="mailto:Hello@sysagenlab.co.uk" className="text-brand-black font-black hover:text-brand-grey transition-colors flex items-center gap-4 group text-sm uppercase tracking-[0.2em]">
                  <Mail className="w-4 h-4" />
                  Hello@sysagenlab.co.uk
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Cal.com Embed */}
          <div className="lg:w-2/3 min-h-[500px] md:min-h-[600px] relative bg-brand-offwhite">
            {!isVisible && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 border-2 border-brand-border border-t-brand-black rounded-full animate-spin"></div>
              </div>
            )}
            <div 
              id="my-cal-inline-30min" 
              className="w-full h-full min-h-[500px] md:min-h-[600px] overflow-auto scrollbar-hide"
            ></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BookingSection;
