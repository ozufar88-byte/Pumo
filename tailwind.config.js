/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins'],
        source: ["Playfair Display"]
      },
      backgroundImage: {
        headerBg: "url('/image/header-bg.png')"
      },
      container: {
        center: true,
        padding: '15px',
        screens: {
          sm: '1170px',
        }
      },
      colors: {
        primery: '#EE5514',
        secondary: '#1A0A03'
      },
    },
  },
  plugins: [],
}

