/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure correct file paths
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // Include DaisyUI plugin
};
