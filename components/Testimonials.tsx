
import React from 'react';
import { Testimonial } from '../types';

const reviews: Testimonial[] = [
  {
    name: "Alex Rivera",
    handle: "@arivera_growth",
    text: "SysAgen Lab completely transformed how we handle cold outreach. Their AI agents are booking 10+ high-quality meetings a week without us lifting a finger.",
    avatar: "https://picsum.photos/100/100?random=1",
    rating: 5
  },
  {
    name: "Sarah Chen",
    handle: "@sarah_designs",
    text: "The automated fulfillment workflows they set up saved my agency 40 hours a week. It feels like I have a 5-person team, but it's all AI.",
    avatar: "https://picsum.photos/100/100?random=2",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    handle: "@thorne_ventures",
    text: "Highly recommended for any business owner looking to scale. The value proposition is insane. They paid for themselves in the first month.",
    avatar: "https://picsum.photos/100/100?random=3",
    rating: 5
  },
  {
    name: "Jessica Wu",
    handle: "@jess_w",
    text: "I was skeptical about AI, but SysAgen Lab proved me wrong. The lead quality is better than what my human SDRs were finding.",
    avatar: "https://picsum.photos/100/100?random=4",
    rating: 5
  },
  {
    name: "David Smith",
    handle: "@davids_tech",
    text: "The technical depth these guys have is incredible. It's not just a wrapper; they build real infrastructure.",
    avatar: "https://picsum.photos/100/100?random=5",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    handle: "@elena_prod",
    text: "Efficiency doubled, stress halved. If you're stuck at 50k/mo, these are the people you need to talk to.",
    avatar: "https://picsum.photos/100/100?random=6",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 relative">
          {/* Heart/Icon decorative element from design inspiration */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none">
             <svg className="w-32 h-32 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          </div>
          <h2 className="text-4xl font-bold text-white relative z-10">Business owners love SysAgen Lab</h2>
          <p className="text-gray-500 mt-4">Join hundreds of entrepreneurs scaling with AI.</p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review, i) => (
            <div key={i} className="break-inside-avoid-column bg-[#111] border-gradient-shadow p-6 rounded-3xl flex flex-col transition-all hover:border-purple-500/50">
              <div className="flex items-center gap-4 mb-4">
                <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full border border-white/10" />
                <div>
                  <h4 className="font-bold text-white text-sm">{review.name}</h4>
                  <p className="text-xs text-purple-400">{review.handle}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 italic">
                "{review.text}"
              </p>
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
