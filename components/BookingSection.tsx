import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

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
      { rootMargin: '200px' }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
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
      config: { layout: "month_view", useSlotsViewOnSmallScreen: true, theme: "dark" },
      calLink: "sysagenlab/30min",
    });
    window.Cal.ns["30min"]("ui", {
      styles: { branding: { brandColor: "#c9a227" } },
      hideEventTypeDetails: false,
      layout: "month_view",
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
          <div className="lg:w-1/3 p-10 md:p-16 lg:p-20 bg-brand-surface border-b lg:border-b-0 lg:border-r border-brand-border">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-[1px] bg-brand-accent" />
                <span className="section-label">Revenue Audit Call</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-white tracking-[-0.05em] leading-[0.85] uppercase">
                Book Your <br />
                <span className="text-brand-accent">Revenue Audit.</span>
              </h2>
            </motion.div>

            <p className="text-brand-grey text-lg mb-16 leading-relaxed font-light">
              This is a diagnostic call, not a sales pitch. We audit your demand generation, your conversion infrastructure, and your revenue leak points. If we don't believe we can create measurable impact for your clinic, we'll say so. That builds trust and saves everyone time.
            </p>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="flex items-start gap-6"
              >
                <div className="text-[10px] font-black text-brand-accent mt-1">01</div>
                <div>
                  <h4 className="text-brand-white font-black text-sm uppercase tracking-tight">Diagnostic, Not Pitch</h4>
                  <p className="text-brand-grey text-xs mt-3 font-light leading-relaxed">We assess fit and impact. If we can't help meaningfully, we tell you. No hard sell.</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex items-start gap-6"
              >
                <div className="text-[10px] font-black text-brand-accent mt-1">02</div>
                <div>
                  <h4 className="text-brand-white font-black text-sm uppercase tracking-tight">Clear Next Steps</h4>
                  <p className="text-brand-grey text-xs mt-3 font-light leading-relaxed">Leave the call with a clear picture of your revenue infrastructure and what would need to change.</p>
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
                <a href="mailto:Hello@sysagenlab.co.uk" className="text-brand-accent font-black hover:text-brand-white transition-colors flex items-center gap-4 group text-sm uppercase tracking-[0.2em]">
                  <Mail className="w-4 h-4" />
                  Hello@sysagenlab.co.uk
                </a>
              </motion.div>
            </div>
          </div>

          <div className="lg:w-2/3 min-h-[500px] md:min-h-[600px] relative bg-brand-muted">
            {!isVisible && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 border-2 border-brand-border border-t-brand-accent rounded-full animate-spin" />
              </div>
            )}
            <div
              id="my-cal-inline-30min"
              className="w-full h-full min-h-[500px] md:min-h-[600px] overflow-auto scrollbar-hide"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BookingSection;
