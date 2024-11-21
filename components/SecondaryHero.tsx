'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SecondaryHero() {
  return (
    <div 
      className="relative bg-cover bg-center min-h-[600px]" 
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2070&auto=format&fit=crop')"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/60" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <div className="flex flex-col gap-6">
            <h2 className="text-5xl font-bold text-white leading-tight">
              ROYBOT.AI: FASTER DUE DILIGENCE, FEWER DELAYS, ACCURATE VALUATIONS
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Uncomplicated SME business buying or selling in months, not years at 87% less than the rest.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="/dashboard">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 rounded-full px-8"
                >
                  Let&apos;s Get Started
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
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full px-8 bg-black/80 border-2 border-blue-500 text-white hover:bg-blue-500/10 hover:border-blue-400"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}