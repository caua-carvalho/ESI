/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        bg: '#090C12',
        surface: '#101420',
        surface2: '#161B26',
        surface3: '#1C222F',
        elevated: '#232B3A',
        green: '#78AF69',
        amber: '#E0A94A',
        red: '#DC5454',
        blue: '#4D8EE0',
        purple: '#8A67E0',
        gray: '#6A7586',
      },
    },
  },
  plugins: [],
}
