/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        '50p': '50vh',
        '75p': '75vh',
        '90p': '90vh',
      },
      maxWidth: {
        '50p': '50vh',
        '75p': '75vh',
        '90p': '90vh',
      },
      fontFamily: {
        Anton: ['Anton', 'sans-serif'],
       },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'matrix': '#47d543',
      'offwhite': '#fff9ee',
      'purple': '#de42de',
      'f4a-orange': '#ff6633',
      'f4a-green': '#224a2f',
      'f4a-gray': '#b3b4ab',
      'f4a-lily': '#cc99ff',
      

    },
  },
  plugins: [function ({ addUtilities }) {
    const newUtilities = {
      '.bottom-drop-shadow': {
        boxShadow: '0 2px 2px -2px rgba(0, 0, 0, 0.2)',
      },
    };

    addUtilities(newUtilities);
  },],

}