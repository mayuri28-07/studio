
'use client';
import { BarChart3 } from 'lucide-react';
import { DocSection } from './doc-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

const chartData = [
    { time: "00:00", heartRate: 72, spO2: 98 },
    { time: "01:00", heartRate: 75, spO2: 97 },
    { time: "02:00", heartRate: 68, spO2: 99 },
    { time: "03:00", heartRate: 70, spO2: 98 },
    { time: "04:00", heartRate: 85, spO2: 95 },
    { time: "05:00", heartRate: 73, spO2: 97 },
    { time: "06:00", heartRate: 71, spO2: 98 },
];

const chartConfig = {
    heartRate: {
      label: "Heart Rate (BPM)",
      color: "hsl(var(--chart-1))",
    },
    spO2: {
      label: "SpO2 (%)",
      color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export function ExploratoryDataAnalysis() {
  return (
    <DocSection title="Exploratory Data Analysis" icon={<BarChart3 className="w-6 h-6" />} id="eda">
      <p>
        Exploratory Data Analysis (EDA) is performed to understand the behavior of patient vital signs and identify normal versus abnormal physiological patterns. This analysis is crucial for building a reliable anomaly detection model.
      </p>
      <div className="mt-6 space-y-2">
        <p>Key areas of analysis include:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Distribution of heart rate, SpO₂, and blood pressure.</li>
          <li>Identification of extreme values and sustained abnormal trends.</li>
          <li>Understanding baseline physiological ranges for different patient demographics.</li>
        </ul>
      </div>
      <p className="mt-4">
        Visualizations derived from this process are essential for understanding vital sign behavior and guiding the logic of our anomaly detection algorithms.
      </p>
      
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Vital Sign Behavior Visualization</h3>
      <Card>
        <CardHeader>
          <CardTitle>Hourly Vital Signs</CardTitle>
          <CardDescription>
            Example plot showing patient Heart Rate and SpO2 trends over time.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <LineChart accessibilityLayer data={chartData} margin={{ left: 12, right: 12 }}>
              <CartesianGrid vertical={false} />
              <YAxis domain={[60, 100]} tickLine={false} axisLine={false} tickMargin={8} />
              <XAxis dataKey="time" tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line dataKey="heartRate" type="monotone" stroke="var(--color-heartRate)" strokeWidth={2} dot={true} />
              <Line dataKey="spO2" type="monotone" stroke="var(--color-spO2)" strokeWidth={2} dot={true} />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </DocSection>
  );
}
