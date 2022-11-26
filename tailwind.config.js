/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#B3B3B5',
        },
      },
      fontFamily: {
        body: ['Nunito'],
      }
    }
  },
  variant: {},
  plugins: [],
}
