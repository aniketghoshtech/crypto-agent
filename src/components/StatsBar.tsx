import React from 'react';
import { motion } from 'motion/react';
import { MENTOR_PROFILE } from '../data/content';
import { Users, Target, Calendar, Award } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const icons = [Users, Target, Calendar, Award];

  return (
    <section className="relative z-10 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:p-6 bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl">
        {MENTOR_PROFILE.stats.map((stat, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {stat.value}
                  <span className="text-cyan-400 font-bold">{stat.suffix}</span>
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-200">{stat.label}</h4>
              <p className="text-xs text-slate-400 mt-0.5">{stat.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
