import { AnomalyScoring } from '@/components/docs/anomaly-scoring';
import { PatientRiskStratification } from '@/components/docs/patient-risk-stratification';

export default function PatientsPage() {
  return (
    <>
      <AnomalyScoring />
      <PatientRiskStratification />
    </>
  );
}
