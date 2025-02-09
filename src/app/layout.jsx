import { Playfair_Display } from 'next/font/google'
import Header from '/src/components/shared/Header'
import Footer from '/src/components/shared/Footer'
import '../styles/globals.css'


const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  display: 'swap'
})

export const metadata = {
  title: 'KarmaBeads - Spiritual Guidance & Astrology',
  description: 'Discover your spiritual path through astrology, tarot, and numerology',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={playfair.className}>
      <body className="bg-[#1d2a3a] text-[#d3ae8b] min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow mt-24"> {/* Added mt-24 for header spacing */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
