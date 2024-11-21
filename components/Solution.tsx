'use client';

import { CircleDot } from 'lucide-react';
import { LineChart, ArrowUpRight, BarChart2, Brain, DollarSign, Users, Building } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Solution() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />
        <div className="hidden lg:block absolute top-1/4 left-1/3 w-4 h-4 bg-blue-500/20 rounded-full" />
        <div className="hidden lg:block absolute bottom-1/3 right-1/3 w-6 h-6 bg-purple-500/20 rounded-full" />
        <div className="hidden lg:block absolute top-1/2 right-1/4 w-3 h-3 bg-green-500/20 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-left mb-16">
          <h2 className="text-4xl font-bold mb-4">State-of-the-Art AI-Powered Due Diligence</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
            RoyBot leverages advanced algorithms to automate and expedite the due diligence process, providing comprehensive insights and risk assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Accuracy Rate - Smaller (40%) */}
            <div className="md:col-span-5 space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 h-[300px] relative overflow-hidden group hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full transform group-hover:scale-110 transition-transform" />
                <div className="relative">
                  <div className="w-32 h-32 relative">
                    <div className="absolute w-full h-full rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-green-600 dark:text-green-400">85%</span>
                        <CircleDot className="absolute -top-1 -right-1 h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold">Accuracy Rate</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Our AI engine achieves 85% accuracy in financial analysis and risk assessment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-Time Analytics - Larger (60%) */}
            <div className="md:col-span-7 space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 h-[300px] relative overflow-hidden group hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/5 rounded-bl-full transform group-hover:scale-110 transition-transform" />
                <div className="relative">
                  <Tabs defaultValue="metrics" className="w-full">
                    <TabsList className="mb-4">
                      <TabsTrigger value="metrics">Metrics</TabsTrigger>
                      <TabsTrigger value="insights">Insights</TabsTrigger>
                    </TabsList>
                    <TabsContent value="metrics">
                      <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-lg">
                        <div className="text-2xl font-bold">60%</div>
                        <div className="text-sm text-gray-500">Time Saved</div>
                        <div className="mt-2 flex items-center text-green-500">
                          <ArrowUpRight className="h-4 w-4 mr-1" />
                          <span className="text-sm">vs Traditional Methods</span>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="insights">
                      <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-lg">
                        <div className="text-2xl font-bold text-amber-500">24/7</div>
                        <div className="text-sm text-gray-500">Analysis Available</div>
                        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                          Continuous monitoring and updates
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold">Real-Time Analytics</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Get instant insights and analysis for faster decision-making
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Comprehensive Analysis - Larger (60%) */}
            <div className="md:col-span-7 space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 h-[300px] relative overflow-hidden group hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-bl-full transform group-hover:scale-110 transition-transform" />
                <div className="relative">
                  <h3 className="text-xl font-bold mb-4">Comprehensive Analysis</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 flex flex-col justify-between group-hover:shadow-md transition-shadow">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mb-2">
                        <DollarSign className="h-4 w-4 text-white" />
                      </div>
                      <div className="text-sm font-medium">Financial</div>
                      <div className="text-xs text-gray-500">Deep Analysis</div>
                    </div>
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 flex flex-col justify-between group-hover:shadow-md transition-shadow">
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mb-2">
                        <Users className="h-4 w-4 text-white" />
                      </div>
                      <div className="text-sm font-medium">Operational</div>
                      <div className="text-xs text-gray-500">Risk Assessment</div>
                    </div>
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 flex flex-col justify-between group-hover:shadow-md transition-shadow">
                      <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center mb-2">
                        <Building className="h-4 w-4 text-white" />
                      </div>
                      <div className="text-sm font-medium">Market</div>
                      <div className="text-xs text-gray-500">Intelligence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Insights - Smaller (40%) */}
            <div className="md:col-span-5 space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 h-[300px] relative overflow-hidden group hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-bl-full transform group-hover:scale-110 transition-transform" />
                <div className="relative">
                  <h3 className="text-xl font-bold mb-4">AI-Powered Insights</h3>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-lg">
                      <div className="flex items-center space-x-3 mb-2">
                        <Brain className="h-5 w-5 text-blue-500" />
                        <span className="font-medium">Machine Learning</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Advanced algorithms analyze patterns and identify risks
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-lg">
                      <div className="flex items-center space-x-3 mb-2">
                        <BarChart2 className="h-5 w-5 text-green-500" />
                        <span className="font-medium">Predictive Analytics</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Forecast trends and potential outcomes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}