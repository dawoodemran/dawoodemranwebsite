/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
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
        '1': '#80848F',
        '2': '#FF385C',
        '3': '#FCF9F0',
        '4': '#292D36',
        '5': '#FFFFFF'
      }
    },
  },
  plugins: [],
}
