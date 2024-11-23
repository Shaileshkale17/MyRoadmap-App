/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primaryColor: "#03346E",
        secondaryColor: "#C6DCE4",
        bodyColor: "#F9F7F7",
      },
    },
  },
  plugins: [],
};
