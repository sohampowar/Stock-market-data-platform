import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { StockDataPoint } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function calculate7DayMovingAverage(data: StockDataPoint[]): (number | null)[] {
  const movingAverage: (number | null)[] = [];
  for (let i = 0; i < data.length; i++) {
    if (i < 6) {
      movingAverage.push(null);
    } else {
      const sum = data.slice(i - 6, i + 1).reduce((acc, val) => acc + val.price, 0);
      movingAverage.push(sum / 7);
    }
  }
  return movingAverage;
}

export function calculate52WeekHighLow(data: StockDataPoint[]): { high: number, low: number } {
  const yearData = data.slice(-252); // Approx 52 weeks of trading days
  if (yearData.length === 0) return { high: 0, low: 0 };

  const high = Math.max(...yearData.map(d => d.price));
  const low = Math.min(...yearData.map(d => d.price));
  
  return { high, low };
}
