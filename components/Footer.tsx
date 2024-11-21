'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center">
            <span>© {currentYear} RoyBot.AI — Reg No: 15959056</span>
          </div>
          <div className="flex gap-6">
            <Link 
              href="/privacy" 
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className="hover:text-white transition-colors"
            >
              Terms
            </Link>
            <Link 
              href="/policies" 
              className="hover:text-white transition-colors"
            >
              Policies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}