import { ProjectOverview } from '@/components/docs/project-overview';
import { SystemArchitecture } from '@/components/docs/system-architecture';
import { SetupStatus } from '@/components/docs/setup-status';
import { PatientReviews } from '@/components/docs/patient-reviews';
import { DoctorStaff } from '@/components/docs/doctor-staff';

export default function Home() {
  return (
    <>
      <ProjectOverview />
      <SystemArchitecture />
      <SetupStatus />
      <PatientReviews />
      <DoctorStaff />
    </>
  );
}
