'use client';

import { useState, useEffect } from 'react';
import { DocSection } from './doc-section';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Activity, ShieldAlert, ShieldCheck, ShieldQuestion, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

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
  { id: 6, name: 'Sarah Johnson', heartRate: 88, bpSystolic: 128, bpDiastolic: 84, spO2: 97, status: 'NORMAL' },
  { id: 7, name: 'David Wilson', heartRate: 105, bpSystolic: 145, bpDiastolic: 92, spO2: 94, status: 'CRITICAL' },
  { id: 8, name: 'Laura Martinez', heartRate: 92, bpSystolic: 132, bpDiastolic: 86, spO2: 95, status: 'WARNING' },
  { id: 9, name: 'James Taylor', heartRate: 55, bpSystolic: 105, bpDiastolic: 65, spO2: 96, status: 'WARNING' },
  { id: 10, name: 'Patricia Garcia', heartRate: 78, bpSystolic: 122, bpDiastolic: 78, spO2: 98, status: 'NORMAL' },
  { id: 11, name: 'Charles Anderson', heartRate: 115, bpSystolic: 155, bpDiastolic: 98, spO2: 91, status: 'CRITICAL' },
  { id: 12, name: 'Linda Hernandez', heartRate: 85, bpSystolic: 128, bpDiastolic: 82, spO2: 97, status: 'NORMAL' },
  { id: 13, name: 'Thomas Clark', heartRate: 60, bpSystolic: 110, bpDiastolic: 70, spO2: 99, status: 'NORMAL' },
  { id: 14, name: 'Barbara Lewis', heartRate: 100, bpSystolic: 140, bpDiastolic: 90, spO2: 93, status: 'CRITICAL' },
  { id: 15, name: 'Daniel Lee', heartRate: 98, bpSystolic: 138, bpDiastolic: 89, spO2: 95, status: 'WARNING' },
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
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredVitals = vitals.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.id.toString().includes(searchTerm)
  );

  return (
    <DocSection title="Live Patient Vitals Simulation" icon={<Activity className="w-6 h-6" />} id="live-vitals">
      <p>
        This table simulates a real-time feed of patient vital signs. Data is continuously updated to reflect the dynamic nature of patient monitoring in a clinical setting. Status indicators automatically flag patients requiring attention.
      </p>
      <div className="relative my-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search by patient name or ID..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Card className="mt-4">
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
            {filteredVitals.map(patient => (
              <TableRow key={patient.id}>
                <TableCell className="font-medium">{patient.name} (ID: {patient.id})</TableCell>
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
