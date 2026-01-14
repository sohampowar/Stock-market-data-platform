'use client';

import { useState, useMemo, useEffect } from 'react';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import SidebarContent from '@/components/dashboard/sidebar-content';
import MainDashboard from '@/components/dashboard/main-dashboard';
import { companies as allCompanies } from '@/lib/data';
import type { Company, ProcessedData } from '@/lib/types';
import { calculate7DayMovingAverage, calculate52WeekHighLow } from '@/lib/utils';
import Loading from './loading';

export default function Home() {
  const [selectedTicker, setSelectedTicker] = useState<string>(allCompanies[0].ticker);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const selectedCompany = useMemo((): Company | undefined => {
    return allCompanies.find((c) => c.ticker === selectedTicker);
  }, [selectedTicker]);
  
  const processedData = useMemo((): ProcessedData | null => {
    if (!selectedCompany) return null;
    
    const movingAverage = calculate7DayMovingAverage(selectedCompany.historicalData);
    const { high, low } = calculate52WeekHighLow(selectedCompany.historicalData);
    
    const dailyReturn =
      selectedCompany.historicalData.length > 1
        ? ((selectedCompany.historicalData[selectedCompany.historicalData.length - 1].price -
            selectedCompany.historicalData[selectedCompany.historicalData.length - 2].price) /
            selectedCompany.historicalData[selectedCompany.historicalData.length - 2].price) *
          100
        : 0;
    
    const chartData = selectedCompany.historicalData.map((d, i) => ({
      ...d,
      movingAverage: movingAverage[i] ?? d.price,
    }));

    return { high, low, dailyReturn, chartData };
  }, [selectedCompany]);

  if (!isClient || !selectedCompany || !processedData) {
    return <Loading />;
  }

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent 
          companies={allCompanies} 
          selectedTicker={selectedTicker} 
          setSelectedTicker={setSelectedTicker} 
        />
      </Sidebar>
      <SidebarInset>
        <MainDashboard 
          company={selectedCompany} 
          metrics={processedData}
        />
      </SidebarInset>
    </SidebarProvider>
  );
}
