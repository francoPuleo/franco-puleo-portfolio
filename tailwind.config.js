/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/component/*.{js,ts,jsx,tsx}",
    "./src/pages/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'woodsmoke': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#141414',
        },
        'lightning-yellow': {
          '50': '#fdfbe9',
          '100': '#fcf7c5',
          '200': '#faed8e',
          '300': '#f7db4d',
          '400': '#f3c71c',
          '500': '#efb810',
          '600': '#c4870a',
          '700': '#9c610c',
          '800': '#814d12',
          '900': '#6e3f15',
          '950': '#402008',
        },
      },
      backgroundColor: {
        'woodsmoke': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#141414',
        },
        'lightning-yellow': {
          '50': '#fdfbe9',
          '100': '#fcf7c5',
          '200': '#faed8e',
          '300': '#f7db4d',
          '400': '#f3c71c',
          '500': '#efb810',
          '600': '#c4870a',
          '700': '#9c610c',
          '800': '#814d12',
          '900': '#6e3f15',
          '950': '#402008',
        },
      },
      animation: {
        marquee: 'marquee 18s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-48%)' },
        },
      },
      boxShadow: {
        'uniform': '0 0 5px rgba(0, 0, 0, 0.2)',
      },
      screens: {
        'lg2': '1360px',
      },
      height: {
        '150vh': '120vh', // Define una altura de 150vh
      },
      spacing: {
        '128': '32rem',
        '82': '21rem',
      },
    },
  },
  plugins: [],
}
