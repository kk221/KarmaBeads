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
      <header className="bg-white fixed w-full top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex flex-wrap items-center justify-between py-4 md:py-5">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3"
            >
              <Image
                src="/images/logo.svg"
                alt="KarmaBeads Logo"
                width={40}
                height={40}
                className="w-auto h-10 md:h-12"
              />
              <span className="text-xl md:text-2xl font-bold text-indigo-900 font-playfair">
                KarmaBeads
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base lg:text-lg hover:text-indigo-600 transition-colors ${
                    pathname === link.href 
                      ? 'text-indigo-600 font-medium' 
                      : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-indigo-50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <svg 
                className="w-6 h-6 text-indigo-900" 
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
          <div className="md:hidden border-t border-gray-100">
            <div className="container mx-auto px-4">
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-3 px-4 rounded-lg transition-colors ${
                      pathname === link.href 
                        ? 'bg-indigo-50 text-indigo-600 font-medium' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-20 md:h-24" />
    </>
  )
}
