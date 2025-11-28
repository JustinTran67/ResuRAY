/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // colors
      colors: {
        primary: '#1C77C3',
        secondary: '#39A9DB',
        accent: '#40BCD8',
        orange: '#F39237',
        red: '#D63230',
      },
      // fonts
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      // animations
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        growIn: {
          '0%': { opacity: 0, transform: 'scale(0.2)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        scalePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease-out forwards',
        oneSpin: "spin 1s",
        slowSpin: "spin 3s linear infinite",
        growIn: 'growIn 0.6s ease-out forwards',
        scalePulse: 'scalePulse 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

