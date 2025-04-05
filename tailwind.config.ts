/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {},
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
