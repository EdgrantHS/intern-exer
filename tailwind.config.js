/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0D2734",
        "secondary": "#527182",
        "tertiary": "#E7F6FF",
      },
    },
  },
  plugins: [],
}
