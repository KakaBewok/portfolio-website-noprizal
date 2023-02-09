/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3C84AB',
        gradient1: '#EAD6EE',
        gradient2: '#A0F1EA',
        gradient3: '#3C84AB',
      },
    },
  },
  plugins: [require('daisyui')],
};
