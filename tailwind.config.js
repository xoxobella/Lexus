/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6d9773", // light Green 
        secondary: "#0c3b2e", // dark green
        tertiary:  "#bb8a52", // Cream
        quaternary: "#ffba00" // Orange
      },
      animation: {
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      scrollbar: {
        thumb: '#888',
        track: '#f0f0f0',
      },
    },
  },
  plugins: [

  ],
}