import { SidebarTrigger } from '@/components/ui/sidebar';
import type { Company } from '@/lib/types';

interface DashboardHeaderProps {
  company: Company;
}

export default function DashboardHeader({ company }: DashboardHeaderProps) {
  return (
    <header className="flex sticky top-0 bg-background/80 backdrop-blur-sm z-10 items-center justify-between p-4 border-b">
      <div className="flex items-center gap-4">
         <SidebarTrigger className="md:hidden" />
         <h2 className="text-2xl font-headline font-semibold text-foreground">{company.name} ({company.ticker})</h2>
      </div>
    </header>
  );
}
