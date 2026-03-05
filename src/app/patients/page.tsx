import { PatientRiskStratification } from '@/components/docs/patient-risk-stratification';
import { LivePatientVitals } from '@/components/docs/live-patient-vitals';

export default function PatientsPage() {
  return (
    <>
      <LivePatientVitals />
      <PatientRiskStratification />
    </>
  );
}
