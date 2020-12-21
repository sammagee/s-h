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
        beige: '#FBF4EA',
        gray: colors.gray,
      },
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
    },
  },
  plugins: [],
}
