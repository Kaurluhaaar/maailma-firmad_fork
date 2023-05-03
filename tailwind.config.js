/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      'sm': '640px',

      'tiny': '300px',

      'smol': '1236px',

      'mid': '1570px',

      'big': '1728px',
    },
    extend: {

      width: {
        '128': '30rem',
        '200': '600px',
      },

      colors: {
      'morning-blue': '#5856B5',
      'space-blue': '#080913',
      'text-blue': '#C6C5E6',
      'button-blue':'#101226',
      'text-blue-dark':'#5856B5',
    },
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'nunito-italic': ['nunito', 'italic'],
    },
    backgroundImage: {
      'earth': "url('/images/earth.png')",
    }},
  },
  plugins: [],
}
