/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#EF4949',
      black: 'black',
      lightgrey: '#F5F5F5',
      success: '#27AE60',
      white: 'white',
      light: '#828282',
      lightborder: '#C0C0C0',
      borderGuest: "#B7B7B7",
      f5: "#F5F5F5",
      green: "#2BC155",
      blue: "#009DDD",
      red: "#EF4949",
      yellow: "#FFFF00",
      viewBlue: "#009DDD",
      editGreen: "#00B227",
      deleteRed: "#EF4949",

    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    fontSize: {
      sm: '14px',
      base1: '16px',
      base2: '18px',
      base3: '24px',
      lg: '40px',
      boxheight1: '',
      boxheight2: ''      
    },
    extend: {
      fontFamily: {
        noto: ['Noto Sans', 'sans-serif'],
        segoe: "Segoe UI",
        segoeBold: "Segoe UI Bold",
        // poppins: "poppins",
      },
      boxShadow:{
        '3xl': '0px 4px 19px rgba(0, 0, 0, 0.08)',
        '4xl': '0px 3px 20px rgba(0, 0, 0, 0.1)',
        '5xl': '4px 4px 4px rgba(0, 0, 0, 0.22)',
        '6xl':'-1px 3px 23px rgba(0, 0, 0, 0.12)',
        '7xl':'0px -3px 42px rgba(0, 0, 0, 0.2)'
        
      },
      dropShadow:{
        '6xl':'0px 4px 4px rgba(0, 0, 0, 0.25'
      }
    },
    screens: {
      'mobile': {'max': '550px'},
      'tablet': {'max':'1023px'},

      'tabletOnly': {'min':'551px', 'max':'1023px'},
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1400px',
      // => @media (min-width: 1280px) { ... }
    },
  }
}

