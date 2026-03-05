import { ShieldAlert, ShieldCheck, ShieldQuestion, Users } from 'lucide-react';
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
    { id: 1, name: 'John Doe', age: 68, condition: 'Hypertension', risk: 'MEDIUM', justification: 'Sustained high blood pressure requires regular monitoring to prevent cardiovascular complications.' },
    { id: 2, name: 'Jane Smith', age: 55, condition: 'Type 2 Diabetes', risk: 'HIGH', justification: 'High blood sugar levels pose a significant risk for various systemic health issues if not managed.' },
    { id: 3, name: 'Robert Brown', age: 72, condition: 'Arrhythmia', risk: 'HIGH', justification: 'Irregular heartbeat detected, which could lead to serious cardiac events. Immediate follow-up is advised.' },
    { id: 4, name: 'Emily White', age: 61, condition: 'Sleep Apnea', risk: 'MEDIUM', justification: 'Breathing interruptions during sleep can affect oxygen levels and cardiovascular health.' },
    { id: 5, name: 'Michael Green', age: 75, condition: 'Chronic Kidney Disease (CKD)', risk: 'LOW', justification: 'Early stage detection. Monitored to prevent progression.' },
    { id: 6, name: 'Sarah Johnson', age: 65, condition: 'Coronary Artery Disease', risk: 'HIGH', justification: 'Narrowing of coronary arteries, increasing risk of heart attack. Requires close management.' },
    { id: 7, name: 'David Wilson', age: 70, condition: 'Atrial Fibrillation', risk: 'HIGH', justification: 'Irregular and often rapid heart rate that can increase risk of stroke and heart failure.' },
    { id: 8, name: 'Laura Martinez', age: 58, condition: 'Asthma', risk: 'MEDIUM', justification: 'Chronic lung disease that inflames and narrows the airways. Monitored for exacerbations.' },
    { id: 9, name: 'James Taylor', age: 80, condition: 'Heart Failure', risk: 'CRITICAL', justification: 'The heart isn\'t pumping as well as it should be. Requires intensive management and monitoring.' },
    { id: 10, name: 'Patricia Garcia', age: 63, condition: 'Hyperlipidemia', risk: 'MEDIUM', justification: 'High levels of lipids (fats) in the blood, a risk factor for atherosclerosis and heart disease.' },
    { id: 11, name: 'Charles Anderson', age: 77, condition: 'COPD', risk: 'HIGH', justification: 'Chronic obstructive pulmonary disease causing airflow blockage and breathing-related problems.' },
    { id: 12, name: 'Linda Hernandez', age: 59, condition: 'Obesity', risk: 'MEDIUM', justification: 'Associated with increased risk for diabetes, hypertension, and cardiovascular diseases.' },
    { id: 13, name: 'Thomas Clark', age: 69, condition: 'Peripheral Artery Disease', risk: 'MEDIUM', justification: 'Narrowed blood vessels reduce blood flow to the limbs, indicating widespread atherosclerosis.' },
    { id: 14, name: 'Barbara Lewis', age: 74, condition: 'Osteoporosis', risk: 'LOW', justification: 'Bones become weak and brittle. Monitored for fracture risk.' },
    { id: 15, name: 'Daniel Lee', age: 66, condition: 'Gout', risk: 'LOW', justification: 'A form of inflammatory arthritis. Managed with medication and diet to prevent flare-ups.' },
];


const riskConfig: { [key: string]: { variant: 'destructive' | 'default' | 'secondary', icon: React.ReactNode } } = {
    CRITICAL: { variant: 'destructive', icon: <ShieldAlert className="w-4 h-4" /> },
    HIGH: { variant: 'destructive', icon: <ShieldAlert className="w-4 h-4" /> },
    MEDIUM: { variant: 'default', icon: <ShieldQuestion className="w-4 h-4" /> },
    LOW: { variant: 'secondary', icon: <ShieldCheck className="w-4 h-4" /> }
};

export function PatientRiskStratification() {
  return (
    <DocSection title="Patient Condition & Risk Overview" icon={<Users className="w-6 h-6" />} id="patient-risk">
      <p>
        Based on each patient's medical history and real-time vital sign analysis, AI models assign risk levels to known conditions and newly detected patterns. This stratification helps prioritize clinical resources and tailor monitoring strategies for each individual.
      </p>

      <Card className="mt-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient ID</TableHead>
              <TableHead>Patient</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Condition</TableHead>
              <TableHead>Assigned Risk</TableHead>
              <TableHead className="w-[40%]">Clinical Justification</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patientConditions.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell className="font-medium">{patient.id}</TableCell>
                <TableCell className="font-medium">{patient.name}</TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>{patient.condition}</TableCell>
                <TableCell>
                  <Badge variant={riskConfig[patient.risk]?.variant} className="gap-1.5 w-fit">
                    {riskConfig[patient.risk]?.icon}
                    <span className='leading-none'>{patient.risk}</span>
                  </Badge>
                </TableCell>
                <TableCell>{patient.justification}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </DocSection>
  );
}
