/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '640px',
      lg: '992px',
    },
    extend: {
      colors: {
        primaryLight: '#FFF',
        secondaryLight: '#ededed',
        primaryDark: '#393839',
        secondaryDark: '#dfdfdf',
        primaryAccent: '#CF4B08',
        secondaryAccent: '#eee47b',
        tertiaryAccent: '#A01534',
      },
      fontFamily: {
        sans: ['Lufga', 'sans-serif'],
        serif: ['Aspira', 'serif'],
      },
    },
  },
  plugins: [],
}