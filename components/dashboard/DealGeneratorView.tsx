'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { LoadingOverlay } from '@/components/LoadingOverlay';
import OpenAI from 'openai';

const dealStrategies = [
  { id: 'share-purchase', label: 'Share Purchase' },
  { id: 'private-placement', label: 'Private Placement' },
  { id: 'debt-financing', label: 'Debt Financing' },
  { id: 'merger', label: 'Merger' },
  { id: 'cash-extraction', label: 'Cash Extraction' },
  { id: 'creditors', label: 'Creditors' },
  { id: 'deferred-strategy', label: 'Deferred Strategy' },
  { id: 'earn-out-strategy', label: 'Earn-Out Strategy' },
  { id: 'asset-purchase', label: 'Asset Purchase' },
  { id: 'buying-company', label: 'Buying Company' },
  { id: 'bibo', label: 'BIBO (Buy In Buy Out)' },
  { id: 'collaborative-growth', label: 'Collaborative Growth Strategy' },
];

interface AnalysisResult {
  valuationDetails: {
    companyValuation: string;
    sellerDesiredValue: string;
    initialOffer: string;
    method: {
      name: string;
      description: string;
    };
  };
  executiveSummary: {
    metrics: Array<{
      label: string;
      value: string;
      description: string;
    }>;
    ebitda: string;
  };
  periodMetrics: {
    metrics: Array<{
      label: string;
      value: string;
    }>;
    growthNote: string;
  };
}

export function DealGeneratorView() {
  const [selectedStrategies, setSelectedStrategies] = useState<string[]>([]);
  const [generatedProposal, setGeneratedProposal] = useState<string>('');
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    try {
      const storedAnalysis = localStorage.getItem('analysisResults');
      console.log('Loading analysis results for deal generator:', storedAnalysis);
      
      if (storedAnalysis) {
        const parsedAnalysis = JSON.parse(storedAnalysis);
        console.log('Parsed analysis for deal generator:', parsedAnalysis);
        setAnalysis(parsedAnalysis);
      } else {
        toast.error('No analysis results found. Please run an analysis first.');
      }
    } catch (error) {
      console.error('Error loading analysis results:', error);
      toast.error('Failed to load analysis results');
    }
  }, []);

  const handleStrategyChange = (strategyId: string) => {
    setSelectedStrategies(prev =>
      prev.includes(strategyId)
        ? prev.filter(id => id !== strategyId)
        : [...prev, strategyId]
    );
  };

  const handleGenerateProposal = async () => {
    if (!analysis) {
      toast.error('Please run a financial analysis first');
      return;
    }

    if (selectedStrategies.length === 0) {
      toast.error('Please select at least one strategy');
      return;
    }

    if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
      toast.error('OpenAI API key is not configured');
      return;
    }

    setIsGenerating(true);
    const toastId = toast.loading('Generating deal proposal...');

    try {
      const openai = new OpenAI({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true
      });

      const selectedStrategyLabels = selectedStrategies
        .map(id => dealStrategies.find(s => s.id === id)?.label)
        .filter(Boolean);

      const completion = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          {
            role: "system",
            content: "You are an expert M&A advisor specializing in deal structuring and strategy. Generate a detailed, professional deal proposal based on the financial analysis and selected strategies."
          },
          {
            role: "user",
            content: `Generate a comprehensive deal proposal incorporating the following strategies: ${selectedStrategyLabels.join(', ')}

Financial Analysis Results:
- Company Valuation: ${analysis.valuationDetails.companyValuation}
- Seller's Desired Value: ${analysis.valuationDetails.sellerDesiredValue}
- Initial Offer: ${analysis.valuationDetails.initialOffer}
- EBITDA: ${analysis.executiveSummary.ebitda}

Key Metrics:
${analysis.executiveSummary.metrics.map(m => `- ${m.label}: ${m.value}`).join('\n')}

Growth Metrics:
${analysis.periodMetrics.metrics.map(m => `- ${m.label}: ${m.value}`).join('\n')}

Create a detailed proposal that:
1. Explains how each selected strategy will be implemented
2. Provides specific deal structure recommendations
3. Outlines potential risks and mitigation strategies
4. Includes specific payment terms and conditions
5. Suggests negotiation approaches

Format the response in Markdown with clear sections and bullet points.`
          }
        ],
        temperature: 0.7,
      });

      const proposal = completion.choices[0]?.message?.content;
      if (proposal) {
        setGeneratedProposal(proposal);
        toast.success('Proposal generated successfully', { id: toastId });
      } else {
        throw new Error('No proposal generated');
      }
    } catch (error) {
      console.error('Error generating proposal:', error);
      toast.error('Failed to generate proposal', { id: toastId });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleClearSelection = () => {
    setSelectedStrategies([]);
    setGeneratedProposal('');
  };

  if (!analysis) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Please run an analysis to generate deal strategies
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Deal Strategy Generator</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Select strategies to generate a customized deal proposal
        </p>
      </div>

      <Card className="p-6 relative bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {dealStrategies.map((strategy) => (
            <div
              key={strategy.id}
              className="flex items-center space-x-3 cursor-pointer group select-none"
              onClick={() => handleStrategyChange(strategy.id)}
            >
              <div
                className={cn(
                  "w-5 h-5 border rounded-[4px] flex items-center justify-center transition-colors",
                  selectedStrategies.includes(strategy.id)
                    ? "border-blue-600 bg-blue-600"
                    : "border-gray-300 dark:border-gray-600 group-hover:border-blue-500",
                )}
              >
                {selectedStrategies.includes(strategy.id) && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                )}
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-200">
                {strategy.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex space-x-4">
          <Button 
            onClick={handleGenerateProposal}
            className="bg-blue-600 hover:bg-blue-700"
            disabled={isGenerating}
          >
            Generate Proposal
          </Button>
          <Button 
            variant="outline" 
            onClick={handleClearSelection}
            className="bg-white hover:bg-gray-50 dark:bg-transparent"
            disabled={isGenerating}
          >
            Clear Selection
          </Button>
        </div>
      </Card>

      {generatedProposal && (
        <Card className="p-6 relative bg-white dark:bg-gray-800 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Generated Proposal</h2>
          <div className="prose dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: generatedProposal.replace(/\n/g, '<br/>') }} />
          </div>
        </Card>
      )}

      {isGenerating && <LoadingOverlay />}
    </div>
  );
}