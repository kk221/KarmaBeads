'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl">KarmaBeads</h3>
            <p className="text-indigo-200 text-sm leading-relaxed">
              Connect with your inner self through ancient wisdom and modern spirituality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/zodiac" className="text-indigo-200 hover:text-white transition-colors text-sm">
                  Zodiac Signs
                </Link>
              </li>
              <li>
                <Link href="/horoscope" className="text-indigo-200 hover:text-white transition-colors text-sm">
                  Daily Horoscope
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-indigo-800 mt-8 pt-8 text-center">
          <p className="text-indigo-300 text-sm">
            © {new Date().getFullYear()} KarmaBeads. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
