import React from 'react';
import { motion } from 'motion/react';
import { MENTOR_PROFILE } from '../data/content';
import { CheckCircle2, ShieldCheck, Award, Flame, Send } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Portrait Image & Interactive Badge */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                  alt={MENTOR_PROFILE.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-[520px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-800 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Certified Market Analyst</h4>
                      <p className="text-xs text-slate-400">Wall Street & Crypto Order Flow Certified</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Accent Floating Card */}
              <div className="absolute -top-6 -right-6 hidden sm:flex items-center gap-3 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-cyan-500/30 shadow-2xl">
                <Flame className="w-6 h-6 text-amber-400" />
                <div>
                  <p className="text-xs font-bold text-slate-300">Community Size</p>
                  <p className="text-sm font-extrabold text-white">500+ Active Members</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-3">
                WHO I AM
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">{MENTOR_PROFILE.name}</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg font-medium text-cyan-300/90 leading-relaxed"
            >
              {MENTOR_PROFILE.bio}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed"
            >
              {MENTOR_PROFILE.extendedBio}
            </motion.p>

            {/* Core Pillars List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-4 pt-2"
            >
              {MENTOR_PROFILE.pillars.map((pillar) => (
                <div key={pillar.title} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all">
                  <div className="flex items-center gap-2.5 mb-1 text-cyan-400 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 pl-6 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="pt-4"
            >
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-lg shadow-cyan-500/20 transition-all"
              >
                <Send className="w-4 h-4" />
                BOOK A PRIVATE CONSULTATION
              </button>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
