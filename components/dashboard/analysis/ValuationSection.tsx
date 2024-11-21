'use client';

import { Card } from '@/components/ui/card';
import { Sphere } from 'lucide-react';

interface ValuationProps {
  companyValuation: string;
  sellerDesiredValue: string;
  initialOffer: string;
  method: {
    name: string;
    description: string;
  };
}

export function ValuationSection(props: ValuationProps) {
  const { companyValuation, sellerDesiredValue, initialOffer, method } = props;
  
  return (
    <Card className="p-6">
      <p className="text-gray-600 dark:text-gray-400 border-b border-blue-500 pb-2 mb-6">
        The selected valuation method resulted in the following company valuation:
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Company Valuation:</div>
            <div className="text-3xl font-bold">{companyValuation}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Seller's Desired Value:</div>
            <div className="text-3xl font-bold">{sellerDesiredValue}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Your Initial Offer:</div>
            <div className="text-3xl font-bold">{initialOffer}</div>
          </div>
        </div>

        <div className="bg-blue-600 rounded-lg p-6 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="mb-4">
              <div className="text-sm opacity-90">Valuation Method:</div>
              <div className="text-2xl font-semibold">{method.name}</div>
            </div>
            <p className="text-sm opacity-90">{method.description}</p>
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Sphere className="h-32 w-32 text-blue-500/20" />
          </div>
        </div>
      </div>
    </Card>
  );
}