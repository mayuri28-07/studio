import { FileText } from 'lucide-react';
import { DocSection } from './doc-section';

export function ProjectOverview() {
  return (
    <DocSection title="Project Overview" icon={<FileText className="w-6 h-6" />} id="overview">
      <p>
        The <strong className="text-foreground">AI-Driven Healthcare Anomaly Detection System</strong>, HealthSense AI, is a platform designed to enhance patient care through real-time monitoring and intelligent analysis of vital signs.
      </p>
      <p>
        Its core purpose is to continuously monitor crucial patient vitals—such as heart rate, blood pressure, and SpO2—and employ sophisticated AI models to detect anomalies as they happen. By identifying these deviations from normal patterns early, the system provides healthcare professionals with timely insights, enabling quicker interventions and potentially preventing critical health events.
      </p>
      <p>
        The platform features a comprehensive dashboard for visualizing patient data and detected anomalies, complemented by an automated alert system that notifies staff of critical situations via email. This combination of real-time data processing, AI-powered detection, and immediate notification makes HealthSense AI a powerful tool in modern patient monitoring.
      </p>
    </DocSection>
  );
}
