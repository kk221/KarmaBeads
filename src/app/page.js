export default function Home() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-center">
        Welcome to KarmaBeads
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Zodiac Signs</h2>
          <p>Discover your zodiac sign's traits and compatibility.</p>
        </div>
        {/* Add more feature cards here */}
      </div>
    </div>
  )
}
