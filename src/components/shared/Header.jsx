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
    { href: '/explore', label: 'Explore More →', isHighlighted: true }
  ]

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-[#1d2a3a] border-b border-[#d3ae8b]/20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-24">
          {/* Logo on the left */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/daily-zodiac.svg"
              alt="KarmaBeads Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
          </Link>

          {/* Navigation on the right */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-playfair transition-colors
                  ${link.isHighlighted 
                    ? 'text-2xl text-[#d3ae8b] hover:text-[#d3ae8b] font-bold' 
                    : `text-[#d3ae8b]/80 hover:text-[#d3ae8b] ${
                        pathname === link.href ? 'text-[#d3ae8b]' : ''
                      }`
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#d3ae8b]"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#d3ae8b]/20">
            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-2 px-4 text-lg font-playfair
                    ${link.isHighlighted 
                      ? 'text-xl text-[#d3ae8b] font-bold' 
                      : `text-[#d3ae8b]/80 hover:text-[#d3ae8b] ${
                          pathname === link.href ? 'text-[#d3ae8b]' : ''
                        }`
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
