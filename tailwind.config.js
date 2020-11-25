const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    mode: 'all',
    content: [
      './pages/**/*.js',
      './components/**/*.js',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        indigo: colors.indigo,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
