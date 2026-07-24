import React from 'react';
import { MENTOR_PROFILE } from '../data/content';
import { Shield, Send, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer CTA Grid */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest">READY TO START?</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Timing the market beats time in the market.</h3>
            <p className="text-xs text-slate-300">Join hundreds of traders who have already transformed their portfolios. Start your journey today.</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={onOpenContact}
              className="px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-cyan-500/20"
            >
              JOIN ON TELEGRAM
            </button>
          </div>
        </div>

        {/* Links Navigation Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span>{MENTOR_PROFILE.name}</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Empowering ambitious traders with certified technical analysis, strict risk management, and high-win-rate signals.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">Who I Am</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Crypto Services</a></li>
              <li><a href="#signals" className="hover:text-cyan-400 transition-colors">Live Signals</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#calculator" className="hover:text-cyan-400 transition-colors">ROI Calculator</a></li>
              <li><a href="#testimonials" className="hover:text-cyan-400 transition-colors">Client Results</a></li>
              <li><a href="#insights" className="hover:text-cyan-400 transition-colors">Substack Articles</a></li>
              <li><button onClick={onOpenContact} className="hover:text-cyan-400 transition-colors">VIP Telegram</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Legal & Risk</h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Risk Disclaimer</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright & Risk Disclaimer */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} {MENTOR_PROFILE.name}. All rights reserved.</p>
          <p className="max-w-xl text-center md:text-right">
            Disclaimer: Cryptocurrency trading involves substantial risk of loss and is not suitable for every investor. Signals and educational materials are for informational purposes only and do not constitute financial advice.
          </p>
        </div>

      </div>
    </footer>
  );
};
