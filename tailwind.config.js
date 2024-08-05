/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px', // Custom breakpoint for extra small screens
        'xxs': {'max' : '420px'}, // Custom breakpoint for extra small screens
        's': {'max' : '830px'}, // Custom breakpoint for extra small screens
        'vs': {'max' : '640px'}, // Custom breakpoint for extra small screens
        'smm': {'max' : '1024px'}, // Custom breakpoint for extra small screens
        // 'smm': {'max' : '1023px'}, // Custom breakpoint for extra small screens
      },
    }
  },
  plugins: [],
}


