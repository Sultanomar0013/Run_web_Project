/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Pacifico', 'cursive'],
        'customs': ['Angkor', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

