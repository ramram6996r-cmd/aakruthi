import React, { useState } from 'react';
import { COMPANY_CONTACT } from '../data';
import { Phone, Star, Menu, X, MessageSquare, Award } from 'lucide-react';

interface HeaderProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Header({ onScrollToSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Why Select Us', id: 'why-us' },
    { label: 'Floor Plans', id: 'floor-plans' },
    { label: 'Our Work', id: 'portfolio' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onScrollToSection(id);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-xs border-b border-gray-100">
      {/* Top Banner Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>Certified Civil Builder #DVG-2016</span>
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline">🏛️ MCC, Davangere, Karnataka</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-amber-400 font-medium">
              <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
              <span>5.0 Highly Rated (103+ Reviews)</span>
            </span>
            <span>Closes 8:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Brand Brand */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer select-none"
            id="header-brand-logo"
          >
            <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-amber-500 to-cyan-500 flex items-center justify-center text-white font-extrabold text-xl shadow-md transform hover:rotate-3 transition-transform duration-300">
              AC
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900 leading-tight">
                Aakruthi <span className="text-cyan-600">Constructions</span>
              </h1>
              <p className="text-[10px] font-mono text-slate-500 tracking-wider uppercase leading-none font-semibold">
                Home Builder & Interior Designer
              </p>
            </div>
          </div>

          {/* Desktop Navigation Link Array */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="px-3.5 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-cyan-600 hover:bg-slate-50 transition-all duration-200 cursor-pointer"
                id={`nav-link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Quick Contact CTA Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_CONTACT.phone}`}
              className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 flex items-center gap-2 text-sm font-semibold shadow-xs"
              id="header-cta-phone"
            >
              <Phone className="w-4 h-4 text-slate-500" />
              <span>Call Owner</span>
            </a>
            <a
              href={`${COMPANY_CONTACT.whatsappUrl}?text=Hi%20Aakruthi%20Constructions,%20I'm%20visiting%20your%20website%20and%20interested%20in%20home%20building%20consultations.`}
              target="_blank"
              rel="noreferrer"
              className="px-4.5 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-200 flex items-center gap-2 text-sm font-semibold shadow-md inline-flex hover:shadow-lg hover:-translate-y-0.5 transform"
              id="header-cta-whatsapp"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md hover:bg-slate-100 text-slate-700 focus:outline-hidden"
              aria-label="Toggle navigation menu"
              id="mobile-menu-trigger"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Slide-out Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white shadow-xl animate-in fade-in slide-in-from-top-4 duration-200" id="mobile-menu-drawer">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-4 py-3 rounded-md text-base font-semibold text-slate-700 hover:text-cyan-600 hover:bg-slate-50 transition-all"
                id={`mobile-nav-link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 min-h-12">
              <a
                href={`tel:${COMPANY_CONTACT.phone}`}
                className="w-full text-center py-2.5 rounded-lg border border-slate-200 text-slate-700 font-semibold text-sm flex items-center justify-center gap-2 bg-slate-50"
              >
                <Phone className="w-4 h-4" />
                Call Owner
              </a>
              <a
                href={`${COMPANY_CONTACT.whatsappUrl}?text=Hi%20Aakruthi%20Constructions,%20I'd%20like%20to%20get%20more%20details%20on%20constructions.`}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-2.5 rounded-lg bg-emerald-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
