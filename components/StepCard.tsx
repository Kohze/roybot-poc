'use client';

import React from 'react';

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
}

export function StepCard({ icon, title, description, stepNumber }: StepCardProps) {
  return (
    <div className="border border-gray-800 rounded-lg p-6 hover:border-blue-500 transition-colors">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
          {icon}
        </div>
        <span className="text-sm text-blue-500">Step {stepNumber}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}