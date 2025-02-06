import Link from 'next/link'
import { FaYinYang, FaStar, FaMoon, FaChartBar, FaGem } from 'react-icons/fa'
import { GiCrystalBall } from 'react-icons/gi'

export default function Features() {
  const features = [
    {
      title: "Daily Energy",
      description: "Get your personalized daily cosmic and chi energy reading",
      icon: <FaYinYang className="w-8 h-8 text-mystic-500" />,
      link: "/daily"
    },
    {
      title: "Zodiac & FengShui",
      description: "Discover how your zodiac sign influences your space harmony",
      icon: <FaStar className="w-8 h-8 text-mystic-500" />,
      link: "/zodiac"
    },
    {
      title: "Birth Chart",
      description: "Complete astrological profile with FengShui element analysis",
      icon: <FaChartBar className="w-8 h-8 text-mystic-500" />,
      link: "/birth-chart"
    },
    {
      title: "Space Harmony",
      description: "FengShui tips and products for your living space",
      icon: <FaGem className="w-8 h-8 text-mystic-500" />,
      link: "/fengshui"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-midnight-900 to-midnight-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-mystic-300">
          Discover Your Path to Harmony
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Link href={feature.link} key={feature.title}>
              <div className="bg-midnight-800/50 backdrop-blur-sm rounded-xl p-6 
                            border border-mystic-500/20 hover:border-mystic-500/40 
                            transition-all duration-300 group">
                <div className="mb-4 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-mystic-300">
                  {feature.title}
                </h3>
                <p className="text-mystic-300/70">
                  {feature.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
