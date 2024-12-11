/* eslint-disable no-undef */
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
        secondary: "#cbd5e1", // Slate
        tertiary:  "#18181b" // Zinc
      },
    },
  },
  plugins: [
    
  ],
}