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
    <section className="bg-gradient-to-b from-indigo-50 to-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-playfair text-center mb-16 text-indigo-900">
          Explore Your Spiritual Journey
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link 
              key={service.title}
              href={service.href}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 mb-6 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={128}
                  height={128}
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-playfair text-indigo-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-lg">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
