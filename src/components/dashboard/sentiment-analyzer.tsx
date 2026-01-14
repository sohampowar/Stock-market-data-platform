'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { getSentimentAnalysis } from '@/app/actions';
import { Wand2, Loader2, Info } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import type { NewsItem } from '@/lib/types';
import type { CalculateSentimentScoreOutput } from '@/ai/flows/calculate-sentiment-score';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface SentimentAnalyzerProps {
  news: NewsItem[];
  ticker: string;
}

export default function SentimentAnalyzer({ news, ticker }: SentimentAnalyzerProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<CalculateSentimentScoreOutput | null>(null);
  const { toast } = useToast();

  const handleAnalyze = async () => {
    setIsLoading(true);
    setResult(null);
    try {
      const headlines = news.map(item => item.headline);
      const analysisResult = await getSentimentAnalysis(headlines, ticker);
      setResult(analysisResult);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: "Could not get sentiment analysis. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const sentimentValue = result ? (result.sentimentScore + 1) * 50 : 0;
  const sentimentColor =
    result && result.sentimentScore > 0.2
      ? "bg-primary"
      : result && result.sentimentScore < -0.2
      ? "bg-destructive"
      : "bg-yellow-500";


  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Wand2 className="text-primary"/> AI Sentiment Analysis
        </CardTitle>
        <CardDescription>Analyze recent news headlines to gauge market sentiment using GenAI.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold mb-2">Recent Headlines:</h4>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 max-w-prose">
            {news.map((item, index) => <li key={index}>{item.headline}</li>)}
          </ul>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button onClick={handleAnalyze} disabled={isLoading}>
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
              {isLoading ? 'Analyzing...' : 'Analyze Sentiment'}
            </Button>
            {isLoading && <p className="text-sm text-muted-foreground animate-pulse">The AI is thinking...</p>}
        </div>

        {result && (
          <div className="pt-4 space-y-4 animate-in fade-in-50 duration-500">
            <h4 className="font-semibold">Analysis Result:</h4>
            <div>
              <div className="flex justify-between text-xs font-medium mb-1 text-muted-foreground">
                <span>Negative</span>
                <span>Neutral</span>
                <span>Positive</span>
              </div>
              <Progress value={sentimentValue} className="h-3 [&>*]:transition-all [&>*]:duration-500" indicatorClassName={sentimentColor} />
              <p className="text-center text-sm mt-2 text-muted-foreground">Sentiment Score: <span className="font-bold text-foreground">{result.sentimentScore.toFixed(2)}</span></p>
            </div>
            
            <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle className="font-semibold">AI-Generated Analysis</AlertTitle>
                <AlertDescription>
                    {result.analysis}
                </AlertDescription>
            </Alert>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
