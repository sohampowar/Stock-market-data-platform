'use server';

import { calculateSentimentScore, type CalculateSentimentScoreOutput } from '@/ai/flows/calculate-sentiment-score';

export async function getSentimentAnalysis(headlines: string[], ticker: string): Promise<CalculateSentimentScoreOutput> {
  try {
    const result = await calculateSentimentScore({
      ticker,
      newsHeadlines: headlines,
    });
    return result;
  } catch (error) {
    console.error("Error in getSentimentAnalysis action:", error);
    throw new Error("Failed to get sentiment analysis from the AI model.");
  }
}
