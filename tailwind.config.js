/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        avant: ["Avant", "cursive"],
        quickbold:["QuickBold","cursive"],
        quicksand:["Quicksand","cursive"],
      },
      keyframes: {
        moveLeft: {
          'from': {   transform:'translateX(-100%)' },
          'to': {  transform:'translateX(0)' },
        },
        moveRight: {
          'from': {   transform:'translateX(100%)' },
          'to': {  transform:'translateX(0)' },
        },
        moveTop:{
          'from': {   transform:'translateY(70%)' },
          'to': {  transform:'translateY(0)' },
        },
        scaleUp:{
          'from': { transform:'scale(.5)'},
          'to': {  transform:'scale(1)' },
        },
        
      },
      animation: {
        left: 'moveLeft 1s ease-in-out',
        right: 'moveRight 1s ease-in-out',
        top: 'moveTop 1s ease-in-out',
        grow: 'scaleUp 1s ease-in-out',
      },
      colors:{
         'main-blue':'#3700bb',
         'light-blue':'#6200ee',
         'dark-blue':'#0b08a0',
      },
      backgroundColor:{
        'light-blue':'#6200ee',
      },
      backgroundImage: {
        'home-gradient':'linear-gradient(to right, #9ce6f8, #86e5f7, #6de3f4, #4de2f0, #12e0eb)', 
        'main-gradient':'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
         
     },
    },
  },
  plugins: [],
}

// scaleUp:{
//   'from': { transform:'scale(.5)'},
//    'to': { transform:'scale(1)'
// }