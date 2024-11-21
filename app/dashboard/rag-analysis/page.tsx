import { Card } from '@/components/ui/card';
import { Construction } from 'lucide-react';

export default function RagAnalysisPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">RAG Analysis</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Red, Amber, Green analysis of key business metrics
        </p>
      </div>

      <Card className="p-12 text-center">
        <Construction className="h-12 w-12 mx-auto mb-4 text-gray-400" />
        <h2 className="text-xl font-semibold mb-2">Under Construction</h2>
        <p className="text-gray-600 dark:text-gray-400">
          This feature is currently being developed. Check back soon!
        </p>
      </Card>
    </div>
  );
}