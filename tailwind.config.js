/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'tiempos': ['Tiempos Headline Medium']
      },
      colors: {
        '1': '#9ba5c9',
        '2': '#FF385C',
        '3': '#FCF9F0'
      }
    },
  },
  plugins: [],
}
