import React from 'react';
import { COMPANY_CONTACT, PORTFOLIO_IMAGES } from '../data';
import { motion } from 'motion/react';
import { MessageSquare, Phone, Star, MapPin, ShieldCheck, ThumbsUp, Compass } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section id="home" className="relative bg-slate-950 text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image Layer with custom gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={PORTFOLIO_IMAGES.villa}
          alt="Aakruthi Constructions Premium Villa"
          className="w-full h-full object-cover object-center opacity-40 scale-105 filter brightness-75 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-950/50 z-10" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 w-full">
        <div className="max-w-3xl">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6"
            id="hero-badge"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Davangere's Premier 5.0-Star Architect & Civil Builder</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
            id="hero-title"
          >
            We Construct Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-cyan-400">Dream House</span> With Absolute Craftsmanship.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal"
            id="hero-description"
          >
            From custom 2D blueprints to flawless civil execution, exquisite modern interior wardrobes, waterproofing, and structural finishing. Rated <span className="font-semibold text-white">5.0 (103+ Google Reviews)</span> based near Ayyappa Swamy Temple, MCC, Davangere.
          </motion.p>

          {/* Quick Stats Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 border-y border-slate-800 py-6"
            id="hero-stats"
          >
            <div>
              <div className="flex items-center gap-1.5 text-amber-400">
                <Star className="w-5 h-5 fill-amber-400 stroke-amber-400" />
                <span className="text-xl sm:text-2xl font-bold font-mono">5.0</span>
              </div>
              <p className="text-xs text-slate-400 mt-1 font-semibold uppercase tracking-wider">Perfect Google Rating</p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-cyan-400">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xl sm:text-2xl font-bold font-mono">103+</span>
              </div>
              <p className="text-xs text-slate-400 mt-1 font-semibold uppercase tracking-wider">Happy Handovers</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <ThumbsUp className="w-5 h-5" />
                <span className="text-xl sm:text-2xl font-bold font-mono">100%</span>
              </div>
              <p className="text-xs text-slate-400 mt-1 font-semibold uppercase tracking-wider">Vastu & Cost Verified</p>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            id="hero-cta-group"
          >
            <a
              href={`${COMPANY_CONTACT.whatsappUrl}?text=Hello%20Aakruthi%20Constructions!%20I%27m%20interested%20in%20discussing%20my%20new%20home%20construction%20project%20in%20Davangere.%20Please%20let%20me%20know%20when%20you%20are%20free.`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold text-base flex items-center justify-center gap-3 shadow-lg shadow-emerald-900/35 hover:shadow-xl hover:shadow-emerald-900/50 hover:-translate-y-1 transform transition-all duration-200 cursor-pointer text-center w-full sm:w-auto hover:brightness-110"
              id="hero-primary-whatsapp"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Consult via WhatsApp</span>
            </a>
            
            <button
              onClick={() => onScrollToSection('floor-plans')}
              className="px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-100 border border-slate-800 font-bold text-base flex items-center justify-center gap-2 hover:-translate-y-1 transform transition-all duration-200 cursor-pointer w-full sm:w-auto shadow-md"
              id="hero-secondary-plans"
            >
              <Compass className="w-5 h-5 text-cyan-400" />
              <span>Browse Ready House Plans</span>
            </button>
            <button
              onClick={() => onScrollToSection('estimator')}
              className="px-6 py-4 rounded-xl bg-orange-600/20 hover:bg-orange-600/30 text-amber-400 border border-orange-500/30 font-bold text-base flex items-center justify-center gap-2 hover:-translate-y-1 transform transition-all duration-200 cursor-pointer w-full sm:w-auto"
              id="hero-tertiary-estimator"
            >
              <span>Estimate Build Cost</span>
            </button>
          </motion.div>

          {/* Physical Address Footnote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-8 flex items-center gap-2 text-slate-400 text-xs sm:text-sm"
          >
            <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              Near Ayyappa Swamy Temple, MCC, Davangere, Karnataka 577004
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
