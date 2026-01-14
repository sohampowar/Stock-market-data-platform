import { Sidebar, SidebarHeader, SidebarMenu, SidebarInset, SidebarProvider, SidebarMenuSkeleton } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { CandlestickChart } from "lucide-react";

export default function Loading() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <div className="bg-muted p-2 rounded-lg">
              <CandlestickChart className="h-6 w-6 text-muted-foreground" />
            </div>
            <Skeleton className="h-6 w-32" />
          </div>
        </SidebarHeader>
        <SidebarMenu>
          <SidebarMenuSkeleton showIcon={false} />
          <SidebarMenuSkeleton showIcon={false} />
          <SidebarMenuSkeleton showIcon={false} />
          <SidebarMenuSkeleton showIcon={false} />
        </SidebarMenu>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center justify-between p-4 md:p-6 border-b">
          <Skeleton className="h-8 w-64" />
        </header>
        <div className="p-4 md:p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Skeleton className="h-28" />
            <Skeleton className="h-28" />
            <Skeleton className="h-28" />
            <Skeleton className="h-28" />
          </div>
          <Skeleton className="h-[350px] w-full" />
          <Skeleton className="h-48 w-full" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
