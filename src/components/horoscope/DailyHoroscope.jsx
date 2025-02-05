import { useState } from 'react'
import Button from '../shared/Button'

export default function DailyHoroscope() {
  const [selectedSign, setSelectedSign] = useState('')

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-playfair font-bold text-center mb-12">
          Your Daily Horoscope
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Select Your Sign</label>
              <select 
                value={selectedSign}
                onChange={(e) => setSelectedSign(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Choose your zodiac sign</option>
                <option value="aries">Aries</option>
                <option value="taurus">Taurus</option>
                {/* Add other signs */}
              </select>
            </div>
            <Button variant="primary" className="w-full">
              Get Your Horoscope
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
