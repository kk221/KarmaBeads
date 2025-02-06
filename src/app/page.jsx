import Hero from '../components/shared/Hero'
import Features from '../components/shared/Features'
import DailyOracle from '../components/shared/DailyOracle'
import ZodiacPreview from '../components/zodiac/ZodiacPreview'

export default function Home() {
  return (
    <main className="bg-midnight-900 min-h-screen">
      {/* Hero Section with Animated Stars */}
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/stars-bg.png')] opacity-50" />
        <Hero />
      </div>

      {/* Free Daily Reading Section */}
      <section className="bg-gradient-to-b from-midnight-900 to-purple-900 py-20">
        <DailyOracle />
      </section>

      {/* Main Features */}
      <Features />

      {/* Current Zodiac Period */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 py-16">
        <ZodiacPreview />
      </section>
    </main>
  )
}
