import { CheckCircle2 } from 'lucide-react';
import { DocSection } from './doc-section';
import { Card, CardContent } from '@/components/ui/card';

const setupItems = [
    "AI Models Initialized",
    "Frontend Components Integrated",
    "Real-time Data Hooks Ready",
    "Project Ready for Deployment"
];

export function SetupStatus() {
  return (
    <DocSection title="Setup Status" icon={<CheckCircle2 className="w-6 h-6" />} id="setup-status">
        <p>The development environment and project foundations are fully configured, ensuring a stable and ready-to-use platform.</p>
        
        <Card className="bg-card mt-8">
            <CardContent className="p-6">
                <ul className="space-y-4">
                    {setupItems.map(item => (
                      <li key={item} className="flex items-center gap-4">
                        <div className="bg-primary/10 rounded-full p-2">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{item}</span>
                      </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    </DocSection>
  );
}
