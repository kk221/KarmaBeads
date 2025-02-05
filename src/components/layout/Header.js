import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">KarmaBeads</Link>
        <div>
          <Link href="/zodiac">Zodiac</Link>
          <Link href="/horoscope">Horoscope</Link>
          <Link href="/tarot">Tarot</Link>
          <Link href="/numerology">Numerology</Link>
        </div>
      </nav>
    </header>
  )
}
