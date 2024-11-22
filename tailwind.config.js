/** @type {import('tailwindcss').Config} */

export default {

  content: [
 
    "./index.html",
 
    "./src/**/*.{js,ts,jsx,tsx}",
 
  ],
 
  theme: {
    extend: {
      screens: {
        
        'sm': '280px',
        'md' :'500px',
        'lg' :'900px',
        'xl': '2269px',
        'uw':'3000px',
     }
    },
  },
 
  plugins: [],
 
 }
 