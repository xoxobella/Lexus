/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#86efac", // Green 
        secondary: "#fbbf24", // Amber
        tertiary:  "#e8d9cd" // grey
      },
    },
  },
  plugins: [],
}