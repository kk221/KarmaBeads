import { Playfair_Display } from 'next/font/google'
import '../styles/globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  display: 'swap'
})

export const metadata = {
  title: 'Daily Oracle - Your Spiritual Guide',
  description: 'Get your daily astrological predictions and spiritual guidance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={playfair.className}>
      <body className="min-h-screen bg-[#1d2a3a] text-[#d3ae8b]">
        {children}
      </body>
    </html>
  )
}
