const flowbiteReact = require('flowbite-react/plugin/tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.js', '.flowbite-react/class-list.json'],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [require('flowbite/plugin'), flowbiteReact],
};
