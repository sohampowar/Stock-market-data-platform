import type { Company, ProcessedData } from '@/lib/types';
import DashboardHeader from './dashboard-header';
import MetricsGrid from './metrics-grid';
import PriceChart from './price-chart';
import SentimentAnalyzer from './sentiment-analyzer';
import { Separator } from '@/components/ui/separator';
import FileUpload from './file-upload';

interface MainDashboardProps {
  company: Company;
  metrics: ProcessedData;
}

export default function MainDashboard({ company, metrics }: MainDashboardProps) {
  return (
    <div className="flex flex-col h-full bg-background">
      <DashboardHeader company={company} />
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        <MetricsGrid company={company} metrics={metrics} />
        <PriceChart chartData={metrics.chartData} companyName={company.name} />
        <Separator />
        <SentimentAnalyzer news={company.news} ticker={company.ticker} />
        <Separator />
        <FileUpload />
      </div>
    </div>
  );
}
