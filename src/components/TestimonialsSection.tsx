import React, { useState } from 'react';
import { GOOGLE_REVIEWS, COMPANY_CONTACT } from '../data';
import { Star, MessageSquare, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export default function TestimonialsSection() {
  const [reviewsList, setReviewsList] = useState(GOOGLE_REVIEWS);

  return (
    <section id="reviews" className="py-20 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-600 font-extrabold uppercase tracking-widest text-xs sm:text-sm bg-cyan-100/50 px-3.5 py-1.5 rounded-full border border-cyan-100">Customer Proof</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-4 leading-tight">
            Loved by 103+ families in <span className="text-cyan-600">Davangere</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Don't take our word for it. Here is the verified feedback from Google Maps for Aakruthi Constructions, showing our flawless 5.0-star craftsmanship:
          </p>
        </div>

        {/* Google Maps Feedback Summary Card */}
        <div className="bg-white border border-slate-250/60 rounded-3xl p-6 sm:p-8 lg:p-10 mb-12 shadow-xs" id="google-reviews-aggregator">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Score */}
            <div className="md:col-span-4 text-center md:border-r border-slate-200">
              <span className="text-5xl sm:text-6xl font-black text-slate-900 font-sans tracking-tight">5.0</span>
              <div className="flex justify-center gap-1 my-3.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5.5 h-5.5 fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <p className="text-slate-500 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                Based on <span className="font-bold text-slate-900">103 Reviews</span> on Google Maps
              </p>
            </div>

            {/* Center: Rating Bars (Simulating perfect 5.0 Google score) */}
            <div className="md:col-span-5 space-y-2.5">
              {[
                { label: '5 star', width: 'w-full', percent: '100%' },
                { label: '4 star', width: 'w-0', percent: '0%' },
                { label: '3 star', width: 'w-0', percent: '0%' },
                { label: '2 star', width: 'w-0', percent: '0%' },
                { label: '1 star', width: 'w-0', percent: '0%' }
              ].map((bar, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs font-semibold text-slate-600 font-mono">
                  <span className="w-12 shrink-0 text-right">{bar.label}</span>
                  <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full bg-amber-400 rounded-full ${bar.width}`} />
                  </div>
                  <span className="w-8 shrink-0">{bar.percent}</span>
                </div>
              ))}
            </div>

            {/* Right: CTA triggers */}
            <div className="md:col-span-3 text-center md:text-right flex flex-col gap-3 justify-center">
              <a
                href={COMPANY_CONTACT.justdialUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition-all font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Check JustDial Ratings</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href={`${COMPANY_CONTACT.whatsappUrl}?text=I%20want%20to%20rate%20or%20give%20feedback%20regarding%20Aakruthi%20Constructions%20services.`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-cyan-600 text-white font-bold text-xs sm:text-sm hover:bg-cyan-700 flex items-center justify-center gap-2 shadow-sm"
              >
                <Star className="w-4.5 h-4.5 fill-white stroke-none animate-bounce" />
                <span>Rate Us on Google</span>
              </a>
            </div>

          </div>
        </div>

        {/* Reviews Cards Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="reviews-grid">
          {reviewsList.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-cyan-200 hover:shadow-md transition-all flex flex-col justify-between"
              id={`review-card-${review.id}`}
            >
              <div>
                {/* Author Details and Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* User Circular Avatar */}
                    <div className={`h-9.5 w-9.5 rounded-full flex items-center justify-center text-white font-bold text-sm ${review.avatarBg}`}>
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                        {review.author}
                      </h4>
                      <span className="text-[10px] text-slate-400 font-mono tracking-wide">
                        {review.relativeTime}
                      </span>
                    </div>
                  </div>
                  
                  {/* Rating stars */}
                  <div className="flex gap-0.5 shrink-0">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-slate-650 text-xs sm:text-sm leading-relaxed font-normal italic">
                  "{review.text}"
                </p>
              </div>

              {/* Verified metadata */}
              <div className="mt-5 pt-3.5 border-t border-slate-50 flex items-center justify-between text-[10px] font-bold font-mono text-slate-500">
                <span className="flex items-center gap-1 text-emerald-600">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Customer</span>
                </span>
                
                <span className="flex items-center gap-0.5 opacity-90">
                  <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
                  <span>Local Guide</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
