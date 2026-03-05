import { Header } from '@/components/layout/header';
import { ProjectOverview } from '@/components/docs/project-overview';
import { SystemArchitecture } from '@/components/docs/system-architecture';
import { Prerequisites } from '@/components/docs/prerequisites';
import { DependencyInstallation } from '@/components/docs/dependency-installation';
import { DevelopmentTools } from '@/components/docs/development-tools';
import { LearningResources } from '@/components/docs/learning-resources';

export default function Home() {
  return (
    <div className="bg-background min-h-screen font-body text-foreground antialiased">
      <Header />
      <main className="max-w-5xl mx-auto p-4 sm:p-8 md:p-12">
        <ProjectOverview />
        <SystemArchitecture />
        <Prerequisites />
        <DependencyInstallation />
        <DevelopmentTools />
        <LearningResources />
      </main>
      <footer className="text-center p-6 text-muted-foreground text-sm border-t">
        <p>HealthSense AI &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
