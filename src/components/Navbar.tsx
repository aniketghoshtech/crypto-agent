import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Shield, Send, MessageCircle, Sparkles, ChevronRight, PhoneCall } from 'lucide-react';
import { MENTOR_PROFILE } from '../data/content';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenAiAdvisor: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenAiAdvisor }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Who I Am', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Live Signals', href: '#signals' },
    { name: 'ROI Calculator', href: '#calculator' },
    { name: 'Results', href: '#testimonials' },
    { name: 'Insights', href: '#insights' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <Shield className="w-5 h-5 text-white" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-950 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  {MENTOR_PROFILE.name}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-cyan-400/90 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                  VIP Trading Mentor
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-800/80">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-full transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenAiAdvisor}
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/30 rounded-xl transition-all shadow-sm hover:border-cyan-400"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                Ask AI Mentor
              </button>

              <button
                onClick={onOpenContact}
                className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-400 hover:from-cyan-300 hover:to-sky-200 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send className="w-3.5 h-3.5" />
                Join VIP Telegram
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenAiAdvisor}
                className="p-2 text-cyan-400 bg-cyan-950/60 rounded-xl border border-cyan-500/30"
                aria-label="Ask AI Mentor"
              >
                <Sparkles className="w-4 h-4" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[70px] z-40 bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 shadow-2xl p-6 lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800/80">
                <span className="text-xs font-semibold text-slate-400">Signal Status</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Active 4H Signals
                </span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-200 hover:text-cyan-400 bg-slate-900/40 hover:bg-slate-900 rounded-xl border border-transparent hover:border-slate-800 transition-all"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800/80">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-xl shadow-lg shadow-cyan-500/20"
              >
                <Send className="w-4 h-4" />
                Join VIP Telegram Channel
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                Direct WhatsApp Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
