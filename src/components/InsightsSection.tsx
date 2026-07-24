import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ARTICLES, MENTOR_PROFILE } from '../data/content';
import { BookOpen, ExternalLink, Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export const InsightsSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <section id="insights" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-3">
              LATEST FROM ADRIANA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Insights, Analysis & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Market Updates</span>
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              In-depth technical breakdowns and macro analysis published on Substack.
            </p>
          </div>

          <a
            href={MENTOR_PROFILE.socialLinks.substack}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-slate-200 bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-xl transition-all"
          >
            <span>READ ALL ON SUBSTACK</span>
            <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ARTICLES.map((article) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-3xl overflow-hidden bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-cyan-400 border border-slate-800">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={MENTOR_PROFILE.socialLinks.substack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 group-hover:text-cyan-300"
                >
                  <span>Read Full Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-slate-800 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-extrabold text-white">Subscribe to Adriana's Daily Market Briefing</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Get key technical levels, Bitcoin macro chart updates, and high-probability trade setups delivered straight to your inbox every morning.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-cyan-400 w-full sm:w-80"
            />
            <button
              type="submit"
              className="py-3.5 px-6 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs shrink-0 transition-all shadow-md shadow-cyan-500/20"
            >
              {subscribed ? 'Subscribed!' : 'Subscribe Free'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
