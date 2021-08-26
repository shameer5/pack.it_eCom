module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        nunito: ['Nunito'],
        poppins: ['Poppins']
      },
      colors:{
        new: {
          100: '#334257',
          200: '#476072',
          300: '#548CA8',
        },
      },
      height: {
        100: '36rem'
       },
       boxShadow: {
         'custom': 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;'
       }
    },
  },
  variants: {
    extend: {
      cursor:['disabled'],
      opacity: ['disabled']
    },
  },
  plugins: [],
}
