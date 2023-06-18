/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./resources/**/*.{edge,js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1800px",
        "3.5xl": "1921px",
        'short': { 'raw': '(max-height: 500px)' },
        'tall': { 'raw': '(min-height: 501px)' },
      },
    },
  },
  plugins: [],
};
