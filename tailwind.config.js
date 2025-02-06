/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          900: '#0F0B1E', // Deep space blue
          800: '#1A1432', // Dark purple-blue
          700: '#251A46'  // Rich purple
        },
        mystic: {
          500: '#9F6CF7', // Bright purple
          400: '#B490F5', // Light purple
          300: '#C8B6F6'  // Soft purple
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'stars': "url('/stars-bg.png')"
      }
    }
  },
  plugins: [],
}
