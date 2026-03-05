import { DownloadCloud, Package } from 'lucide-react';
import { DocSection } from './doc-section';
import { CodeBlock } from './code-block';
import { Card, CardContent } from '@/components/ui/card';

const dependencies = [
    { name: "pandas, numpy", description: "Data preprocessing and numerical computation" },
    { name: "scikit-learn", description: "Isolation Forest model and preprocessing" },
    { name: "tensorflow / keras", description: "Autoencoder model" },
    { name: "kafka-python", description: "Real-time streaming integration" },
    { name: "psycopg2", description: "PostgreSQL database connectivity" },
    { name: "flask", description: "Backend APIs and dashboard" },
    { name: "matplotlib", description: "Visualization support" }
];

export function DependencyInstallation() {
  return (
    <DocSection title="Dependency Installation" icon={<DownloadCloud className="w-6 h-6" />} id="dependencies">
        <p>All required dependencies are installed using a centralized <code className="font-code bg-muted text-foreground p-1 rounded-sm">requirements.txt</code> file. This ensures that the project can be easily set up on any system with minimal configuration effort.</p>
        <p>Dependencies are installed using:</p>
        <CodeBlock>pip install -r requirements.txt</CodeBlock>
        
        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Key Dependencies</h3>
        <Card className="bg-card">
            <CardContent className="p-6">
                <ul className="space-y-6">
                    {dependencies.map(dep => (
                      <li key={dep.name} className="flex items-start gap-4">
                        <div className="bg-primary/10 rounded-lg p-2 mt-1">
                          <Package className="w-5 h-5 text-primary shrink-0" />
                        </div>
                        <div>
                          <span className="font-bold text-foreground">{dep.name}</span>
                          <p className="text-sm text-muted-foreground">{dep.description}</p>
                        </div>
                      </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
        <p className="mt-4 text-sm italic">A command prompt screenshot illustrating the <code className="font-code text-xs bg-muted text-foreground p-1 rounded-sm">pip install</code> command is for representational purposes.</p>
    </DocSection>
  );
}
