import MetricCard from './metric-card';
import { ArrowDown, ArrowUp, TrendingUp, Wallet } from 'lucide-react';
import type { Company, ProcessedData } from '@/lib/types';

interface MetricsGridProps {
    company: Company;
    metrics: ProcessedData;
}

export default function MetricsGrid({ company, metrics }: MetricsGridProps) {
  const latestPrice = company.historicalData[company.historicalData.length - 1].price;
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      <MetricCard 
        icon={Wallet} 
        title="Current Price" 
        value={`$${latestPrice.toFixed(2)}`} 
        description="Latest closing price"
      />
      <MetricCard 
        icon={TrendingUp} 
        title="Daily Return" 
        value={`${metrics.dailyReturn.toFixed(2)}%`}
        change={metrics.dailyReturn} 
        description="vs. previous day"
      />
      <MetricCard 
        icon={ArrowUp} 
        title="52-Week High" 
        value={`$${metrics.high.toFixed(2)}`} 
        description="Highest price in 52 weeks"
      />
      <MetricCard 
        icon={ArrowDown} 
        title="52-Week Low" 
        value={`$${metrics.low.toFixed(2)}`} 
        description="Lowest price in 52 weeks"
      />
    </div>
  );
}
