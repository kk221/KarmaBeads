import Hero from '@/components/shared/Hero'
import Features from '@/components/shared/Features'
import ZodiacGrid from '@/components/zodiac/ZodiacGrid'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12">
            Explore Your Zodiac Sign
          </h2>
          <ZodiacGrid />
        </div>
      </section>
    </>
  )
}
