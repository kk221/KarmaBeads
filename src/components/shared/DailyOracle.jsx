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
} from '/src/lib/zodiacUtils'

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
Number: ${dailyFortune.zodiacInfo.luckyNumber}
Time: ${dailyFortune.zodiacInfo.luckyTime}
Color: ${dailyFortune.zodiacInfo.luckyColor}

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
      if (data.error) {
        throw new Error(data.error)
      }

      // Add zodiac info using helper functions
      const zodiacInfo = {
        element: getZodiacElement(sign),
        quality: getZodiacQuality(sign),
        luckyNumber: getLuckyNumber(),
        luckyTime: getLuckyTime(),
        luckyColor: getLuckyColor(sign)
      }

      setDailyFortune({
        ...data,
        zodiacInfo // Include zodiac info in the fortune data
      })
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

        {/* Fortune Modal */}
        {isModalOpen && dailyFortune && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#1d2a3a] rounded-xl max-w-2xl w-full mx-4 overflow-hidden">
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

              <div className="p-6">
                <h2 className="fortune-title">✨ Your Daily Oracle Reading ✨</h2>

                {/* Zodiac Info */}
                <div className="fortune-section">
                  <h3>🌟 Zodiac Profile</h3>
                  <ul>
                    <li>Element: {dailyFortune.zodiacInfo.element}</li>
                    <li>Quality: {dailyFortune.zodiacInfo.quality}</li>
                  </ul>
                </div>

                {/* Daily Guidance */}
                <div className="fortune-section">
                  <h3>👁️ Daily Guidance</h3>
                  <p>{dailyFortune.awareness[0]}</p>
                </div>

                {/* Lucky Elements */}
                <div className="fortune-section">
                  <h3>🎯 Lucky Elements</h3>
                  <div className="lucky-grid">
                    <div>
                      <span className="lucky-icon">🔢</span>
                      <p>Number</p>
                      <p>{dailyFortune.zodiacInfo.luckyNumber}</p>
                    </div>
                    <div>
                      <span className="lucky-icon">⏰</span>
                      <p>Time</p>
                      <p>{dailyFortune.zodiacInfo.luckyTime}</p>
                    </div>
                    <div>
                      <span className="lucky-icon">🎨</span>
                      <p>Color</p>
                      <p>{dailyFortune.zodiacInfo.luckyColor}</p>
                    </div>
                  </div>
                </div>

                {/* Share Button */}
                <button 
                  onClick={shareReading}
                  className="share-button"
                >
                  💫 Share Your Reading
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
