import { BookOpen, ExternalLink } from 'lucide-react';
import { DocSection } from './doc-section';
import { Card, CardContent } from '@/components/ui/card';

const resources = [
  "Apache Kafka fundamentals",
  "Anomaly detection techniques (Isolation Forest & Autoencoders)",
  "Healthcare data analytics",
  "Real-time data processing with stream processors",
  "Building REST APIs with Flask",
];

export function LearningResources() {
  return (
    <DocSection title="Optional Learning Resources" icon={<BookOpen className="w-6 h-6" />} id="learning">
      <p>To deepen your understanding of the technologies used in this project, consider exploring the following topics. These resources will provide valuable context and skills for extending the platform.</p>
      <Card className="mt-8 bg-card">
        <CardContent className="p-6">
          <ul className="space-y-4">
            {resources.map(resource => (
              <li key={resource} className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-full p-2">
                  <ExternalLink className="w-4 h-4 text-primary shrink-0" />
                </div>
                <span className="font-medium text-foreground">{resource}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </DocSection>
  );
}
