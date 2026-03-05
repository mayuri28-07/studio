import { FileCheck, CheckCircle } from 'lucide-react';
import { DocSection } from './doc-section';
import { Card, CardContent } from '@/components/ui/card';
import { CodeBlock } from './code-block';

const validationChecks = [
    "Dataset shape and size",
    "Availability of vital sign features",
    "Absence of missing or corrupted values",
    "Consistency of numerical ranges",
];

const pandasHeadOutput = `   patient_id  heart_rate  bp_systolic  bp_diastolic  spo2      timestamp
0           1          75          120            80    98  1672531200000
1           2          90          130            85    97  1672531200000
2           3          60          110            70    99  1672531200000
3           4         100          140            90    95  1672531200000
4           5          80          115            75    98  1672531200000`;

export function DataLoadingValidation() {
  return (
    <DocSection title="Data Loading and Validation" icon={<FileCheck className="w-6 h-6" />} id="data-validation">
        <p>The historical healthcare dataset containing patient vital signs is loaded to validate data integrity and structure before model training.</p>
        
        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Validation Checks</h3>
        <Card className="bg-card">
            <CardContent className="p-6">
                <ul className="space-y-4">
                    {validationChecks.map(check => (
                      <li key={check} className="flex items-start gap-4">
                        <div className="bg-primary/10 rounded-full p-2 mt-1">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        </div>
                        <span className="font-medium text-foreground">{check}</span>
                      </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
        
        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Dataset Preview</h3>
        <p>A preview of the dataset is inspected to ensure it matches the expected format. The following shows a sample from the dataset using a Pandas <code className="font-code bg-muted text-foreground p-1 rounded-sm">.head()</code> command.</p>
        <CodeBlock>{pandasHeadOutput}</CodeBlock>
    </DocSection>
  );
}
