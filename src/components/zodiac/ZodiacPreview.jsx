import Link from 'next/link'
import Button from '../shared/Button'

export default function ZodiacPreview() {
  // Get current zodiac period
  const currentZodiac = {
    sign: 'Aquarius',
    dates: 'January 20 - February 18',
    element: 'Air',
    symbol: '♒',
    description: 'The Water Bearer represents innovation, independence, and humanitarian ideals.'
  }

  return (
    <div className="container mx-auto px-4">
      <div className="bg-gradient-to-r from-purple-800/50 to-indigo-800/50 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20">
        <div className="text-center mb-8">
          <div className="text-6xl text-purple-100 mb-4">{currentZodiac.symbol}</div>
          <h2 className="text-3xl font-playfair text-purple-100 mb-2">
            Current Zodiac: {currentZodiac.sign}
          </h2>
          <p className="text-purple-200">{currentZodiac.dates}</p>
        </div>
        
        <div className="max-w-2xl mx-auto text-purple-100/80 text-center mb-8">
          <p>{currentZodiac.description}</p>
        </div>

        <div className="text-center">
          <Link href={`/zodiac/${currentZodiac.sign.toLowerCase()}`}>
            <Button variant="secondary">
              Learn More About {currentZodiac.sign}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
