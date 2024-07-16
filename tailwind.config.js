// tailwind.config.js
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: "#003A36",
        secondary: "#ED1211",
        third: "#3B625E",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
