'use server';
/**
 * @fileOverview This file implements a Genkit flow to generate concise, AI-driven explanations for detected healthcare anomalies.
 * The explanation includes potential clinical implications and suggested immediate considerations for healthcare professionals.
 *
 * - generateAnomalyExplanation - A function that handles the generation of anomaly explanations.
 * - AnomalyExplanationInput - The input type for the generateAnomalyExplanation function.
 * - AnomalyExplanationOutput - The return type for the generateAnomalyExplanation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnomalyExplanationInputSchema = z.object({
  patientId: z.string().describe('The unique identifier for the patient.'),
  timestamp: z.string().describe('The timestamp when the anomaly was detected (ISO 8601 format).'),
  vitalSigns: z.object({
    heartRate: z.number().optional().describe('Patient\'s heart rate in beats per minute (BPM).'),
    bloodPressureSystolic: z.number().optional().describe('Patient\'s systolic blood pressure in mmHg.'),
    bloodPressureDiastolic: z.number().optional().describe('Patient\'s diastolic blood pressure in mmHg.'),
    spO2: z.number().optional().describe('Patient\'s blood oxygen saturation level (SpO2) as a percentage.'),
  }).describe('The vital signs data at the time of anomaly.'),
  anomalyScore: z.number().describe('A numerical score indicating the severity or certainty of the anomaly.'),
  severity: z.enum(['CRITICAL', 'MODERATE', 'LOW']).describe('The classified severity level of the anomaly.'),
  anomalyType: z.string().describe('A brief description of the type of anomaly detected (e.g., "elevated heart rate", "low SpO2").'),
});
export type AnomalyExplanationInput = z.infer<typeof AnomalyExplanationInputSchema>;

const AnomalyExplanationOutputSchema = z.string().describe('A concise AI-generated explanation of the anomaly, including clinical implications and immediate considerations.');
export type AnomalyExplanationOutput = z.infer<typeof AnomalyExplanationOutputSchema>;

export async function generateAnomalyExplanation(input: AnomalyExplanationInput): Promise<AnomalyExplanationOutput> {
  return anomalyExplanationFlow(input);
}

const anomalyExplanationPrompt = ai.definePrompt({
  name: 'anomalyExplanationPrompt',
  input: {schema: AnomalyExplanationInputSchema},
  output: {schema: AnomalyExplanationOutputSchema},
  prompt: `You are an expert AI assistant specializing in healthcare anomaly detection and clinical decision support. Your task is to provide a concise and actionable explanation for a detected patient anomaly.

Based on the following patient data and detected anomaly, generate a brief explanation that includes:
1.  A clear description of the anomaly.
2.  Potential clinical implications.
3.  Suggested immediate considerations for a healthcare professional.

Patient ID: {{{patientId}}}
Timestamp: {{{timestamp}}}
Detected Anomaly: {{{anomalyType}}}
Severity: {{{severity}}}
Anomaly Score: {{{anomalyScore}}}
Vital Signs:
  {{#if vitalSigns.heartRate}}Heart Rate: {{{vitalSigns.heartRate}}} BPM
  {{/if}}{{#if vitalSigns.bloodPressureSystolic}}Blood Pressure: {{{vitalSigns.bloodPressureSystolic}}}/{{{vitalSigns.bloodPressureDiastolic}}} mmHg
  {{/if}}{{#if vitalSigns.spO2}}SpO2: {{{vitalSigns.spO2}}}%
  {{/if}}

Explanation:`,
});

const anomalyExplanationFlow = ai.defineFlow(
  {
    name: 'anomalyExplanationFlow',
    inputSchema: AnomalyExplanationInputSchema,
    outputSchema: AnomalyExplanationOutputSchema,
  },
  async input => {
    const {output} = await anomalyExplanationPrompt(input);
    if (!output) {
      throw new Error('Failed to generate anomaly explanation.');
    }
    return output;
  }
);
