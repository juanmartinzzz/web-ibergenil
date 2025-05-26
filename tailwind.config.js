/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0e1b54',
          light: '#3c4a85',
          dark: '#081234'
        },
        secondary: {
          DEFAULT: '#f7931e',
          light: '#f9ac51',
          dark: '#db7d0e'
        },
        accent: {
          DEFAULT: '#ef5a3c',
          light: '#f38169',
          dark: '#d34126'
        },
        highlight: {
          DEFAULT: '#fcb12b',
          light: '#fdc459',
          dark: '#e99d0e'
        },
        background: '#f6f6f6'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
};