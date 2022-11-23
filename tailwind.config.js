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
      screens: {
        'xs': '300px',
        'sm': '576px',
        // => @media (min-width: 576px) { ... }
  
        'md': '960px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        'primary': '#F24405',
        'secondary': '#323AD9',
        'darkpurple': '#222673',
        'neonpink': '#F2059F',
        'dark': '#0D0D0D',
        // 'box': '#323859',
        // 'box': '#133340',
        // 'box': '#1B378C',
        // 'box': '#010B40',
        'box': '#262626',
      },
      flex: {
        '2': '2 2 0%'
      },
      corePlugins: {
        preflight: true,
      },
    },
  },
  plugins: [],
}
