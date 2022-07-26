/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        padding: {
            '11':'44px',
            '12':'48px',
            '13':'52px',
            '14':'56px',
            '15':'60px',
        },
        colors: {
            'linkedin': '#0E76A8',
            'github': '#0D1117',
            'email': '#9332EA',
            'twitter': '#00ACEE',
        }
    },
  },
  plugins: [],
}
