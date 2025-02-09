'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function DailyOracle() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="pt-16 pb-12 bg-[#1d2a3a]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className={`flex ${isScrolled ? 'justify-start' : 'justify-center'} items-center transition-all duration-500`}
          animate={{ 
            scale: isScrolled ? 0.8 : 1,
            y: isScrolled ? -20 : 0
          }}
        >
          <Image
            src="/images/daily-zodiac.svg"
            alt="Daily Oracle"
            width={isScrolled ? 60 : 120}
            height={isScrolled ? 60 : 120}
            className="transition-all duration-500"
          />
          <motion.h1 
            className={`ml-4 text-[#d3ae8b] font-playfair ${isScrolled ? 'text-2xl' : 'text-4xl'}`}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            Get Your Prediction
          </motion.h1>
        </motion.div>

        <div className="mt-8 text-center">
          <h2 className="text-2xl text-[#d3ae8b] mb-6">✨ Your Daily Oracle Reading ✨</h2>
          <p className="text-[#d3ae8b]/90 mb-8">
            Today's energy brings unexpected opportunities for growth
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl text-[#d3ae8b] mb-4">Positive Energies Today</h3>
              <ul className="space-y-2 text-[#d3ae8b]/80">
                <li>●New connections will prove valuable</li>
                <li>●Financial prospects are improving</li>
                <li>●Creative energy is at its peak</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl text-[#d3ae8b] mb-4">Points of Awareness</h3>
              <ul className="space-y-2 text-[#d3ae8b]/80">
                <li>●Avoid hasty decisions</li>
                <li>●Take time for self-reflection</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl text-[#d3ae8b] mt-12">
            Explore Your Spiritual Journey
          </h2>
        </div>
      </div>
    </section>
  )
}
