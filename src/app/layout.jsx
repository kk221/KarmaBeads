import { Inter, Playfair_Display } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa'
import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap'
})

export const metadata = {
  title: 'KarmaBeads - Spiritual Guidance & Astrology',
  description: 'Discover your spiritual path through astrology, tarot, and numerology',
  themeColor: '#2E3A59',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-gradient-to-b from-indigo-50 to-white min-h-screen">
        <Header />
        <main className="container mx-auto px-4 pt-28 pb-16 md:pt-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

function Header() {
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
            className="text-2xl font-playfair font-bold text-indigo-900 hover:text-terracotta transition-colors"
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

function Footer() {
  return (
    <footer className="bg-indigo-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl">KarmaBeads</h3>
            <p className="text-indigo-200 text-sm leading-relaxed">
              Connect with your inner self through ancient wisdom and modern spirituality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                ['/zodiac', 'Zodiac Signs'],
                ['/horoscope', 'Daily Horoscope'],
                ['/birth-chart', 'Birth Chart'],
              ].map(([href, text]) => (
                <li key={href}>
                  <Link href={href} className="text-indigo-200 hover:text-white transition-colors text-sm">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {[
                ['/blog', 'Spiritual Blog'],
                ['/about', 'Our Philosophy'],
                ['/contact', 'Contact Support'],
              ].map(([href, text]) => (
                <li key={href}>
                  <Link href={href} className="text-indigo-200 hover:text-white transition-colors text-sm">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Stay Connected</h4>
            <div className="flex gap-4">
              {[
                [FaInstagram, 'https://instagram.com'],
                [FaFacebook, 'https://facebook.com'],
                [FaPinterest, 'https://pinterest.com'],
              ].map(([Icon, href], index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-indigo-200 hover:text-white transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-indigo-800 mt-8 pt-8 text-center">
          <p className="text-indigo-300 text-sm">
            © {new Date().getFullYear()} KarmaBeads. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
