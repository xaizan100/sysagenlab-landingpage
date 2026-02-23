import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const SocialProof: React.FC = () => {
  const partners = [
    'Harley Street Clinic',
    'London Medical',
    'Chelsea Wellness',
    'Mayfair Aesthetics',
    'Cambridge Health',
  ];

  return (
    <section className="py-12 md:py-16 px-6 bg-brand-charcoal">
      <ScrollReveal direction="up" amount={0.2}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col items-center gap-6 mb-12">
            <div className="w-12 h-[1px] bg-brand-border" />
            <h3 className="section-label">
              Trusted by private medical and aesthetic clinics across the UK
            </h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-70">
            {partners.map((name, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="text-sm md:text-base font-black text-brand-grey tracking-tighter uppercase hover:text-brand-white transition-colors cursor-default"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default SocialProof;
