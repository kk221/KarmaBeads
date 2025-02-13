'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const divinationMethods = [
  {
    id: 'birth-chart',
    title: 'Birth Chart',
    description: 'Discover your celestial blueprint and life path',
    image: '/images/birth-chart.svg',
    path: '/birth-chart'
  },
  {
    id: 'horoscope',
    title: 'Horoscope',
    description: 'Daily guidance from the stars',
    image: '/images/horoscope.svg',
    path: '/horoscope'
  },
  {
    id: 'tarot',
    title: 'Tarot Reading',
    description: 'Unlock mystical insights with ancient cards',
    image: '/images/tarot-reading.svg',
    path: '/tarot'
  },
  {
    id: 'zodiac',
    title: 'Zodiac Signs',
    description: 'Explore the wisdom of the zodiac',
    image: '/images/daily-zodiac.svg',
    path: '/zodiac'
  },
  {
    id: 'fengshui',
    title: 'Feng Shui',
    description: 'Harmonize your space and energy',
    image: '/images/feng-shui.svg',
    path: '/fengshui'
  }
]

export default function DivinationCarousel() {
  const router = useRouter()
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    setActiveIndex((current) => 
      current === divinationMethods.length - 1 ? 0 : current + 1
    )
  }

  const handlePrev = () => {
    setActiveIndex((current) => 
      current === 0 ? divinationMethods.length - 1 : current - 1
    )
  }

  const handleExplore = (path) => {
    router.push(path)
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {divinationMethods.map((method) => (
              <div 
                key={method.id}
                className="w-full flex-shrink-0 px-4"
              >
                <div 
                  className="relative group cursor-pointer bg-[#1d2a3a] rounded-xl overflow-hidden"
                  onClick={() => handleExplore(method.path)}
                >
                  {/* Card Image */}
                  <div className="relative h-[400px] w-full">
                    <Image
                      src={method.image}
                      alt={method.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>

                  {/* Card Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-playfair mb-2">{method.title}</h3>
                    <p className="text-white/80 mb-4">{method.description}</p>
                    
                    {/* Explore Button */}
                    <button className="inline-flex items-center gap-2 text-[#d3ae8b] font-medium transition-colors group-hover:text-white">
                      Explore
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black/50 transition-colors"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black/50 transition-colors"
        >
          →
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {divinationMethods.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeIndex ? 'bg-[#d3ae8b]' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
