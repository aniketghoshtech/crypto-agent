import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SAMPLE_SIGNALS } from '../data/content';
import { TradeSignal } from '../types';
import { TrendingUp, Target, ShieldAlert, CheckCircle2, Copy, Check, Clock, Zap, ExternalLink } from 'lucide-react';

interface SignalPreviewProps {
  onOpenContact: () => void;
}

export const SignalPreview: React.FC<SignalPreviewProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Spot' | 'Futures' | 'Gem Call'>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredSignals = SAMPLE_SIGNALS.filter((signal) => {
    if (activeTab === 'All') return true;
    return signal.category === activeTab;
  });

  const handleCopySignal = (signal: TradeSignal) => {
    const text = `🚨 VIP CRYPTO SIGNAL (${signal.pair})
Type: ${signal.type} (${signal.category})
Entry: ${signal.entryPrice}
Targets: ${signal.targets.join(' | ')}
Stop Loss: ${signal.stopLoss}
Gain: ${signal.profitPercentage}`;
    
    navigator.clipboard.writeText(text);
    setCopiedId(signal.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="signals" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-3">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>LIVE SIGNAL ENGINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Recent Trade <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Setups & Alerts</span>
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              Institutional precision with clear entries, 3 profit targets, and defined stop loss.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-900 border border-slate-800">
            {(['All', 'Spot', 'Futures', 'Gem Call'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  activeTab === tab
                    ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Signals Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredSignals.map((signal) => (
            <motion.div
              key={signal.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-slate-800 hover:border-cyan-500/40 shadow-2xl space-y-5"
            >
              {/* Card Top Row: Pair Name, Category, Status */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center font-extrabold text-cyan-400 text-sm">
                    {signal.pair.substring(0, 3)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      {signal.pair}
                      {signal.leverage && (
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          {signal.leverage}
                        </span>
                      )}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Clock className="w-3 h-3 text-slate-500" />
                      <span>{signal.date}</span>
                      <span>•</span>
                      <span>{signal.timeframe}</span>
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="flex flex-col items-end gap-1">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-extrabold ${
                      signal.status === 'TARGET HIT'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                        : 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                    }`}
                  >
                    {signal.status === 'TARGET HIT' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Zap className="w-3.5 h-3.5" />}
                    {signal.status}
                  </span>
                  <span className="text-base font-extrabold text-emerald-400 font-mono">
                    {signal.profitPercentage}
                  </span>
                </div>
              </div>

              {/* Price Targets Matrix */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950 border border-slate-800/80">
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block uppercase">Entry Zone</span>
                  <span className="text-xs font-bold text-white font-mono">{signal.entryPrice}</span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block uppercase">Take Profit 1-3</span>
                  <span className="text-xs font-bold text-emerald-400 font-mono">{signal.targets[0]}</span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block uppercase">Stop Loss</span>
                  <span className="text-xs font-bold text-rose-400 font-mono">{signal.stopLoss}</span>
                </div>
              </div>

              {/* Rationale Explanation */}
              <p className="text-xs text-slate-300 bg-slate-950/50 p-3 rounded-xl border border-slate-800/60 leading-relaxed">
                <strong className="text-cyan-400 font-semibold">Technical Rationale: </strong>
                {signal.rationale}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={() => handleCopySignal(signal)}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all"
                >
                  {copiedId === signal.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied Signal!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Copy Signal Parameters</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onOpenContact}
                  className="py-2.5 px-4 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20"
                >
                  <span>Get Live Alerts</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
