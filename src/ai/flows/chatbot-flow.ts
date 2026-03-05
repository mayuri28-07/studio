'use server';
/**
 * @fileOverview A simple chatbot flow.
 *
 * - chatWithBot - A function that handles the chatbot conversation.
 * - ChatbotInput - The input type for the chatWithBot function.
 * - ChatbotOutput - The return type for the chatWithBot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatbotInputSchema = z.object({
  message: z.string().describe("The user's message."),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })).describe('The conversation history.'),
});
export type ChatbotInput = z.infer<typeof ChatbotInputSchema>;

const ChatbotOutputSchema = z.string().describe("The chatbot's response.");
export type ChatbotOutput = z.infer<typeof ChatbotOutputSchema>;

export async function chatWithBot(input: ChatbotInput): Promise<ChatbotOutput> {
    return chatbotFlow(input);
}

const prompt = ai.definePrompt({
    name: 'chatbotPrompt',
    input: {schema: ChatbotInputSchema},
    output: {schema: ChatbotOutputSchema},
    prompt: `You are a friendly and helpful medical assistant for the HealthSense AI platform. You are designed to answer all kinds of medical-related questions. Please provide your answers in a clear, point-wise format for easy understanding.

    Here is the conversation history:
    {{#each history}}
    {{role}}: {{{content}}}
    {{/each}}
    user: {{{message}}}
    model:`,
});

const chatbotFlow = ai.defineFlow(
    {
        name: 'chatbotFlow',
        inputSchema: ChatbotInputSchema,
        outputSchema: ChatbotOutputSchema,
    },
    async (input) => {
        const {output} = await prompt(input);
        if (!output) {
            return 'Sorry, I am having trouble responding right now. Please try again later.';
        }
        return output;
    }
);
