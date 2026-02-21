
import React from 'react';
import { Testimonial } from '../types';

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
    <section className="max-w-7xl mx-auto section-optimized">
      <div className="text-left mb-24 flex items-start gap-8">
        <div className="w-1 h-32 bg-brand-black hidden md:block"></div>
        <div>
          <div className="inline-block bg-white text-brand-grey font-bold px-5 py-2 text-[10px] uppercase tracking-[0.4em] mb-8 border border-brand-border shadow-sm">
            Client Outcomes
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-brand-black mb-8 tracking-tighter leading-[1] uppercase">Verified Results</h2>
          <p className="text-brand-grey mt-6 font-light italic text-lg">Measurable impact across private medical and aesthetic practices.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {reviews.map((review, i) => (
          <div 
            key={i} 
            className="bg-white border border-brand-border p-12 rounded-[20px] flex flex-col justify-between shadow-premium transition-all duration-200 hover:-translate-y-1 hover:shadow-premium-hover group"
          >
            <div>
              <p className="text-brand-grey text-sm leading-relaxed mb-12 font-light italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-6">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  loading="lazy"
                  decoding="async"
                  width="56"
                  height="56"
                  className="w-14 h-14 rounded-none grayscale border border-brand-border group-hover:grayscale-0 transition-all object-cover" 
                />
                <div>
                  <h4 className="font-bold text-brand-black text-sm uppercase tracking-tight">{review.name}</h4>
                  <p className="text-[10px] text-brand-grey font-bold uppercase tracking-widest mt-1">{review.handle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
