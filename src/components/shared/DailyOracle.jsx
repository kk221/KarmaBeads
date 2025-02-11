'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function DailyOracle() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [dailyFortune, setDailyFortune] = useState({
    positiveEnergies: [],
    awareness: [],
    zodiacInfluence: '',
    lucky: {
      number: '',
      time: '',
      color: ''
    }
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchDailyFortune = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('/api/daily-fortune')
        const data = await response.json()
        
        if (response.ok) {
          setDailyFortune(data)
        } else {
          throw new Error(data.error || 'Failed to fetch fortune')
        }
      } catch (error) {
        console.error('Error fetching daily fortune:', error)
        // Set fallback data
        setDailyFortune({
          positiveEnergies: ['Stay positive today'],
          awareness: ['Take things one step at a time'],
          zodiacInfluence: 'Mixed planetary influences',
          lucky: {
            number: '7',
            time: '12:00',
            color: 'Blue'
          }
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchDailyFortune()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#d3ae8b]"></div>
      </div>
    )
  }

  return (
    <section className="pt-16 pb-12 bg-[#1d2a3a]">
      <div className="max-w-7xl mx-auto px-4">
        <div 
          className={`flex ${isScrolled ? 'justify-start scale-90 -translate-y-5' : 'justify-center'} 
            items-center transition-all duration-500`}
        >
          <div className="text-center">
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
        </div>
      </div>
    </section>
  )
}