/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": '"Poppins", sans-serif',
      },
      backgroundImage: {
        "code": "url('./src/assets/background-code.jpg')",
      }
    },
  },
  plugins: [],
};
