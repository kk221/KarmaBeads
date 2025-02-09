'use client'

import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Zodiac',
    description: 'Discover your zodiac sign\'s unique traits and destiny',
    image: '/images/services/zodiac.jpg',
    href: '/zodiac'
  },
  {
    title: 'Horoscope',
    description: 'Daily, weekly, and monthly predictions for your sign',
    image: '/images/services/horoscope.jpg',
    href: '/horoscope'
  },
  {
    title: 'Birth Chart',
    description: 'Deep dive into your complete astrological profile',
    image: '/images/services/birth-chart.jpg',
    href: '/birth-chart'
  },
  {
    title: 'Feng Shui',
    description: 'Harmonize your space with ancient wisdom',
    image: '/images/services/fengshui.jpg',
    href: '/fengshui'
  },
  {
    title: 'Tarot Reading',
    description: 'Guidance through the ancient art of tarot',
    image: '/images/services/tarot.jpg',
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
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 p-8">
                  <h3 className="text-2xl md:text-3xl font-playfair text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
