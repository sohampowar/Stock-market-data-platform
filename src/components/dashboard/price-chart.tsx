'use client';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { ChartContainer, ChartTooltipContent, ChartConfig } from '@/components/ui/chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useMemo } from 'react';
import type { StockDataPoint } from '@/lib/types';

const chartConfig = {
  price: {
    label: "Price",
    color: "hsl(var(--accent))",
  },
  movingAverage: {
    label: "7-Day MA",
    color: "hsl(var(--primary))",
  }
} satisfies ChartConfig;

interface PriceChartProps {
    chartData: (StockDataPoint & { movingAverage: number | null })[];
    companyName: string;
}

export default function PriceChart({ chartData, companyName }: PriceChartProps) {
    const displayData = useMemo(() => chartData.slice(-90), [chartData]);
    
    const domain: [number, number] = useMemo(() => {
        if (displayData.length === 0) return [0, 0];
        const prices = displayData.map(d => d.price);
        const min = Math.min(...prices);
        const max = Math.max(...prices);
        const padding = (max - min) * 0.1;
        return [Math.floor(min - padding), Math.ceil(max + padding)];
    }, [displayData]);

    return (
        <Card>
            <CardHeader>
                <CardTitle>{companyName} Price Movement</CardTitle>
                <CardDescription>Price and 7-day moving average over the last 90 days.</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                    <AreaChart 
                        data={displayData}
                        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis 
                          dataKey="date" 
                          tickLine={false} 
                          axisLine={false} 
                          tickMargin={8} 
                          tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} 
                        />
                        <YAxis 
                          domain={domain}
                          tickLine={false}
                          axisLine={false}
                          tickMargin={8}
                          tickFormatter={(value) => `$${value}`}
                        />
                        <Tooltip 
                            cursor={true}
                            content={<ChartTooltipContent indicator="line" />} 
                        />
                        <defs>
                            <linearGradient id="fillPrice" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--color-price)" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="var(--color-price)" stopOpacity={0.1}/>
                            </linearGradient>
                        </defs>
                        <Area 
                            dataKey="price" 
                            type="natural" 
                            fill="url(#fillPrice)" 
                            stroke="var(--color-price)" 
                            stackId="a" 
                            strokeWidth={2}
                        />
                        <Area 
                            dataKey="movingAverage" 
                            type="natural" 
                            stroke="var(--color-movingAverage)" 
                            strokeWidth={2} 
                            dot={false}
                            fill="none" 
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
