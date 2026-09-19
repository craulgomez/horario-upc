/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        upc: {
          green: {
            50: '#F0FDF4',
            100: '#DCFCE7',
            500: '#16A34A',
            600: '#007A3D',
            700: '#0F5132',
            800: '#0B4F29',
            900: '#063019',
          },
          gold: {
            50: '#FFFDF5',
            100: '#FEF9E7',
            300: '#F3E5AB',
            500: '#D4AF37',
            600: '#AA8C2C',
          }
        }
      }
    },
  },
  plugins: [],
}
