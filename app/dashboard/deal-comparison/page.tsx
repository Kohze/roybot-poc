'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { CircleDot, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

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

export default function DealComparisonPage() {
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

  useEffect(() => {
    try {
      const storedAnalysis = localStorage.getItem('analysisResults');
      console.log('Loading analysis results for comparison:', storedAnalysis);
      
      if (storedAnalysis) {
        const parsedAnalysis = JSON.parse(storedAnalysis);
        console.log('Parsed analysis for comparison:', parsedAnalysis);
        setAnalysis(parsedAnalysis);
      } else {
        toast.error('No analysis results found. Please run an analysis first.');
      }
    } catch (error) {
      console.error('Error loading analysis results:', error);
      toast.error('Failed to load analysis results');
    }
  }, []);

  if (!analysis) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Please run an analysis to view comparison results
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Deal Summary</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Compare key metrics and valuation analysis
        </p>
      </div>

      <Tabs defaultValue="valuation" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="valuation" className="text-base px-6">Valuation</TabsTrigger>
          <TabsTrigger value="summary" className="text-base px-6">Summary</TabsTrigger>
          <TabsTrigger value="metrics" className="text-base px-6">Metrics</TabsTrigger>
        </TabsList>

        <TabsContent value="valuation">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Company Valuation</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Comparison of valuation metrics and deal structure:
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Company Valuation:</div>
                  <div className="text-3xl font-bold">{analysis.valuationDetails.companyValuation}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Seller's Desired Value:</div>
                  <div className="text-3xl font-bold">{analysis.valuationDetails.sellerDesiredValue}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Your Initial Offer:</div>
                  <div className="text-3xl font-bold">{analysis.valuationDetails.initialOffer}</div>
                </div>
              </div>

              <div className="bg-blue-600 rounded-lg p-6 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <CircleDot className="h-8 w-8" />
                  <div>
                    <div className="text-sm opacity-90">Valuation Method:</div>
                    <div className="text-xl font-semibold">{analysis.valuationDetails.method.name}</div>
                  </div>
                </div>
                <p className="text-sm opacity-90">
                  {analysis.valuationDetails.method.description}
                </p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="summary">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Executive Summary</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Key financial metrics and performance indicators:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {analysis.executiveSummary.metrics.map((metric) => (
                <div key={metric.label} className="space-y-2">
                  <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}:</div>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="text-sm text-gray-500">{metric.description}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-600 rounded-lg p-6 text-white">
              <div className="flex items-center gap-4">
                <CircleDot className="h-8 w-8" />
                <div>
                  <div className="text-sm opacity-90">EBITDA:</div>
                  <div className="text-3xl font-bold">{analysis.executiveSummary.ebitda}</div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="metrics">
          <Card className="p-6">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-6">
              <p className="text-sm text-green-800 dark:text-green-200">
                Period-over-period performance metrics and growth indicators
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {analysis.periodMetrics.metrics.map((metric) => (
                <div key={metric.label} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {metric.label}:
                  </div>
                  <div className="text-xl font-bold">{metric.value}</div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mt-6">
              <p className="text-sm text-green-800 dark:text-green-200">
                {analysis.periodMetrics.growthNote}
              </p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end space-x-4">
        <Button variant="outline">Previous Deal</Button>
        <Button>
          Generate Report
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}