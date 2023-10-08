/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {

    

    extend: {
      screens : {
        sm : '480px',
        md : '678px',
        md2 : '800px',
        lg : '1024px',
        xl : '1200px'
      },
      colors : {
        primary : '#1DB2FF',
        secondary : '#545454',
      },
      backgroundImage: {
        'header-pattern': "url('./src/assests/envatoBg.svg')",
        'profile1': "url('./src/assests/pattern2.png')",
      }
    },

    // container : {
    //   DEFAULT : {
    //     padding : '1rem',
    //   },
    //   sm : {
    //     padding: '1.5rem'
    //   }
    // }
  },
  plugins: [require('flowbite/plugin')],
}