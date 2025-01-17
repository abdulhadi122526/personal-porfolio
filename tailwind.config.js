/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',  // Small screens
      md: '768px',  // Medium screens
      lg: '1024px', // Large screens
    },
    
  },
  plugins: [ require('daisyui'),],
}

