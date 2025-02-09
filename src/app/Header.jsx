'use client'

import { useState } from 'react'
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

  return (
    <>
      <header className="bg-[#1d2a3a] fixed w-full top-0 z-50 border-b border-[#d3ae8b]/20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <nav className="flex items-center justify-between h-24">
            {/* Logo Section */}
            <Link 
              href="/" 
              className="flex items-center space-x-3"
            >
              <Image
                src="/images/logo.svg"
                alt="KarmaBeads Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="text-2xl font-bold text-[#d3ae8b] font-playfair">
                KarmaBeads
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-medium transition-colors hover:text-[#d3ae8b] ${
                    pathname === link.href 
                      ? 'text-[#d3ae8b] border-b-2 border-[#d3ae8b] pb-1' 
                      : 'text-[#d3ae8b]/80'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#d3ae8b]"
              aria-label="Toggle navigation menu"
            >
              <svg 
                className="w-8 h-8" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#1d2a3a] border-t border-[#d3ae8b]/20">
            <div className="max-w-[1400px] mx-auto px-4 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-3 px-4 text-lg rounded-lg transition-colors ${
                    pathname === link.href 
                      ? 'bg-[#d3ae8b]/10 text-[#d3ae8b] font-medium' 
                      : 'text-[#d3ae8b]/80 hover:bg-[#d3ae8b]/10 hover:text-[#d3ae8b]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
      {/* Spacer */}
      <div className="h-24" />
    </>
  )
}
