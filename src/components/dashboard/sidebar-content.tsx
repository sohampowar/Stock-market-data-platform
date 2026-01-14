import { CandlestickChart } from 'lucide-react';
import { SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import type { Company } from '@/lib/types';

interface SidebarContentProps {
  companies: Company[];
  selectedTicker: string;
  setSelectedTicker: (ticker: string) => void;
}

export default function SidebarContent({ companies, selectedTicker, setSelectedTicker }: SidebarContentProps) {
  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <div className="bg-primary text-primary-foreground p-2 rounded-lg shadow-md">
            <CandlestickChart className="h-6 w-6" />
          </div>
          <h1 className="text-xl font-headline font-semibold text-foreground">StockBoard</h1>
        </div>
      </SidebarHeader>
      <SidebarMenu className="px-2">
        {companies.map((company) => (
          <SidebarMenuItem key={company.ticker}>
            <SidebarMenuButton 
              onClick={() => setSelectedTicker(company.ticker)}
              isActive={selectedTicker === company.ticker}
              className="font-medium"
            >
              <span>{company.name} <span className="text-muted-foreground">({company.ticker})</span></span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </>
  );
}
