import { Card } from '@/components/ui/card';
import { DollarSign, Clock, LineChart, ArrowUpRight } from 'lucide-react';

const dealMetrics = [
  {
    title: 'Deal Value',
    value: '£2.4M',
    change: '+8%',
    icon: DollarSign,
  },
  {
    title: 'Time to Close',
    value: '45 days',
    change: '-12%',
    icon: Clock,
  },
  {
    title: 'Success Probability',
    value: '85%',
    change: '+15%',
    icon: LineChart,
  },
];

export default function DealOverviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Deal Overview</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Current deal status and key metrics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dealMetrics.map((metric) => (
          <Card key={metric.title} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <metric.icon className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-sm text-green-600 flex items-center">
                {metric.change}
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </span>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm text-gray-600 dark:text-gray-400">
                {metric.title}
              </h3>
              <p className="text-2xl font-bold">{metric.value}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Deal Timeline */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-6">Deal Timeline</h2>
        <div className="space-y-6">
          {[
            {
              date: 'March 1, 2024',
              title: 'Initial Contact',
              status: 'Completed',
            },
            {
              date: 'March 5, 2024',
              title: 'Due Diligence Started',
              status: 'In Progress',
            },
            {
              date: 'March 15, 2024',
              title: 'Valuation',
              status: 'Pending',
            },
          ].map((event) => (
            <div key={event.title} className="flex items-start space-x-4">
              <div className="min-w-[100px] text-sm text-gray-500">
                {event.date}
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{event.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {event.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}