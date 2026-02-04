
import React from 'react';
import { Testimonial } from '../types';

const reviews: Testimonial[] = [
  {
    name: "Alex Rivera",
    handle: "CEO, Rivera Media",
    text: "SysAgen Lab automated our lead triage. We went from a 4-hour response time to 30 seconds. Our conversion rate increased by 40% in two months.",
    avatar: "https://picsum.photos/100/100?random=1",
    rating: 5
  },
  {
    name: "Sarah Chen",
    handle: "Founder, SC Designs",
    text: "They integrated our CRM with our project management tools. We saved 15 hours of admin work per week. The system paid for itself in 3 weeks.",
    avatar: "https://picsum.photos/100/100?random=2",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    handle: "Ops Director, Thorne Ltd",
    text: "The AI outreach bot they built is booking more qualified meetings than our full-time SDR did last year. Highly efficient and cost-effective.",
    avatar: "https://picsum.photos/100/100?random=3",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">Verified Business Results</h2>
          <p className="text-gray-500 mt-4 font-medium italic">How we helped our clients reduce costs and increase output.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-[#111] border border-white/5 p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full grayscale" />
                  <div>
                    <h4 className="font-bold text-white text-sm">{review.name}</h4>
                    <p className="text-xs text-purple-400 font-bold uppercase tracking-tighter">{review.handle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
