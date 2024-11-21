'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              ROYBOT
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "transition-colors",
                  pathname === item.href
                    ? "text-gray-900 dark:text-white" // Active state - darker color
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" // Inactive state
                )}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
            <Link href="/contact">
              <Button>Let&apos;s Talk</Button>
            </Link>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-3 py-2 text-base",
                  pathname === item.href
                    ? "text-gray-900 dark:text-white" // Active state - darker color
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" // Inactive state
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Link href="/contact">
                <Button className="w-full">Let&apos;s Talk</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}