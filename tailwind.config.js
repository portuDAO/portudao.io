module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#004C3A',
        'dark-red': '#F34708',
      },
      lineHeight: {
        'almost-none': '1.15',
      },
      fontSize: {
        none: '0rem',
        'desktop-big': '4rem',
      },
    },
  },
  plugins: [],
}
