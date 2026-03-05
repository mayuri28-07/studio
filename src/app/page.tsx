import { ProjectOverview } from '@/components/docs/project-overview';
import { SystemArchitecture } from '@/components/docs/system-architecture';
import { SetupStatus } from '@/components/docs/setup-status';

export default function Home() {
  return (
    <>
      <ProjectOverview />
      <SystemArchitecture />
      <SetupStatus />
    </>
  );
}
