import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KarmaBeads - Spiritual Guidance & Astrology',
  description: 'Discover your spiritual path through astrology, tarot, and numerology',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-b from-purple-50 to-white`}>
        <header className="bg-purple-900 text-white">
          <nav className="container mx-auto px-4 py-6">
            <div className="flex flex-wrap justify-between items-center">
              <a href="/" className="text-2xl font-bold">KarmaBeads</a>
              <nav className="space-x-6">
                <a href="/zodiac" className="hover:text-purple-200">Zodiac</a>
                <a href="/horoscope" className="hover:text-purple-200">Horoscope</a>
                <a href="/birth-chart" className="hover:text-purple-200">Birth Chart</a>
                <a href="/numerology" className="hover:text-purple-200">Numerology</a>
                <a href="/tarot" className="hover:text-purple-200">Tarot</a>
              </nav>
            </div>
          </nav>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-purple-900 text-white mt-12">
          <div className="container mx-auto px-4 py-8 text-center">
            <p>© 2024 KarmaBeads. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
