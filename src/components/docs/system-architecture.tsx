import * as React from 'react';
import { DocSection } from './doc-section';
import { Card, CardContent } from '@/components/ui/card';
import { Share2, ArrowRight, DatabaseZap, Bot, Server, Laptop, Mail } from 'lucide-react';

const steps = [
  { icon: <DatabaseZap className="w-8 h-8 text-primary" />, title: "Data Ingestion", description: "Patient vitals are streamed securely from monitoring devices in real-time." },
  { icon: <Bot className="w-8 h-8 text-primary" />, title: "AI-Powered Detection", description: "Genkit AI flows analyze the data stream to detect anomalies using advanced models." },
  { icon: <Server className="w-8 h-8 text-primary" />, title: "Next.js Application", description: "The core web application built with Next.js serves the dashboard and handles user interactions." },
  { icon: <Laptop className="w-8 h-8 text-primary" />, title: "Real-time Dashboard", description: "A responsive React dashboard visualizes patient data and highlights detected anomalies." },
  { icon: <Mail className="w-8 h-8 text-accent" />, title: "Instant Notifications", description: "Critical anomalies trigger automated alerts to notify healthcare professionals immediately." },
];

export function SystemArchitecture() {
  return (
    <DocSection title="System Architecture" icon={<Share2 className="w-6 h-6" />} id="architecture">
      <p>The system is built on a robust, scalable pipeline designed for real-time data ingestion, processing, and visualization. Each component plays a specific role in the data's journey from source to user notification.</p>
      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center justify-center">
              <Card className="w-full text-center shadow-md hover:shadow-lg transition-shadow duration-300 flex-grow flex flex-col p-4">
                <div className={`mx-auto ${index === steps.length - 1 ? 'bg-accent/10' : 'bg-primary/10'} p-3 rounded-full w-fit`}>
                    {React.cloneElement(step.icon, { className: `w-8 h-8 ${index === steps.length - 1 ? 'text-accent' : 'text-primary'}` })}
                </div>
                <h3 className="text-lg font-semibold mt-4 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 flex-grow">{step.description}</p>
              </Card>
              {index < steps.length - 1 && (
                <div className="flex-shrink-0 -mt-px -mb-px h-16 w-full flex items-center justify-center text-muted-foreground/30">
                  <ArrowRight className="h-8 w-8 hidden lg:block" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </DocSection>
  );
}
