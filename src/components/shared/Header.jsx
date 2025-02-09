'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  
  const navLinks = [
    { href: '/zodiac', label: 'Zodiac' },
    { href: '/horoscope', label: 'Horoscope' },
    { href: '/birth-chart', label: 'Birth Chart' },
    { href: '/fengshui', label: 'Feng Shui' },
    { href: '/tarot', label: 'Tarot' },
  ]

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-[#1d2a3a] shadow-lg">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="flex-1 flex items-center min-w-0">
              <Link 
                href="/" 
                className="flex items-center gap-3 group"
                aria-label="Home"
              >
                <div className="flex-shrink-0 relative w-12 h-12">
                  <Image
                    src="/images/logo.svg"
                    alt="KarmaBeads Logo"
                    fill
                    className="object-contain transition-transform group-hover:scale-105"
                  />
                </div>
                <span className="text-2xl font-playfair text-[#d3ae8b] tracking-wide hidden sm:block">
                  KarmaBeads
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 ml-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-lg font-medium transition-all
                    ${
                      pathname === link.href
                        ? 'text-[#d3ae8b] border-b-2 border-[#d3ae8b]'
                        : 'text-[#d3ae8b]/90 hover:text-[#d3ae8b] hover:border-b-2 hover:border-[#d3ae8b]/50'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#d3ae8b] rounded-md hover:bg-[#ffffff0d] transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg 
                className="w-8 h-8" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </nav>

          {/* Mobile Menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}>
            <div className="pt-2 pb-4 space-y-2 border-t border-[#d3ae8b]/20">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-6 py-3 text-lg font-medium rounded-lg mx-2 transition-colors
                    ${
                      pathname === link.href
                        ? 'bg-[#d3ae8b]/10 text-[#d3ae8b]'
                        : 'text-[#d3ae8b]/90 hover:bg-[#ffffff0d]'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
      
      {/* Dynamic spacer based on mobile menu state */}
      <div className={`transition-all duration-300 ${isMenuOpen ? 'h-64' : 'h-20'}`} />
    </>
  )
}
