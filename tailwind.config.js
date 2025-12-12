/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
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
        },
        zoomToBack: {
          '0%': {
            transform: 'scale(1) translateZ(0) rotateX(0deg)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(0.5) translateZ(-800px) rotateX(-10deg)',
            opacity: '0.1',
          },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        fadeOut: 'fadeOut 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        zoomFromBack: 'zoomFromBack 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        zoomToBack: 'zoomToBack 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards',
      },
    },
  },
  plugins: [],
}
