import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { SignalPreview } from './components/SignalPreview';
import { ProfitCalculator } from './components/ProfitCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InsightsSection } from './components/InsightsSection';
import { AiAdvisorDrawer } from './components/AiAdvisorDrawer';
import { ContactModal } from './components/ContactModal';
import { FloatingControls } from './components/FloatingControls';
import { Footer } from './components/Footer';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [aiAdvisorOpen, setAiAdvisorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 antialiased">
      {/* Header Navigation */}
      <Navbar
        onOpenContact={() => setContactModalOpen(true)}
        onOpenAiAdvisor={() => setAiAdvisorOpen(true)}
      />

      {/* Main Sections */}
      <main>
        <Hero
          onOpenContact={() => setContactModalOpen(true)}
          onOpenAiAdvisor={() => setAiAdvisorOpen(true)}
        />
        <StatsBar />
        <AboutSection onOpenContact={() => setContactModalOpen(true)} />
        <ServicesSection onOpenContact={() => setContactModalOpen(true)} />
        <SignalPreview onOpenContact={() => setContactModalOpen(true)} />
        <ProfitCalculator onOpenContact={() => setContactModalOpen(true)} />
        <TestimonialsSection />
        <InsightsSection />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => setContactModalOpen(true)} />

      {/* Floating Action Buttons (WhatsApp & Telegram) */}
      <FloatingControls />

      {/* AI Strategy Advisor Chat Drawer */}
      <AiAdvisorDrawer
        isOpen={aiAdvisorOpen}
        onClose={() => setAiAdvisorOpen(false)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Contact & Consultation Booking Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
