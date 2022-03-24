module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        OurBlack: "#131312",
        OurGrey: "rgba(0, 0, 0, 0.1)",
        OurBlue: "#2BB2CC",
        OurPurple: "#7A5BB1",
        OurSecondGrey: "#424242",
      },
      dropShadow: {
        white: ["0 35px 35px rgba(0, 0, 0, 0.55)"],
      },
      backgroundImage: {
        respct: "url('/svg/respct.svg')",
        cover: "url('/svg/cover.svg')",
      },
      fontWeight: {
        hairline: 100,
        "extra-light": 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        "extra-bold": 800,
        black: 900,
      },
    },
  },
  plugins: [],
};
