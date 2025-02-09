'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function DailyOracle() {
  const [reading] = useState({
    fortune: "Today's energy brings unexpected opportunities for growth",
    goodThings: ["New connections will prove valuable", "Financial prospects are improving", "Creative energy is at its peak"],
    cautions: ["Avoid hasty decisions", "Take time for self-reflection"]
  })

  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Background with proper overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/oracle-bg.jpg"
          alt="Oracle Background"
          fill
          className="object-cover brightness-50"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair text-white mb-6 tracking-wide">
              ✨ Your Daily Oracle Reading ✨
            </h2>
            <p className="text-xl md:text-2xl text-white/90 italic font-light">
              {reading.fortune}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Positive Energies Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all">
              <h3 className="text-2xl font-playfair mb-6 text-emerald-300">
                Positive Energies Today
              </h3>
              <ul className="space-y-4">
                {reading.goodThings.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/90">
                    <span className="text-emerald-300 text-lg">●</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Awareness Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all">
              <h3 className="text-2xl font-playfair mb-6 text-amber-300">
                Points of Awareness
              </h3>
              <ul className="space-y-4">
                {reading.cautions.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/90">
                    <span className="text-amber-300 text-lg">●</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
