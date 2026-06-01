const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a1628',
          light: '#1e4a6b',
        },
        accent: {
          DEFAULT: '#c9a84c',
          light: '#e8d48b',
        },
        background: '#f8f6f3',
        surface: '#ffffff',
        border: '#e2e8f0',
        muted: '#64748b',
        foreground: '#1e293b',
      },
      fontFamily: {
        playfair: ['Playfair Display', ...fontFamily.serif],
        inter: ['Inter', ...fontFamily.sans],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'count-up': 'countUp 2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
