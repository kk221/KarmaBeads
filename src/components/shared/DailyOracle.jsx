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

  const zodiacSigns = [
    {
      sign: 'aries',
      symbol: '♈',
      name: 'Aries',
      date: 'Mar 21 - Apr 19',
      element: '🔥 Fire'
    },
    {
      sign: 'taurus',
      symbol: '♉',
      name: 'Taurus',
      date: 'Apr 20 - May 20',
      element: '🌍 Earth'
    },
    {
      sign: 'gemini',
      symbol: '♊',
      name: 'Gemini',
      date: 'May 21 - Jun 20',
      element: '💨 Air'
    },
    {
      sign: 'cancer',
      symbol: '♋',
      name: 'Cancer',
      date: 'Jun 21 - Jul 22',
      element: '💧 Water'
    },
    {
      sign: 'leo',
      symbol: '♌',
      name: 'Leo',
      date: 'Jul 23 - Aug 22',
      element: '🔥 Fire'
    },
    {
      sign: 'virgo',
      symbol: '♍',
      name: 'Virgo',
      date: 'Aug 23 - Sep 22',
      element: '🌍 Earth'
    },
    {
      sign: 'libra',
      symbol: '♎',
      name: 'Libra',
      date: 'Sep 23 - Oct 22',
      element: '💨 Air'
    },
    {
      sign: 'scorpio',
      symbol: '♏',
      name: 'Scorpio',
      date: 'Oct 23 - Nov 21',
      element: '💧 Water'
    },
    {
      sign: 'sagittarius',
      symbol: '♐',
      name: 'Sagittarius',
      date: 'Nov 22 - Dec 21',
      element: '🔥 Fire'
    },
    {
      sign: 'capricorn',
      symbol: '♑',
      name: 'Capricorn',
      date: 'Dec 22 - Jan 19',
      element: '🌍 Earth'
    },
    {
      sign: 'aquarius',
      symbol: '♒',
      name: 'Aquarius',
      date: 'Jan 20 - Feb 18',
      element: '💨 Air'
    },
    {
      sign: 'pisces',
      symbol: '♓',
      name: 'Pisces',
      date: 'Feb 19 - Mar 20',
      element: '💧 Water'
    }
  ]

  const fetchHoroscope = async (sign) => {
    try {
      setIsLoading(true)
      console.log('Fetching horoscope for sign:', sign) // Debug log


      const response = await fetch(`/api/daily-fortune?sign=${sign}`)
      const data = await response.json()
      
      if (response.ok) {
        setDailyFortune(data)
        setIsSignSelectorOpen(false)
        setIsModalOpen(true)
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignSelect = (sign) => {
    setSelectedSign(sign)
    fetchHoroscope(sign)
  }

  const shareReading = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Daily Oracle Reading',
        text: `${dailyFortune.zodiacInfluence}\n\n${dailyFortune.awareness.join('\n')}`,
      }).catch(console.error)
    }
  }

  return (
   <div className="fixed inset-0 flex items-center justify-center bg-[#1d2a3a] overflow-hidden">
      <StarsBackground />
      
      <div className="relative z-30 flex flex-col items-center justify-center gap-8 p-4">
        {/* Logo */}
        <div className="animate-float">
          <Image
            src="/images/logo.svg"
            alt="Oracle Logo"
            width={180}
            height={180}
            priority
            className="drop-shadow-2xl"
          />
        </div>

       {/* Sun Sign Selection Form */}
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          <div className="zodiac-select-container">
            <select
              value={selectedSign}
              onChange={(e) => setSelectedSign(e.target.value)}
              className="select-zodiac"
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
              <div className="flex items-center gap-2">
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
      </div>
    </div>
  )
}
