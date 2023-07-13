/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1800px",
        "3.5xl": "1921px",
        short: { raw: "(max-height: 500px)" },
        tall: { raw: "(min-height: 501px)" },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#25569e",
          secondary: "#1ab5ff",
          accent: "#94168a",
          neutral: "#25032c",
          "base-100": "#36385e",
          info: "#6366f1",
          success: "#4ade80",
          warning: "#f59e0b",
          error: "#f43f5e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
