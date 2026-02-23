import React from 'react';
import { motion } from 'framer-motion';
import { Testimonial } from '../types';

const reviews: Testimonial[] = [
  {
    name: "Dr. James Aris",
    handle: "Clinical Director, Aris Aesthetics",
    text: "They installed our lead capture and speed-to-lead system. We went from a four-hour response time to under a minute. Consultation bookings increased. No hype—just structure.",
    avatar: "https://picsum.photos/100/100?random=1",
    rating: 5,
  },
  {
    name: "Sarah Jenkins",
    handle: "Owner, The Wellness Collective",
    text: "We had leads but they were slipping through. SysAgen Lab built the follow-up and deposit system. We cut no-shows and saved hours of admin. Clear, professional partnership.",
    avatar: "https://picsum.photos/100/100?random=2",
    rating: 5,
  },
  {
    name: "Marcus Thorne",
    handle: "Director, Thorne Specialist Clinic",
    text: "They don't just run ads—they built the full revenue system. Demand, capture, conversion, and visibility. We now know our numbers and can scale predictably.",
    avatar: "https://picsum.photos/100/100?random=3",
    rating: 5,
  },
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
          <div className="w-10 h-[1px] bg-brand-accent" />
          <span className="section-label">Client Outcomes</span>
        </div>
        <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-brand-white mb-10 tracking-[-0.05em] leading-[0.85] uppercase">
          Verified Results
        </h2>
        <p className="text-brand-grey mt-6 font-light text-lg max-w-2xl">
          Measurable impact across private medical and aesthetic practices. No exaggerated claims—just outcomes from installed systems.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
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
                  width={56}
                  height={56}
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
