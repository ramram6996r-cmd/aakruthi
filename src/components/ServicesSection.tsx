import React, { useState } from 'react';
import { SERVICES, COMPANY_CONTACT } from '../data';
import { ConstructionService, ServiceCategory } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { CheckCircle2, ChevronRight, X, MessageSquare, ExternalLink } from 'lucide-react';

export default function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'all'>('all');
  const [activePromoService, setActivePromoService] = useState<ConstructionService | null>(null);

  const categories: { label: string; value: ServiceCategory | 'all' }[] = [
    { label: 'All Offerings', value: 'all' },
    { label: 'Civil Constructions', value: 'construction' },
    { label: 'Architectural & Designs', value: 'design' },
    { label: 'Renovations & Demolitions', value: 'renovation' },
    { label: 'Waterproofing & Slopes', value: 'specialized' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  // Dynamic Lucide Icon Resolver
  const renderIcon = (iconName: string) => {
    // Resolve icon from LucideIcons dynamically
    const IconComponent = (LucideIcons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-6 h-6 text-cyan-600" />;
    }
    return <LucideIcons.Building2 className="w-6 h-6 text-cyan-600" />;
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-600 font-extrabold uppercase tracking-widest text-xs sm:text-sm bg-cyan-100/50 px-3.5 py-1.5 rounded-full border border-cyan-100">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-4 leading-tight">
            What We Do at <span className="text-cyan-600">Aakruthi Constructions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We are a licensing-certified engineering constructor delivering turnkey residential and commercial masterpieces in Davangere. View our full service suite:
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="service-filters">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide border transition-all cursor-pointer ${
                selectedCategory === cat.value
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-100/50'
              }`}
              id={`filter-btn-${cat.value}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="services-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:border-cyan-200"
                onClick={() => setActivePromoService(service)}
                id={`service-card-${service.id}`}
              >
                <div>
                  {/* Icon Box */}
                  <div className="h-12 w-12 rounded-xl bg-cyan-50 flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                    {renderIcon(service.iconName)}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                    {service.shortDescription}
                  </p>

                  {/* Highlights Bullet Previews */}
                  <ul className="mt-6 space-y-2.5">
                    {service.highlights.slice(0, 2).map((hl, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-tight">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-xs font-semibold text-cyan-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Learn More & Material Guide</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[10px] bg-slate-100 text-slate-600 font-mono font-semibold px-2 py-1 rounded">
                    {service.category.toUpperCase()}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Service Modal popup */}
        <AnimatePresence>
          {activePromoService && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative border border-slate-100"
                id="service-details-modal"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActivePromoService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Title and category */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600">
                    {renderIcon(activePromoService.iconName)}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-cyan-600 tracking-wider uppercase bg-cyan-50 px-2 py-0.5 rounded">
                      {activePromoService.category} Service
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                      {activePromoService.title}
                    </h3>
                  </div>
                </div>

                {/* General description */}
                <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {activePromoService.detailedDescription}
                </p>

                {/* Highlights list */}
                <div className="mt-6 bg-slate-50 rounded-2xl p-4 sm:p-5">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">Key Service Highlights:</h4>
                  <ul className="mt-3.5 space-y-3">
                    {activePromoService.highlights.map((hl, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="font-medium">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Feature-Value Specifications Grid */}
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-widest">Turnkey Specifications:</h4>
                  <div className="mt-3 grid grid-cols-2 gap-4">
                    {activePromoService.features.map((feat, k) => (
                      <div key={k} className="p-3 rounded-xl bg-slate-50/50 border border-slate-100">
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">{feat.label}</p>
                        <p className="text-xs sm:text-sm text-slate-800 font-bold mt-1">{feat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer and quote trigger */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-slate-500 text-center sm:text-left font-mono">
                    📍 Delivered at MCC, BIET Road & Davangere surrounding areas.
                  </span>
                  
                  <div className="flex gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => setActivePromoService(null)}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 text-sm font-bold flex-1 sm:flex-none cursor-pointer"
                    >
                      Close Details
                    </button>
                    <a
                      href={`${COMPANY_CONTACT.whatsappUrl}?text=Hello%20Aakruthi%20Constructions,%20I%20saw%20your%20website%20and%20I%20want%20to%20get%20a%20turnkey%20estimating%20quote%20for: %22${activePromoService.title}%22 service. My plot dimensions and project area is `}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 flex items-center justify-center gap-2 flex-1 sm:flex-none shadow-sm cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Request Quote</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
