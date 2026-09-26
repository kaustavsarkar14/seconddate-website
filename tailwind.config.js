/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Short phone screens (e.g. iPhone SE with Safari bars): tighter hero layout
        short: { raw: "(max-height: 700px) and (max-width: 767px)" },
        // Short laptop screens (e.g. 1366×768): same idea, full-size buttons
        shortdesk: { raw: "(max-height: 840px) and (min-width: 768px)" },
      },
    },
  },
  plugins: [],
}