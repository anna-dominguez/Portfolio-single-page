/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      black: '#000000',
      dark: '#151515',
      darkGrey: '#242424',
      red: '#FF6F5B',
      green: '#4EE1A0',
      grey: '#d9d9d9',
      white: '#FFFFFF',
    },
    fontSize: {
      headingXXL: ['88px', '88px'],
      headingXL: ['72px', '72px'],
      headingL: ['48px', '56px'],
      headingM: ['40px', '40px'],
      headingS: ['32px', '40px'],
      headingXS: ['24px', '32px'],
      bodyM: ['18px', '28px'],
      bodyS: ['16px', '26px'],
    },
    extend: {
      fontFamily: {
        sans: 'Space Grotesk',
      },
      visibility: ['group-hover'],
    },
  },
  plugins: [],
}
