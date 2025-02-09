'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function DailyOracle() {
  const [reading, setReading] = useState({
    fortune: "Today's energy brings unexpected opportunities for growth",
    goodThings: ["New connections will prove valuable", "Financial prospects are improving", "Creative energy is at its peak"],
    cautions: ["Avoid hasty decisions", "Take time for self-reflection"]
  })

  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/oracle-bg.jpg"
          alt="Oracle Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/90 to-indigo-900/90" />
      </div>

      <div className="relative z-10 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6">
              ✨ Your Daily Oracle Reading ✨
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-indigo-200 italic">
              {reading.fortune}
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h3 className="text-xl font-playfair mb-4 text-emerald-300">
                  Positive Energies Today
                </h3>
                <ul className="space-y-2">
                  {reading.goodThings.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-emerald-300">●</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h3 className="text-xl font-playfair mb-4 text-amber-300">
                  Points of Awareness
                </h3>
                <ul className="space-y-2">
                  {reading.cautions.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-amber-300">●</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
