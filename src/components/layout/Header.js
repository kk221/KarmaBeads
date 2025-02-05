import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-md fixed w-full z-50 border-b border-purple-100 shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-playfair font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            KarmaBeads
          </Link>

          {/* Main Navigation */}
          <div className="hidden md:flex space-x-8">
            <div className="group relative">
              <Link href="/zodiac" className="text-gray-700 hover:text-purple-600 transition-colors py-8">
                Zodiac Signs
              </Link>
              <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 w-48">
                <div className="space-y-2">
                  <Link href="/zodiac/aries" className="block text-gray-600 hover:text-purple-600">Aries</Link>
                  <Link href="/zodiac/taurus" className="block text-gray-600 hover:text-purple-600">Taurus</Link>
                  {/* Add other signs */}
                </div>
              </div>
            </div>
            <Link href="/horoscope" className="text-gray-700 hover:text-purple-600 transition-colors py-8">
              Daily Horoscopes
            </Link>
            <Link href="/birth-chart" className="text-gray-700 hover:text-purple-600 transition-colors py-8">
              Birth Chart
            </Link>
            <Link href="/tarot" className="text-gray-700 hover:text-purple-600 transition-colors py-8">
              Tarot
            </Link>
          </div>

          {/* CTA Button */}
          <Button variant="primary" className="hidden md:block">
            Get Reading
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}
