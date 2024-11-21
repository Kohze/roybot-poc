'use client';

import { Database, Brain, LineChart, Target } from 'lucide-react';

const steps = [
  {
    icon: <Database className="h-4 w-4 text-white" />,
    title: 'DATA INPUT',
    description: 'Users input key business metrics and financial data into our secure platform.',
  },
  {
    icon: <Brain className="h-4 w-4 text-white" />,
    title: 'AI ANALYSIS',
    description: 'Our advanced algorithms process the data, comparing it to vast market databases.',
  },
  {
    icon: <LineChart className="h-4 w-4 text-white" />,
    title: 'INSIGHTS GENERATION',
    description: 'The platform produces detailed reports, valuations, and strategic recommendations.',
  },
  {
    icon: <Target className="h-4 w-4 text-white" />,
    title: 'DEAL EXECUTION',
    description: 'Users leverage our insights to negotiate and close successful acquisitions.',
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">How RoyBot.AI Works</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            RoyBot.AI is an AI-driven platform that enables users to communicate via voice chat, seamlessly
            answering queries and performing tasks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-lg p-8 hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              </div>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}