/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B2A',
          secondary: '#162032',
          card: '#1C2B3A',
        },
        gold: {
          DEFAULT: '#D4A853',
          light: '#F0C97A',
        },
        cream: {
          DEFAULT: '#F5EDD6',
          secondary: '#A89880',
          muted: '#6B7F8E',
        },
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        body: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
