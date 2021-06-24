module.exports = {
  purge: ["./src/**/*.jsx","./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily : {
        headline : 'Poppins , sans-serif'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor:['active']
    },
  },
  plugins: [],
}
