import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import InteractiveCostEstimator from './components/InteractiveCostEstimator';
import WhyUsSection from './components/WhyUsSection';
import FloorPlansSection from './components/FloorPlansSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import ContactFormSection from './components/ContactFormSection';
import Footer from './components/Footer';

export default function App() {
  // Smooth Scroll Helper mapped to element ID anchors
  const handleScrollToSection = (sectionId: string) => {
    // If navigating to 'estimator' section but is styled as ID 'estimator'
    const targetId = sectionId === 'estimator' ? 'estimator' : sectionId;
    const element = document.getElementById(targetId);
    if (element) {
      // Offset scrolling slightly to account for sticky navigation header
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col justify-between selection:bg-cyan-500 selection:text-slate-900" id="aakruthi-app-root">
      {/* 1. Header/Navigation */}
      <Header onScrollToSection={handleScrollToSection} />

      {/* 2. Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onScrollToSection={handleScrollToSection} />

        {/* Core Services Offerings */}
        <ServicesSection />

        {/* Cost Estimator Feature */}
        <InteractiveCostEstimator />

        {/* Why Choose Us Values */}
        <WhyUsSection />

        {/* Smart Floor Plans */}
        <FloorPlansSection />

        {/* Completed Portfolio Works */}
        <PortfolioSection />

        {/* Verified Google Reviews */}
        <TestimonialsSection />

        {/* Common Doubts FAQ */}
        <FaqSection />

        {/* Turnkey Contact Form Redirecting to WhatsApp */}
        <ContactFormSection />
      </main>

      {/* 3. Footer */}
      <Footer onScrollToSection={handleScrollToSection} />
    </div>
  );
}
