/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 33.57%)',
        background: "url('public/background.png')",
      },
    },
  },
  plugins: [],
}
