/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'kaushan': ['Kaushan Script'],
    },
    boxShadow:{
      "custom-light" : "0 0 10px #313131",
      "custom-dark" : "5px 5px 10px #0a0c0e, -5px -5px 10px #14161c"
    },
    extend: {
      colors: {
        green: { // example: you can use text-green instead of text-green-500
          DEFAULT: '#00f260',
        },
        yellow: {
          DEFAULT: '#aaaa00',
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      }
    },
  },
  variants: {
    extend: {
      boxShadow:["dark"]
    },
  },
  plugins: [],
}

// module.exports = {
//   purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
//   darkMode: false, //or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }