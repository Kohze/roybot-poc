'use client';

import OpenAI from 'openai';
import pdfToText from 'react-pdftotext';

interface RawMetrics {
  revenue: number;
  ebitda: number;
  grossProfit: number;
  netProfit: number;
  workingCapital: number;
  totalDebt: number;
  currentRatio: number;
  debtToEquity: number;
  revenueGrowth: number;
  ebitdaMargin: number;
  operatingCashFlow: number;
  returnOnAssets: number;
  returnOnEquity: number;
}

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

const formatCurrency = (value: number): string => {
  return value === -1 ? "N/A" : `£${value.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

const formatPercentage = (value: number): string => {
  return value === -1 ? "N/A" : `${value.toFixed(1)}%`;
};

async function readFileContent(file: File): Promise<string> {
  try {
    if (file.type === 'application/pdf') {
      const text = await pdfToText(file);
      if (!text || text.trim().length === 0) {
        throw new Error('No text content extracted from PDF');
      }
      return text;
    } else {
      // Handle text files and other formats
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = (e) => {
          const content = e.target?.result;
          if (typeof content === 'string') {
            resolve(content);
          } else if (content instanceof ArrayBuffer) {
            const textDecoder = new TextDecoder('utf-8');
            resolve(textDecoder.decode(content));
          } else {
            reject(new Error('Unsupported file content type'));
          }
        };
        
        reader.onerror = (error) => {
          console.error('FileReader error:', error);
          reject(new Error('Failed to read file'));
        };
        
        reader.readAsText(file);
      });
    }
  } catch (error) {
    console.error('Error reading file:', error);
    throw error;
  }
}

function calculateLocalMetrics(rawMetrics: RawMetrics, multiplier: number = 5, desiredValue: number, initialOffer: number): AnalysisResult {
  const valuation = rawMetrics.ebitda === -1 ? -1 : rawMetrics.ebitda * multiplier;

  return {
    valuationDetails: {
      companyValuation: formatCurrency(valuation),
      sellerDesiredValue: formatCurrency(desiredValue),
      initialOffer: formatCurrency(initialOffer),
      method: {
        name: "EBITDA Multiple",
        description: `Valuation based on ${multiplier}x EBITDA multiple, standard for this industry`
      }
    },
    executiveSummary: {
      metrics: [
        {
          label: "Revenue",
          value: formatCurrency(rawMetrics.revenue),
          description: "Total annual revenue"
        },
        {
          label: "EBITDA",
          value: formatCurrency(rawMetrics.ebitda),
          description: "Earnings before interest, taxes, depreciation, and amortization"
        },
        {
          label: "Gross Profit",
          value: formatCurrency(rawMetrics.grossProfit),
          description: "Revenue minus cost of goods sold"
        },
        {
          label: "Net Profit",
          value: formatCurrency(rawMetrics.netProfit),
          description: "Final profit after all expenses and taxes"
        },
        {
          label: "Working Capital",
          value: formatCurrency(rawMetrics.workingCapital),
          description: "Current assets minus current liabilities"
        },
        {
          label: "Total Debt",
          value: formatCurrency(rawMetrics.totalDebt),
          description: "Total outstanding debt"
        },
        {
          label: "Current Ratio",
          value: rawMetrics.currentRatio === -1 ? "N/A" : rawMetrics.currentRatio.toFixed(2),
          description: "Current assets divided by current liabilities"
        },
        {
          label: "Debt-to-Equity",
          value: rawMetrics.debtToEquity === -1 ? "N/A" : rawMetrics.debtToEquity.toFixed(2),
          description: "Total debt divided by shareholders' equity"
        }
      ],
      ebitda: formatCurrency(rawMetrics.ebitda)
    },
    periodMetrics: {
      metrics: [
        {
          label: "Revenue Growth",
          value: formatPercentage(rawMetrics.revenueGrowth)
        },
        {
          label: "EBITDA Margin",
          value: formatPercentage(rawMetrics.ebitdaMargin)
        },
        {
          label: "Operating Cash Flow",
          value: formatCurrency(rawMetrics.operatingCashFlow)
        },
        {
          label: "Return on Assets",
          value: formatPercentage(rawMetrics.returnOnAssets)
        },
        {
          label: "Return on Equity",
          value: formatPercentage(rawMetrics.returnOnEquity)
        }
      ],
      growthNote: `The business shows a ${rawMetrics.revenueGrowth > 0 ? 'positive' : 'negative'} revenue growth trend of ${formatPercentage(rawMetrics.revenueGrowth)} with an EBITDA margin of ${formatPercentage(rawMetrics.ebitdaMargin)}`
    }
  };
}

export async function analyzeFiles(
  files: File[],
  multiplier: number,
  desiredValue: number,
  initialOffer: number
): Promise<AnalysisResult> {
  if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
    throw new Error('OpenAI API key is not configured');
  }

  try {
    const fileContents = await Promise.all(
      files.map(async (file) => {
        const content = await readFileContent(file);
        return { 
          name: file.name, 
          type: file.type,
          content 
        };
      })
    );

    const openai = new OpenAI({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: "You are a financial metrics extraction system. Extract numeric values from financial documents and PDF content. If a value cannot be determined, use -1."
        },
        {
          role: "user",
          content: `Analyze these financial documents and extract key metrics:

${fileContents.map(f => `### ${f.name} (${f.type}) ###\n${f.content}\n`).join('\n')}

Return ONLY a JSON object with these numeric values. Use -1 if a value cannot be determined:
{
  "revenue": [Annual revenue],
  "ebitda": [EBITDA],
  "grossProfit": [Gross profit],
  "netProfit": [Net profit],
  "workingCapital": [Working capital],
  "totalDebt": [Total debt],
  "currentRatio": [Current ratio],
  "debtToEquity": [Debt to equity ratio],
  "revenueGrowth": [Revenue growth %],
  "ebitdaMargin": [EBITDA margin %],
  "operatingCashFlow": [Operating cash flow],
  "returnOnAssets": [ROA %],
  "returnOnEquity": [ROE %]
}`
        }
      ],
      temperature: 0,
      response_format: { type: "json_object" }
    });

    const rawMetrics = JSON.parse(completion.choices[0]?.message?.content || '{}');
    console.log('Extracted metrics:', rawMetrics);

    return calculateLocalMetrics(rawMetrics, multiplier, desiredValue, initialOffer);
  } catch (error) {
    console.error('Analysis error:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to analyze files');
  }
}