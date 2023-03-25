/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.{edge,js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      screens: {
          '3xl': "1800px",
          '4xl': "2600px"
        }
    },
  },
    plugins: [
    require('@catppuccin/tailwindcss')({
      prefix: 'ctp',
      defaultFlavour: 'mocha',
    }),
  ],
}