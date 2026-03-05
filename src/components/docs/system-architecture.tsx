import { DocSection } from './doc-section';
import { Card, CardContent } from '@/components/ui/card';
import { Share2, ArrowRight, DatabaseZap, Bot, Database, Server, Laptop, Mail, ArrowDown, Network } from 'lucide-react';

const steps = [
  { icon: <DatabaseZap className="w-8 h-8 text-primary" />, title: "Kafka Producer", description: "Simulates and streams patient vitals." },
  { icon: <Network className="w-8 h-8 text-primary" />, title: "Kafka Broker", description: "Manages real-time data streams." },
  { icon: <Bot className="w-8 h-8 text-primary" />, title: "ML Models", description: "Detects anomalies with Isolation Forest & Autoencoder." },
  { icon: <Database className="w-8 h-8 text-primary" />, title: "PostgreSQL", description: "Stores detected anomalies for analysis." },
  { icon: <Server className="w-8 h-8 text-primary" />, title: "Flask Backend", description: "Exposes REST APIs for data access." },
  { icon: <Laptop className="w-8 h-8 text-primary" />, title: "Web Dashboard", description: "Visualizes real-time data and alerts." },
  { icon: <Mail className="w-8 h-8 text-primary" />, title: "Email Alerts", description: "Notifies staff about critical anomalies." },
];

export function SystemArchitecture() {
  return (
    <DocSection title="System Architecture" icon={<Share2 className="w-6 h-6" />} id="architecture">
      <p>The system is built on a robust, scalable pipeline designed for real-time data ingestion, processing, and visualization. Each component plays a specific role in the data's journey from simulation to user notification.</p>
      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {steps.slice(0, -1).map((step, index) => (
            <div key={step.title} className="flex flex-col items-center">
              <Card className="w-full text-center shadow-md hover:shadow-lg transition-shadow duration-300 flex-grow flex flex-col p-4">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">{step.icon}</div>
                <h3 className="text-lg font-semibold mt-4 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 flex-grow">{step.description}</p>
              </Card>
              <div className="flex items-center justify-center h-16 text-muted-foreground/50">
                <ArrowDown className="h-8 w-8 md:hidden" />
                <ArrowRight className="h-8 w-8 hidden md:block" />
              </div>
            </div>
          ))}
           <div className="flex flex-col items-center">
              <Card className="w-full text-center shadow-md hover:shadow-lg transition-shadow duration-300 flex-grow flex flex-col p-4">
                <div className="mx-auto bg-accent/10 p-3 rounded-full w-fit">
                    <Mail className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mt-4 text-foreground">{steps.at(-1)?.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 flex-grow">{steps.at(-1)?.description}</p>
              </Card>
            </div>
        </div>
      </div>
    </DocSection>
  );
}
