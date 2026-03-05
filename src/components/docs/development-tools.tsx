import { Wrench } from 'lucide-react';
import { DocSection } from './doc-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const tools = [
  { name: 'Visual Studio Code', description: 'A lightweight but powerful source code editor with excellent Python and web development support.' },
  { name: 'PyCharm Community Edition', description: 'A dedicated Python IDE with a rich set of features for productive development.' },
];

export function DevelopmentTools() {
  return (
    <DocSection title="Development Tools" icon={<Wrench className="w-6 h-6" />} id="tools">
      <p>While you can use any editor of your choice, we recommend the following Integrated Development Environments (IDEs) for a smoother development experience:</p>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {tools.map(tool => (
          <Card key={tool.name} className="bg-card shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">{tool.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{tool.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </DocSection>
  );
}
