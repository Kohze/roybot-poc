'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload } from 'lucide-react';
import { toast } from 'sonner';
import { LoadingOverlay } from '@/components/LoadingOverlay';
import { analyzeFiles } from '@/lib/analysis';

export function UploadForm() {
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  const [multiplier, setMultiplier] = useState<string>('5');
  const [desiredValue, setDesiredValue] = useState<string>('');
  const [initialOffer, setInitialOffer] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      console.log('Selected files:', selectedFiles.map(f => ({
        name: f.name,
        type: f.type,
        size: f.size
      })));
      setFiles(selectedFiles);
    }
  };

  const handleAnalyze = async () => {
    if (files.length === 0) {
      toast.error('Please upload at least one file');
      return;
    }

    if (!desiredValue || !initialOffer) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsAnalyzing(true);
    const toastId = toast.loading('Processing files and analyzing data...');

    try {
      console.log('Starting analysis with:', {
        files: files.map(f => f.name),
        multiplier: Number(multiplier),
        desiredValue: Number(desiredValue),
        initialOffer: Number(initialOffer)
      });

      const analysis = await analyzeFiles(
        files,
        Number(multiplier),
        Number(desiredValue),
        Number(initialOffer)
      );
      
      console.log('Analysis completed:', analysis);
      localStorage.setItem('analysisResults', JSON.stringify(analysis));
      toast.success('Analysis completed successfully', { id: toastId });
      router.push('/dashboard/deal-analysis');
    } catch (error) {
      console.error('Analysis error:', error);
      toast.error(
        error instanceof Error ? error.message : 'Failed to analyze data', 
        { id: toastId }
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Upload Data for Analysis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Form */}
        <Card className="p-6 border-2">
          <div className="space-y-6">
            <div>
              <Label>Industry Multiple</Label>
              <Input 
                type="number" 
                value={multiplier}
                onChange={(e) => setMultiplier(e.target.value)}
                placeholder="5"
                min="1"
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Standard industry multiple used for valuation
              </p>
            </div>

            <div>
              <Label>Seller's Desired Value (£)</Label>
              <Input 
                type="number"
                value={desiredValue}
                onChange={(e) => setDesiredValue(e.target.value)}
                placeholder="1000000"
              />
            </div>

            <div>
              <Label>Your Initial Offer (£)</Label>
              <Input 
                type="number"
                value={initialOffer}
                onChange={(e) => setInitialOffer(e.target.value)}
                placeholder="800000"
              />
            </div>

            <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg p-8">
              <div className="flex flex-col items-center">
                <Upload className="h-8 w-8 text-blue-500 mb-4" />
                <label 
                  htmlFor="file-upload" 
                  className="cursor-pointer"
                >
                  <span className="text-blue-500 hover:text-blue-600 font-medium">
                    Click to upload
                  </span>
                  <span className="text-gray-600 dark:text-gray-400"> or drag and drop</span>
                </label>
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  accept=".csv,.txt,.pdf,.xlsx,.xls,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Upload financial statements, reports, and other relevant documents
                </p>
                {files.length > 0 && (
                  <div className="mt-4 w-full">
                    <p className="text-sm font-medium mb-2">Selected files:</p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {files.map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  setFiles([]);
                  setMultiplier('5');
                  setDesiredValue('');
                  setInitialOffer('');
                }}
              >
                Clear
              </Button>
              <Button 
                className="w-full"
                onClick={handleAnalyze}
                disabled={isAnalyzing}
              >
                Analyze
              </Button>
            </div>
          </div>
        </Card>

        {/* Right Column - Instructions */}
        <Card className="p-6 border-2">
          <h3 className="text-lg font-semibold mb-4">Instructions</h3>
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <p>
              Upload your financial documents to get started with the analysis. We support various file formats including:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Financial statements (PDF, CSV, Excel)</li>
              <li>Balance sheets</li>
              <li>Income statements</li>
              <li>Cash flow statements</li>
              <li>Other relevant financial documents</li>
            </ul>
            <p>
              Our AI will analyze the documents and provide detailed insights about the business valuation, financial health, and potential risks.
            </p>
          </div>
        </Card>
      </div>

      {isAnalyzing && <LoadingOverlay />}
    </div>
  );
}