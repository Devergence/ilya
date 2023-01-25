/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'main_rows': '32px calc(100vh - 132px) 32px',
      },
      gridTemplateColumns: {
        'main_cols': '1fr 584px 1fr',
      }
    },
  },
  plugins: [],
}