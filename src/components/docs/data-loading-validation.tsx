import { FileCheck, CheckCircle2 } from 'lucide-react';
import { DocSection } from './doc-section';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const validationChecks = [
    "Dataset shape and size",
    "Availability of vital sign features",
    "Absence of missing or corrupted values",
    "Consistency of numerical ranges",
];

const datasetPreview = [
    { patient_id: 1, heart_rate: 75, bp_systolic: 120, bp_diastolic: 80, spo2: 98, time: '08:00:05' },
    { patient_id: 2, heart_rate: 90, bp_systolic: 130, bp_diastolic: 85, spo2: 97, time: '08:00:10' },
    { patient_id: 3, heart_rate: 60, bp_systolic: 110, bp_diastolic: 70, spo2: 99, time: '08:00:15' },
    { patient_id: 4, heart_rate: 100, bp_systolic: 140, bp_diastolic: 90, spo2: 95, time: '08:00:20' },
    { patient_id: 5, heart_rate: 80, bp_systolic: 115, bp_diastolic: 75, spo2: 98, time: '08:00:25' },
];

export function DataLoadingValidation() {
  return (
    <DocSection title="Data Loading and Validation" icon={<FileCheck className="w-6 h-6" />} id="data-validation">
        <p>The historical healthcare dataset containing patient vital signs is loaded to validate data integrity and structure before model training.</p>
        
        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Validation Checks</h3>
        <Card className="bg-card">
            <CardContent className="p-6">
                <ul className="space-y-4">
                    {validationChecks.map((check, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className="bg-primary/10 rounded-full p-2 mt-1">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        </div>
                        <span className="font-medium text-foreground">{check}</span>
                      </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
        
        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Dataset Preview</h3>
        <p>A preview of the incoming data stream is inspected to ensure it matches the expected format. The following shows an example data payload for a single reading.</p>
        <Card className="mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[120px]">Patient ID</TableHead>
                <TableHead>Heart Rate</TableHead>
                <TableHead>BP Systolic</TableHead>
                <TableHead>BP Diastolic</TableHead>
                <TableHead>SpO2 (%)</TableHead>
                <TableHead className="text-right">Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {datasetPreview.map((row) => (
                <TableRow key={row.patient_id}>
                  <TableCell className="font-medium">{row.patient_id}</TableCell>
                  <TableCell>{row.heart_rate}</TableCell>
                  <TableCell>{row.bp_systolic}</TableCell>
                  <TableCell>{row.bp_diastolic}</TableCell>
                  <TableCell>{row.spo2}</TableCell>
                  <TableCell className="text-right">{row.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
    </DocSection>
  );
}
