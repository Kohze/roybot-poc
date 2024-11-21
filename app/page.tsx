import Hero from '@/components/Hero';
import Brands from '@/components/Brands';
import Challenges from '@/components/Challenges';
import Solution from '@/components/Solution';
import SecondaryHero from '@/components/SecondaryHero';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Stats from '@/components/Stats';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Brands />
      <Challenges />
      <SecondaryHero />
      <Solution />
      <HowItWorks />
      <Pricing />
      <Stats />
      <FAQ />
      <CTA />
    </main>
  );
}