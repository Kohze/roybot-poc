'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Upload,
  FileText,
  BarChart2,
  RefreshCcw,
  Zap,
  Brain,
  Settings,
  LogOut,
  LineChart,
  Binary,
  GitCompare,
} from 'lucide-react';

const sections = [
  {
    title: 'Menu',
    items: [
      {
        title: 'Upload Files',
        href: '/dashboard/upload',
        icon: Upload,
        primary: true,
      },
    ],
  },
  {
    title: 'Deal Structure',
    items: [
      {
        title: 'Deal Analysis',
        href: '/dashboard/deal-analysis',
        icon: BarChart2,
      },
      {
        title: 'Deal Summary',
        href: '/dashboard/deal-comparison',
        icon: GitCompare,
      },
      {
        title: 'Deal Generator',
        href: '/dashboard/deal-generator',
        icon: Zap,
      },
    ],
  },
  {
    title: 'Model',
    items: [
      {
        title: 'RAG Analysis',
        href: '/dashboard/rag-analysis',
        icon: LineChart,
      },
      {
        title: 'Model Training',
        href: '/dashboard/model-training',
        icon: Brain,
      },
      {
        title: 'Predictions',
        href: '/dashboard/predictions',
        icon: Binary,
      },
    ],
  },
];

const bottomItems = [
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
  {
    title: 'Sign Out',
    href: '/auth/signout',
    icon: LogOut,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 min-h-screen bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      <div className="flex flex-col h-full">
        <nav className="flex-1 px-4 pt-6">
          {sections.map((section) => (
            <div key={section.title} className="mb-8">
              <h3 className="px-4 text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400',
                        item.primary
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800',
                        pathname === item.href &&
                          !item.primary &&
                          'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <ul className="space-y-1">
            {bottomItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800',
                    pathname === item.href && 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}