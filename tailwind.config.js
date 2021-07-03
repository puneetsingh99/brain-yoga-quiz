module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        logo: ["Cedarville Cursive", "cursive"],
        body: ["Poppins", "sans-serif"],
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
        300: "300px",
        250: "250px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
