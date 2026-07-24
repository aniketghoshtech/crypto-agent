import { ServiceItem, Testimonial, TradeSignal, MarketArticle, CryptoPrice } from '../types';

export const MENTOR_PROFILE = {
  name: 'Adriana McGrath',
  title: 'Certified Cryptocurrency Analyst & Wealth Mentor',
  tagline: 'Empowering individual traders with institutional-grade strategy and precision market signals since 2017.',
  bio: 'A certified cryptocurrency trading professional with a passion for turning complex, volatile markets into clear, actionable opportunities for everyone.',
  extendedBio: 'Over the years I have mentored hundreds of individuals, empowering them with the technical charting, risk discipline, and psychological resilience needed to achieve financial independence through crypto. I understand you have a day job — that\'s why my strategies are engineered to maximize returns with minimal daily strain.',
  stats: [
    { label: 'Traders Mentored', value: 500, suffix: '+', desc: 'Active global community members' },
    { label: 'Signal Accuracy', value: 89, suffix: '%', desc: 'Verified win-rate across 1,200+ setups' },
    { label: 'Years Experience', value: 9, suffix: '+', desc: 'Surviving & thriving through 3 market cycles' },
    { label: 'Avg Monthly Growth', value: 34, suffix: '%', desc: 'Consistently compounded strategy' },
  ],
  pillars: [
    { title: 'Institutional Market Analysis & Technical Charting', desc: 'Order flow, market structure, liquidity pools, and macro cycles.' },
    { title: 'Strict Risk Management with USDT & BTC', desc: 'Never risk more than 1-2% per position with algorithmic position sizing.' },
    { title: 'Capital Preservation During Volatile Bear Phases', desc: 'Hedging and stablecoin yield strategies to lock in lifetime profits.' },
    { title: 'Strategic Long-Term Wealth & Altcoin Capital Building', desc: 'Curated gem selection for 10x-50x multi-cycle portfolio compounding.' },
  ],
  avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
  socialLinks: {
    telegram: 'https://t.me/adrianamcgrath',
    whatsapp: 'https://wa.me/15550192834',
    substack: 'https://adrianamcgrath.substack.com',
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    number: '01',
    title: 'Professional Mentoring & Education',
    tagline: 'Master technical analysis from zero to institutional level',
    description: 'Unlimited access to exclusive daily signals, direct 1-on-1 strategy feedback, and premium market analysis from a certified technical analyst with 9+ years in the field.',
    features: [
      'Comprehensive 12-Module Video Academy',
      'Weekly Live Trading & Q&A Webinars',
      'Private Student Discord & Homework Audits',
      'Direct Telegram Access to Adriana'
    ],
    iconName: 'GraduationCap',
    highlightColor: 'from-cyan-500 to-blue-600'
  },
  {
    id: 's2',
    number: '02',
    title: '50+ Master Trading Techniques',
    tagline: 'Spot, Futures & High-Leverage execution Playbooks',
    description: 'Master certified market analysis and top-tier trading techniques across spot, margin, and futures on Binance, Bybit, OKX, and KuCoin.',
    features: [
      'Order Block & Liquidity Grab Playbook',
      'Fibonacci Golden Pocket Entries',
      'Bullish & Bearish Divergence Scanners',
      'Risk-Adjusted Position Calculator Tools'
    ],
    iconName: 'TrendingUp',
    highlightColor: 'from-indigo-500 to-purple-600'
  },
  {
    id: 's3',
    number: '03',
    title: '5-Star VIP Daily Trade Signals',
    tagline: 'Actionable trade setups with precise entry & exit targets',
    description: 'Easy-to-follow crypto trade setups with clear entry, exit, target take-profit levels (TP1, TP2, TP3), and automated stop-loss alerts — never miss a market move.',
    features: [
      '3-5 High-Probability Setups Daily',
      'Exact Entry, Stop Loss & 4 Profit Targets',
      'Real-time Market Adjustment Push Alerts',
      'Risk/Reward Ratio Minimum 1:3'
    ],
    iconName: 'Zap',
    highlightColor: 'from-amber-400 to-yellow-600'
  },
  {
    id: 's4',
    number: '04',
    title: 'Indicator-Based Automated Scanners',
    tagline: 'Custom algorithms predicting trend breakouts in real-time',
    description: 'Automated signals built on unique trend, momentum, and volume combinations — the same proprietary system used to predict major BTC reversals in 2018, 2021, and 2024.',
    features: [
      'Proprietary Pinescript Indicators for TradingView',
      'Volume Profile & Heatmap Liquidity Alerts',
      'Whale Wallet Tracking Notifications',
      'Volatility Breakout Radar'
    ],
    iconName: 'Activity',
    highlightColor: 'from-emerald-400 to-teal-600'
  },
  {
    id: 's5',
    number: '05',
    title: 'Private 1-on-1 Strategy Sessions',
    tagline: 'Tailored portfolio restructuring & personalized advisory',
    description: 'High-end 1-on-1 consultations covering personal wealth management, portfolio diversification, risk allocation, and custom roadmap to financial independence.',
    features: [
      '60-Minute Intensive Live Video Call',
      'Complete Portfolio Risk & Overhead Audit',
      'Personalized Action Plan & Rebalancing Blueprint',
      'Follow-up Call & Direct Line Support'
    ],
    iconName: 'UserCheck',
    highlightColor: 'from-rose-500 to-pink-600'
  },
  {
    id: 's6',
    number: '06',
    title: '24/7 VIP Telegram Community',
    tagline: 'Connect with hundreds of profitable traders worldwide',
    description: 'Exclusive access across all time zones with custom notifications so you never miss a key signal, macroeconomic update, or breakout insight.',
    features: [
      'Active Global Elite Trader Lounge',
      'Voice Chat Live Market Reaction Briefings',
      'Daily Sentiment & On-Chain Reports',
      'Friendly Mentor & Mod Assistance 24/7'
    ],
    iconName: 'MessageSquare',
    highlightColor: 'from-sky-400 to-cyan-600'
  }
];

export const SAMPLE_SIGNALS: TradeSignal[] = [
  {
    id: 'sig-01',
    pair: 'BTC / USDT',
    type: 'LONG',
    category: 'Spot',
    entryPrice: '$94,200 - $94,800',
    targets: ['$96,500', '$98,200', '$102,000'],
    stopLoss: '$92,800',
    profitPercentage: '+248%',
    status: 'TARGET HIT',
    date: 'Today, 08:30 AM',
    timeframe: '4H / 1D',
    rationale: 'Liquidity pool sweep at $94.2k support with strong bullish RSI divergence and institutional spot buying volume.'
  },
  {
    id: 'sig-02',
    pair: 'ETH / USDT',
    type: 'LONG',
    category: 'Futures',
    leverage: '10x Cross',
    entryPrice: '$3,380 - $3,410',
    targets: ['$3,520', '$3,680', '$3,850'],
    stopLoss: '$3,320',
    profitPercentage: '+142%',
    status: 'ACTIVE',
    date: 'Today, 11:15 AM',
    timeframe: '1H / 4H',
    rationale: 'Ascending triangle breakout confirmation on the 4H timeframe with ETH/BTC ratio bouncing strongly off historical support.'
  },
  {
    id: 'sig-03',
    pair: 'SOL / USDT',
    type: 'LONG',
    category: 'Futures',
    leverage: '5x Cross',
    entryPrice: '$204.50 - $207.00',
    targets: ['$218.00', '$228.00', '$245.00'],
    stopLoss: '$198.50',
    profitPercentage: '+310%',
    status: 'TARGET HIT',
    date: 'Yesterday',
    timeframe: '4H',
    rationale: 'High-volume breakout above major resistance level $205 supported by DEX ecosystem activity expansion.'
  },
  {
    id: 'sig-04',
    pair: 'SUI / USDT',
    type: 'LONG',
    category: 'Gem Call',
    entryPrice: '$3.15 - $3.25',
    targets: ['$3.80', '$4.50', '$5.20'],
    stopLoss: '$2.90',
    profitPercentage: '+185%',
    status: 'ACTIVE',
    date: '2 Days Ago',
    timeframe: 'Daily',
    rationale: 'Layer 1 ecosystem growth with TVL reaching new all-time highs. Re-testing previous resistance as solid support.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Lorraine Vickers',
    role: 'Full-time Trader & Mentorship Graduate',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    content: 'Your trading signals have completely changed my view of the market. My portfolio has grown to levels I never thought possible. You\'ve truly transformed my trading game and financial mindset.',
    profitGain: '+320% Portfolio Return',
    verified: true,
    category: '1-on-1 Mentorship'
  },
  {
    id: 't2',
    name: 'Ann Bauer',
    role: 'Private Investor',
    location: 'Zurich, Switzerland',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    content: 'One of the best crypto trading mentors out there. I really appreciate your professionalism, patience, and the transparent risk framework you have guided and supported me with.',
    profitGain: '+$48,500 Net Profit',
    verified: true,
    category: 'Signals'
  },
  {
    id: 't3',
    name: 'Courtney Russell',
    role: 'Software Engineer',
    location: 'Austin, USA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    content: 'After terrible experiences with other signal providers, I\'m so glad to have found your program. Your signals have been consistently accurate and timely — providing real results over time.',
    profitGain: '88% Win Rate',
    verified: true,
    category: 'Signals'
  },
  {
    id: 't4',
    name: 'Donovan Stanton',
    role: 'Business Owner',
    location: 'Sydney, Australia',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    content: 'Being at 50, I found your program excellent. I am actively trading all my coins and benefiting directly from your signals. I highly recommend Adriana as a go-to signal provider.',
    profitGain: '+$92,000 Traded',
    verified: true,
    category: 'Beginner'
  },
  {
    id: 't5',
    name: 'Eduardo Velásquez',
    role: 'Entrepreneur',
    location: 'Madrid, Spain',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    content: 'Almost every week is profitable! There are clear different take-profit levels, and you always keep me updated when closing positions. Absolutely brilliant service.',
    profitGain: '+195% Growth',
    verified: true,
    category: 'Signals'
  },
  {
    id: 't6',
    name: 'Carolyn Guthrie',
    role: 'Financial Analyst',
    location: 'Toronto, Canada',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    content: 'You broke down the complicated crypto jargon into plain, actionable English. I can already feel a significant increase in my investment confidence and risk discipline. I feel empowered.',
    profitGain: 'Mastery Certificate',
    verified: true,
    category: 'Beginner'
  }
];

export const ARTICLES: MarketArticle[] = [
  {
    id: 'art-1',
    title: 'Navigating Bitcoin Liquidity Grabs & The 2026 Macro Supercycle',
    excerpt: 'Detailed breakdown of how institutional market makers hunt liquidity at key technical levels and how to position your portfolio ahead of breakout volatility.',
    date: 'Jul 22, 2026',
    readTime: '6 min read',
    category: 'Macro & Bitcoin',
    author: 'Adriana McGrath',
    coverImage: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'art-2',
    title: '5 Risk Management Rules That Separates Amateurs From 7-Figure Traders',
    excerpt: 'Why position sizing, strict 1.5% stop-losses, and dynamic trailing profit stops are the single reason top traders survive every crash.',
    date: 'Jul 18, 2026',
    readTime: '8 min read',
    category: 'Trading Psychology',
    author: 'Adriana McGrath',
    coverImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'art-3',
    title: 'Altcoin Rotations: Identifying Layer 1 & AI Gems Before The Pump',
    excerpt: 'How on-chain volume spikes, active developer metrics, and social sentiment heatmaps signal 10x altcoin rotation opportunities.',
    date: 'Jul 12, 2026',
    readTime: '5 min read',
    category: 'Altcoin Strategy',
    author: 'Adriana McGrath',
    coverImage: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=800'
  }
];

export const INITIAL_CRYPTO_PRICES: CryptoPrice[] = [
  { symbol: 'BTC', name: 'Bitcoin', price: 95840.50, change24h: 3.42, volume: '$42.8B', sparkline: [92000, 92800, 94100, 93600, 95200, 95840] },
  { symbol: 'ETH', name: 'Ethereum', price: 3420.80, change24h: 4.15, volume: '$21.4B', sparkline: [3250, 3290, 3340, 3310, 3390, 3420] },
  { symbol: 'SOL', name: 'Solana', price: 214.25, change24h: 7.82, volume: '$9.2B', sparkline: [195, 198, 204, 202, 210, 214] },
  { symbol: 'BNB', name: 'Binance Coin', price: 645.10, change24h: 1.95, volume: '$3.1B', sparkline: [630, 634, 638, 641, 642, 645] },
  { symbol: 'SUI', name: 'Sui Network', price: 3.45, change24h: 12.40, volume: '$1.8B', sparkline: [2.9, 3.0, 3.1, 3.25, 3.38, 3.45] }
];
