import React, { useState } from 'react';
import { PREDESIGNED_FLOOR_PLANS, COMPANY_CONTACT } from '../data';
import { PredesignedFloorPlan } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Columns4, Ruler, BedDouble, Hammer, HelpCircle, MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function FloorPlansSection() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(PREDESIGNED_FLOOR_PLANS[0].id);

  const selectedPlan = PREDESIGNED_FLOOR_PLANS.find(p => p.id === selectedPlanId) || PREDESIGNED_FLOOR_PLANS[0];

  const handleConsultPlan = (plan: PredesignedFloorPlan) => {
    const text = `Hello Aakruthi Constructions! I'm interested in the "${plan.title}" predesigned floor plan (${plan.bhk}, ${plan.dimensions}) that I saw on your website. I'd like to get an exact building citation and talk about custom architectural modifications.`;
    window.open(`${COMPANY_CONTACT.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="floor-plans" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <div className="max-w-3xl">
            <span className="text-cyan-600 font-extrabold uppercase tracking-widest text-xs sm:text-sm bg-cyan-100/50 px-3.5 py-1.5 rounded-full border border-cyan-100">Smart Blueprints</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-4 leading-tight">
              Aakruthi's <span className="text-cyan-600">Predesigned Floor Plans</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Skip costly architectural planning from scratch. We maintain ready-to-construct, fully-optimized Vastu floor plans designed for Karnataka site coordinates:
            </p>
          </div>
          
          {/* Quick Selection Selector Buttons */}
          <div className="flex gap-2 self-start md:self-end">
            {PREDESIGNED_FLOOR_PLANS.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                  selectedPlanId === plan.id
                    ? 'bg-cyan-600 text-white border-cyan-600 shadow-md'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300'
                }`}
                id={`plan-tab-${plan.id}`}
              >
                {plan.dimensions} Layout
              </button>
            ))}
          </div>
        </div>

        {/* Plan Layout Panel Showcase */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200/60 p-6 sm:p-8 lg:p-10 shadow-xs" id="plans-display-panel">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Image Canvas with subtle scaling hover effects */}
            <div className="lg:col-span-6">
              <div className="relative bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-md group overflow-hidden">
                {/* Visual badge top right */}
                <div className="absolute top-4 right-4 z-10 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Approved Blueprint</span>
                </div>

                <div className="overflow-hidden rounded-xl bg-slate-100">
                  <img
                    src={selectedPlan.image}
                    alt={selectedPlan.title}
                    className="w-full h-auto max-h-[350px] sm:max-h-[420px] object-contain mx-auto transform group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <p className="text-[11px] text-slate-500 font-mono text-center mt-4">
                  *Click "Request Customization" to view higher dimensions or revise layout details.
                </p>
              </div>
            </div>

            {/* Right: Detailed Plan Specifications block */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                {/* Heading details */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest bg-cyan-100/50 px-2.5 py-1 rounded">
                    {selectedPlan.bhk}
                  </span>
                  <span className="text-xs font-bold text-slate-600 bg-slate-200/70 px-2.5 py-1 rounded font-mono">
                    {selectedPlan.sizeSqFt} Sq.Ft Built area
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {selectedPlan.title}
                </h3>
                
                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {selectedPlan.description}
                </p>

                {/* Spec Icons Grid */}
                <div className="grid grid-cols-3 gap-3.5 my-6">
                  <div className="p-3 bg-white border border-slate-100 rounded-xl">
                    <Ruler className="w-5 h-5 text-cyan-600" />
                    <span className="text-[9px] text-slate-500 uppercase font-semibold block mt-1.5">Plot Size</span>
                    <span className="text-sm font-extrabold text-slate-800 font-mono mt-0.5 block">{selectedPlan.dimensions}</span>
                  </div>
                  <div className="p-3 bg-white border border-slate-100 rounded-xl">
                    <BedDouble className="w-5 h-5 text-cyan-600" />
                    <span className="text-[9px] text-slate-500 uppercase font-semibold block mt-1.5">Bedrooms</span>
                    <span className="text-sm font-extrabold text-slate-800 font-mono mt-0.5 block">{selectedPlan.bhk.split(' ')[0]} Master</span>
                  </div>
                  <div className="p-3 bg-white border border-slate-100 rounded-xl">
                    <Hammer className="w-5 h-5 text-cyan-600" />
                    <span className="text-[9px] text-slate-500 uppercase font-semibold block mt-1.5">Stories</span>
                    <span className="text-sm font-extrabold text-slate-800 font-mono mt-0.5 block">{selectedPlan.floors} Floor{selectedPlan.floors > 1 ? 's' : ''}</span>
                  </div>
                </div>

                {/* Included Rooms Bullet List */}
                <div className="border-t border-slate-200/80 pt-5">
                  <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-widest mb-3.5">Included Spaces breakdown:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedPlan.rooms.map((room, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                        <span className="h-2 w-2 rounded-full bg-cyan-500 shrink-0" />
                        <span className="font-semibold">{room}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Estimated build cost */}
                <div className="mt-8 bg-amber-400/10 border border-amber-400/20 rounded-2xl p-4">
                  <span className="text-[10px] uppercase tracking-wider text-slate-600 font-bold font-mono">Estimated Construction Budget:</span>
                  <div className="text-lg sm:text-xl font-black text-slate-900 mt-1">
                    {selectedPlan.estimatedCostRange}
                  </div>
                </div>
              </div>

              {/* Action Buttons inside Plan Box */}
              <div className="mt-8 pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleConsultPlan(selectedPlan)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transform hover:-translate-y-0.5 transition-all"
                  id="plans-custom-cta"
                >
                  <span>Request Customization Layout</span>
                  <ArrowUpRight className="w-4.5 h-4.5 text-cyan-400" />
                </button>
                <a
                  href={`tel:${COMPANY_CONTACT.phone}`}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-700 font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-50 cursor-pointer"
                >
                  <span>Call to Discuss</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
