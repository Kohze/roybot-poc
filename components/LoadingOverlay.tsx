import { Loader2 } from 'lucide-react';

export function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl flex flex-col items-center space-y-4">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        <div className="text-center">
          <h3 className="font-semibold text-lg">Processing Files</h3>
          <p className="text-gray-500 dark:text-gray-400">Please wait while we analyze your data...</p>
        </div>
      </div>
    </div>
  );
}