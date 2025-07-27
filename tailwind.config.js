/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a', // Dark grey
          light: '#2d2d2d',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#0066cc', // Blue
          light: '#3399ff',
          dark: '#004d99',
        },
        accent: {
          DEFAULT: '#00cc66', // Green
          light: '#33ff99',
          dark: '#00994d',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
} 