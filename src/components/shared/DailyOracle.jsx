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

        {/* CTA Button */}
        <button
          onClick={() => setIsSignSelectorOpen(true)}
          className="main-cta-button"
          disabled={isLoading}
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

        {/* Sign Selector Modal */}
        {isSignSelectorOpen && (
          <div className="modal-overlay" onClick={() => setIsSignSelectorOpen(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setIsSignSelectorOpen(false)}>×</button>
              <h2 className="text-2xl text-center mb-6">Select Your Sun Sign</h2>
              <div className="grid grid-cols-3 gap-4 p-6">
                {zodiacSigns.map(({ sign, symbol }) => (
                  <button
                    key={sign}
                    onClick={() => handleSignSelect(sign)}
                    className="sign-button"
                    disabled={isLoading}
                  >
                    <span className="text-2xl mb-2">{symbol}</span>
                    <span className="capitalize">{sign}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

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
