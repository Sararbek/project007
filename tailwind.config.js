/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        Stix: ["STIX Two Text", "serif"],
        Ubuntu: ["Ubuntu", "sans-serif"]
      },
      colors: {
        inkColor: "#161722",
        slateColor: "#C6C6C7",
        gradientColorOne: "rgba(255, 255, 255, 1)",
        gradientColorTwo: "rgba(255, 255, 255, 0.32)",
      },
    },
  },
  plugins: [],
}
