import Link from 'next/link'
import Image from 'next/image'

const zodiacSigns = [
  { name: 'Aries', dates: 'Mar 21 - Apr 19', image: '/images/zodiac/aries.jpg' },
  { name: 'Taurus', dates: 'Apr 20 - May 20', image: '/images/zodiac/taurus.jpg' },
  // ... other signs
]

export default function ZodiacGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {zodiacSigns.map((sign) => (
        <Link key={sign.name} href={`/zodiac/${sign.name.toLowerCase()}`}>
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <div className="relative h-32 mb-4">
              <Image
                src={sign.image}
                alt={sign.name}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold">{sign.name}</h3>
            <p className="text-gray-600 text-sm">{sign.dates}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
