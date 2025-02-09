import { Inter, Playfair_Display } from 'next/font/google'
import LayoutClient from './LayoutClient'
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
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}
