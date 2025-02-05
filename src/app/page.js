import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
          Discover Your Spiritual Path
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore the ancient wisdom of astrology, tarot, and numerology to guide your journey
        </p>
      </section>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Zodiac Card */}
        <Link href="/zodiac" className="group">
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
            <div className="h-48 relative mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/zodiac-wheel.jpg"
                alt="Zodiac Wheel"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2 group-hover:text-purple-600">
              Zodiac Signs
            </h2>
            <p className="text-gray-600">
              Discover your sun sign's traits, compatibility, and daily guidance
            </p>
          </div>
        </Link>

        {/* Tarot Card */}
        <Link href="/tarot" className="group">
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
            <div className="h-48 relative mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/tarot.jpg"
                alt="Tarot Cards"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2 group-hover:text-purple-600">
              Tarot Reading
            </h2>
            <p className="text-gray-600">
              Get insights into your past, present, and future through tarot
            </p>
          </div>
        </Link>

        {/* Birth Chart Card */}
        <Link href="/birth-chart" className="group">
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
            <div className="h-48 relative mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/birth-chart.jpg"
                alt="Birth Chart"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2 group-hover:text-purple-600">
              Birth Chart
            </h2>
            <p className="text-gray-600">
              Calculate your complete astrological profile
            </p>
          </div>
        </Link>
      </div>

      {/* Daily Horoscope Preview */}
      <section className="bg-white rounded-xl shadow-lg p-8 mt-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Today's Horoscope</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Add zodiac sign previews here */}
        </div>
        <div className="text-center mt-6">
          <Link href="/horoscope" 
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            View Full Horoscope
          </Link>
        </div>
      </section>
    </div>
  )
}
