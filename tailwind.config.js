module.exports = {
  purge: {
    mode: 'all',
    content: [
      './pages/**/*.tsx',
      './components/**/*.tsx',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
