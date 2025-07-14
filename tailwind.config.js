/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'], // Include all HTML files in the 'public' folder
  theme: {
    extend: {colors:{
      "bookmark-purple":"#6A0DAD",
      "bookmark-red":"#FF0000",
      "bookmark-blue":"#242A45",
      "bookmark-grey":"#9194A2",
      "bookmark-white":"#f7f7f7",
      }
    },
    fontFamily:{
      Poppins: ["Poppins,sans-serif"],
    },
    container: {
      center: true,
      padding: '1rem',
      screens:{
        lg:"1124px",
        xl:"1124px",
        "2xl":"1124px",
      },
    },
  },
  plugins: [],
};
