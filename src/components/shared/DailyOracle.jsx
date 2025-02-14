'use client'

import { useState } from 'react'
import Image from 'next/image'
import StarsBackground from './StarsBackground'
import {
  getZodiacElement,
  getZodiacQuality,
  getLuckyNumber,
  getLuckyTime,
  getLuckyColor
} from '@/lib/zodiacUtils'

export default function DailyOracle() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedSign, setSelectedSign] = useState(null)
  const [dailyFortune, setDailyFortune] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // Add shareReading function
  const shareReading = async () => {
    if (!dailyFortune) return

    const shareText = `
🌟 My Daily Oracle Reading for ${dailyFortune.zodiacInfluence}

✨ Zodiac Energies:
${dailyFortune.positiveEnergies.join('\n')}

👁️ Daily Guidance:
${Array.isArray(dailyFortune.awareness) 
  ? dailyFortune.awareness.join('\n')
  : dailyFortune.awareness}

🎯 Lucky Elements:
Number: ${dailyFortune.lucky.number}
Time: ${dailyFortune.lucky.time}
Color: ${dailyFortune.lucky.color}

Get your reading at https://goodkarmabeads.com/
    `.trim()

    try {
      if (navigator.share) {
        await navigator.share({
          title: 'My Daily Oracle Reading',
          text: shareText
        })
      } else {
        // Fallback for browsers that don't support Web Share API
        await navigator.clipboard.writeText(shareText)
        alert('Reading copied to clipboard!')
      }
    } catch (error) {
      console.error('Error sharing:', error)
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(shareText)
        alert('Reading copied to clipboard!')
      } catch (clipboardError) {
        console.error('Error copying to clipboard:', clipboardError)
        setError('Unable to share reading. Please try again.')
      }
    }
  }

  // Zodiac signs data
  const zodiacSigns = [
    { sign: 'aries', symbol: '♈', name: 'Aries', date: 'Mar 21 - Apr 19', element: '🔥' },
    { sign: 'taurus', symbol: '♉', name: 'Taurus', date: 'Apr 20 - May 20', element: '🌍' },
    { sign: 'gemini', symbol: '♊', name: 'Gemini', date: 'May 21 - Jun 20', element: '💨' },
    { sign: 'cancer', symbol: '♋', name: 'Cancer', date: 'Jun 21 - Jul 22', element: '💧' },
    { sign: 'leo', symbol: '♌', name: 'Leo', date: 'Jul 23 - Aug 22', element: '🔥' },
    { sign: 'virgo', symbol: '♍', name: 'Virgo', date: 'Aug 23 - Sep 22', element: '🌍' },
    { sign: 'libra', symbol: '♎', name: 'Libra', date: 'Sep 23 - Oct 22', element: '💨' },
    { sign: 'scorpio', symbol: '♏', name: 'Scorpio', date: 'Oct 23 - Nov 21', element: '💧' },
    { sign: 'sagittarius', symbol: '♐', name: 'Sagittarius', date: 'Nov 22 - Dec 21', element: '🔥' },
    { sign: 'capricorn', symbol: '♑', name: 'Capricorn', date: 'Dec 22 - Jan 19', element: '🌍' },
    { sign: 'aquarius', symbol: '♒', name: 'Aquarius', date: 'Jan 20 - Feb 18', element: '💨' },
    { sign: 'pisces', symbol: '♓', name: 'Pisces', date: 'Feb 19 - Mar 20', element: '💧' }
  ]

  // Fetch horoscope data
  const fetchHoroscope = async (sign) => {
    try {
      setIsLoading(true)
      setError(null)
      setDailyFortune(null)

      const response = await fetch(`/api/daily-fortune?sign=${sign}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log('API Response:', data) // Log the API response

      if (data.error) {
        throw new Error(data.error)
      }

      setDailyFortune(data) // Use the API response directly
      setIsModalOpen(true)
    } catch (error) {
      console.error('Error fetching horoscope:', error)
      setError(error.message || 'Failed to fetch your horoscope. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (selectedSign) {
      await fetchHoroscope(selectedSign)
    }
  }

    // Add download card function
  const downloadFortuneCard = async () => {
    const cardElement = document.getElementById('fortune-card')
    if (!cardElement) return

    try {
      const canvas = await html2canvas(cardElement, {
        scale: 2,
        backgroundColor: '#1d2a3a',
        logging: false
      })

      const image = canvas.toDataURL('image/png')
      const link = document.createElement('a')
      link.href = image
      link.download = `daily-oracle-${selectedSign}-${new Date().toISOString().split('T')[0]}.png`
      link.click()
    } catch (error) {
      console.error('Error generating card:', error)
      setError('Failed to download fortune card. Please try again.')
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center min-h-screen bg-[#1d2a3a]">
      <StarsBackground />
      <main className="relative z-30 w-full max-w-4xl mx-auto p-4 flex flex-col items-center justify-center">
        {/* Logo and Form Container */}
        <div className="absolute top-8 w-full flex justify-center">
          <div className="relative w-[120px] h-[120px] mb-8 z-40">
            <Image
              src="https://raw.githubusercontent.com/kk221/KarmaBeads/main/public/images/logo.svg"
              alt="Oracle Logo"
              width={180}
              height={180}
              priority
              className="drop-shadow-2xl"
              style={{
                objectFit: 'contain',
                opacity: 1
              }}
            />
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="w-full max-w-md text-center text-red-400 bg-red-900/20 px-4 py-2 rounded-lg">
            {error}
          </div>
        )}

        {/* Sun Sign Selection Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col items-center gap-6 mt-32">
          <div className="w-full zodiac-select-container">
            <select
              value={selectedSign}
              onChange={(e) => setSelectedSign(e.target.value)}
              className="select-zodiac w-full"
              required
            >
              <option value="" disabled>Choose Your Sun Sign</option>
              {zodiacSigns.map(({ sign, symbol, name, date, element }) => (
                <option key={sign} value={sign} className="zodiac-option">
                  {symbol} {name} • {date} • {element}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="main-cta-button"
            disabled={isLoading || !selectedSign}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <span className="animate-spin">✨</span>
                Reading the stars...
              </div>
            ) : (
              <>
                <span className="star-icon">✨</span>
                Get Your Daily Prediction
                <span className="star-icon">✨</span>
              </>
            )}
          </button>
        </form>

               {/* Fortune Card */}
        {isModalOpen && dailyFortune && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#1d2a3a] rounded-xl max-w-2xl w-full mx-4 overflow-hidden">
              {/* Card Header */}
              <div className="flex justify-between items-center p-6 border-b border-[#d3ae8b]/20">
                <h2 className="text-2xl font-playfair text-[#d3ae8b]">
                  Your Daily Oracle Reading
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 text-[#d3ae8b] hover:text-[#d3ae8b]/80"
                >
                  ×
                </button>
              </div>

              {/* Fortune Card Content */}
              <div id="fortune-card" className="p-8 bg-gradient-to-b from-[#1d2a3a] to-[#2a3b4f] rounded-xl m-6 border-2 border-[#d3ae8b]/30">
                {/* Card Header */}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">{zodiacSigns.find(z => z.sign === selectedSign)?.symbol}</div>
                  <h2 className="text-2xl font-playfair text-[#d3ae8b] mb-1">
                    {dailyFortune.zodiacInfluence}
                  </h2>
                  <p className="text-[#d3ae8b]/60">{new Date().toLocaleDateString()}</p>
                </div>

                {/* Zodiac Profile */}
                <div className="space-y-6 text-[#d3ae8b]/90">
                  <div className="fortune-section">
                    <h3 className="text-lg font-medium mb-2">✨ Zodiac Energies</h3>
                    <ul className="space-y-1">
                      {dailyFortune.positiveEnergies.map((energy, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span>•</span> {energy}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Daily Guidance */}
                  <div className="fortune-section">
                    <h3 className="text-lg font-medium mb-2">👁️ Daily Guidance</h3>
                    <p className="leading-relaxed">
                      {dailyFortune.awareness[0]}
                    </p>
                  </div>

                  {/* Lucky Elements */}
                  <div className="fortune-section">
                    <h3 className="text-lg font-medium mb-3">🎯 Lucky Elements</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-[#2a3b4f]/50 rounded-lg">
                        <p className="text-sm">Number</p>
                        <p className="text-xl">{dailyFortune.lucky.number}</p>
                      </div>
                      <div className="text-center p-3 bg-[#2a3b4f]/50 rounded-lg">
                        <p className="text-sm">Time</p>
                        <p className="text-xl">{dailyFortune.lucky.time}</p>
                      </div>
                      <div className="text-center p-3 bg-[#2a3b4f]/50 rounded-lg">
                        <p className="text-sm">Color</p>
                        <p className="text-xl">{dailyFortune.lucky.color}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-6 text-center text-[#d3ae8b]/60 text-sm">
                  www.goodkarmabeads.com
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 flex gap-4">
                <button 
                  onClick={downloadFortuneCard}
                  className="flex-1 px-6 py-3 bg-[#d3ae8b] text-[#1d2a3a] rounded-lg font-semibold hover:bg-[#d3ae8b]/90 transition-colors"
                >
                  📥 Download Card
                </button>
                <button 
                  onClick={shareReading}
                  className="flex-1 px-6 py-3 border-2 border-[#d3ae8b] text-[#d3ae8b] rounded-lg font-semibold hover:bg-[#d3ae8b]/10 transition-colors"
                >
                  💫 Share Reading
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
