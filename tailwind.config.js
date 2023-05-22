/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{tsx,jsx,js,ts}",
    "./src/pages/**/*.{tsx,jsx,js,ts}",
    "./src/components/**/*.{tsx,jsx,js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Inter", "sans-serif"],
        body: [
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
