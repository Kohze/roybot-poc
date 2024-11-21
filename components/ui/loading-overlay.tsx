import { Loader2 } from 'lucide-react';

interface LoadingOverlayProps {
  message?: string;
}

export function LoadingOverlay({ message = 'Processing your files...' }: LoadingOverlayProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-sm w-full mx-4 shadow-xl">
        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20 mb-4">
            <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 animate-pulse"></div>
            <Loader2 className="w-20 h-20 animate-spin text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Analyzing Data</h3>
          <p className="text-gray-600 dark:text-gray-400 text-center">{message}</p>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-4">
            <div className="bg-blue-500 h-2.5 rounded-full animate-progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
}