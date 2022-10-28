/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite/**/*.js',
    './src/**/*.html'
  ],
  theme: {
    extend: {
      corePlugins: {
        preflight: true,
      },
    },
  },
  plugins: [],
}
