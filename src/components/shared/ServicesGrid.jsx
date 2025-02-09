'use client'

import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Zodiac',
    description: 'Discover your zodiac sign\'s unique traits and destiny',
    image: '/images/zodiac.jpg',
    href: '/zodiac'
  },
  {
    title: 'Horoscope',
    description: 'Daily, weekly, and monthly predictions for your sign',
    image: '/images/horoscope.jpg',
    href: '/horoscope'
  },
  {
    title: 'Birth Chart',
    description: 'Deep dive into your complete astrological profile',
    image: '/images/birth-chart.jpg',
    href: '/birth-chart'
  },
  {
    title: 'Feng Shui',
    description: 'Harmonize your space with ancient wisdom',
    image: '/images/fengshui.jpg',
    href: '/fengshui'
  },
  {
    title: 'Tarot Reading',
    description: 'Guidance through the ancient art of tarot',
    image: '/images/tarot.jpg',
    href: '/tarot'
  }
]

export default function ServicesGrid() {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12 text-indigo-900">
          Explore Your Spiritual Journey
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link 
              key={service.title}
              href={service.href}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-2xl font-playfair text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
