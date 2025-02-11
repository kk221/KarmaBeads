import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Get today's sun sign based on date
    const sunSign = getCurrentSunSign()
    
    const response = await fetch(
      `https://aztro.sameerkumar.website/?sign=${sunSign}&day=today`,
      {
        method: 'POST'
      }
    )
    
    const data = await response.json()

    // Transform aztro data into our format
    const fortune = {
      positiveEnergies: [
        data.lucky_time && `Best time for activities: ${data.lucky_time}`,
        data.color && `Harness the energy of ${data.color} today`,
        data.compatibility && `Strong connections with ${data.compatibility}`
      ].filter(Boolean),
      awareness: [
        data.description,
        data.mood && `Your energy today: ${data.mood}`
      ].filter(Boolean),
      zodiacInfluence: `${sunSign} - ${data.current_date}`,
      date: data.current_date,
      lucky: {
        number: data.lucky_number,
        time: data.lucky_time,
        color: data.color
      }
    }

    return NextResponse.json(fortune)
  } catch (error) {
    console.error('Astrology API Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch fortune' }, 
      { status: 500 }
    )
  }
}

// Helper function to get current sun sign
function getCurrentSunSign() {
  const today = new Date()
  const month = today.getMonth() + 1
  const day = today.getDate()

  // Zodiac date ranges
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

  return 'capricorn' // default fallback
}
