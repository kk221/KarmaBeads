'use client'

import { useState } from 'react'
import Image from 'next/image'
import StarsBackground from './StarsBackground'

export default function DailyOracle() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSignSelectorOpen, setIsSignSelectorOpen] = useState(false)
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

Get your reading at [Your Website URL]
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

  const zodiacSigns = [
    { sign: 'aries', symbol: '♈' },
    { sign: 'taurus', symbol: '♉' },
    { sign: 'gemini', symbol: '♊' },
    { sign: 'cancer', symbol: '♋' },
    { sign: 'leo', symbol: '♌' },
    { sign: 'virgo', symbol: '♍' },
    { sign: 'libra', symbol: '♎' },
    { sign: 'scorpio', symbol: '♏' },
    { sign: 'sagittarius', symbol: '♐' },
    { sign: 'capricorn', symbol: '♑' },
    { sign: 'aquarius', symbol: '♒' },
    { sign: 'pisces', symbol: '♓' }
  ]

  const fetchHoroscope = async (sign) => {
    try {
      setIsLoading(true)
      setError(null)
      
       const response = await fetch(`/api/daily-fortune?sign=${sign}`, {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache'
        }
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      
      if (data.error) {
        throw new Error(data.error)
      }

      setDailyFortune(data)
      setIsModalOpen(true)
    } catch (error) {
      console.error('Error fetching horoscope:', error)
      setError('Failed to fetch your horoscope. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (selectedSign) {
      await fetchHoroscope(selectedSign)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center min-h-screen bg-[#1d2a3a]">
      <StarsBackground />
           {/* Main Content Container */}
      <main className="relative z-30 w-full max-w-4xl mx-auto p-4 flex flex-col items-center justify-center">
        {/* Logo and Form Container */}
        <div className="w-full flex flex-col items-center gap-8">
          {/* Logo */}
         <div className="relative w-[180px] h-[180px]">
          <Image
            src="/public/images/logo.svg"
            alt="Oracle Logo"
            width={180}
            height={180}
            priority
            className="drop-shadow-2xl object-contain"
             style={{
                objectFit: 'contain',
                opacity: 1 // Ensure full opacity
              }}
          />
        </div>
        {/* Error Message */}
        {error && (
          <div className="w-full max-w-md text-center text-red-400 bg-red-900/20 px-4 py-2 rounded-lg">
              {error}
          </div>
        )}

        {/* Sun Sign Selection Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col items-center gap-6">
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
          </div>

        {/* Fortune Modal */}
        {isModalOpen && dailyFortune && (
          <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
            <div className="modal-content" id="fortune-card" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>

              <div className="p-6">
                <h2 className="fortune-title">✨ Your Daily Oracle Reading ✨</h2>
                
                <p className="fortune-date">{dailyFortune.zodiacInfluence}</p>
                
                <div className="fortune-section">
                  <h3>🌟 Positive Energies</h3>
                  <ul>
                    {dailyFortune.positiveEnergies.map((energy, index) => (
                      <li key={index}>✧ {energy}</li>
                    ))}
                  </ul>
                </div>

                <div className="fortune-section">
                  <h3>👁️ Points of Awareness</h3>
                  <ul>
                    {dailyFortune.awareness.map((point, index) => (
                      <li key={index}>✧ {point}</li>
                    ))}
                  </ul>
                </div>

                <div className="fortune-section">
                  <h3>🎯 Lucky Elements</h3>
                  <div className="lucky-grid">
                    <div>
                      <span className="lucky-icon">🔢</span>
                      <p>Number</p>
                      <p>{dailyFortune.lucky.number}</p>
                    </div>
                    <div>
                      <span className="lucky-icon">⏰</span>
                      <p>Time</p>
                      <p>{dailyFortune.lucky.time}</p>
                    </div>
                    <div>
                      <span className="lucky-icon">🎨</span>
                      <p>Color</p>
                      <p>{dailyFortune.lucky.color}</p>
                    </div>
                  </div>
                </div>

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
