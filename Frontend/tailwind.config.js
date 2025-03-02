/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "screen-3xl": "1920px",
      },
      colors: {
        "vibrant-green": "#2cc84d",
        "orange-color": "#ffdd40",
        "gray-color": "#fef4d1",
        "button-color": "#fec200"
      }
    },
  },
  plugins: [],
}

