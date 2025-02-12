'use client'

import { useEffect, useRef } from 'react'

export default function StarsBackground() {
  const starsRef = useRef(null)

  useEffect(() => {
    const starsContainer = starsRef.current
    const numberOfStars = 100 // Increased from 50
    const numberOfShootingStars = 5 // Increased from 3
    const numberOfZodiacSigns = 12

    // Zodiac symbols
    const zodiacSymbols = {
      aries: '♈',
      taurus: '♉',
      gemini: '♊',
      cancer: '♋',
      leo: '♌',
      virgo: '♍',
      libra: '♎',
      scorpio: '♏',
      sagittarius: '♐',
      capricorn: '♑',
      aquarius: '♒',
      pisces: '♓'
    }

    // Create regular stars
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div')
      star.className = `star star--${['small', 'medium', 'big'][Math.floor(Math.random() * 3)]}`
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`
      star.style.animationDelay = `${Math.random() * 3}s`
      starsContainer.appendChild(star)
    }

    // Create shooting stars
    for (let i = 0; i < numberOfShootingStars; i++) {
      const shootingStar = document.createElement('div')
      shootingStar.className = 'shooting-star'
      shootingStar.style.left = `${Math.random() * 100}%`
      shootingStar.style.top = `${Math.random() * 50}%`
      shootingStar.style.animationDelay = `${Math.random() * 4}s`
      starsContainer.appendChild(shootingStar)
    }

    // Create floating zodiac symbols
    Object.values(zodiacSymbols).forEach((symbol) => {
      const zodiac = document.createElement('div')
      zodiac.className = 'zodiac-symbol'
      zodiac.textContent = symbol
      zodiac.style.left = `${Math.random() * 100}%`
      zodiac.style.top = `${Math.random() * 100}%`
      zodiac.style.animationDelay = `${Math.random() * 10}s`
      zodiac.style.animationDuration = `${15 + Math.random() * 15}s`
      starsContainer.appendChild(zodiac)
    })

    return () => {
      while (starsContainer.firstChild) {
        starsContainer.removeChild(starsContainer.firstChild)
      }
    }
  }, [])

  return <div ref={starsRef} className="stars bg-[#1d2a3a]" />
}
