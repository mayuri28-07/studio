import { DownloadCloud } from 'lucide-react';
import { DocSection } from './doc-section';
import { Badge } from '@/components/ui/badge';
import { CodeBlock } from './code-block';

const dependencies = [
  "flask", "flask-cors", "kafka-python", "psycopg2",
  "tensorflow", "scikit-learn", "pandas", "numpy"
];

export function DependencyInstallation() {
  return (
    <DocSection title="Dependency Installation" icon={<DownloadCloud className="w-6 h-6" />} id="dependencies">
      <p>All required Python libraries are listed in the <code className="font-code bg-muted text-foreground p-1 rounded-sm">requirements.txt</code> file. You can install them in your virtual environment using pip:</p>
      <CodeBlock>pip install -r requirements.txt</CodeBlock>
      <p>The main dependencies include:</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {dependencies.map(dep => (
          <Badge key={dep} variant="secondary" className="text-sm font-normal px-3 py-1">{dep}</Badge>
        ))}
      </div>
    </DocSection>
  );
}
