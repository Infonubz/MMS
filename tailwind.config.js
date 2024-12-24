/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(108.05deg, #A2BE9A 1.01%, #117283 100.4%)",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"], // Add Inter as the default sans font
    },
  },
  plugins: [],
};
