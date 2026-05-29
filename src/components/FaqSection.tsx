import React, { useState } from 'react';
import { MOCK_PROJECT_FAQ } from '../data';
import { ChevronDown, Plus, Minus, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    if (openIdx === idx) {
      setOpenIdx(null);
    } else {
      setOpenIdx(idx);
    }
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-extrabold uppercase tracking-widest text-xs sm:text-sm bg-cyan-100/50 px-3.5 py-1.5 rounded-full border border-cyan-100">Got Questions?</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-4 leading-tight">
            Frequently Asked <span className="text-cyan-600">Doubts Answered</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed font-normal">
            Understand building estimations, design permissions, and structural consultations in Davangere:
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" id="faq-accordion-group">
          {MOCK_PROJECT_FAQ.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/50 rounded-2xl overflow-hidden transition-all duration-300"
                id={`faq-item-${idx}`}
              >
                {/* Header/Question Trigger */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 sm:px-6 py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <HelpCircle className="w-4.5 h-4.5 text-cyan-600 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  
                  <span className="h-7 w-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0">
                    {isOpen ? <Minus className="w-4 h-4 text-slate-700" /> : <Plus className="w-4 h-4 text-slate-700" />}
                  </span>
                </button>

                {/* Answer Box with conditional height showing */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-650 text-xs sm:text-sm leading-relaxed border-t border-slate-200/40 font-normal animate-in fade-in duration-300">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
