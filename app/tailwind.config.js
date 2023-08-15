/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
     colors: {
        black: '#000000',
        lightgrey: '#EDEDED',
        red: '#CC6666',
        white: '#FFFFFF',
        darkgrey: '#4A4A4A',
        grey: '#999999'
    },
    fontFamily: {
      'main': ['Roboto', 'Roboto', 'sans-serif'],
      'title': ['"Noto Sans"', '"Noto Sans"', 'sans-serif']
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

