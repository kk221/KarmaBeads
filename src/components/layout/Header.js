import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-md fixed w-full z-50 border-b border-purple-100">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold">
            KarmaBeads
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/zodiac" className="text-gray-700 hover:text-purple-600">
              Zodiac
            </Link>
            <Link href="/horoscope" className="text-gray-700 hover:text-purple-600">
              Horoscope
            </Link>
            <Link href="/birth-chart" className="text-gray-700 hover:text-purple-600">
              Birth Chart
            </Link>
            <Link href="/fengshui" className="text-gray-700 hover:text-purple-600">
              FengShui
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
