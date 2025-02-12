'use client'

import { useEffect, useRef } from 'react'

export default function StarsBackground() {
  const starsRef = useRef(null)

  useEffect(() => {
    const starsContainer = starsRef.current
    const numberOfStars = 50
    const numberOfShootingStars = 3

    // Create regular stars
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div')
      star.className = `star star--${['small', 'medium', 'big'][Math.floor(Math.random() * 3)]}`
      
      // Random position
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`
      
      // Random animation delay
      star.style.animationDelay = `${Math.random() * 3}s`
      
      starsContainer.appendChild(star)
    }

    // Create shooting stars
    for (let i = 0; i < numberOfShootingStars; i++) {
      const shootingStar = document.createElement('div')
      shootingStar.className = 'shooting-star'
      
      // Random position
      shootingStar.style.left = `${Math.random() * 100}%`
      shootingStar.style.top = `${Math.random() * 50}%`
      
      // Random animation delay
      shootingStar.style.animationDelay = `${Math.random() * 4}s`
      
      starsContainer.appendChild(shootingStar)
    }

    // Cleanup function
    return () => {
      while (starsContainer.firstChild) {
        starsContainer.removeChild(starsContainer.firstChild)
      }
    }
  }, [])

  return <div ref={starsRef} className="stars" />
}
