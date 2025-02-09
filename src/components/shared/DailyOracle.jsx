'use client'

import { useState } from 'react'

export default function DailyOracle() {
  const [reading] = useState({
    fortune: "Today's energy brings unexpected opportunities for growth",
    goodThings: ["New connections will prove valuable", "Financial prospects are improving", "Creative energy is at its peak"],
    cautions: ["Avoid hasty decisions", "Take time for self-reflection"]
  })

  return (
    <section className="bg-[#1d2a3a] py-16 w-full">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-playfair mb-6 text-[#d3ae8b]">
            ✨ Your Daily Oracle Reading ✨
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-[#d3ae8b]/90 italic">
            {reading.fortune}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#2a3b4f] rounded-2xl p-8 border border-[#d3ae8b]/20">
              <h3 className="text-2xl font-playfair mb-6 text-[#d3ae8b]">
                Positive Energies Today
              </h3>
              <ul className="space-y-4">
                {reading.goodThings.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-[#d3ae8b]">●</span>
                    <span className="text-[#d3ae8b]/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#2a3b4f] rounded-2xl p-8 border border-[#d3ae8b]/20">
              <h3 className="text-2xl font-playfair mb-6 text-[#d3ae8b]">
                Points of Awareness
              </h3>
              <ul className="space-y-4">
                {reading.cautions.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-[#d3ae8b]">●</span>
                    <span className="text-[#d3ae8b]/90">{item}</span>
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
