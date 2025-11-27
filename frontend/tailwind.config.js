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
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease-out forwards',
        oneSpin: "spin 1s",
        slowSpin: "spin 3s linear infinite",
        growIn: 'growIn 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}

