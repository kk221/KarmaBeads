'use client'

import Image from 'next/image'
import Link from 'next/link'

const services = [
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

export default function ServicesGrid() {
  return (
    <section className="py-20 w-full bg-[#1d2a3a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-playfair text-center mb-16 text-[#d3ae8b]">
          Explore Your Spiritual Journey
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link 
              key={service.title}
              href={service.href}
              className="group bg-[#2a3b4f] rounded-2xl p-8 border border-[#d3ae8b]/20 hover:border-[#d3ae8b]/40 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 mb-6 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={96}
                  height={96}
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-playfair text-[#d3ae8b] mb-4">
                {service.title}
              </h3>
              <p className="text-[#d3ae8b]/80 text-lg">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
