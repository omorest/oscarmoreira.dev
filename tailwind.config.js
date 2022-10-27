/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      black: '#1D1D1D',
      'light-gray': '#c8c8c8',
      gray: '#747474',
      white: '#ffffff',
      'dark-mate': '#222222',
      'purple-hard': '#aa2de3',
      'purple-medium': '#CE62D4',
      'purple-soft': '#F15CBF'
    },
    screens: {
      xs: '30px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
