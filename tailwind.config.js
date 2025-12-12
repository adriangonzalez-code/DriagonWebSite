/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': {opacity: '0', transform: 'translateY(20px)'},
          '100%': {opacity: '1', transform: 'translateY(0)'},
        },
        zoomFromBack: {
          '0%': {
            transform: 'scale(0.5) translateZ(-800px) rotateX(-10deg)',
            opacity: '0.1',
          },
          '100%': {
            transform: 'scale(1) translateZ(0) rotateX(0deg)',
            opacity: '1',
          },
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        zoomFromBack: 'zoomFromBack 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards'
      },
    },
  },
  plugins: [],
}
