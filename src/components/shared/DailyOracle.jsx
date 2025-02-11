'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function DailyOracle() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedSign, setSelectedSign] = useState(null)
  const [dailyFortune, setDailyFortune] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const zodiacSigns = [
    'aries', 'taurus', 'gemini', 'cancer', 
    'leo', 'virgo', 'libra', 'scorpio', 
    'sagittarius', 'capricorn', 'aquarius', 'pisces'
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fetchHoroscope = async (sign) => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/daily-fortune?sign=${sign}`')
      const data = await response.json()
      
      if (response.ok) {
        setDailyFortune(data)
      } else {
        throw new Error(data.error || 'Failed to fetch fortune')
      }
    } catch (error) {
      console.error('Error fetching daily fortune:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignSelect = (sign) => {
    setSelectedSign(sign)
    setIsDropdownOpen(false)
    fetchHoroscope(sign)
  }

  return (
    <section className="pt-16 pb-12 bg-[#1d2a3a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo Button */}
          <div className="relative mb-8">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="transition-transform hover:scale-105 focus:outline-none"
            >
              <Image
                src="/logo.png"  // Make sure to add your logo image
                alt="Oracle Logo"
                width={100}
                height={100}
                className="rounded-full"
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-[#2a3b4f] ring-1 ring-black ring-opacity-5">
                <div className="py-1 grid grid-cols-2 gap-1">
                  {zodiacSigns.map((sign) => (
                    <button
                      key={sign}
                      onClick={() => handleSignSelect(sign)}
                      className="px-4 py-2 text-sm text-[#d3ae8b] hover:bg-[#1d2a3a] transition-colors capitalize"
                    >
                      {sign}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#d3ae8b]"></div>
            </div>
          )}

          {/* Fortune Display */}
          {dailyFortune && !isLoading && (
            <div className={`text-center transition-all duration-500 ${
              isScrolled ? 'scale-90 -translate-y-5' : ''
            }`}>
              <h1 className="text-4xl font-playfair text-[#d3ae8b] mb-8">
                ✨ Your Daily Oracle Reading ✨
              </h1>
              
              <p className="text-[#d3ae8b]/80 mb-6">
                {dailyFortune.zodiacInfluence}
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl text-[#d3ae8b] mb-4">Positive Energies Today</h3>
                  <ul className="space-y-2 text-[#d3ae8b]/80">
                    {dailyFortune.positiveEnergies.map((energy, index) => (
                      <li key={index} className="flex items-center justify-center space-x-2">
                        <span>●</span>
                        <span>{energy}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl text-[#d3ae8b] mb-4">Points of Awareness</h3>
                  <ul className="space-y-2 text-[#d3ae8b]/80">
                    {dailyFortune.awareness.map((point, index) => (
                      <li key={index} className="flex items-center justify-center space-x-2">
                        <span>●</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 p-4 bg-[#2a3b4f] rounded-lg">
                  <h3 className="text-xl text-[#d3ae8b] mb-4">Lucky Elements</h3>
                  <div className="grid grid-cols-3 gap-4 text-[#d3ae8b]/80">
                    <div>
                      <p className="font-medium">Number</p>
                      <p>{dailyFortune.lucky.number}</p>
                    </div>
                    <div>
                      <p className="font-medium">Time</p>
                      <p>{dailyFortune.lucky.time}</p>
                    </div>
                    <div>
                      <p className="font-medium">Color</p>
                      <p>{dailyFortune.lucky.color}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Initial State - No Selection */}
          {!selectedSign && !isLoading && !dailyFortune && (
            <div className="text-center text-[#d3ae8b]/80">
              <p>Click the oracle to select your sun sign</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
