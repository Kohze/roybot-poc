'use client';

const stats = [
  {
    percentage: '85%',
    label: 'Accurate Valuations',
    description: '85% improvement in prediction accuracy',
  },
  {
    percentage: '40%',
    label: 'Success Rate',
    description: '40% increase in successful acquisitions',
  },
  {
    percentage: '60%',
    label: 'Time Savings',
    description: '60% reduction in deal structuring time',
  },
  {
    percentage: '70%',
    label: 'Risk Mitigation',
    description: '70% decrease in post-acquisition issues',
  },
];

export default function Stats() {
  return (
    <div className="bg-blue-600 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-white text-left mb-4">
          Why Choose RoyBot.AI?
        </h2>
        <p className="text-xl text-blue-100 mb-16 max-w-2xl">
          Experience unparalleled efficiency and accuracy in business acquisitions with our AI-powered platform.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-left">
              <div className="text-6xl font-bold text-white mb-4">{stat.percentage}</div>
              <div className="text-2xl font-semibold text-white mb-2">{stat.label}</div>
              <div className="text-lg text-blue-100">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}