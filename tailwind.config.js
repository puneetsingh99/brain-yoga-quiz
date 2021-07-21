module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        logo: ["Cedarville Cursive", "cursive"],
        body: ["Poppins", "sans-serif"],
      },
      gridTemplateRows: {
        181: "1fr 8fr 1fr",
      },
      colors: {
        dark: {
          900: "#121212",
          800: "#181818",
          700: "#404040",
          600: "#282828",
          200: "#b3b3b3",
          100: "#ffffff",
        },
        light: {
          800: "#1f2937",
          600: "#4b5563",
          400: "#9ca3af",
          100: "#f3f4f6",
        },
      },
      width: {
        50: "50px",
        200: "200px",
        230: "230px",
        250: "250px",
        300: "300px",
        325: "325px",
        350: "350px",
        375: "375px",
        400: "400px",
        500: "500px",
        600: "600px",
        650: "650px",
        700: "700px",
        750: "750px",
        800: "800px",
        850: "850px",
      },
      maxWidth: {
        800: "800px",
        1000: "1000px",
      },
      height: {
        350: "350px",
        400: "400px",
        450: "450px",
        500: "500px",
        575: "575px",
        600: "600px",
      },
      minHeight: {
        500: "500px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
