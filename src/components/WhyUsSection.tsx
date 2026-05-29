import React from 'react';
import { WHY_US_REASONS } from '../data';
import { ShieldCheck, ClipboardCheck, Sparkles, AlertCircle, Compass, MapPin } from 'lucide-react';

export default function WhyUsSection() {
  // Map icons based on text details
  const getIcon = (metric: string) => {
    switch (metric) {
      case '5.0 Rating':
        return <Compass className="w-5 h-5 text-amber-500 animate-pulse" />;
      case '100% Transparent':
        return <ClipboardCheck className="w-5 h-5 text-cyan-500" />;
      case 'Vastu Experts':
        return <Sparkles className="w-5 h-5 text-yellow-500" />;
      case 'Premium Materials':
        return <ShieldCheck className="w-5 h-5 text-emerald-500" />;
      case 'On-Time Handovers':
        return <AlertCircle className="w-5 h-5 text-purple-500" />;
      default:
        return <MapPin className="w-5 h-5 text-rose-500" />;
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-600 font-extrabold uppercase tracking-widest text-xs sm:text-sm bg-cyan-100/50 px-3.5 py-1.5 rounded-full border border-cyan-100">Why Select Us</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-4 leading-tight">
            The Double-Tested <span className="text-cyan-600">Aakruthi Advantage</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Building a home is a lifetime investment. We protect your savings by supplying elite materials, strict structural checkpoints, and unmatched transparency:
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" id="why-us-grid">
          {WHY_US_REASONS.map((reason, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100/80 hover:border-cyan-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              id={`why-us-card-${i}`}
            >
              <div>
                {/* Header with Icon and Badge */}
                <div className="flex justify-between items-center mb-6">
                  <div className="h-10 w-10 rounded-lg bg-white shadow-xs flex items-center justify-center border border-slate-100">
                    {getIcon(reason.metric)}
                  </div>
                  <span className="text-[10px] font-extrabold text-cyan-600 uppercase tracking-widest bg-cyan-100/40 px-2.5 py-1 rounded">
                    {reason.metric}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">{reason.title}</h3>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {reason.description}
                </p>
              </div>

              {/* Verified checklist anchor */}
              <div className="mt-6 pt-4 border-t border-slate-200/50 flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-slate-500 font-bold font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>Standard Checklist Cleared</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Trust Stats Strip */}
        <div className="border border-slate-100 rounded-3xl bg-slate-50/60 p-6 sm:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-mono">103+</p>
            <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1.5">Google 5-Star Reviews</p>
          </div>
          <div className="border-l border-slate-200/80">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-mono">116+</p>
            <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1.5">JustDial Client Ratings</p>
          </div>
          <div className="border-l border-slate-200/80">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cyan-600 font-mono">10 Years</p>
            <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1.5">Built Material Warranties</p>
          </div>
          <div className="border-l border-slate-200/80">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cyan-600 font-mono">100%</p>
            <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1.5">Vastu Compliant Floor Plans</p>
          </div>
        </div>

      </div>
    </section>
  );
}
