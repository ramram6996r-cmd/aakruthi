import React from 'react';
import { PORTFOLIO_PROJECTS, COMPANY_CONTACT } from '../data';
import { motion } from 'motion/react';
import { MapPin, Calendar, Layout, Quote, MessageSquare, ExternalLink } from 'lucide-react';

export default function PortfolioSection() {
  const handleInquireProject = (title: string, location: string) => {
    const text = `Hello Aakruthi Constructions! I saw your completed masterpiece "${title}" in ${location} on your website, and I want to consult you regarding a similar project style for my plot.`;
    window.open(`${COMPANY_CONTACT.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="portfolio" className="py-20 sm:py-24 bg-slate-900 text-white relative">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-400 font-extrabold uppercase tracking-widest text-xs sm:text-sm bg-cyan-400/10 px-3.5 py-1.5 rounded-full border border-cyan-400/20">Featured Work</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4">
            Our Completed <span className="text-cyan-400">Masterpieces</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Witness our commitment to structural excellence and luxury aesthetics. Here are real projects completed end-to-end to full client satisfaction in Davangere:
          </p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="portfolio-grid">
          {PORTFOLIO_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="bg-slate-850/90 border border-slate-800/80 rounded-3xl overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:border-slate-700 transition-all duration-300 group"
              id={`portfolio-card-${proj.id}`}
            >
              <div>
                {/* Visual Top Panel */}
                <div className="relative overflow-hidden aspect-video border-b border-slate-800">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-15 bg-cyan-600/90 backdrop-blur-md text-white text-xs font-extrabold px-3 py-1.5 rounded-full">
                    {proj.category}
                  </div>
                </div>

                {/* Body details */}
                <div className="p-6">
                  {/* Location & Meta info */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs text-slate-400 mb-4 font-semibold font-mono uppercase tracking-wide">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4.5 h-4.5 text-cyan-400 shrink-0" />
                      <span>{proj.location}</span>
                    </span>
                    <span className="hidden sm:inline text-slate-700">|</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4.5 h-4.5 text-amber-500 shrink-0" />
                      <span>{proj.duration} Build Time</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {proj.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm mt-3 leading-relaxed font-normal">
                    {proj.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-800/80">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Key Technical Highlights:</h4>
                    <ul className="space-y-2">
                      {proj.highlights.map((hl, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                          <span className="leading-tight font-medium">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Testimonial and Inquiry controls */}
              <div className="px-6 pb-6">
                {proj.testimonial && (
                  <div className="mt-2 bg-slate-900/60 border border-slate-800/40 rounded-2xl p-4 relative mb-6">
                    <Quote className="absolute top-3 right-3 w-8 h-8 text-slate-850 z-0" />
                    <p className="text-xs text-slate-300 italic relative z-10 leading-relaxed font-normal">
                      "{proj.testimonial.text}"
                    </p>
                    <p className="text-[10px] font-bold text-amber-400 mt-2.5 text-right font-mono tracking-wide uppercase">
                      — {proj.testimonial.author}
                    </p>
                  </div>
                )}

                <button
                  onClick={() => handleInquireProject(proj.title, proj.location)}
                  className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-cyan-400 stroke-none" />
                  <span>Inquire Similar Design</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call CTA Block */}
        <div className="mt-16 bg-gradient-to-r from-cyan-900/40 to-slate-800/40 border border-slate-800/80 rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-lg sm:text-xl font-bold">Have a custom empty site or design idea in Davangere?</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed font-normal">
              Get an advanced consultation on layout plans, estimation lists, steel specifications, and Vastu verification entirely free of cost.
            </p>
          </div>
          <a
            href={`tel:${COMPANY_CONTACT.phone}`}
            className="px-6 py-3.5 rounded-xl bg-amber-400 text-slate-950 font-black text-sm flex items-center gap-2 hover:bg-amber-300 shrink-0 transform hover:-translate-y-0.5 transition-all text-center justify-center cursor-pointer w-full md:w-auto shadow-md"
          >
            <span>Discuss Custom Build</span>
          </a>
        </div>

      </div>
    </section>
  );
}
