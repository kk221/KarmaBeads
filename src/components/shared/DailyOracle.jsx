'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiChevronDown } from 'react-icons/fi'
import StarsBackground from './StarsBackground'
import dynamic from 'next/dynamic'
// Dynamically import html2canvas with no SSR
const html2canvas = dynamic(() => import('html2canvas'), {
  ssr: false
})


export default function DailyOracle() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedSign, setSelectedSign] = useState(null)
  const [dailyFortune, setDailyFortune] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const zodiacSigns = [
    { name: 'Aries', dates: 'Mar 21 - Apr 19' },
    { name: 'Taurus', dates: 'Apr 20 - May 20' },
    { name: 'Gemini', dates: 'May 21 - Jun 20' },
    { name: 'Cancer', dates: 'Jun 21 - Jul 22' },
    { name: 'Leo', dates: 'Jul 23 - Aug 22' },
    { name: 'Virgo', dates: 'Aug 23 - Sep 22' },
    { name: 'Libra', dates: 'Sep 23 - Oct 22' },
    { name: 'Scorpio', dates: 'Oct 23 - Nov 21' },
    { name: 'Sagittarius', dates: 'Nov 22 - Dec 21' },
    { name: 'Capricorn', dates: 'Dec 22 - Jan 19' },
    { name: 'Aquarius', dates: 'Jan 20 - Feb 18' },
    { name: 'Pisces', dates: 'Feb 19 - Mar 20' }
  ]

  // Simplified fetch function
  const fetchHoroscope = async (sign) => {
    try {
      setIsLoading(true)
      const response = await fetch(`/api/daily-fortune?sign=${sign}`)
      const data = await response.json()
      setDailyFortune(data)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center py-8 px-4 relative overflow-hidden bg-[#1d2a3a]">
      <StarsBackground />
      <div className="max-w-3xl w-full relative z-10">
        <div className="text-center space-y-12">
          {/* Zodiac Selection */}
          <div className="relative inline-block w-full max-w-xs">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full py-4 px-6 bg-[#2a3b4f] rounded-xl text-[#d3ae8b] flex justify-between items-center hover:bg-[#2a3b4f]/90 transition-colors"
            >
              {selectedSign || 'Select Your Zodiac Sign'}
              <FiChevronDown className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute mt-2 w-full bg-[#2a3b4f] rounded-xl shadow-lg z-50">
                {zodiacSigns.map((sign) => (
                  <button
                    key={sign.name}
                    onClick={() => {
                      setSelectedSign(sign.name)
                      setIsDropdownOpen(false)
                      fetchHoroscope(sign.name.toLowerCase())
                    }}
                    className="w-full px-6 py-3 text-left text-[#d3ae8b] hover:bg-[#1d2a3a] transition-colors border-t border-[#d3ae8b]/10 first:border-t-0"
                  >
                    <span className="block font-medium">{sign.name}</span>
                    <span className="block text-sm text-[#d3ae8b]/60">{sign.dates}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Content Area */}
          {isLoading ? (
            <div className="py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#d3ae8b] mx-auto"></div>
            </div>
          ) : dailyFortune ? (
            <div className="space-y-8 animate-fade-in">
              {/* Positive Energies */}
              <div className="bg-[#2a3b4f] rounded-xl p-8 space-y-4">
                <h3 className="text-2xl text-[#d3ae8b] font-medium">Today's Guidance</h3>
                <p className="text-[#d3ae8b]/90 leading-relaxed">{dailyFortune.zodiacInfluence}</p>
              </div>

              {/* Highlights Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#2a3b4f] rounded-xl p-8 space-y-4">
                  <h3 className="text-xl text-[#d3ae8b] font-medium">Positive Energies</h3>
                  <ul className="space-y-3">
                    {dailyFortune.positiveEnergies.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3 text-[#d3ae8b]/90">
                        <span className="text-[#d3ae8b] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#2a3b4f] rounded-xl p-8 space-y-4">
                  <h3 className="text-xl text-[#d3ae8b] font-medium">Points of Awareness</h3>
                  <ul className="space-y-3">
                    {dailyFortune.awareness.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3 text-[#d3ae8b]/90">
                        <span className="text-[#d3ae8b] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-[#d3ae8b]/60 py-12">Select your zodiac sign to reveal today's guidance</p>
          )}
        </div>
      </div>

    </section>
  )
}    
