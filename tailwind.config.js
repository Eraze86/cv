/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        colors: {
          'light-black': '#243c5a',
        },
        fontFamily: {
          playfair: 'Roboto',
          mon: 'Montserrat'
        },
        backgroundImage: {
          
          'cleen': "url('/src/assets/cleen2.jpg')",
          'work': "url('/src/assets/work2.jpg')",
         
          
        },
      }
    
  },
  plugins: [],
}
