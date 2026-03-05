import { ShieldAlert, ShieldCheck, ShieldQuestion } from 'lucide-react';
import { DocSection } from './doc-section';
import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';

const patientConditions = [
  { disease: 'Hypertension', risk: 'MEDIUM', description: 'Sustained high blood pressure requires regular monitoring to prevent cardiovascular complications.' },
  { disease: 'Type 2 Diabetes', risk: 'HIGH', description: 'High blood sugar levels pose a significant risk for various systemic health issues if not managed.' },
  { disease: 'Arrhythmia', risk: 'HIGH', description: 'Irregular heartbeat detected, which could lead to serious cardiac events. Immediate follow-up is advised.' },
  { disease: 'Sleep Apnea', risk: 'MEDIUM', description: 'Breathing interruptions during sleep can affect oxygen levels and cardiovascular health.' },
  { disease: 'Chronic Kidney Disease (CKD)', risk: 'LOW', description: 'Early stage detection. Monitored to prevent progression.' },
];

const riskConfig: { [key: string]: { variant: 'destructive' | 'default' | 'secondary', icon: React.ReactNode } } = {
    HIGH: { variant: 'destructive', icon: <ShieldAlert className="w-4 h-4" /> },
    MEDIUM: { variant: 'default', icon: <ShieldQuestion className="w-4 h-4" /> },
    LOW: { variant: 'secondary', icon: <ShieldCheck className="w-4 h-4" /> }
};

export function PatientRiskStratification() {
  return (
    <DocSection title="Patient Disease Risk Stratification" icon={<ShieldAlert className="w-6 h-6" />} id="patient-risk">
      <p>
        Based on the patient's medical history and real-time vital sign analysis, AI models assign risk levels to known conditions and newly detected patterns. This stratification helps prioritize clinical resources and tailor monitoring strategies.
      </p>

      <Card className="mt-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Condition / Disease</TableHead>
              <TableHead>Assigned Risk</TableHead>
              <TableHead className="w-[50%]">Clinical Justification</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patientConditions.map((condition) => (
              <TableRow key={condition.disease}>
                <TableCell className="font-medium">{condition.disease}</TableCell>
                <TableCell>
                  <Badge variant={riskConfig[condition.risk]?.variant} className="gap-1.5 w-fit">
                    {riskConfig[condition.risk]?.icon}
                    <span className='leading-none'>{condition.risk}</span>
                  </Badge>
                </TableCell>
                <TableCell>{condition.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </DocSection>
  );
}
