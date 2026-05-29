import React from 'react';
import { COMPANY_CONTACT, SERVICES } from '../data';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, ExternalLink, Calendar, Star, ChevronUp, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'WhatsApp', url: `${COMPANY_CONTACT.whatsappUrl}?text=Hello%20Aakruthi%20Constructions!`, icon: Phone, color: 'hover:text-emerald-500' },
    { name: 'Instagram', url: COMPANY_CONTACT.instagramUrl, icon: Instagram, color: 'hover:text-pink-500' },
    { name: 'Facebook', url: COMPANY_CONTACT.facebookUrl, icon: Facebook, color: 'hover:text-blue-500' },
    { name: 'YouTube', url: COMPANY_CONTACT.youtubeUrl, icon: Youtube, color: 'hover:text-red-500' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900 relative">
      {/* Upper footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand details (4-cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div 
              onClick={() => onScrollToSection('home')}
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-amber-500 to-cyan-500 flex items-center justify-center text-white font-black text-lg shadow-sm">
                AC
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-white leading-none">
                  Aakruthi <span className="text-cyan-500">Constructions</span>
                </h3>
                <span className="text-[9px] font-mono tracking-wider text-slate-500 uppercase block mt-1">
                  Established 2016 in Davangere
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
              Karnataka's trusted bespoke home builder, luxury structural engineers, and premium interior designers. We specialize in turning raw land into gorgeous custom living spaces under official civil parameters.
            </p>

            {/* Social channels badges */}
            <div className="flex gap-3">
              {socialLinks.map((soc, i) => {
                const IconComponent = soc.icon;
                return (
                  <a
                    key={i}
                    href={soc.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`h-9 w-9 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center transition-all ${soc.color} hover:bg-slate-800 hover:-translate-y-0.5`}
                    id={`footer-social-${soc.name.toLowerCase()}`}
                    aria-label={`Visit our ${soc.name}`}
                  >
                    <IconComponent className="w-4.5 h-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Services shortcuts (4-cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold text-slate-200 uppercase tracking-widest">Our Engineering Spectrum</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => onScrollToSection('services')}
                  className="text-left text-xs text-slate-400 hover:text-cyan-400 transition-colors py-1 cursor-pointer"
                  id={`footer-link-spec-${s.id}`}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Direct contact details (4-cols) */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-xs font-extrabold text-slate-200 uppercase tracking-widest">Aakruthi Davangere HQ</h4>
            
            <ul className="space-y-3.5 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-cyan-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {COMPANY_CONTACT.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4.5 h-4.5 text-cyan-500 shrink-0" />
                <a href={`tel:${COMPANY_CONTACT.phone}`} className="text-slate-200 font-bold hover:text-cyan-400 transition-colors">
                  {COMPANY_CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4.5 h-4.5 text-cyan-500 shrink-0" />
                <span className="text-slate-350 hover:text-white">{COMPANY_CONTACT.email}</span>
              </li>
              <li className="flex items-center gap-2.5 border-t border-slate-900 pt-3">
                <Calendar className="w-4.5 h-4.5 text-amber-500 shrink-0" />
                <span className="text-amber-400 font-semibold uppercase tracking-wide text-[10px]">
                  Mon - Sat, 9:30 AM to 8:00 PM
                </span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={COMPANY_CONTACT.justdialUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                <span>View JustDial citations</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Localized Map Graphic Card (Aesthetically designed placeholder simulation) */}
        <div className="mt-12 bg-slate-900 rounded-2xl p-4 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-cyan-600/10 text-cyan-400 rounded-xl flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Located near Ayyappa Swamy Temple, MCC Davangere</p>
              <p className="text-[10px] text-slate-400">Easy accessibility for structural plan changes or site review visits.</p>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=Aakruthi+Constructions+MCC+Davangere"
            target="_blank"
            rel="noreferrer"
            className="px-4.5 py-2 hover:bg-slate-800 rounded-lg text-slate-300 font-bold text-xs border border-slate-700 hover:border-slate-600 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="bg-slate-950 border-t border-slate-900 text-slate-500 text-xs py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left select-none">
            <span>&copy; {new Date().getFullYear()} Aakruthi Constructions. All Rights Reserved.</span>
            <span className="hidden sm:inline text-slate-800">|</span>
            <span className="flex items-center gap-1 text-[10px] text-slate-400 uppercase tracking-widest font-mono font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Civil Register #DVG-2016-KA</span>
            </span>
          </div>

          <button
            onClick={handleBackToTop}
            className="px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1.5 cursor-pointer font-bold shrink-0 shadow-sm"
            id="footer-back-to-top"
          >
            <span>Back to Top</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
