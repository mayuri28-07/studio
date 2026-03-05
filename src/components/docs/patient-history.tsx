import { History } from 'lucide-react';
import { DocSection } from './doc-section';
import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const historyData = [
    {
        patientId: 3,
        patientName: 'Robert Brown',
        timestamp: '2024-07-28 14:30:15',
        eventType: 'Anomaly Detected',
        details: 'Heart rate spiked to 110 BPM.',
        severity: 'CRITICAL',
    },
    {
        patientId: 2,
        patientName: 'Jane Smith',
        timestamp: '2024-07-28 11:15:45',
        eventType: 'Alert Triggered',
        details: 'SpO2 dropped to 92%.',
        severity: 'WARNING',
    },
    {
        patientId: 9,
        patientName: 'James Taylor',
        timestamp: '2024-07-28 10:05:00',
        eventType: 'Alert Triggered',
        details: 'BP dropped to 90/50 mmHg.',
        severity: 'CRITICAL',
    },
    {
        patientId: 7,
        patientName: 'David Wilson',
        timestamp: '2024-07-28 09:12:30',
        eventType: 'Anomaly Detected',
        details: 'Atrial Fibrillation episode detected.',
        severity: 'HIGH',
    },
    {
        patientId: 11,
        patientName: 'Charles Anderson',
        timestamp: '2024-07-28 08:45:10',
        eventType: 'Vitals Logged',
        details: 'SpO2 stable at 94%.',
        severity: 'NORMAL',
    },
    {
        patientId: 3,
        patientName: 'Robert Brown',
        timestamp: '2024-07-27 22:05:00',
        eventType: 'Anomaly Detected',
        details: 'Irregular heartbeat pattern observed.',
        severity: 'HIGH',
    },
    {
        patientId: 6,
        patientName: 'Sarah Johnson',
        timestamp: '2024-07-27 20:30:00',
        eventType: 'Anomaly Detected',
        details: 'Brief period of tachycardia observed.',
        severity: 'WARNING',
    },
    {
        patientId: 1,
        patientName: 'John Doe',
        timestamp: '2024-07-27 18:00:00',
        eventType: 'Vitals Logged',
        details: 'Routine check, all vitals normal.',
        severity: 'NORMAL',
    },
    {
        patientId: 13,
        patientName: 'Thomas Clark',
        timestamp: '2024-07-27 16:20:00',
        eventType: 'Vitals Logged',
        details: 'Routine check, vitals stable.',
        severity: 'NORMAL',
    },
    {
        patientId: 8,
        patientName: 'Laura Martinez',
        timestamp: '2024-07-27 15:00:00',
        eventType: 'Alert Triggered',
        details: 'Respiratory rate dropped below 10 breaths/min.',
        severity: 'HIGH',
    },
];

const severityVariantMap: { [key: string]: 'destructive' | 'default' | 'secondary' } = {
    CRITICAL: 'destructive',
    HIGH: 'destructive',
    WARNING: 'default',
    NORMAL: 'secondary',
};

export function PatientHistory() {
  return (
    <DocSection title="Patient History Log" icon={<History className="w-6 h-6" />} id="patient-history">
      <p>
        This section provides a comprehensive log of all significant events for each patient, including detected anomalies, triggered alerts, and routine vital sign logs. Reviewing historical data is crucial for understanding patient trends and making informed clinical decisions.
      </p>
      <Card className="mt-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient</TableHead>
              <TableHead>Timestamp</TableHead>
              <TableHead>Event Type</TableHead>
              <TableHead className="w-[40%]">Details</TableHead>
              <TableHead className="text-right">Severity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {historyData.map((event, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{event.patientName} (ID: {event.patientId})</TableCell>
                <TableCell>{event.timestamp}</TableCell>
                <TableCell>{event.eventType}</TableCell>
                <TableCell>{event.details}</TableCell>
                <TableCell className="text-right">
                  <Badge variant={severityVariantMap[event.severity] || 'secondary'}>
                    {event.severity}
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
