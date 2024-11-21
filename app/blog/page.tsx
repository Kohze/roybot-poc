import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    slug: 'future-of-ai-in-business-acquisitions',
    title: 'The Future of AI in Business Acquisitions',
    excerpt: 'Exploring how artificial intelligence is revolutionizing the M&A landscape and what it means for future deals.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop',
    date: 'March 1, 2024',
    readTime: '5 min read',
  },
  {
    slug: 'key-metrics-for-valuing-tech-startups',
    title: 'Key Metrics for Valuing Tech Startups',
    excerpt: 'Understanding the important metrics and KPIs when evaluating technology companies for acquisition.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1515&auto=format&fit=crop',
    date: 'February 28, 2024',
    readTime: '8 min read',
  },
  {
    slug: 'risk-management-in-modern-ma',
    title: 'Risk Management in Modern M&A',
    excerpt: 'Best practices for managing risks in today\'s business acquisition landscape using AI-driven insights.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1471&auto=format&fit=crop',
    date: 'February 25, 2024',
    readTime: '6 min read',
  },
  {
    slug: 'digital-transformation-in-ma',
    title: 'Digital Transformation in M&A',
    excerpt: 'How digital technologies are reshaping the merger and acquisition process for modern businesses.',
    image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1470&auto=format&fit=crop',
    date: 'February 22, 2024',
    readTime: '7 min read',
  },
  {
    slug: 'successful-post-merger-integration',
    title: 'Successful Post-Merger Integration',
    excerpt: 'Essential strategies for smooth post-merger integration and maintaining business continuity.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop',
    date: 'February 20, 2024',
    readTime: '9 min read',
  },
  {
    slug: 'ai-driven-due-diligence',
    title: 'AI-Driven Due Diligence',
    excerpt: 'Leveraging artificial intelligence to streamline and enhance the due diligence process.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop',
    date: 'February 18, 2024',
    readTime: '6 min read',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-8">RoyBot.AI Blog</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Insights and updates from the world of AI-powered business acquisitions
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.title}
                href={`/blog/${post.slug}`}
                className="group flex"
              >
                <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col w-full">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 text-blue-600 dark:text-blue-400 group-hover:underline">
                      Read More →
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}