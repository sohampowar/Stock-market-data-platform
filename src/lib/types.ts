export interface StockDataPoint {
  date: string; // "YYYY-MM-DD"
  price: number;
  volume: number;
}

export interface NewsItem {
  headline: string;
  url: string;
  source: string;
}

export interface Company {
  ticker: string;
  name: string;
  logoUrl?: string;
  about: string;
  historicalData: StockDataPoint[];
  news: NewsItem[];
}

export interface ProcessedData {
  high: number;
  low: number;
  dailyReturn: number;
  chartData: (StockDataPoint & { movingAverage: number | null })[];
}
