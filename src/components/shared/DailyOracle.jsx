'use client'

import { useState } from 'react'

export default function DailyOracle() {
  const [reading] = useState({
    fortune: "Today's energy brings unexpected opportunities for growth",
    goodThings: [
      "New connections will prove valuable", 
      "Financial prospects are improving", 
      "Creative energy is at its peak"
    ],
    cautions: [
      "Avoid hasty decisions", 
      "Take time for self-reflection"
    ]
  })

  return (
    <section className="bg-[#1d2a3a] pt-24 pb-16 w-full">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-[#d3ae8b]">
            ✨ Your Daily Oracle Reading ✨
          </h2>
          
          {/* Fortune Text */}
          <p className="text-lg md:text-xl mb-12 text-[#d3ae8b]/90 italic max-w-2xl mx-auto">
            {reading.fortune}
          </p>
          
          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Positive Energies Card */}
            <div className="bg-[#2a3b4f] rounded-xl p-6 border border-[#d3ae8b]/20 hover:border-[#d3ae8b]/40 transition-all">
              <h3 className="text-xl font-playfair mb-4 text-[#d3ae8b]">
                Positive Energies Today
              </h3>
              <ul className="space-y-3">
                {reading.goodThings.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#d3ae8b] mt-1">●</span>
                    <span className="text-[#d3ae8b]/90 flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Points of Awareness Card */}
            <div className="bg-[#2a3b4f] rounded-xl p-6 border border-[#d3ae8b]/20 hover:border-[#d3ae8b]/40 transition-all">
              <h3 className="text-xl font-playfair mb-4 text-[#d3ae8b]">
                Points of Awareness
              </h3>
              <ul className="space-y-3">
                {reading.cautions.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#d3ae8b] mt-1">●</span>
                    <span className="text-[#d3ae8b]/90 flex-1">{item}</span>
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
