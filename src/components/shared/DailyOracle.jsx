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
    <div className="fixed inset-0 bg-[#1d2a3a]"> {/* Fixed positioning */}
      <StarsBackground />
      
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Logo */}
        <div className="mb-12 animate-float">
          <Image
            src="/images/logo.svg"
            alt="Oracle Logo"
            width={180}
            height={180}
            priority
           className="relative z-20" {/* Ensure logo is above stars */}
          />
        </div>

        {/* CTA Button */}
        <button
          onClick={() => setIsSignSelectorOpen(true)}
         className="cta-button relative z-20" {/* Ensure button is above stars */}
        >
          <span className="star-icon">✨</span>
          Get Your Daily Prediction
          <span className="star-icon">✨</span>
        </button>

        {/* Sign Selector Modal */}
        {isSignSelectorOpen && (
          <div className="modal-overlay" onClick={() => setIsSignSelectorOpen(false)}>
            <div className="sign-selector" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setIsSignSelectorOpen(false)}>×</button>
              <h2 className="sign-selector-title">Select Your Sun Sign</h2>
              <div className="signs-grid">
                {zodiacSigns.map(({ sign, symbol }) => (
                  <button
                    key={sign}
                    onClick={() => handleSignSelect(sign)}
                    className="sign-button"
                    disabled={isLoading}
                  >
                    <span className="sign-symbol">{symbol}</span>
                    <span className="sign-name">{sign}</span>
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

              <div className="fortune-content">
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
