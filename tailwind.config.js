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
        'md' :'568px',
        'lg' :'1920px',
        'xl': '2269px',
     }
    },
  },
 
  plugins: [],
 
 }
 