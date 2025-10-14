/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./hp/index.html", "./hp/archives/*.{js,jsx,ts,tsx,html,vue}"],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#f2f2f2', 
          100: '#E6E6E6', 
          200: '#CCCCCC', 
          300: '#B3B3B3', 
          400: '#999999', 
          500: '#7F7F7F', 
          600: '#666666', 
          700: '#4D4D4D', 
          800: '#333333', 
          900: '#1A1A1A', 
        },
      },
    },
  },
  plugins: [],
}

