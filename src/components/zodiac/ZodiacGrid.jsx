import Link from 'next/link'

const zodiacSigns = [
  { name: 'Aries', dates: 'Mar 21 - Apr 19', element: 'Fire', symbol: '♈' },
  { name: 'Taurus', dates: 'Apr 20 - May 20', element: 'Earth', symbol: '♉' },
  { name: 'Gemini', dates: 'May 21 - Jun 20', element: 'Air', symbol: '♊' },
  { name: 'Cancer', dates: 'Jun 21 - Jul 22', element: 'Water', symbol: '♋' },
  { name: 'Leo', dates: 'Jul 23 - Aug 22', element: 'Fire', symbol: '♌' },
  { name: 'Virgo', dates: 'Aug 23 - Sep 22', element: 'Earth', symbol: '♍' },
  { name: 'Libra', dates: 'Sep 23 - Oct 22', element: 'Air', symbol: '♎' },
  { name: 'Scorpio', dates: 'Oct 23 - Nov 21', element: 'Water', symbol: '♏' },
  { name: 'Sagittarius', dates: 'Nov 22 - Dec 21', element: 'Fire', symbol: '♐' },
  { name: 'Capricorn', dates: 'Dec 22 - Jan 19', element: 'Earth', symbol: '♑' },
  { name: 'Aquarius', dates: 'Jan 20 - Feb 18', element: 'Air', symbol: '♒' },
  { name: 'Pisces', dates: 'Feb 19 - Mar 20', element: 'Water', symbol: '♓' }
]

export default function ZodiacGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {zodiacSigns.map((sign) => (
        <Link 
          href={`/zodiac/${sign.name.toLowerCase()}`} 
          key={sign.name}
          className="group"
        >
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-3 text-purple-600 group-hover:scale-110 transition-transform">
              {sign.symbol}
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors">
              {sign.name}
            </h3>
            <p className="text-sm text-gray-500">{sign.dates}</p>
            <p className="text-sm text-purple-500 mt-1">Element: {sign.element}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
