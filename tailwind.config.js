/** @type {import('tailwindcss').Config} */

export default {

  content: [
 
    "./index.html",
 
    "./src/**/*.{js,ts,jsx,tsx}",
 
  ],
 
  theme: {
    extend: {
      screens: {
        
        'sm': '200px',
        'md' :'400px',
        'lg' :'900px',
        'xl': '2269px',
     }
    },
  },
 
  plugins: [],
 
 }
 