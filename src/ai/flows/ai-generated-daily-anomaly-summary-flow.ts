'use server';
/**
 * @fileOverview Generates a daily AI-powered summary report of patient anomalies.
 *
 * - aiGeneratedDailyAnomalySummary - A function that generates a daily anomaly summary report.
 * - AiGeneratedDailyAnomalySummaryInput - The input type for the aiGeneratedDailyAnomalySummary function.
 * - AiGeneratedDailyAnomalySummaryOutput - The return type for the aiGeneratedDailyAnomalySummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnomalyRecordSchema = z.object({
  patientId: z.string().describe('The ID of the patient.'),
  timestamp: z.string().describe('The ISO 8601 timestamp of when the anomaly occurred.'),
  vitalSign: z.string().describe('The vital sign that was anomalous (e.g., "heart rate", "blood pressure", "SpO2").'),
  anomalyType: z.string().describe('A brief description of the anomaly type (e.g., "tachycardia", "hypotension", "desaturation").'),
  severity: z.enum(['low', 'medium', 'high', 'critical']).describe('The severity level of the anomaly.'),
  anomalyScore: z.number().describe('A numerical score indicating the strength or significance of the anomaly.'),
});

const AiGeneratedDailyAnomalySummaryInputSchema = z.object({
  reportDate: z.string().describe('The date for which the anomaly summary is being generated (YYYY-MM-DD format).'),
  anomalyRecords: z.array(AnomalyRecordSchema).describe('A list of all detected anomaly records for the reporting period.'),
});
export type AiGeneratedDailyAnomalySummaryInput = z.infer<typeof AiGeneratedDailyAnomalySummaryInputSchema>;

const AnomalyTrendSchema = z.object({
  trendDescription: z.string().describe('A description of a significant anomaly trend observed.'),
  impact: z.string().describe('The potential impact or implication of this trend.'),
});

const FrequentAnomalyTypeSchema = z.object({
  type: z.string().describe('The type of anomaly (e.g., "tachycardia", "hypotension").'),
  count: z.number().describe('The number of occurrences for this anomaly type.'),
  severityDistribution: z.record(z.enum(['low', 'medium', 'high', 'critical']), z.number()).describe('Distribution of severity levels for this anomaly type.'),
});

const PatientRecurringIssueSchema = z.object({
  patientId: z.string().describe('The ID of the patient with recurring issues.'),
  issueDescription: z.string().describe('A brief description of the recurring issues for this patient.'),
  lastAnomalyTimestamp: z.string().describe('The ISO 8601 timestamp of the most recent anomaly for this patient.'),
});

const AiGeneratedDailyAnomalySummaryOutputSchema = z.object({
  summaryText: z.string().describe('A comprehensive overview of the daily anomaly report, highlighting key findings.'),
  criticalTrends: z.array(AnomalyTrendSchema).describe('A list of critical anomaly trends identified in the data.'),
  frequentAnomalyTypes: z.array(FrequentAnomalyTypeSchema).describe('A list of the most frequently occurring anomaly types.'),
  patientsWithRecurringIssues: z.array(PatientRecurringIssueSchema).describe('A list of patients who show recurring anomaly issues.'),
});
export type AiGeneratedDailyAnomalySummaryOutput = z.infer<typeof AiGeneratedDailyAnomalySummaryOutputSchema>;

export async function aiGeneratedDailyAnomalySummary(
  input: AiGeneratedDailyAnomalySummaryInput
): Promise<AiGeneratedDailyAnomalySummaryOutput> {
  return aiGeneratedDailyAnomalySummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiGeneratedDailyAnomalySummaryPrompt',
  input: {schema: AiGeneratedDailyAnomalySummaryInputSchema},
  output: {schema: AiGeneratedDailyAnomalySummaryOutputSchema},
  prompt: `You are an AI assistant tasked with generating a daily summary report for a healthcare anomaly detection platform.
Your goal is to provide a concise yet comprehensive overview for healthcare supervisors, highlighting critical trends, frequently occurring issues, and patients requiring closer attention.

The report date is: {{{reportDate}}}

Here is the raw anomaly data for the reporting period:
{{#if anomalyRecords}}
{{#each anomalyRecords}}
- Patient ID: {{{patientId}}}, Timestamp: {{{timestamp}}}, Vital Sign: {{{vitalSign}}}, Anomaly Type: {{{anomalyType}}}, Severity: {{{severity}}}, Anomaly Score: {{{anomalyScore}}}
{{/each}}
{{else}}
No anomaly records were detected for this period.
{{/if}}

Based on the provided anomaly records, generate a structured daily summary report with the following sections:

1.  **Summary Text**: A general overview of the daily anomaly report, highlighting key findings and overall system performance in detecting anomalies.
2.  **Critical Trends**: Identify and describe any critical or significant anomaly trends. For each trend, provide a description and its potential impact.
3.  **Frequent Anomaly Types**: List the most frequently occurring anomaly types. For each type, include its name, total count, and the distribution of severity levels.
4.  **Patients with Recurring Issues**: Identify patients who exhibit recurring anomaly issues. For each patient, provide their ID, a brief description of their recurring issues, and the timestamp of their most recent anomaly.

Ensure the output is well-formatted and easy to understand for a healthcare supervisor.`,
});

const aiGeneratedDailyAnomalySummaryFlow = ai.defineFlow(
  {
    name: 'aiGeneratedDailyAnomalySummaryFlow',
    inputSchema: AiGeneratedDailyAnomalySummaryInputSchema,
    outputSchema: AiGeneratedDailyAnomalySummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
