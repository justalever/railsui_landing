const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./index.html",
    "./updates.html",
    "./updates/*.html",
    "./src/**/*.{js,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gothic: ["Old London", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        salmon: {
          500: "#FA8072",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}
