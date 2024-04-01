/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        base: {
          50: '#F3F2F2',
          100: '#E7E5E4',
          200: '#CFCBC9',
          300: '#B7B1AE',
          400: '#A19A96',
          500: '#89807B',
          600: '#6E6662',
          700: '#544E4A',
          800: '#363230',
          900: '#1B1918',
          950: '#0D0D0C'
        }
      }
    }
  },
  plugins: []
}
