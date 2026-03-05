import { Target } from 'lucide-react';
import { DocSection } from './doc-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const severityLevels = [
    { level: 'LOW', description: 'Minor deviation. Requires routine monitoring.', color: 'text-accent' },
    { level: 'MEDIUM', description: 'Moderate deviation. Warrants closer observation.', color: 'text-primary' },
    { level: 'HIGH', description: 'Significant deviation. Requires immediate attention.', color: 'text-destructive' },
];

export function AnomalyScoring() {
  return (
    <DocSection title="Anomaly Scoring and Classification" icon={<Target className="w-6 h-6" />} id="anomaly-scoring">
      <p>
        Anomaly scores from detection models are combined to compute a final risk score. Based on this score, severity is classified into three levels to support a prioritized clinical response.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {severityLevels.map((severity) => (
            <Card key={severity.level} className="flex flex-col">
              <CardHeader>
                  <CardTitle className={`text-center ${severity.color}`}>{severity.level}</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow">
                <p className="text-sm text-muted-foreground">{severity.description}</p>
              </CardContent>
            </Card>
          ))}
      </div>
      <p className="mt-6">This classification allows healthcare professionals to quickly assess the urgency of a situation and prioritize their responses accordingly.</p>
    </DocSection>
  );
}
