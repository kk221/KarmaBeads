// app/layout.jsx
import { Inter, Playfair_Display } from 'next/font/google'
import '../styles/globals.css'
import Header from './Header'
import Footer from './Footer'

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
