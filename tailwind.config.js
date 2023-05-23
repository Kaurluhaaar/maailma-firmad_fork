/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      'mid': '1000px',
      'header': '670px',
    },
    extend: {

      width: {
        '128': '30rem',
        '200': '700px',
        'custom1': '2px',
        'custom2':'250px',
        '300':'1500px',
        'imageheight':'370px',
        'imagewidth':'570px',

      },

      colors: {
      'morning-blue': '#5856B5',
      'space-blue': '#080913',
      'text-blue': '#C6C5E6',
      'button-blue':'#101226',
      'text-blue-dark':'#5856B5',
      'blue-box':'#1E2145',
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
