// Previous imports remain the same...

export function DealComparisonView() {
  // ... previous code remains the same until the metrics display

  const formatValue = (value: string) => {
    return value === "£-1.00" || value === "-1.0%" ? "N/A" : value;
  };

  return (
    <div className="space-y-8">
      {/* ... previous JSX remains the same until the metrics display */}
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {analysis.periodMetrics.metrics.map((metric) => (
          <div key={metric.label} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {metric.label}:
            </div>
            <div className="text-xl font-bold">{formatValue(metric.value)}</div>
          </div>
        ))}
      </div>

      {/* ... rest of the JSX remains the same */}
    </div>
  );
}