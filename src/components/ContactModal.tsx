import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, MessageCircle, CheckCircle2, ShieldCheck, Mail, User, Phone } from 'lucide-react';
import { MENTOR_PROFILE } from '../data/content';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegramUsername: '',
    interest: 'VIP Daily Signals',
    capital: '$1,000 - $5,000',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 my-8"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 text-[11px] font-bold uppercase tracking-wider mb-2">
                JOIN VIP MENTORSHIP
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Start Trading with <span className="text-cyan-400">{MENTOR_PROFILE.name}</span>
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                Directly connect on Telegram or WhatsApp for immediate group entry & 1-on-1 consultation setup.
              </p>
            </div>

            {/* Quick Channel Direct Buttons */}
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href={MENTOR_PROFILE.socialLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-bold text-xs hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-md"
              >
                <Send className="w-4 h-4" />
                Join VIP Telegram Channel
              </a>
              <a
                href={MENTOR_PROFILE.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold text-xs hover:bg-emerald-500 hover:text-slate-950 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                Direct WhatsApp Chat
              </a>
            </div>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-slate-800"></div>
              <span className="flex-shrink mx-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Or Send Inquiry Form</span>
              <div className="flex-grow border-t border-slate-800"></div>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-3 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">Inquiry Received!</h3>
                <p className="text-xs text-slate-300">
                  Adriana or her team will reach out to your Telegram or email within 2 hours.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 py-2.5 px-6 rounded-xl bg-slate-800 text-xs font-bold text-white"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Telegram Handle or Phone *</label>
                    <input
                      type="text"
                      required
                      placeholder="@username or phone"
                      value={formData.telegramUsername}
                      onChange={(e) => setFormData({ ...formData, telegramUsername: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Interested In</label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-400"
                    >
                      <option>VIP Daily Signals</option>
                      <option>1-on-1 Personal Mentorship</option>
                      <option>Beginner Trading Academy</option>
                      <option>Portfolio Restructuring Audit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Trading Capital Range</label>
                    <select
                      value={formData.capital}
                      onChange={(e) => setFormData({ ...formData, capital: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-400"
                    >
                      <option>$500 - $1,000</option>
                      <option>$1,000 - $5,000</option>
                      <option>$5,000 - $25,000</option>
                      <option>$25,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">Message / Current Trading Goals</label>
                  <textarea
                    rows={3}
                    placeholder="Tell Adriana briefly about your trading background or goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-2xl transition-all shadow-lg shadow-cyan-500/20"
                >
                  Submit VIP Mentorship Request
                </button>
              </form>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
