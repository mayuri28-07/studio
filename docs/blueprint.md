# **App Name**: HealthSense AI

## Core Features:

- Real-time Data Ingestion: Ingests simulated patient vital signs (heart rate, blood pressure, SpO2) through an Apache Kafka streaming pipeline for real-time processing.
- AI-Powered Anomaly Detection: Leverages Isolation Forest and Autoencoder machine learning models as tools to automatically identify and flag abnormal patient vital signs in real-time.
- Anomaly Record Persistence: Stores detected anomalies, including patient ID, timestamp, severity level, and specific vital sign details, in a PostgreSQL database for historical analysis and review.
- Interactive Monitoring Dashboard: Provides a web-based dashboard for real-time visualization of incoming patient vital signs data and clearly presenting detected anomalies using charts.
- Critical Alert Notification: Triggers automated email alerts for critical anomalies, sending detailed notifications with patient ID, vital signs, anomaly score, and severity level.
- Backend API for Data Access: Offers a Flask-based REST API to securely serve real-time and historical anomaly data to the monitoring dashboard and other authorized services.

## Style Guidelines:

- Primary color: A deep sky blue (#1F7EAD), chosen to convey trust, clarity, and a modern technological aesthetic, prominent in interactive elements and branding.
- Background color: A very light, subtle blue-grey (#F0F3F4), providing a clean, professional, and easily readable canvas for displaying complex data.
- Accent color: A vibrant lime green (#ABC81C), utilized sparingly for critical alerts, important calls to action, and to highlight immediate anomaly detections due to its distinct contrast.
- The primary typeface is 'Inter' (sans-serif), chosen for its modern, neutral, and highly readable qualities, suitable for displaying numerical data, labels, and all textual content on the dashboard and alert interfaces.
- Employ a set of crisp, minimalist line icons that clearly represent medical vital signs, alert statuses, and navigation, ensuring immediate recognition and a streamlined user experience.
- Utilize a modular, responsive grid-based layout for the monitoring dashboard, ensuring efficient use of space, clear visual hierarchy, and optimal readability of real-time data across various screen sizes.
- Implement subtle, smooth transitions for data updates on real-time charts and indicators. Alerts will feature concise, attention-grabbing animations that are distinct but not disruptive.