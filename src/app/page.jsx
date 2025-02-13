'use client'

import DailyOracle from '@/components/shared/DailyOracle'
import DivinationCarousel from '@/components/shared/DivinationCarousel'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1d2a3a] overflow-x-hidden">
      {/* Hero Section with Daily Oracle */}
      <section className="min-h-screen relative">
        <DailyOracle />
      </section>

      {/* Divination Methods Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair text-[#d3ae8b] text-center mb-12">
            Explore Your Spiritual Journey
          </h2>
          <DivinationCarousel />
        </div>
      </section>
    </main>
  )
}
