'use client';

import { useState, useEffect } from 'react';
import { DocSection } from './doc-section';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Activity, ShieldAlert, ShieldCheck, ShieldQuestion } from 'lucide-react';

type VitalStatus = 'NORMAL' | 'WARNING' | 'CRITICAL';

type PatientVital = {
  id: number;
  name: string;
  heartRate: number;
  bpSystolic: number;
  bpDiastolic: number;
  spO2: number;
  status: VitalStatus;
};

const initialPatientVitals: PatientVital[] = [
  { id: 1, name: 'John Doe', heartRate: 75, bpSystolic: 120, bpDiastolic: 80, spO2: 98, status: 'NORMAL' },
  { id: 2, name: 'Jane Smith', heartRate: 95, bpSystolic: 135, bpDiastolic: 88, spO2: 96, status: 'WARNING' },
  { id: 3, name: 'Robert Brown', heartRate: 110, bpSystolic: 150, bpDiastolic: 95, spO2: 92, status: 'CRITICAL' },
  { id: 4, name: 'Emily White', heartRate: 80, bpSystolic: 125, bpDiastolic: 82, spO2: 97, status: 'NORMAL' },
  { id: 5, name: 'Michael Green', heartRate: 65, bpSystolic: 115, bpDiastolic: 75, spO2: 99, status: 'NORMAL' },
];

const statusConfig: { [key in VitalStatus]: { variant: 'secondary' | 'default' | 'destructive'; icon: React.ReactNode; label: string } } = {
  NORMAL: { variant: 'secondary', icon: <ShieldCheck className="w-4 h-4" />, label: 'Normal' },
  WARNING: { variant: 'default', icon: <ShieldQuestion className="w-4 h-4" />, label: 'Warning' },
  CRITICAL: { variant: 'destructive', icon: <ShieldAlert className="w-4 h-4" />, label: 'Critical' },
};

// Function to get a random integer between min and max (inclusive)
const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Function to get status based on vitals
const getVitalStatus = (vitals: Omit<PatientVital, 'id' | 'name' | 'status'>): VitalStatus => {
  if (vitals.heartRate > 100 || vitals.heartRate < 60 || vitals.bpSystolic > 140 || vitals.spO2 < 94) {
    return 'CRITICAL';
  }
  if (vitals.heartRate > 90 || vitals.bpSystolic > 130 || vitals.spO2 < 96) {
    return 'WARNING';
  }
  return 'NORMAL';
};

export function LivePatientVitals() {
  const [vitals, setVitals] = useState<PatientVital[]>(initialPatientVitals);

  useEffect(() => {
    const interval = setInterval(() => {
      setVitals(prevVitals =>
        prevVitals.map(patient => {
          const newVitals = {
            heartRate: patient.heartRate + getRandomInt(-2, 2),
            bpSystolic: patient.bpSystolic + getRandomInt(-3, 3),
            bpDiastolic: patient.bpDiastolic + getRandomInt(-2, 2),
            spO2: Math.min(100, Math.max(90, patient.spO2 + getRandomInt(-1, 1))),
          };
          const newStatus = getVitalStatus(newVitals);
          return { ...patient, ...newVitals, status: newStatus };
        })
      );
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <DocSection title="Live Patient Vitals Simulation" icon={<Activity className="w-6 h-6" />} id="live-vitals">
      <p>
        This table simulates a real-time feed of patient vital signs. Data is continuously updated to reflect the dynamic nature of patient monitoring in a clinical setting. Status indicators automatically flag patients requiring attention.
      </p>
      <Card className="mt-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient</TableHead>
              <TableHead>Heart Rate (BPM)</TableHead>
              <TableHead>Blood Pressure (Sys/Dia)</TableHead>
              <TableHead>SpO2 (%)</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vitals.map(patient => (
              <TableRow key={patient.id}>
                <TableCell className="font-medium">{patient.name}</TableCell>
                <TableCell>{patient.heartRate}</TableCell>
                <TableCell>{`${patient.bpSystolic}/${patient.bpDiastolic}`}</TableCell>
                <TableCell>{patient.spO2}</TableCell>
                <TableCell className="text-right">
                  <Badge variant={statusConfig[patient.status].variant} className="gap-1.5 w-fit">
                    {statusConfig[patient.status].icon}
                    <span className="leading-none">{statusConfig[patient.status].label}</span>
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </DocSection>
  );
}
