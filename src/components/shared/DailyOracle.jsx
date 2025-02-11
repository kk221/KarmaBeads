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
    console.log('Fetching horoscope for:', sign); // Debug log
    
    const response = await fetch(`/api/daily-fortune?sign=${sign}`)
    const data = await response.json()
    
    console.log('API response:', data); // Debug log
    
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
    <section className="min-h-screen flex items-center justify-center py-8 px-4">
      <div className="max-w-3xl w-full">
        <div className="flex flex-col items-center">
          {/* Logo Button */}
          <div className="relative mb-12">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="transition-transform hover:scale-105 focus:outline-none"
              aria-label="Select your sun sign"
            >
              <Image
                src="/images/logo.svg"
                alt="Oracle Logo"
                width={120}
                height={120}
                className="rounded-full"
                priority
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute z-50 mt-4 w-56 rounded-xl shadow-lg bg-[#2a3b4f] ring-1 ring-black ring-opacity-5 transform -translate-x-1/2 left-1/2">
                <div className="py-2 grid grid-cols-2 gap-1">
                  {zodiacSigns.map((sign) => (
                    <button
                      key={sign}
                      onClick={() => handleSignSelect(sign)}
                      className="px-4 py-3 text-sm text-[#d3ae8b] hover:bg-[#1d2a3a] transition-colors capitalize w-full text-center"
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
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#d3ae8b]"></div>
            </div>
          )}

          {/* Fortune Display */}
          {dailyFortune && !isLoading && (
            <div className="w-full animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-playfair text-[#d3ae8b] mb-8 text-center">
                ✨ Your Daily Oracle Reading ✨
              </h1>
              
              <p className="text-[#d3ae8b]/80 mb-8 text-center text-lg">
                {dailyFortune.zodiacInfluence}
              </p>
              
              <div className="space-y-10">
                <div className="bg-[#2a3b4f] rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl text-[#d3ae8b] mb-4">Positive Energies Today</h3>
                  <ul className="space-y-3 text-[#d3ae8b]/80">
                    {dailyFortune.positiveEnergies.map((energy, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="text-[#d3ae8b]">●</span>
                        <span>{energy}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#2a3b4f] rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl text-[#d3ae8b] mb-4">Points of Awareness</h3>
                  <ul className="space-y-3 text-[#d3ae8b]/80">
                    {dailyFortune.awareness.map((point, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="text-[#d3ae8b]">●</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#2a3b4f] rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl text-[#d3ae8b] mb-4">Lucky Elements</h3>
                  <div className="grid grid-cols-3 gap-6 text-[#d3ae8b]/80">
                    <div className="text-center">
                      <p className="font-medium mb-2">Number</p>
                      <p>{dailyFortune.lucky.number}</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium mb-2">Time</p>
                      <p>{dailyFortune.lucky.time}</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium mb-2">Color</p>
                      <p>{dailyFortune.lucky.color}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Initial State */}
          {!selectedSign && !isLoading && !dailyFortune && (
            <div className="text-center text-[#d3ae8b]/80 text-lg animate-pulse">
              <p>Click the oracle to discover your daily reading</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
