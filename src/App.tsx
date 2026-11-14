import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ApproachSection } from './components/ApproachSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ServicesSection } from './components/ServicesSection';
import { ConditionsSection } from './components/ConditionsSection';
import { AboutDoctorSection } from './components/AboutDoctorSection';
import { ConsultationSection } from './components/ConsultationSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#242B28] flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-4 focus:z-50 focus:bg-[#1B3B36] focus:text-white focus:px-4 focus:py-2.5 focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex-1">
        <HeroSection />
        <ApproachSection />
        <HowItWorksSection />
        <ServicesSection />
        <ConditionsSection />
        <AboutDoctorSection />
        <ConsultationSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>

      <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />

      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </div>
  );
}
