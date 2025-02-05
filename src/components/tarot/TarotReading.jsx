import { useState } from 'react'
import Button from '../shared/Button'

export default function TarotReading() {
  const [spreadType, setSpreadType] = useState('single')

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-playfair font-bold text-center mb-12">
          Tarot Reading
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Choose Your Spread</label>
              <select 
                value={spreadType}
                onChange={(e) => setSpreadType(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="single">Single Card</option>
                <option value="three">Three Card Spread</option>
                <option value="celtic">Celtic Cross</option>
              </select>
            </div>
            <Button variant="primary" className="w-full">
              Start Reading
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
