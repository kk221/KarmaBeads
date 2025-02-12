'use client'

import { useState } from 'react'
import DailyOracle from '/src/components/shared/DailyOracle'
import Image from 'next/image'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/universal.svg" // Replace with your animated SVG/GIF
          alt="Floating stars in the universe"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-4 bg-[#d3ae8b] text-[#1d2a3a] rounded-full text-xl font-semibold hover:bg-[#d3ae8b]/90 transition-colors shadow-lg animate-pulse"
        >
          ✨ Your Daily Prediction ✨
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1d2a3a] rounded-xl max-w-2xl w-full mx-4 overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-[#d3ae8b]/20">
              <h2 className="text-2xl font-playfair text-[#d3ae8b]">
                Your Daily Oracle Reading
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-[#d3ae8b] hover:text-[#d3ae8b]/80"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <DailyOracle />
            </div>

            {/* Save as Image Button */}
            <div className="p-6 border-t border-[#d3ae8b]/20">
              <button
                onClick={() => saveAsImage()}
                className="w-full px-6 py-3 bg-[#d3ae8b] text-[#1d2a3a] rounded-lg font-semibold hover:bg-[#d3ae8b]/90 transition-colors"
              >
                Save as Image
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Function to save the modal content as an image
const saveAsImage = () => {
  const modalContent = document.querySelector('.modal-content') // Add this class to DailyOracle.jsx
  if (modalContent) {
    html2canvas(modalContent).then((canvas) => {
      const link = document.createElement('a')
      link.download = 'daily-oracle-reading.png'
      link.href = canvas.toDataURL()
      link.click()
    })
  }
}
