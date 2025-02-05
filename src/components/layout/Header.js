import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-purple-900 text-white">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            KarmaBeads
          </Link>
          <div className="space-x-6">
            <Link href="/zodiac">Zodiac</Link>
            <Link href="/horoscope">Horoscope</Link>
            <Link href="/birth-chart">Birth Chart</Link>
            <Link href="/numerology">Numerology</Link>
            <Link href="/tarot">Tarot</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
