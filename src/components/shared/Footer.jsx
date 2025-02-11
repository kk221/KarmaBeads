'use client'

import Link from 'next/link'

// components/shared/Footer.jsx
export default function Footer() {
  return (
    <footer className="border-t border-[#d3ae8b]/10 bg-[#1d2a3a] mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="text-center text-[#d3ae8b]/60 text-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Quick Links */}
            <div className="space-y-2">
              <h3 className="text-[#d3ae8b] mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:text-[#d3ae8b] transition-colors">About Us</a></li>
                <li><a href="/privacy" className="hover:text-[#d3ae8b] transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-[#d3ae8b] transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-2">
              <h3 className="text-[#d3ae8b] mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="/blog" className="hover:text-[#d3ae8b] transition-colors">Spiritual Blog</a></li>
                <li><a href="/faq" className="hover:text-[#d3ae8b] transition-colors">FAQ</a></li>
                <li><a href="/contact" className="hover:text-[#d3ae8b] transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="space-y-2">
              <h3 className="text-[#d3ae8b] mb-4">Connect With Us</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="hover:text-[#d3ae8b] transition-colors">Facebook</a>
                <a href="#" className="hover:text-[#d3ae8b] transition-colors">Instagram</a>
                <a href="#" className="hover:text-[#d3ae8b] transition-colors">Pinterest</a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <p className="pt-4 border-t border-[#d3ae8b]/10">
            © {new Date().getFullYear()} KarmaBeads. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
