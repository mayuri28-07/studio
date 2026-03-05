'use server';
import { config } from 'dotenv';
config();

import '@/ai/flows/ai-generated-anomaly-explanation-flow.ts';
import '@/ai/flows/ai-generated-daily-anomaly-summary-flow.ts';
