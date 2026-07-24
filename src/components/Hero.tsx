import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, TrendingUp, ShieldCheck, Sparkles, Send, CheckCircle2, ChevronDown } from 'lucide-react';
import { MENTOR_PROFILE, INITIAL_CRYPTO_PRICES } from '../data/content';

interface HeroProps {
  onOpenContact: () => void;
  onOpenAiAdvisor: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenAiAdvisor }) => {
  const [cryptoPrices, setCryptoPrices] = useState(INITIAL_CRYPTO_PRICES);

  // Simulate subtle real-time price ticks
  useEffect(() => {
    const interval = setInterval(() => {
      setCryptoPrices((prev) =>
        prev.map((item) => {
          const delta = (Math.random() - 0.48) * (item.price * 0.001);
          const newPrice = Math.max(0.1, item.price + delta);
          return {
            ...item,
            price: Number(newPrice.toFixed(2)),
          };
        })
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-slate-950">
      {/* Background Glows & Cyber Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(255,255,255,0))]" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Live Crypto Price Ticker Ribbon */}
        <div className="mb-8 overflow-x-auto no-scrollbar bg-slate-900/80 backdrop-blur-md border border-slate-800/90 rounded-2xl p-3 shadow-xl">
          <div className="flex items-center gap-6 min-w-max">
            <div className="flex items-center gap-2 px-2 text-xs font-bold uppercase tracking-wider text-cyan-400 border-r border-slate-800 pr-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Live Market Ticker
            </div>
            {cryptoPrices.map((coin) => (
              <div key={coin.symbol} className="flex items-center gap-2.5 text-xs font-medium">
                <span className="font-bold text-slate-200">{coin.symbol}</span>
                <span className="font-mono text-slate-300">${coin.price.toLocaleString()}</span>
                <span
                  className={`flex items-center text-[11px] font-semibold ${
                    coin.change24h >= 0 ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {coin.change24h >= 0 ? '+' : ''}
                  {coin.change24h}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Main Content Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Certified Crypto Trading Expert</span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Master Crypto.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                Build Real Wealth.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal"
            >
              Leverage institutional technical analysis, proven risk management strategies, and high-probability daily signals from a certified advisor who has guided hundreds of traders to financial independence since 2017.
            </motion.p>

            {/* Feature Highlights Bullets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-300"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>89% Verified Signal Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Strict 1-2% Capital Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Spot, Margin & Futures Signals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>24/7 VIP Community Access</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <button
                onClick={onOpenContact}
                className="flex items-center gap-3 px-7 py-4 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-400 hover:from-cyan-300 hover:to-sky-200 rounded-2xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                START TRADING WITH ME
              </button>

              <a
                href="#services"
                className="flex items-center gap-2 px-7 py-4 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-2xl transition-all hover:border-slate-500"
              >
                EXPLORE SERVICES
                <ArrowUpRight className="w-4 h-4 text-cyan-400" />
              </a>

              <button
                onClick={onOpenAiAdvisor}
                className="flex items-center gap-2 px-5 py-4 text-sm font-semibold text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/30 rounded-2xl transition-all"
              >
                <Sparkles className="w-4 h-4 text-cyan-400 animate-bounce" />
                Ask AI Mentor
              </button>
            </motion.div>

          </div>

          {/* Hero Visual Column (Portrait & Animated Badge Showcase) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer Glowing Border */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 rounded-3xl blur-lg opacity-40 animate-pulse" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl">
                <img
                  src={MENTOR_PROFILE.avatarUrl}
                  alt={MENTOR_PROFILE.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-[460px] object-cover object-top hover:scale-105 transition-transform duration-700"
                />

                {/* Bottom Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Floating Signal Badge Overlay */}
                <div className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-md border border-cyan-500/40 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold text-white">BTC Signal: +248% Target Hit</span>
                </div>

                {/* Floating Mentor Info Box */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-xl border border-slate-800 p-4 rounded-2xl shadow-2xl flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white">{MENTOR_PROFILE.name}</h3>
                    <p className="text-xs text-cyan-400 font-medium">Certified Technical Analyst & Wealth Mentor</p>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    89% Win Rate
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
