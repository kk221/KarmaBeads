'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  
  const navLinks = [
    { href: '/zodiac', label: 'Zodiac' },
    { href: '/horoscope', label: 'Horoscope' },
    { href: '/birth-chart', label: 'Birth Chart' },
    { href: '/fengshui', label: 'Feng Shui' },
    { href: '/tarot', label: 'Tarot' },
  ]

  return (
    <header className="fixed w-full top-0 z-50 bg-[#1d2a3a] shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="logo">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="KarmaBeads Logo"
                width={100}
                height={100}
                className="h-[60px] w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg transition-colors ${
                  pathname === link.href 
                    ? 'text-[#d3ae8b]' 
                    : 'text-[#d3ae8b]/80 hover:text-[#d3ae8b]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6 text-[#d3ae8b]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden w-full mt-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg transition-colors ${
                  pathname === link.href 
                    ? 'text-[#d3ae8b]' 
                    : 'text-[#d3ae8b]/80 hover:text-[#d3ae8b]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
