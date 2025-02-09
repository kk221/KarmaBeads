'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function DailyReading() {
  const [reading, setReading] = useState({
    fortune: "Today's energy brings unexpected opportunities for growth",
    goodThings: ["New connections will prove valuable", "Financial prospects are improving", "Creative energy is at its peak"],
    cautions: ["Avoid hasty decisions", "Take time for self-reflection"]
  })

  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair mb-6">
            ✨ Your Free Daily Reading ✨
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
  )
}
