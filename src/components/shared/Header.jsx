'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()
  
  const navLinks = [
    { href: '/zodiac', label: 'Zodiac' },
    { href: '/horoscope', label: 'Horoscope' },
    { href: '/birth-chart', label: 'Birth Chart' },
    { href: '/fengshui', label: 'Feng Shui' },
    { href: '/tarot', label: 'Tarot' },
  ]

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-[#1d2a3a] border-b border-[#d3ae8b]/20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-24">
          {/* Logo on the left */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.svg"
              alt="KarmaBeads Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  px-4 py-2 rounded-lg text-lg font-playfair transition-all
                  ${pathname === link.href 
                    ? 'bg-[#2a3b4f] text-[#d3ae8b]' 
                    : 'text-[#d3ae8b]/80 hover:bg-[#2a3b4f] hover:text-[#d3ae8b]'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 text-[#d3ae8b] hover:bg-[#2a3b4f] rounded-lg"
            aria-label="Open menu"
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
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-64 bg-[#1d2a3a] shadow-lg lg:hidden transform transition-transform duration-200 ease-in-out">
            <div className="p-5">
              {/* Close button */}
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="mb-8 p-2 text-[#d3ae8b] hover:bg-[#2a3b4f] rounded-lg"
                aria-label="Close menu"
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
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Sidebar Navigation */}
              <div className="space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      block px-4 py-3 rounded-lg text-lg font-playfair transition-all
                      ${pathname === link.href 
                        ? 'bg-[#2a3b4f] text-[#d3ae8b]' 
                        : 'text-[#d3ae8b]/80 hover:bg-[#2a3b4f] hover:text-[#d3ae8b]'
                      }
                    `}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
