/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      color: {
        primary: "#f3c614",
      },
      fontFamily: {
        sans: ['Inter\\ Tight', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
