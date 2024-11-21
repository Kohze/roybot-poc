'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block">
              <div className="mb-6 inline-flex items-center rounded-full bg-blue-600 px-4 py-1.5">
                <span className="text-sm font-medium text-white">
                  Transforming M&A for SMEs
                </span>
              </div>
            </div>
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              Fast, Affordable,{' '}
              <span className="block">AI-Powered Due Diligence</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
              RoyBot revolutionises mergers and acquisitions for small and medium-sized enterprises (SMEs) by providing a fast and affordable AI-powered due diligence solution. Our platform streamlines the process, saving valuable time and resources while ensuring comprehensive and accurate results.
            </p>
            <div className="flex gap-4">
              <Link href="/dashboard/upload">
                <Button size="lg" className="rounded-full px-8">
                  Get Started Today
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="rounded-full px-8">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative lg:h-[600px]">
            <Card className="relative z-10 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
              <div className="space-y-6">
                <div>
                  <Label>Analysis Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Financial Due Diligence" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="financial">Financial Due Diligence</SelectItem>
                      <SelectItem value="operational">Operational Analysis</SelectItem>
                      <SelectItem value="risk">Risk Assessment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Company Size</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Small to Medium Enterprise" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small Business</SelectItem>
                      <SelectItem value="medium">Medium Enterprise</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg p-8 text-center">
                  <Upload className="h-8 w-8 mx-auto mb-4 text-blue-500" />
                  <div>
                    <button className="text-blue-500 hover:text-blue-600 font-medium">
                      Upload Documents
                    </button>
                    <span className="text-gray-600 dark:text-gray-400"> or drag and drop</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Financial statements, contracts, and other relevant documents</p>
                </div>

                <Link href="/dashboard/upload" className="block w-full">
                  <Button className="w-full">Start Analysis</Button>
                </Link>
              </div>
            </Card>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}