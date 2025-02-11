import { NextResponse } from 'next/server'

export async function GET() {
  try {
    console.log('API route called');
    const sunSign = getCurrentSunSign()
    console.log('Current sun sign:', sunSign);
    
    // Using a different API
    const response = await fetch(
      `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sunSign}&day=today`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json()
    console.log('Horoscope API response:', data);

    // Transform the data into our format
    const fortune = {
      positiveEnergies: [
        `Lucky Number: ${Math.floor(Math.random() * 100)}`,
        `Best Color: ${getRandomColor()}`,
        `Element: ${getZodiacElement(sunSign)}`
      ],
      awareness: [
        data.data.horoscope_data,
        `Mood: ${getMoodBasedOnHoroscope(data.data.horoscope_data)}`
      ],
      zodiacInfluence: `${sunSign.charAt(0).toUpperCase() + sunSign.slice(1)} - ${new Date().toLocaleDateString()}`,
      date: new Date().toLocaleDateString(),
      lucky: {
        number: Math.floor(Math.random() * 100).toString(),
        time: getRandomTime(),
        color: getRandomColor()
      }
    }

    return NextResponse.json(fortune)
  } catch (error) {
    console.error('Horoscope API Error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to fetch fortune',
        details: error.message,
        timestamp: new Date().toISOString()
      }, 
      { status: 500 }
    )
  }
}

// Helper functions
function getRandomColor() {
  const colors = ['Red', 'Blue', 'Green', 'Purple', 'Yellow', 'Orange', 'Pink', 'White', 'Gold', 'Silver']
  return colors[Math.floor(Math.random() * colors.length)]
}

function getRandomTime() {
  const hour = Math.floor(Math.random() * 12) + 1
  const minute = Math.floor(Math.random() * 60)
  return `${hour}:${minute.toString().padStart(2, '0')} ${hour < 6 ? 'PM' : 'AM'}`
}

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

function getMoodBasedOnHoroscope(horoscope) {
  const positiveWords = ['good', 'great', 'excellent', 'positive', 'happy']
  const text = horoscope.toLowerCase()
  return positiveWords.some(word => text.includes(word)) ? 'Positive' : 'Contemplative'
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
