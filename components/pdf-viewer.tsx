'use client';

import { useState } from 'react';
import pdfToText from 'react-pdftotext';

interface PDFViewerProps {
  file: File | string;
}

export default function PDFViewer({ file }: PDFViewerProps) {
  const [text, setText] = useState<string>('');
  const [error, setError] = useState<string>('');

  const extractText = async () => {
    try {
      if (file instanceof File) {
        const extractedText = await pdfToText(file);
        setText(extractedText);
      }
    } catch (err) {
      setError('Failed to extract text from PDF');
      console.error(err);
    }
  };

  // Extract text when component mounts or file changes
  useState(() => {
    if (file instanceof File) {
      extractText();
    }
  }, [file]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="whitespace-pre-wrap font-mono text-sm p-4 bg-gray-50 rounded-lg">
      {text}
    </div>
  );
} 