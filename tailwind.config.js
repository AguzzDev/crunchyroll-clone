const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        '7.5/12': '60%'
      }
    },
    // fontFamily: {
    //   body: ['Lato']
    // },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
      black: colors.black,
      white: colors.white,
      body: '#F2F2F2',
      orange: '#F47521',
      blue1: '#0091d1',
      blue2: '#e5f4fa',
      bluelight1: '#0a6da4',
      yellow1: '#ffffcc'
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
  ]
}
