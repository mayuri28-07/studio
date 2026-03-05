import { Header } from '@/components/layout/header';
import { AnomalyScoring } from '@/components/docs/anomaly-scoring';

export default function PatientDetailsPage() {
  return (
    <div className="bg-background min-h-screen font-body text-foreground antialiased">
      <Header />
      <main className="max-w-5xl mx-auto p-4 sm:p-8 md:p-12">
        <AnomalyScoring />
      </main>
      <footer className="text-center p-6 text-muted-foreground text-sm border-t">
        <p>HealthSense AI &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
