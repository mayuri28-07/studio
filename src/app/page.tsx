import { Header } from '@/components/layout/header';
import { ProjectOverview } from '@/components/docs/project-overview';
import { SystemArchitecture } from '@/components/docs/system-architecture';
import { DataLoadingValidation } from '@/components/docs/data-loading-validation';
import { ExploratoryDataAnalysis } from '@/components/docs/exploratory-data-analysis';
import { SetupStatus } from '@/components/docs/setup-status';

export default function Home() {
  return (
    <div className="bg-background min-h-screen font-body text-foreground antialiased">
      <Header />
      <main className="max-w-5xl mx-auto p-4 sm:p-8 md:p-12">
        <ProjectOverview />
        <SystemArchitecture />
        <DataLoadingValidation />
        <ExploratoryDataAnalysis />
        <SetupStatus />
      </main>
      <footer className="text-center p-6 text-muted-foreground text-sm border-t">
        <p>HealthSense AI &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
