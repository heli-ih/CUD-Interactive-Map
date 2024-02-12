/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        custom: {
          DEFAULT: "#222529",
        },
      },
      height: {
        "list-h": "800px",
      },
    },
  },
  plugins: [],
};
