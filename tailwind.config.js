/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // using skeleton Media Queries, from http://getskeleton.com/#queries
      xs: "280px", // xsmobile
      sm: "400px", // mobile
      md: "550px", // phablet
      lg: "750px", // tablet
      xl: "1000px", // desktop
      "2xl": "1200px", // desktop HD
    },
    extend: {
      fontSize: {
        base: "16px",
        sm: "24px",
        md: "36px",
        lg: "2.618rem",
        xl: "2.75rem",
        "2xl": "3.118rem",
        "3xl": "3.618rem",
        "4xl": "3.75rem",
        "5xl": "4.118rem",
        "6xl": "6rem",
      },
      colors: {
        mahomuri: {
          black: {
            100: "#131313",
            200: "#111111",
          },
          blue: "#1D6BFF",
          green: "#55D193",
          "light-green": "#DFEAFF",
        },
      },
    },
    fontFamily: {
      main: ["Poppins", "sans-serif"],
      body: ["Fira Code", "serif"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
