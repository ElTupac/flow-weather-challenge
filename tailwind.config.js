/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        brand: {
          darken: {
            100: {
              blue: "#001233",
              gray: "#33415C",
            },
            50: {
              blue: "#002855",
              gray: "#5C677D",
            },
            main: "#0A0A0B",
          },
          accent: {
            main: "#121214",
            blue: "#023E7D",
            gray: "#7D8597",
          },
          lighten: {
            100: {
              blue: "#0466C8",
              gray: "#C0D6DF",
            },
            50: {
              blue: "#0353A4",
              gray: "#979DAC",
            },
            main: "#212122",
          },
        },
      },
      fontFamily: {
        "01": ["Nunito", "sans-serif"],
        "02": ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
