/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    
    extend: {
      backgroundImage: {
        'featureImage' : "url('./assets/feat.png')"
      },

      screens: {
        xxs: '280px',
        xs: '370px',
        ssm: '390px',
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1020px",
        lg: "1200px",
        xl: "1700px"
      },

      colors: {
        'primary' : "#163D8B",
        'secondary': "#F2B203",
        'serviceGrey': "#363636",
        'shadeGrey' : "#4D4D4D",
        'footerGrey' : "#D9DBE1",
        'shadeWhite' : "#FAFAFA",
        'grey': "#EBEBEB",
        'lightGrey': "#D5D7DD"
        
      },

      fontFamily: {
        manrope: ["Manrope"],
        montserrat: ["Montserrat"],
        thiccboi : ["THICCBOI"]
      },
      width: {
        '150': "150px"
      },
      height: {
        '150px': "150px"
      },
    },
  },

  screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      xxs: '280px',
      xs: '370px',
      ssm: '390px'
    },
  plugins: [],
}
