import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';
import { GraduationCap, TrendingUp, Zap, Activity, UserCheck, MessageSquare, Check, ArrowRight, X, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  TrendingUp,
  Zap,
  Activity,
  UserCheck,
  MessageSquare,
};

interface ServicesSectionProps {
  onOpenContact: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-cyan-950/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest">
            WHAT I OFFER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            A Full Suite of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Crypto Services</span>
          </h2>
          <p className="text-base text-slate-300">
            From live daily signals to personal 1-on-1 mentorship — everything you need to trade with institutional confidence.
          </p>
        </div>

        {/* Services Grid (6 Cards) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Zap;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 hover:border-cyan-500/50 shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Header Row: Number Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-slate-600 group-hover:text-cyan-400 transition-colors font-mono">
                      {service.number}
                    </span>
                    <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400/90 uppercase tracking-wider mb-4">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Quick Feature Checklist */}
                  <ul className="space-y-2 mb-8 border-t border-slate-800/80 pt-6">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Button */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-slate-200 bg-slate-950 hover:bg-cyan-500 hover:text-slate-950 border border-slate-800 rounded-xl transition-all duration-300"
                >
                  <span>Learn Details & Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-cyan-400 font-mono">{selectedService.number}</span>
                <div>
                  <h3 className="text-2xl font-extrabold text-white">{selectedService.title}</h3>
                  <p className="text-xs text-cyan-300 font-semibold uppercase">{selectedService.tagline}</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedService.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">What's Included:</h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {selectedService.features.map((item) => (
                    <div key={item} className="flex items-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onOpenContact();
                  }}
                  className="flex-1 py-3 px-4 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all"
                >
                  Join Telegram / Enquire Now
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="py-3 px-5 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
