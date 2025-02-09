// app/Header.jsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  
  const navLinks = [
    { href: '/zodiac', label: 'Zodiac' },
    { href: '/horoscope', label: 'Horoscope' },
    { href: '/birth-chart', label: 'Birth Chart' },
    { href: '/numerology', label: 'Numerology' },
    { href: '/tarot', label: 'Tarot' },
  ]

  return (
    <header className="bg-white/90 backdrop-blur-md fixed w-full top-0 z-50 border-b border-indigo-100 shadow-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="text-2xl font-bold text-indigo-900 hover:text-terracotta transition-colors font-playfair"
          >
            KarmaBeads
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-gray-700 hover:text-terracotta transition-colors ${
                  pathname === link.href ? 'text-terracotta font-medium' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-terracotta"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-2 px-4 rounded-lg hover:bg-indigo-50 ${
                    pathname === link.href ? 'bg-indigo-50 text-terracotta' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
