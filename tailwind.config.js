/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'canaria-blue': '#57CDFF',
        'canaria-white': '#F4F4F4',
        'canaria-yellow': '#FFD99F',
        'canaria-yellower': '#ffc874'
      },
      borderWidth: {
        'canaria-home': '40px', 
      },
      borderRadius: {
        'canaria-home': '4rem',   // Esquinas extra suaves
      }
    },
  },
  plugins: [
    require("tw-elements-react/dist/plugin.cjs")
    
  ],
}

