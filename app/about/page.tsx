import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-8">About RoyBot.AI</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Revolutionizing business acquisitions through artificial intelligence and data-driven insights.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                At RoyBot.AI, we're on a mission to democratize business acquisitions by making expert-level 
                insights and analysis accessible to everyone. Through our AI-powered platform, we're 
                revolutionizing how businesses are bought and sold.
              </p>
              <Button size="lg" className="rounded-full px-8">Learn More</Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1553484771-371a605b060b?q=80&w=1470&auto=format&fit=crop"
                alt="Team collaboration"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Pushing boundaries with cutting-edge AI technology',
              },
              {
                title: 'Transparency',
                description: 'Clear, honest, and open communication in everything we do',
              },
              {
                title: 'Excellence',
                description: 'Delivering outstanding results through continuous improvement',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}