import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calculator, TrendingUp, DollarSign, ShieldCheck, Sparkles, Send } from 'lucide-react';

interface ProfitCalculatorProps {
  onOpenContact: () => void;
}

export const ProfitCalculator: React.FC<ProfitCalculatorProps> = ({ onOpenContact }) => {
  const [initialCapital, setInitialCapital] = useState<number>(2500);
  const [winRate, setWinRate] = useState<number>(85);
  const [riskPerTrade, setRiskPerTrade] = useState<number>(1.5);
  const [months, setMonths] = useState<number>(6);

  // Calculate estimated returns
  const { projectedProfit, finalCapital, monthlyGrowthRate } = useMemo(() => {
    // Compound formula estimation based on Adriana's average monthly return of 25-35%
    const monthlyRate = 0.05 + (winRate / 100) * 0.22 * (riskPerTrade / 1.5);
    let capital = initialCapital;
    for (let i = 0; i < months; i++) {
      capital *= (1 + monthlyRate);
    }
    const profit = capital - initialCapital;
    return {
      projectedProfit: Math.round(profit),
      finalCapital: Math.round(capital),
      monthlyGrowthRate: (monthlyRate * 100).toFixed(1)
    };
  }, [initialCapital, winRate, riskPerTrade, months]);

  return (
    <section id="calculator" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="max-w-3xl mb-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-3">
              <Calculator className="w-3.5 h-3.5 text-cyan-400" />
              <span>INTERACTIVE COMPOUNDING CALCULATOR</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Simulate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Portfolio Growth</span>
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              See how strict position management and high-win-rate signals compound your capital over time.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Controls Input Sliders */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Initial Capital Slider */}
              <div className="space-y-2 p-5 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-300">Initial Trading Capital</span>
                  <span className="text-cyan-400 font-mono text-base">${initialCapital.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="250"
                  max="25000"
                  step="250"
                  value={initialCapital}
                  onChange={(e) => setInitialCapital(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>$250</span>
                  <span>$10,000</span>
                  <span>$25,000</span>
                </div>
              </div>

              {/* Signal Win Rate Slider */}
              <div className="space-y-2 p-5 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-300">Target Win Rate</span>
                  <span className="text-cyan-400 font-mono text-base">{winRate}%</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="90"
                  step="1"
                  value={winRate}
                  onChange={(e) => setWinRate(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>60% (Conservative)</span>
                  <span>85% (Adriana VIP Avg)</span>
                  <span>90%</span>
                </div>
              </div>

              {/* Time Horizon Selection */}
              <div className="space-y-2 p-5 rounded-2xl bg-slate-950 border border-slate-800">
                <span className="text-sm font-bold text-slate-300 block mb-2">Compounding Time Horizon</span>
                <div className="grid grid-cols-3 gap-3">
                  {[3, 6, 12].map((m) => (
                    <button
                      key={m}
                      onClick={() => setMonths(m)}
                      className={`py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
                        months === m
                          ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20'
                          : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                      }`}
                    >
                      {m} Months
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Results Output Box */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-950 border border-cyan-500/30 shadow-2xl space-y-6 relative">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase text-slate-400">Projected Portfolio Value</span>
                <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                  ${finalCapital.toLocaleString()}
                </div>
                <span className="text-xs text-emerald-400 font-extrabold flex items-center gap-1 pt-1">
                  <TrendingUp className="w-4 h-4" />
                  +${projectedProfit.toLocaleString()} Total Net Gain (~{monthlyGrowthRate}% / mo)
                </span>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Starting Balance:</span>
                  <span className="font-mono text-white">${initialCapital.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Max Risk Per Position:</span>
                  <span className="font-mono text-emerald-400">1.5% Strict SL</span>
                </div>
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Estimated Win Rate:</span>
                  <span className="font-mono text-cyan-400">{winRate}%</span>
                </div>
              </div>

              <button
                onClick={onOpenContact}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 text-xs font-extrabold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-2xl transition-all shadow-lg shadow-cyan-500/25"
              >
                <Send className="w-4 h-4" />
                START COMPOUNDING WITH ADRIANA
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
