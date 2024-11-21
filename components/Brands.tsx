'use client';

import Image from 'next/image';

const brands = [
  {
    name: 'Slack',
    logo: 'https://i.imgur.com/jDNqme8.png',
  },
  {
    name: 'Zendesk',
    logo: 'https://i.imgur.com/Du2hnPF.png',
  },
  {
    name: 'Monday',
    logo: 'https://i.imgur.com/fVL1c2Y.png',
  },
  {
    name: 'Coursera',
    logo: 'https://i.imgur.com/Ianmzsq.png',
  },
  {
    name: 'Oracle',
    logo: 'https://i.imgur.com/Os6r4vU.png',
  },
];

export default function Brands() {
  return (
    <div className="bg-blue-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div key={brand.name} className="relative h-8 w-32">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                fill
                className="object-contain filter brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}