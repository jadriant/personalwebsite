/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        sf: "sf",
        ntr: "ntr",
      },
      colors: {
        codegreen: "#5EEAD4",
        applebg: "#F5F5F7",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
