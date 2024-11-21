import Image from 'next/image';

const portfolioItems = [
  {
    title: 'Tech Startup Acquisition',
    description: 'Successfully facilitated the acquisition of a growing SaaS company',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1515&auto=format&fit=crop',
    stats: { value: '£15M', time: '3 months' },
  },
  {
    title: 'Manufacturing Merger',
    description: 'Merged two manufacturing companies to create market leader',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop',
    stats: { value: '£45M', time: '6 months' },
  },
  {
    title: 'Retail Chain Expansion',
    description: 'Acquisition of regional retail chain for nationwide expansion',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop',
    stats: { value: '£28M', time: '4 months' },
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-8">Our Portfolio</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Showcasing successful business acquisitions powered by RoyBot.AI
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {item.description}
                  </p>
                  <div className="flex justify-between text-sm">
                    <div>
                      <span className="text-gray-500">Deal Value:</span>
                      <span className="ml-2 font-semibold">{item.stats.value}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Time to Close:</span>
                      <span className="ml-2 font-semibold">{item.stats.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}