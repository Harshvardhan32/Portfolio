/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-blue': '0 0 5px #0ef, 0 0 25px #0ef',
        'custom-blue-blur': '0 0 25px #0ef, 0 0 55px #0ef'
      },
      backgroundColor: {
        'sky': '0 0 5px #0ef, 0 0 25px #0ef'
      },
      textShadow: {
        "text-sky": "0 0 5px #0ef, 0 0 25px #0ef"
      },
    },
  },
  plugins: [],
}