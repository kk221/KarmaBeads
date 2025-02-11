import { NextResponse } from 'next/server'

export async function GET(request) {
  try {
    // Get the sign from the URL query parameters
    const { searchParams } = new URL(request.url)
    const selectedSign = searchParams.get('sign')
    const sunSign = selectedSign?.toLowerCase() || getCurrentSunSign()
    
    console.log('Fetching horoscope for:', sunSign)

    // Using the Horoscope App API with the selected sign
    const response = await fetch(
      `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sunSign}&day=today`
    )

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`)
    }

    const data = await response.json()
    console.log('API Response:', data)

    // Transform the data into our format
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

// ... rest of the helper functions remain the same ...

// Helper functions
function getZodiacElement(sign) {
  const elements = {
    aries: 'Fire',
    leo: 'Fire',
    sagittarius: 'Fire',
    taurus: 'Earth',
    virgo: 'Earth',
    capricorn: 'Earth',
    gemini: 'Air',
    libra: 'Air',
    aquarius: 'Air',
    cancer: 'Water',
    scorpio: 'Water',
    pisces: 'Water'
  }
  return elements[sign] || 'Unknown'
}

function getZodiacQuality(sign) {
  const qualities = {
    aries: 'Cardinal',
    cancer: 'Cardinal',
    libra: 'Cardinal',
    capricorn: 'Cardinal',
    taurus: 'Fixed',
    leo: 'Fixed',
    scorpio: 'Fixed',
    aquarius: 'Fixed',
    gemini: 'Mutable',
    virgo: 'Mutable',
    sagittarius: 'Mutable',
    pisces: 'Mutable'
  }
  return qualities[sign] || 'Unknown'
}

function getLuckyNumber() {
  return Math.floor(Math.random() * 100).toString()
}

function getLuckyTime() {
  const hour = Math.floor(Math.random() * 12) + 1
  const minute = Math.floor(Math.random() * 60)
  return `${hour}:${minute.toString().padStart(2, '0')} ${hour < 6 ? 'PM' : 'AM'}`
}

function getLuckyColor(sign) {
  const colors = {
    aries: 'Red',
    taurus: 'Green',
    gemini: 'Yellow',
    cancer: 'Silver',
    leo: 'Gold',
    virgo: 'Navy Blue',
    libra: 'Pink',
    scorpio: 'Dark Red',
    sagittarius: 'Purple',
    capricorn: 'Brown',
    aquarius: 'Electric Blue',
    pisces: 'Sea Green'
  }
  return colors[sign] || 'White'
}

function getCurrentSunSign() {
  const today = new Date()
  const month = today.getMonth() + 1
  const day = today.getDate()

  const zodiacSigns = {
    'capricorn': [12, 22, 1, 19],
    'aquarius': [1, 20, 2, 18],
    'pisces': [2, 19, 3, 20],
    'aries': [3, 21, 4, 19],
    'taurus': [4, 20, 5, 20],
    'gemini': [5, 21, 6, 20],
    'cancer': [6, 21, 7, 22],
    'leo': [7, 23, 8, 22],
    'virgo': [8, 23, 9, 22],
    'libra': [9, 23, 10, 22],
    'scorpio': [10, 23, 11, 21],
    'sagittarius': [11, 22, 12, 21]
  }

  for (const [sign, [startMonth, startDay, endMonth, endDay]] of Object.entries(zodiacSigns)) {
    if (
      (month === startMonth && day >= startDay) ||
      (month === endMonth && day <= endDay)
    ) {
      return sign
    }
  }

  return 'capricorn'
}
