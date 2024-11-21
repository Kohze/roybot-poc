import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CTA() {
  return (
    <div className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-6xl font-bold text-white mb-8">Ready to Transform Your M&A Process?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Start your journey with RoyBot today and experience the future of due diligence
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 w-full sm:w-auto">
              Start Free Trial
            </Button>
          </Link>
          <Link href="https://calendly.com/geniuslead/roybot-ai-revolutionising-sme-acquisitions" target="_blank">
            <Button size="lg" variant="outline" className="text-lg px-8 w-full sm:w-auto">
              Schedule Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}