/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}', './screens/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors:{
        background: "rgb(255, 255, 255)",
        primary: "rgb(14, 14, 14)",
        placeholder:"rgb(160, 160, 160)",
        secondary:"rgb(249, 251, 254)",
        foreground:"rgb(173, 173, 173 )"
      },
      spacing : {
        page: 30,
      }
    },
  },
  plugins: [],
};
