/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'rk-',  // ← Add this
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};