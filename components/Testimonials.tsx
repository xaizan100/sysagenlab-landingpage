
import React from 'react';
import { motion } from 'framer-motion';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';

const reviews: Testimonial[] = [
  {
    name: "Dr. James Aris",
    handle: "Clinical Director, Aris Aesthetics",
    text: "SysAgen Lab installed our lead triage system. We went from a 4-hour response time to 30 seconds. Our consultation booking rate increased by 40% in two months.",
    avatar: "https://picsum.photos/100/100?random=1",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    handle: "Owner, The Wellness Collective",
    text: "They integrated our booking system with a structured follow-up engine. We saved 15 hours of admin work per week and eliminated no-shows with deposit enforcement.",
    avatar: "https://picsum.photos/100/100?random=2",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    handle: "Director, Thorne Specialist Clinic",
    text: "The revenue infrastructure they built is capturing more high-value treatment plans than our previous manual processes ever could. Highly professional and strategic.",
    avatar: "https://picsum.photos/100/100?random=3",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto section-optimized px-6">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-left mb-24"
      >
        <div className="flex items-center gap-4 mb-10">
          <div className="w-10 h-[1px] bg-brand-accent"></div>
          <span className="section-label">Client Outcomes</span>
        </div>
        <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-brand-white mb-10 tracking-[-0.05em] leading-[0.85] uppercase">Verified Results</h2>
        <p className="text-brand-grey mt-6 font-light italic text-lg">Measurable impact across private medical and aesthetic practices.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {reviews.map((review, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="editorial-card p-10 md:p-12 flex flex-col justify-between"
          >
            <div className="relative z-10">
              <p className="text-brand-grey text-base leading-relaxed mb-16 font-light italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-6 pt-10 border-t border-brand-border">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  loading="lazy"
                  decoding="async"
                  width="56"
                  height="56"
                  className="w-12 h-12 rounded-none grayscale object-cover" 
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-black text-brand-white text-xs uppercase tracking-tight">{review.name}</h4>
                  <p className="text-[9px] text-brand-grey font-black uppercase tracking-[0.3em] mt-1">{review.handle}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
