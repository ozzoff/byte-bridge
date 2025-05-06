/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow:"#FFCC00",
        black:"#202020",
        grey:"#404040",
        white: "#ffffff",
        red: "#FF3B30",
      },
      backgroundImage: {
        'grid-grey': " linear-gradient(90deg, #E4E4E4  1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-sm': '70px 70px',
      },
      fontFamily: {
        myfont: ['MyFont'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fade: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
        fade: 'fade 2.5s ease-in-out',
        fadeOut: 'fadeOut 5s ease-in-out forwards',
      },
      
      
    },
  },
  plugins: [],
}
