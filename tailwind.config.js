/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutral' : {
          light: "#f5f5f5",
          DEFAULT: "#eee",
          dark: "#24272A"
        },
        'primary': "#E8FE99",
        'secondary': ""
      }
    },
  },
  plugins: [],
}

