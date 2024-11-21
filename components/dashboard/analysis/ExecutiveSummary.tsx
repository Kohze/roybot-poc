'use client';

import { Card } from '@/components/ui/card';
import { Sphere } from 'lucide-react';

interface Metric {
  label: string;
  value: string;
  description: string;
}

interface ExecutiveSummaryProps {
  metrics: Metric[];
  ebitda: string;
}

export function ExecutiveSummary({ metrics, ebitda }: ExecutiveSummaryProps) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">Executive Summary</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        The analysis focuses on the most recent financial year, providing an overview of the company's current performance:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}:</div>
            <div className="text-xl font-bold mb-1">{metric.value}</div>
            <div className="text-sm text-gray-500">{metric.description}</div>
          </div>
        ))}
      </div>

      <div className="bg-blue-600 rounded-lg p-6 text-white relative overflow-hidden">
        <div className="relative z-10">
          <div className="text-sm opacity-90">EBITDA:</div>
          <div className="text-3xl font-bold">{ebitda}</div>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <Sphere className="h-32 w-32 text-blue-500/20" />
        </div>
      </div>
    </Card>
  );
}