/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // fontFamily: {
    //   "heading": "Migra, serif"
    // },
    extend: {
      colors: {
        'neutral' : {
          light: "#f5f5f5",
          DEFAULT: "#eee",
          dark: "#24272A"
        },
        'primary': "#E8FE99",
        // 'primary': "#B50938",
        'secondary': ""
      }
    },
  },
  plugins: [],
}

