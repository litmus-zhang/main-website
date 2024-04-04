/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0AE1FF",
        dark: '#080809',
        white: {
          1: '#EEFBF5',
          2: '#a3a6a6',
          3: '#F5F5F5',
        },

      },
      fontFamily: {
        sans: ['Monument', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
