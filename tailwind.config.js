const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
      },
      backgroundImage: {
        'hoopUpBg': "url('./src/assets/imgs//Back.png')",
      },
      backgroundColor :{
        'button-blue' : '#2D74FF',
        'light-black' : 'rgba(0, 0, 0, 0.05)',
      },
      textColor: {
        'main-blue' : '#2D74FF',
        'black-60' : 'rgba(0, 0, 0, 0.6)',
      },
      maxWidth :{
        'main-container' : "1290px",
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
