'use client';

import { Card } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import {
  BarChart,
  DollarSign,
  ArrowUpRight,
  Users,
} from 'lucide-react';

interface AnalysisResult {
  valuationDetails?: {
    companyValuation: string;
  };
}

const stats = [
  {
    title: 'Total Deals',
    value: '-',
    change: '-',
    icon: BarChart,
  },
  {
    title: 'Average Deal Size',
    value: '-',
    change: '-',
    icon: DollarSign,
  },
  {
    title: 'Success Rate',
    value: '-',
    change: '-',
    icon: ArrowUpRight,
  },
  {
    title: 'Active Users',
    value: '-',
    change: '-',
    icon: Users,
  },
];

export function DashboardOverview() {
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

  useEffect(() => {
    const storedAnalysis = localStorage.getItem('analysisResults');
    if (storedAnalysis) {
      setAnalysis(JSON.parse(storedAnalysis));
    }
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Overview</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome! Start by uploading your files for analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-sm text-gray-500 flex items-center">
                {stat.change}
                {stat.change !== '-' && <ArrowUpRight className="h-4 w-4 ml-1" />}
              </span>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm text-gray-600 dark:text-gray-400">
                {stat.title}
              </h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}