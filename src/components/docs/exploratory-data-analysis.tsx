
'use client';
import { BarChart3, CheckCircle2 } from 'lucide-react';
import { DocSection } from './doc-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, type ChartConfig } from "@/components/ui/chart"
import { CartesianGrid, Line, LineChart, Pie, PieChart, XAxis, YAxis } from "recharts"

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

const selectedFeatures = [
    "Heart Rate",
    "Respiratory Rate",
    "Body Temperature",
    "Oxygen Saturation (SpO₂)",
    "Systolic & Diastolic Blood Pressure",
    "Derived HRV",
    "Derived MAP",
];

const successRateData = [
  { name: 'successful', value: 85, fill: 'var(--color-successful)' },
  { name: 'ongoing', value: 10, fill: 'var(--color-ongoing)' },
  { name: 'failed', value: 5, fill: 'var(--color-failed)' },
];
const successRateConfig = {
    successful: { label: 'Successful', color: 'hsl(var(--chart-2))' },
    ongoing: { label: 'Ongoing', color: 'hsl(var(--chart-4))' },
    failed: { label: 'Failed', color: 'hsl(var(--chart-1))' },
} satisfies ChartConfig;

const reviewsData = [
    { name: 'positive', value: 320, fill: 'var(--color-positive)' },
    { name: 'neutral', value: 50, fill: 'var(--color-neutral)' },
    { name: 'negative', value: 30, fill: 'var(--color-negative)' },
];
const reviewsConfig = {
    positive: { label: 'Positive', color: 'hsl(var(--chart-2))' },
    neutral: { label: 'Neutral', color: 'hsl(var(--chart-4))' },
    negative: { label: 'Negative', color: 'hsl(var(--chart-1))' },
} satisfies ChartConfig;

const medicineAvailabilityData = [
    { name: 'inStock', value: 500, fill: 'var(--color-inStock)' },
    { name: 'lowStock', value: 150, fill: 'var(--color-lowStock)' },
    { name: 'outOfStock', value: 50, fill: 'var(--color-outOfStock)' },
];
const medicineAvailabilityConfig = {
    inStock: { label: 'In Stock', color: 'hsl(var(--chart-2))' },
    lowStock: { label: 'Low Stock', color: 'hsl(var(--chart-4))' },
    outOfStock: { label: 'Out of Stock', color: 'hsl(var(--chart-1))' },
} satisfies ChartConfig;


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

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Platform Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Treatment Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={successRateConfig} className="h-[250px] w-full">
                        <PieChart>
                            <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
                            <Pie data={successRateData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={80} />
                            <ChartLegend content={<ChartLegendContent nameKey="name" />} />
                        </PieChart>
                    </ChartContainer>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Patient Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={reviewsConfig} className="h-[250px] w-full">
                        <PieChart>
                            <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
                            <Pie data={reviewsData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={80} />
                            <ChartLegend content={<ChartLegendContent nameKey="name" />} />
                        </PieChart>
                    </ChartContainer>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Medicine Availability</CardTitle>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={medicineAvailabilityConfig} className="h-[250px] w-full">
                        <PieChart>
                            <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
                            <Pie data={medicineAvailabilityData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={80} />
                            <ChartLegend content={<ChartLegendContent nameKey="name" />} />
                        </PieChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
      
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Selected Features for Anomaly Detection</h3>
      <p>
        These features collectively represent a patient’s physiological condition and are used for anomaly detection.
      </p>
      <Card className="mt-4">
        <CardContent className="p-6">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {selectedFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="bg-primary/10 rounded-full p-1.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    </div>
                    <span className="font-medium text-foreground text-sm">{feature}</span>
                  </li>
                ))}
            </ul>
        </CardContent>
      </Card>
    </DocSection>
  );
}
