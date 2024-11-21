'use client';

import { Card } from '@/components/ui/card';

interface Metric {
  label: string;
  value: string;
}

interface PeriodMetricsProps {
  metrics: Metric[];
  growthNote: string;
}

export function PeriodMetrics({ metrics, growthNote }: PeriodMetricsProps) {
  return (
    <Card className="p-6">
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-6">
        <p className="text-sm text-green-800 dark:text-green-200">
          The data covers 2 periods, providing an overview of the company's financial performance.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}:</div>
            <div className="text-xl font-bold">{metric.value}</div>
          </div>
        ))}
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mt-6">
        <p className="text-sm text-green-800 dark:text-green-200">{growthNote}</p>
      </div>
    </Card>
  );
}