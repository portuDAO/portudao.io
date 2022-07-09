module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#21EDC6',
        red: '#EC5B56',
        'dark-green': '#244740',
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
