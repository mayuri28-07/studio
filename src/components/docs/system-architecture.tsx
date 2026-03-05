import * as React from 'react';
import { DocSection } from './doc-section';
import { Card } from '@/components/ui/card';
import { Activity, Bot, FileCheck, BrainCircuit, Mail, LayoutGrid, Lock } from 'lucide-react';

const features = [
  { icon: <Activity className="w-8 h-8 text-primary" />, title: "Real-time Monitoring", description: "Continuously tracks patient vital signs like heart rate, blood pressure, and SpO2, providing a live view of their health status." },
  { icon: <Bot className="w-8 h-8 text-primary" />, title: "AI Anomaly Detection", description: "Leverages Genkit AI flows to analyze data streams and identify subtle, potentially critical anomalies in real-time." },
  { icon: <FileCheck className="w-8 h-8 text-primary" />, title: "Data Validation", description: "Ensures the integrity and quality of all incoming data through automated validation checks before processing." },
  { icon: <BrainCircuit className="w-8 h-8 text-primary" />, title: "Model Training", description: "Utilizes historical data to train and refine anomaly detection models, continuously improving their accuracy and reliability." },
  { icon: <Lock className="w-8 h-8 text-primary" />, title: "Secure Data Handling", description: "Employs robust security measures to ensure patient data is handled with the utmost confidentiality and compliance." },
  { icon: <Mail className="w-8 h-8 text-accent" />, title: "Automated Alerting", description: "Instantly notifies healthcare professionals when a critical anomaly is detected, enabling rapid intervention." },
];

export function SystemArchitecture() {
  return (
    <DocSection title="Core Features" icon={<LayoutGrid className="w-6 h-6" />} id="features">
      <p>HealthSense AI is equipped with a suite of powerful features designed to provide a comprehensive and reliable patient monitoring solution. Each component works in synergy to deliver timely and actionable insights.</p>
      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col p-4">
              <div className={`mx-auto ${feature.title === 'Automated Alerting' ? 'bg-accent/10' : 'bg-primary/10'} p-3 rounded-full w-fit`}>
                  {React.cloneElement(feature.icon, { className: `w-8 h-8 ${feature.title === 'Automated Alerting' ? 'text-accent' : 'text-primary'}` })}
              </div>
              <h3 className="text-lg font-semibold mt-4 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 flex-grow">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </DocSection>
  );
}
