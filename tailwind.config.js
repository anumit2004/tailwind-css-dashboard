/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        gray:{
          200:"#f2f2f2",
          100:"#fafafa"
        },
        blue:{
          700:"#146eb4",
          950:"#1e2640",
          850:"#353c53",
          750:"#1177C2",
          650:"#0e4f82"
        }
      }
    },
  },
  plugins: [],
}

