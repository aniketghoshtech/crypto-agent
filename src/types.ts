export interface TradeSignal {
  id: string;
  pair: string;
  type: 'LONG' | 'SHORT';
  category: 'Spot' | 'Futures' | 'Gem Call';
  entryPrice: string;
  targets: string[];
  stopLoss: string;
  leverage?: string;
  profitPercentage: string;
  status: 'ACTIVE' | 'TARGET HIT' | 'CLOSED';
  date: string;
  timeframe: string;
  rationale: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  content: string;
  profitGain: string;
  verified: boolean;
  category: 'All' | 'Beginner' | 'Signals' | '1-on-1 Mentorship';
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  iconName: string;
  highlightColor: string;
}

export interface MarketArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  coverImage: string;
}

export interface CryptoPrice {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  volume: string;
  sparkline: number[];
}
