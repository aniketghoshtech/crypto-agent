import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/content';
import { Star, ShieldCheck, Quote, CheckCircle2, TrendingUp } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Beginner' | 'Signals' | '1-on-1 Mentorship'>('All');

  const filtered = TESTIMONIALS.filter((t) => filter === 'All' || t.category === filter);

  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest">
            CLIENT RESULTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Real Words from <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Real Traders</span>
          </h2>
          <p className="text-base text-slate-300">
            Discover how hundreds of students and VIP signal members transformed their financial trajectory.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {(['All', 'Signals', '1-on-1 Mentorship', 'Beginner'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  filter === cat
                    ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((t) => (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 hover:border-cyan-500/40 shadow-xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Rating Stars & Profit Gain Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-extrabold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                    <TrendingUp className="w-3 h-3" />
                    {t.profitGain}
                  </span>
                </div>

                {/* Quote text */}
                <p className="text-sm text-slate-200 leading-relaxed italic">
                  "{t.content}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-800/80">
                <img
                  src={t.avatar}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border-2 border-slate-700"
                />
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {t.name}
                    {t.verified && (
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" title="Verified Trader" />
                    )}
                  </h4>
                  <p className="text-xs text-slate-400">{t.role} • {t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
