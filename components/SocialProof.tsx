import React from 'react';
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
              <span
                key={i}
                className="text-sm md:text-base font-black text-brand-grey tracking-tighter uppercase hover:text-brand-white transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default SocialProof;
