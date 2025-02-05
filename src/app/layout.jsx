import { Inter, Playfair_Display } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'KarmaBeads - Spiritual Guidance & Astrology',
  description: 'Discover your spiritual path through astrology, tarot, and numerology',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-gradient-to-b from-purple-50 to-white min-h-screen">
        <header className="bg-white/80 backdrop-blur-md fixed w-full top-0 z-50 border-b border-purple-100">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <a href="/" className="text-2xl font-playfair font-bold text-purple-900">
                KarmaBeads
              </a>
              <nav className="hidden md:flex space-x-8">
                <a href="/zodiac" className="text-gray-600 hover:text-purple-600 transition-colors">Zodiac</a>
                <a href="/horoscope" className="text-gray-600 hover:text-purple-600 transition-colors">Horoscope</a>
                <a href="/birth-chart" className="text-gray-600 hover:text-purple-600 transition-colors">Birth Chart</a>
                <a href="/numerology" className="text-gray-600 hover:text-purple-600 transition-colors">Numerology</a>
                <a href="/tarot" className="text-gray-600 hover:text-purple-600 transition-colors">Tarot</a>
              </nav>
              <button className="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </header>
        <main className="container mx-auto px-4 pt-24 pb-12">
          {children}
        </main>
        <footer className="bg-purple-900 text-white mt-auto">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-playfair text-xl mb-4">KarmaBeads</h3>
                <p className="text-purple-200">Your guide to spiritual wisdom and self-discovery</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/zodiac" className="text-purple-200 hover:text-white">Zodiac Signs</a></li>
                  <li><a href="/horoscope" className="text-purple-200 hover:text-white">Daily Horoscope</a></li>
                  <li><a href="/birth-chart" className="text-purple-200 hover:text-white">Birth Chart</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="/blog" className="text-purple-200 hover:text-white">Blog</a></li>
                  <li><a href="/about" className="text-purple-200 hover:text-white">About Us</a></li>
                  <li><a href="/contact" className="text-purple-200 hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  {/* Add social media icons here */}
                </div>
              </div>
            </div>
            <div className="border-t border-purple-800 mt-8 pt-8 text-center text-purple-200">
              <p>© 2024 KarmaBeads. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
