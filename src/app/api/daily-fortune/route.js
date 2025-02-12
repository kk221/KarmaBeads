import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic' // This is important

// app/api/daily-fortune/route.js
export async function GET(request) {
  try {
    const sign = request.nextUrl.searchParams.get('sign')
    
    if (!sign) {
      return NextResponse.json(
        { error: 'Missing zodiac sign parameter' },
        { status: 400 }
      )
    }

    const apiResponse = await fetch(
      `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign}&day=today`,
      { cache: 'no-store' }
    )

    if (!apiResponse.ok) {
      throw new Error(`External API responded with status: ${apiResponse.status}`)
    }

    const externalData = await apiResponse.json()
    
    const fortune = {
      positiveEnergies: [
        `Zodiac Sign: ${sign.toUpperCase()}`,
        `Element: ${getZodiacElement(sign)}`,
        `Quality: ${getZodiacQuality(sign)}`
      ],
      awareness: [externalData.data?.horoscope_data || 'No guidance available today'],
      zodiacInfluence: `${sign.toUpperCase()} - ${new Date().toLocaleDateString()}`,
      lucky: {
        number: getLuckyNumber(),
        time: getLuckyTime(),
        color: getLuckyColor(sign)
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
