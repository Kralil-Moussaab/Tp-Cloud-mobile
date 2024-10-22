/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-green-blue": "linear-gradient(#60B58E,#6687B5)",
        "gradient-social":
          "linear-gradient(45deg, #242424,rgba(36, 36, 36, 0))",
      },
      backgroundClip: {
        text: "text",
      },
      colors: {
        "dark-one7": "#9ca3af",
        "gray-one7": "#262626",
        "green-one7": "#3b9d86",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities(
        {
          ".bg-gradient": {
            "background-image": theme("backgroundImage.gradient-green-blue"),
          },
          ".bg-gradient-social": {
            "background-image": theme("backgroundImage.gradient-social"),
          },
        },
        ["responsive"]
      );
    },
  ],
};
