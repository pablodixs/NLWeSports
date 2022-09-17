/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nlw-gradient': 'linear-gradient(90deg, #9572FC 0%, #43E7AD 50%, #E1D55D 100%)',
        background: "url('/background.png')",
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);',
        'card-gradient': 'linear-gradient(90deg, #9572FC 0%, #43E7AD 50.52%, #E2D45C 100%);',        
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
