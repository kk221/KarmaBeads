import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic' // This is important

export async function GET(request) {
  try {
    const sign = request.nextUrl.searchParams.get('sign')
    const sunSign = sign?.toLowerCase() || getCurrentSunSign()
    
    console.log('Fetching horoscope for:', sunSign)

    const response = await fetch(
      `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sunSign}&day=today`,
      { cache: 'no-store' } // Disable caching
    )

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`)
    }

    const data = await response.json()
    console.log('API Response:', data)

    const fortune = {
      positiveEnergies: [
        `Zodiac Sign: ${sunSign.toUpperCase()}`,
        `Element: ${getZodiacElement(sunSign)}`,
        `Quality: ${getZodiacQuality(sunSign)}`
      ],
      awareness: [
        data.data.horoscope_data
      ],
      zodiacInfluence: `${sunSign.toUpperCase()} - ${new Date().toLocaleDateString()}`,
      lucky: {
        number: getLuckyNumber(),
        time: getLuckyTime(),
        color: getLuckyColor(sunSign)
      }
    }

    return NextResponse.json(fortune)
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to fetch fortune',
        details: error.message 
      }, 
      { status: 500 }
    )
  }
}
