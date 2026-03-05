import { BrainCircuit, Database, Server, Code, Mail, Calculator, ListChecks } from 'lucide-react';
import { DocSection } from './doc-section';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PythonIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
    <title>Python</title>
    <path d="M12.25.25c-3.13 0-5.28 1.55-6.33 3.32-1.05 1.77-1.18 4.33-.29 6.03a6.1 6.1 0 014.18 3.53c.4 1.37.5 2.83.25 4.21-.49 2.76-2.38 4.79-5.1 5.43a.5.5 0 00-.4.5v.5c0 .28.22.5.5.5h6.33c3.13 0 5.28-1.55 6.33-3.32 1.05-1.77 1.18-4.33.29-6.03A6.1 6.1 0 0113.82 11c-.4-1.37-.5-2.83-.25-4.21.49-2.76 2.38-4.79 5.1-5.43a.5.5 0 00.4-.5v-.5c0-.28-.22-.5-.5-.5H12.25zM7.5 17.5a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm9-11a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"/>
  </svg>
);

const KafkaIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 stroke-current" strokeWidth="2">
        <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 7L12 12" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22V12" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 7L12 12" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 4.5L7 9.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const prerequisites = [
  { icon: <PythonIcon />, title: "Python Environment Setup", content: "Python 3.9 or higher is required. It's recommended to use a virtual environment (e.g., venv) to manage dependencies. Python is used for ML model inference, data processing, Kafka integration, the backend API, and sending email alerts." },
  { icon: <KafkaIcon />, title: "Apache Kafka & Zookeeper", content: "Kafka is essential for handling real-time patient data streaming. Zookeeper is required to manage Kafka brokers. The system includes Kafka Producers for simulating patient vitals and Kafka Consumers for processing the data stream." },
  { icon: <Database />, title: "PostgreSQL Database", content: "PostgreSQL is used as the primary data store for detected anomalies. It stores patient ID, timestamp, severity level, and vital signs, enabling historical analysis and powering the dashboard visualizations." },
  { icon: <BrainCircuit />, title: "Machine Learning Frameworks", content: "The core anomaly detection logic relies on Scikit-learn for the Isolation Forest model and TensorFlow/Keras for the Autoencoder deep learning model." },
  { icon: <Calculator />, title: "Data Processing Libraries", content: "Pandas is used for high-performance data manipulation and analysis, while NumPy provides support for large, multi-dimensional arrays and matrices." },
  { icon: <Server />, title: "Backend Framework", content: "Flask is used to build the REST API. This backend handles requests from the frontend dashboard, queries the PostgreSQL database, and serves the anomaly data." },
  { icon: <Code />, title: "Frontend & Visualization", content: "The dashboard is built with standard web technologies: HTML, CSS, and JavaScript. Chart.js is used for rendering real-time graphs of vital signs. Tailwind CSS is optionally used for creating a modern UI." },
  { icon: <Mail />, title: "Email Notification System", content: "An SMTP-based system sends automated alerts for critical anomalies. This requires configuration with an email service, such as a Gmail App Password, to send notifications." },
];

export function Prerequisites() {
  return (
    <DocSection title="Pre-Requisites" icon={<ListChecks className="w-6 h-6" />} id="prerequisites">
        <p>Before running the system, ensure the following components and technologies are set up correctly. Each part is crucial for the platform's functionality.</p>
        <Accordion type="single" collapsible className="w-full mt-8" defaultValue="item-0">
            {prerequisites.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={item.title}>
                    <AccordionTrigger className="text-lg font-medium text-foreground hover:no-underline data-[state=open]:text-primary">
                        <div className="flex items-center gap-3">
                            {item.icon}
                            <span>{item.title}</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 text-base">
                        {item.content}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    </DocSection>
  );
}
