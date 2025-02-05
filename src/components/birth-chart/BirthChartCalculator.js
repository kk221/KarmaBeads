import { useState } from 'react'
import Button from '../shared/Button'

export default function BirthChartCalculator() {
  const [birthData, setBirthData] = useState({
    date: '',
    time: '',
    location: ''
  })

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-playfair font-bold text-center mb-12">
          Calculate Your Birth Chart
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Birth Date</label>
                <input 
                  type="date"
                  value={birthData.date}
                  onChange={(e) => setBirthData({...birthData, date: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Birth Time</label>
                <input 
                  type="time"
                  value={birthData.time}
                  onChange={(e) => setBirthData({...birthData, time: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Birth Location</label>
                <input 
                  type="text"
                  placeholder="Enter city name"
                  value={birthData.location}
                  onChange={(e) => setBirthData({...birthData, location: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <Button variant="primary" className="w-full">
                Calculate Birth Chart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
