/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./pages/**/*.{html,js,jsx}",
    "./components/**/*.{html, js, jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primario: '#fb923c',
        rojoIntenso: '#FF0000',
        grisClaro: '#D3D3D3',
        rojoBrillante: '#FF4500',
        grisOscuro: '#808080',
        verdeClaro: '#00FF00',
        amarilloClaro: '#FFFF00',
        verdeOscuro: '#006400',
        amarilloFuerte: '#FFD700',
        naranjaClaro: '#FFA500',
        naranjaOscuro: '#FF8C00',
        azulClaro: '#ADD8E6',
        azulOscuro: '#0000FF',
        moradoClaro: '#9370DB',
        morado: '#800080',
      },
      fontSize: {
        'h1': '100px',
        'h2': '75px',
        'h3': '50px',
        'h4': '25px',
        'p': '20px',
        // etc.
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        // etc.
      },
    },
  },
  variants: {},
  plugins: [],
}
