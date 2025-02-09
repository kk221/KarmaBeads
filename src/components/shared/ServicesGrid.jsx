'use client'

import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Zodiac',
    description: 'Daily, weekly, and monthly predictions for your sign',
    image: '/images/daily-zodiac.svg',
    href: '/zodiac'
  },
  {
    title: 'Horoscope',
    description: 'Yearly predictions for your sign',
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
    <section className="w-full bg-[#1d2a3a] py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link 
              key={service.title}
              href={service.href}
              className="service-card"
            >
              <div className="card-content">
                <div className="icon-wrapper">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={120}
                    height={120}
                    className="service-icon"
                  />
                </div>
                <h3 className="card-title">
                  {service.title}
                </h3>
                <p className="card-description">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
