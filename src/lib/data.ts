import type { Company, StockDataPoint } from './types';

function generateHistoricalData(days: number, initialPrice: number, volatility: number): StockDataPoint[] {
  const data: StockDataPoint[] = [];
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - days);
  let currentPrice = initialPrice;

  for (let i = 0; i < days; i++) {
    const changePercent = 2 * volatility * Math.random();
    if (changePercent > volatility) {
      currentPrice *= 1 + (changePercent - volatility);
    } else {
      currentPrice *= 1 - (volatility - changePercent);
    }
    currentPrice = Math.max(currentPrice, 10); // Ensure price doesn't drop too low

    data.push({
      date: currentDate.toISOString().split('T')[0],
      price: parseFloat(currentPrice.toFixed(2)),
      volume: Math.floor(Math.random() * 5000000) + 1000000,
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return data;
}

export const companies: Company[] = [
  {
    ticker: 'STKB',
    name: 'StockBoard Inc.',
    about: 'The leading platform for innovative stock market data visualization and analysis.',
    historicalData: generateHistoricalData(365, 150, 0.02),
    news: [
      { headline: 'StockBoard Inc. launches new AI-powered sentiment analysis feature.', url: '#', source: 'Tech News' },
      { headline: 'Analysts upgrade STKB to "Buy" following strong quarterly earnings.', url: '#', source: 'Financial Times' },
      { headline: 'StockBoard Inc. partners with major brokerage firms to expand reach.', url: '#', source: 'Market Watch' },
    ],
  },
  {
    ticker: 'GROW',
    name: 'Growth Stocks United',
    about: 'A high-growth tech company specializing in cloud computing and AI solutions.',
    historicalData: generateHistoricalData(365, 350, 0.045),
    news: [
      { headline: 'GROW stock soars on new breakthrough in quantum computing.', url: '#', source: 'Tech Today' },
      { headline: 'Is Growth Stocks United the next trillion-dollar company?', url: '#', source: 'Investors Daily' },
      { headline: 'Competition heats up in the cloud sector, GROW faces challenges.', url: '#', source: 'Bloomberg' },
    ],
  },
  {
    ticker: 'STBL',
    name: 'Stable Corp.',
    about: 'A well-established blue-chip company known for consistent dividends and stable growth.',
    historicalData: generateHistoricalData(365, 85, 0.01),
    news: [
      { headline: 'Stable Corp. announces 5% dividend increase for the 10th consecutive year.', url: '#', source: 'Reuters' },
      { headline: 'STBL weathers market downturn with resilient earnings report.', url: '#', source: 'Wall Street Journal' },
      { headline: 'Regulatory changes may impact Stable Corp\'s international operations.', url: '#', source: 'Global Finance' },
    ],
  },
   {
    ticker: 'INVT',
    name: 'Innovatech Solutions',
    about: 'Pioneering advancements in biotechnology and renewable energy sectors.',
    historicalData: generateHistoricalData(365, 210, 0.035),
    news: [
      { headline: 'Innovatech files patent for new gene-editing technology.', url: '#', source: 'BioTech Weekly' },
      { headline: 'INVT\'s solar panel efficiency breaks world record.', url: '#', source: 'Clean Energy News' },
      { headline: 'Innovatech faces hurdles with FDA approval process for new drug.', url: '#', source: 'Pharma Times' },
    ],
  },
];
