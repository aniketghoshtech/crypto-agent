import React from 'react';
import { motion } from 'motion/react';
import { Send, MessageCircle } from 'lucide-react';
import { MENTOR_PROFILE } from '../data/content';

export const FloatingControls: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* WhatsApp Floating Button */}
      <motion.a
        href={MENTOR_PROFILE.socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center justify-center p-3.5 rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/30 hover:bg-emerald-400 transition-all"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-14 whitespace-nowrap px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          WhatsApp Direct
        </span>
      </motion.a>

      {/* Telegram Floating Button */}
      <motion.a
        href={MENTOR_PROFILE.socialLinks.telegram}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center justify-center p-3.5 rounded-full bg-cyan-500 text-slate-950 shadow-xl shadow-cyan-500/30 hover:bg-cyan-400 transition-all"
        title="Join Telegram VIP"
      >
        <Send className="w-6 h-6" />
        <span className="absolute right-14 whitespace-nowrap px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          Join VIP Telegram
        </span>
      </motion.a>

    </div>
  );
};
