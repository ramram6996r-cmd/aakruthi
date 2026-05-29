import React, { useState } from 'react';
import { COMPANY_CONTACT, SERVICES } from '../data';
import { Mail, Phone, MapPin, MessageSquare, Clock, Check, Send, Award, Star } from 'lucide-react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: SERVICES[0].title,
    plotSize: '30x40 site',
    budget: '₹15L - ₹25L',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill out your Name and Phone Number to continue.');
      return;
    }

    setIsSubmitting(true);

    // Format highly professional, detailed WhatsApp message block
    const messageText = 
      `Hello Aakruthi Constructions! I filled out your website Contact Enquiry. My details are:\n\n` +
      `▪️ name: ${formData.name}\n` +
      `▪️ Contact Number: ${formData.phone}\n` +
      `▪️ Email: ${formData.email || 'Not provided'}\n` +
      `▪️ Service Needed: ${formData.service}\n` +
      `▪️ Plot Sizing: ${formData.plotSize}\n` +
      `▪️ Target Budget: ${formData.budget}\n` +
      `▪️ Custom Message: ${formData.message || 'No additional comment'}\n\n` +
      `Please contact me back for initial construction layout arrangements. Thank you!`;

    const encoded = encodeURIComponent(messageText);
    const whatsappLink = `${COMPANY_CONTACT.whatsappUrl}?text=${encoded}`;

    // Simulate database queue save
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Trigger WhatsApp redirection link
      window.open(whatsappLink, '_blank');
    }, 850);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-slate-900 text-white relative">
      <div className="absolute inset-0 bg-radial-gradient from-slate-900 via-slate-950 to-slate-950 opacity-90 z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-in fade-in duration-500">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Information & Trust Grid (5-columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-cyan-400 font-extrabold uppercase tracking-widest text-xs sm:text-sm bg-cyan-400/10 px-3.5 py-1.5 rounded-full border border-cyan-400/20">Get In Touch</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 leading-tight">
                Let's Build Your <span className="text-cyan-400">Masterpiece</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Fill the contact form on the right. Our system will immediately structure your custom layout request, and redirect you to WhatsApp. You can also visit our office or call us directly!
              </p>
            </div>

            {/* Direct Information Blocks */}
            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-cyan-400 shrink-0 select-none">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-300 uppercase tracking-widest">Office Address</h4>
                  <p className="text-sm text-slate-200 mt-1 font-medium">
                    {COMPANY_CONTACT.address}
                  </p>
                  <span className="text-xs text-amber-400 mt-1.5 block font-semibold">📍 Landmark: MCC, Near Ayyappa Swamy Temple</span>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-slate-800/80 pt-6">
                <div className="h-10 w-10 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-cyan-400 shrink-0 select-none">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-300 uppercase tracking-widest">Direct Lines</h4>
                  <a href={`tel:${COMPANY_CONTACT.phone}`} className="text-base font-extrabold text-white mt-1 block hover:text-cyan-400 transition-colors">
                    {COMPANY_CONTACT.phoneDisplay}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5 font-medium">Call owner directly for spot estimations.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-slate-800/80 pt-6">
                <div className="h-10 w-10 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-cyan-400 shrink-0 select-none">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-300 uppercase tracking-widest">Working Timings</h4>
                  <div className="space-y-1.5 mt-2.5">
                    {COMPANY_CONTACT.workingHours.map((wh, idx) => (
                      <div key={idx} className="flex justify-between text-xs text-slate-300">
                        <span className="font-semibold">{wh.days}:</span>
                        <span className="font-mono bg-slate-850 px-2 py-0.5 rounded text-white text-[10px]">{wh.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Trust Credentials Badge */}
            <div className="p-5 rounded-2xl bg-slate-850 border border-slate-800/80 flex items-center gap-4">
              <div className="h-11 w-11 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                <Award className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white">5.0 Star Verified Civil Service</p>
                <div className="flex items-center gap-1 text-slate-400 text-xs mt-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                  <span>103 Google maps listings citations.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: High-fidelity submission form (7-columns) */}
          <div className="lg:col-span-7 bg-slate-850 border border-slate-800 rounded-3xl p-6 sm:p-8 relative">
            
            {isSubmitted ? (
              <div className="py-16 text-center animate-in zoom-in-95 duration-300" id="contact-success-state">
                <div className="h-16 w-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white">Redirection Triggered!</h3>
                <p className="mt-3.5 text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Excellent, <strong className="text-white">{formData.name}</strong>! Your inquiry data has been formatted. If WhatsApp did not open automatically, please click the button below to forward details to the builder:
                </p>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`${COMPANY_CONTACT.whatsappUrl}?text=${encodeURIComponent(
                      `Hello Aakruthi Constructions! I filled out the contact form. Name: ${formData.name}, Phone: ${formData.phone}, Service: ${formData.service}. Please consult back.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 font-bold text-sm flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Open WhatsApp Again</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        service: SERVICES[0].title,
                        plotSize: '30x40 site',
                        budget: '₹15L - ₹25L',
                        message: ''
                      });
                    }}
                    className="px-6 py-3.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 text-sm font-bold"
                  >
                    Submit New Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" id="construction-contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="e.g. Sunil Kumar D."
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-500 placeholder-slate-500"
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="e.g. 09738802213"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-500 placeholder-slate-500"
                    />
                  </div>
                </div>

                {/* Email Address field */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. name@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-500 placeholder-slate-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {/* Service selection */}
                  <div className="sm:col-span-1">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Select Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-500 cursor-pointer"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Plot size selection */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Plot Site Area
                    </label>
                    <select
                      name="plotSize"
                      value={formData.plotSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-500 cursor-pointer"
                    >
                      <option value="30x40 site (1200 SqFt)">30 x 40 Ft Plot</option>
                      <option value="40x60 site (2400 SqFt)">40 x 60 Ft Plot</option>
                      <option value="50x80 site (4000 SqFt)">50 x 80 Ft Plot</option>
                      <option value="Custom plot size">Custom Plot Dimension</option>
                    </select>
                  </div>

                  {/* Budget selection */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Indicated Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-500 cursor-pointer"
                    >
                      <option value="₹10L - ₹20L">₹10 Lakhs - ₹20 Lakhs</option>
                      <option value="₹20L - ₹35L">₹20 Lakhs - ₹35 Lakhs</option>
                      <option value="₹35L - ₹60L">₹35 Lakhs - ₹60 Lakhs</option>
                      <option value="₹60L+">₹60 Lakhs +</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Describe your requirements
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="e.g. Planning a 3BHK East-facing duplex construction with modular kitchen setup."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-500 placeholder-slate-500 resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-md"
                    id="contact-form-submit-btn"
                  >
                    {isSubmitting ? (
                      <span className="animate-spin inline-block h-5 w-5 border-2 border-slate-900 border-t-transparent rounded-full" />
                    ) : (
                      <>
                        <Send className="w-5 h-5 fill-slate-950 stroke-none" />
                        <span>Submit Details & Continue on WhatsApp</span>
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-3 leading-none font-mono">
                    *The form will automatically build a structured draft message and launch WhatsApp.
                  </p>
                </div>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
