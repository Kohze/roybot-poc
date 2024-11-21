'use client';

import { FileText } from 'lucide-react';

const pricingPlans = [
  {
    icon: <FileText className="h-6 w-6 text-white" />,
    title: 'SUBSCRIPTION MODEL',
    details: [
      {
        label: 'Subscription Plans',
        description: 'Starting at £99/month for unlimited access to essential AI-driven tools.',
      },
      {
        label: 'Premium Analytics',
        description: 'Available for £249/month, offering advanced insights and analytics.',
      },
    ],
  },
  {
    icon: <FileText className="h-6 w-6 text-white" />,
    title: 'PAY-PER-USE',
    details: [
      {
        label: '',
        description: 'Starting at £49 per report. Ideal for SMEs requiring occasional valuations or market insights.',
      },
    ],
  },
  {
    icon: <FileText className="h-6 w-6 text-white" />,
    title: 'CUSTOM SOLUTIONS',
    details: [
      {
        label: '',
        description: 'Tailored packages available for enterprises with specific needs. Contact us for details.',
      },
    ],
  },
];

export default function Pricing() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4">Flexible Pricing Model</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-3xl">
          Choose a pricing model that works best for your business needs. Whether you need regular access or occasional insights, we have a solution for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 hover:border-blue-500 transition-all"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  {plan.icon}
                </div>
                <h3 className="text-xl font-semibold">{plan.title}</h3>
              </div>
              <div className="space-y-4">
                {plan.details.map((detail, index) => (
                  <div key={index} className="space-y-1">
                    {detail.label && (
                      <div className="font-medium text-gray-900 dark:text-white">
                        {detail.label}:
                      </div>
                    )}
                    <div className="text-gray-600 dark:text-gray-400">
                      {detail.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}