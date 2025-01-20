/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          from: { width: '0%' },
          to: { width: '50%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        typing: 'typing 6s steps(20, end) infinite, blink 0.9s step-end infinite',
      },
    },
  },
  plugins: [],
};
