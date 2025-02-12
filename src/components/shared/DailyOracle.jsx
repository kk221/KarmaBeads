'use client'

import { useState } from 'react'
import Image from 'next/image'
import StarsBackground from './StarsBackground'
import html2canvas from 'html2canvas'

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

  const downloadAsImage = async () => {
    const element = document.getElementById('fortune-card')
    const canvas = await html2canvas(element)
    const data = canvas.toDataURL('image/png')
    const link = document.createElement('a')
    link.href = data
    link.download = 'my-daily-fortune.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="min-h-screen relative overflow-hidden bg-[#1d2a3a]">
      <StarsBackground />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Logo */}
        <div className="mb-12 animate-float">
          <Image
            src="/images/logo.svg"
            alt="Oracle Logo"
            width={180}
            height={180}
            priority
          />
        </div>

        {/* CTA Button */}
        <button
          onClick={() => setIsSignSelectorOpen(true)}
          className="cta-button"
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
                  onClick={downloadAsImage}
                  className="download-button"
                >
                  💫 Save Your Reading
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
