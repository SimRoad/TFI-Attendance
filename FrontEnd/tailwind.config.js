/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    colors: {
      'text': '#250909',
      'background': '#ffffff',
      'primary': '#f8b182',
      'secondary': '#9fd5f9',
      'accent': '#2f2fc1',
     },
    fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },
    fontFamily: {
      heading: 'Poly',
      body: 'Poly',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
  },
  plugins: [
    require(`flowbite/plugin`)
  ],
}

