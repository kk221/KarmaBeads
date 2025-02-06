import Button from './Button'

export default function DailyOracle() {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-gradient-to-r from-purple-800/50 to-indigo-800/50 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20">
        <h2 className="text-3xl font-playfair text-center text-purple-100 mb-6">
          Your Daily Oracle
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your zodiac sign"
              className="w-full px-6 py-4 bg-purple-900/30 border border-purple-500/30 rounded-lg text-purple-100 placeholder-purple-300/50 focus:ring-2 focus:ring-purple-500"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl">
              ✨
            </div>
          </div>
          <Button variant="primary" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600">
            Reveal Today's Message
          </Button>
        </div>
      </div>
    </div>
  )
}
