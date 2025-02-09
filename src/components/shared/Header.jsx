'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()
  
  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById('mobile-sidebar')
      const menuButton = document.getElementById('menu-button')
      if (sidebar && !sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        setIsSidebarOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
                src="/images/daily-zodiac.svg"
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
            id="menu-button"
            onClick={() => setIsSidebarOpen(true)}
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

        {/* Mobile Sidebar */}
        {isSidebarOpen && (
          <>
            {/* Overlay */}
            <div 
              className="fixed inset-0 bg-black/50 md:hidden z-40"
              onClick={() => setIsSidebarOpen(false)}
            />
            
            {/* Sidebar */}
            <div 
              id="mobile-sidebar"
              className={`fixed top-0 right-0 h-full w-64 bg-[#1d2a3a] shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden
                ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
              <div className="p-5">
                {/* Close button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-2 hover:bg-[#2a3b4f] rounded-lg"
                  >
                    <svg 
                      className="w-6 h-6 text-[#d3ae8b]" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Sidebar Navigation */}
                <div className="space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block py-3 px-4 text-lg rounded-lg transition-colors
                        ${pathname === link.href 
                          ? 'bg-[#2a3b4f] text-[#d3ae8b]' 
                          : 'text-[#d3ae8b]/80 hover:bg-[#2a3b4f] hover:text-[#d3ae8b]'
                        }`}
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
      </nav>
    </header>
  )
}
