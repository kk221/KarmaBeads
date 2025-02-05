import Button from './Button'
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-purple-50 to-white pt-32 pb-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Discover Your Spiritual Path
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Explore the ancient wisdom of astrology, tarot, and numerology to guide your journey
        </p>
        <Button variant="primary" size="lg">
          Get Your Free Reading
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"/>
    </section>
  )
}
