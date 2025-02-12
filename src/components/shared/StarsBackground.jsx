'use client'

import { useEffect, useRef } from 'react'

export default function StarsBackground() {
  const starsRef = useRef(null)

  useEffect(() => {
    const starsContainer = starsRef.current
    const numberOfStars = 100
    const numberOfShootingStars = 5

    // Only zodiac symbols
    const zodiacSymbols = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓']

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
    zodiacSymbols.forEach((symbol) => {
      const zodiacElement = document.createElement('div')
      zodiacElement.className = 'zodiac-symbol'
      zodiacElement.textContent = symbol
      zodiacElement.style.left = `${Math.random() * 90 + 5}%`
      zodiacElement.style.top = `${Math.random() * 90 + 5}%`
      zodiacElement.style.animationDelay = `${Math.random() * 10}s`
      zodiacElement.style.color = '#d3ae8b'
      zodiacElement.style.setProperty('--rotation-speed', `${20 + Math.random() * 10}s`)
      zodiacElement.style.setProperty('--float-distance', `${10 + Math.random() * 20}px`)
      
      starsContainer.appendChild(zodiacElement)
    })

    return () => {
      while (starsContainer.firstChild) {
        starsContainer.removeChild(starsContainer.firstChild)
      }
    }
  }, [])

  return <div ref={starsRef} className="stars bg-[#1d2a3a]" />
}
