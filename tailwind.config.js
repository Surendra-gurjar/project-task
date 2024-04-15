module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#fefdf8",
          100: "#f7f7f7",
          600: "#706f6b",
          900: "#252523",
          "900_19": "#23232319",
          "300_01": "#e5e3df",
        },
        white: { A700: "#ffffff", A700_4c: "#ffffff4c", A700_19: "#ffffff19" },
        lime: { 700: "#c59452" },
        light_green: { 50: "#f7f3e8" },
        deep_orange: { 50: "#f3ebde" },
      },
      boxShadow: {
        xs: "0px 5px 20px 0px #000000",
        sm: "0px 0px 30px 0px #000000",
        md: "0px 20px 100px 0px #000000",
        lg: "0px 1px 4px -1px #000000",
      },
      fontFamily: { sen: "Sen", limelight: "Limelight" },
      textShadow: { ts: "0px 0px 100px #000000" },
      opacity: { 0.6: 0.6, 0.7: 0.7, 0.4: 0.4 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
