/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Pretendard-Regular", 'Arial', 'sans-serif'],
      bold: ["yg-jalnan"]
    },
    extend: {
      colors: {
        deeppurple: "#463ED8",
        lightpurple: "#DAD8FE",
      },
      backgroundSize: {
        '90%' : '90%',
        '20%' : '20%',
      }
    },
    keyframes: {
      smoothAppear: {
        '0%': { opacity: 0, transform: 'translateY(-5%)' },
        '50%': { opacity: 1, transform: 'translateY(0)' },
        '100%': { opacity: 0, transform: 'translateY(-5%)' },
      },
    }
  },
  plugins: [],
}