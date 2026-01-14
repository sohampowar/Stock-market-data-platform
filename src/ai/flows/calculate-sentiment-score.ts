'use server';

/**
 * @fileOverview This file defines a Genkit flow to calculate the sentiment score for a given stock
 * based on news headlines and articles related to the company.
 *
 * calculateSentimentScore - Calculates the sentiment score for a given stock.
 * CalculateSentimentScoreInput - The input type for the calculateSentimentScore function.
 * CalculateSentimentScoreOutput - The return type for the calculateSentimentScore function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CalculateSentimentScoreInputSchema = z.object({
  ticker: z.string().describe('The ticker symbol of the stock.'),
  newsHeadlines: z
    .array(z.string())
    .describe('An array of news headlines related to the stock.'),
});

export type CalculateSentimentScoreInput = z.infer<
  typeof CalculateSentimentScoreInputSchema
>;

const CalculateSentimentScoreOutputSchema = z.object({
  sentimentScore: z
    .number()
    .describe(
      'A numerical score representing the sentiment towards the stock. ' +
        'Positive values indicate positive sentiment, negative values indicate negative sentiment, ' +
        'and zero indicates neutral sentiment. The score ranges from -1 to 1.'
    ),
  analysis: z.string().describe('A brief analysis of the sentiment score.'),
});

export type CalculateSentimentScoreOutput = z.infer<
  typeof CalculateSentimentScoreOutputSchema
>;

export async function calculateSentimentScore(
  input: CalculateSentimentScoreInput
): Promise<CalculateSentimentScoreOutput> {
  return calculateSentimentScoreFlow(input);
}

const calculateSentimentScorePrompt = ai.definePrompt({
  name: 'calculateSentimentScorePrompt',
  input: {schema: CalculateSentimentScoreInputSchema},
  output: {schema: CalculateSentimentScoreOutputSchema},
  prompt: `You are an AI assistant that analyzes the sentiment of news headlines related to a specific stock.
  Your goal is to provide a sentiment score ranging from -1 to 1, where -1 is extremely negative, 0 is neutral, and 1 is extremely positive.
  You should also provide a brief analysis of the sentiment based on the headlines.

  Ticker Symbol: {{{ticker}}}
  News Headlines:{{#each newsHeadlines}} - {{{this}}}{{/each}}

  Based on the provided news headlines, determine the sentiment score for the stock and provide a brief analysis.
  Ensure that the sentimentScore field represents the calculated sentiment and that the analysis field contains your reasoning.
  Limit the analysis to 50 words.

  Output in JSON format:
  {{output schema=CalculateSentimentScoreOutputSchema}}
  `,
});

const calculateSentimentScoreFlow = ai.defineFlow(
  {
    name: 'calculateSentimentScoreFlow',
    inputSchema: CalculateSentimentScoreInputSchema,
    outputSchema: CalculateSentimentScoreOutputSchema,
  },
  async input => {
    const {output} = await calculateSentimentScorePrompt(input);
    return output!;
  }
);
