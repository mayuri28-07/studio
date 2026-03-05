import { Zap } from 'lucide-react';
import { DocSection } from './doc-section';

export function AnomalyDetectionModel() {
  return (
    <DocSection title="Anomaly Detection Model" icon={<Zap className="w-6 h-6" />} id="anomaly-model">
      <p>
        A sliding window mechanism is implemented to capture temporal dependencies in patient vitals. This enables the detection of sustained anomalies instead of reacting to single, noisy readings.
      </p>
      <p>
        By analyzing sequences of data points over time, the model can differentiate between momentary fluctuations and genuine, persistent deviations that may indicate a developing health issue. This approach significantly improves the reliability of the anomaly detection system.
      </p>
    </DocSection>
  );
}
