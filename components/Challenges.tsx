'use client';

import { AlertCircle, BarChart2, Database, Shield } from 'lucide-react';

const challenges = [
  {
    icon: AlertCircle,
    title: 'Inaccurate Valuations',
    description: '85% of SMEs fail to sell due to incorrect pricing. This leads to unrealistic expectations and failed deals, causing significant time and resource waste.',
  },
  {
    icon: Database,
    title: 'Poor Deal Structures',
    description: 'Traditional deal structures slow down negotiations by 40%, causing a high failure rate and missed opportunities for both buyers and sellers.',
  },
  {
    icon: BarChart2,
    title: 'Lack of Data-Driven Insights',
    description: 'Only 15% of SMEs have access to reliable market data and AI-driven tools, severely limiting their ability to make informed decisions during acquisitions.',
  },
  {
    icon: Shield,
    title: 'High-Risk Transactions',
    description: 'Without proper risk assessment tools, SMEs and buyers face a 60% higher chance of deal failure, leading to financial losses and wasted resources.',
  },
];

export default function Challenges() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">The SME Acquisition Challenge</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Small and medium enterprises face significant hurdles in the acquisition process, 
            leading to inefficiencies, missed opportunities, and failed transactions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge) => (
            <div
              key={challenge.title}
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors"
            >
              <div className="bg-blue-50 dark:bg-blue-900/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <challenge.icon className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{challenge.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}