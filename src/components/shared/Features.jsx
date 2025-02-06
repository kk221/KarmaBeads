import Link from 'next/link'

export default function Features() {
  const features = [
    {
      title: "Zodiac Signs",
      description: "Discover your zodiac sign's traits and compatibility",
      icon: "🌟",
      link: "/zodiac"
    },
    {
      title: "Daily Horoscope",
      description: "Get personalized daily astrological guidance",
      icon: "🌙",
      link: "/horoscope"
    },
    {
      title: "Birth Chart",
      description: "Explore your complete astrological profile",
      icon: "📊",
      link: "/birth-chart"
    },
    {
      title: "Tarot Reading",
      description: "Find answers through ancient tarot wisdom",
      icon: "🎴",
      link: "/tarot"
    },
    {
      title: "FengShui",
      description: "Harmonize your space with ancient wisdom",
      icon: "☯️",
      link: "/fengshui"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-midnight-900 to-midnight-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-mystic-300">
          Explore Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Link href={feature.link} key={feature.title}>
              <div className="bg-midnight-800/50 backdrop-blur-sm rounded-xl p-6 
                            border border-mystic-500/20 hover:border-mystic-500/40 
                            transition-all duration-300">
                <div className="text-4xl mb-4 text-mystic-500">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-mystic-300">{feature.title}</h3>
                <p className="text-mystic-300/70">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
