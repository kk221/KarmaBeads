'use client'

import Image from 'next/image'
import Link from 'next/link'

const categories = [
  {
    title: 'Zodiac',
    description: 'Discover your zodiac sign\'s unique traits and destiny',
    image: '/images/daily-zodiac.svg',
    href: '/zodiac'
  },
  {
    title: 'Horoscope',
    description: 'Daily, weekly, and monthly predictions for your sign',
    image: '/images/horoscope.svg',
    href: '/horoscope'
  },
  {
    title: 'Birth Chart',
    description: 'Deep dive into your complete astrological profile',
    image: '/images/birth-chart.svg',
    href: '/birth-chart'
  },
  {
    title: 'Feng Shui',
    description: 'Harmonize your space with ancient wisdom',
    image: '/images/feng-shui.svg',
    href: '/fengshui'
  },
  {
    title: 'Tarot Reading',
    description: 'Guidance through the ancient art of tarot',
    image: '/images/tarot-reading.svg',
    href: '/tarot'
  }
]

export default function Category() {
  return (
    <section className="py-12 bg-[#1d2a3a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-6">
          {categories.map((category) => (
            <Link 
              key={category.title}
              href={category.href}
              className="block bg-[#2a3b4f] rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-playfair text-[#d3ae8b] mb-2">
                    {category.title}
                  </h3>
                  <p className="text-[#d3ae8b]/80 text-lg">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
          <h2>Categories</h2>
        </div>
      </div>
    </section>
  )
}
