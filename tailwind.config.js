module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rosadoClaro: '#E3D8F1',
        rosadoBoton: '#EAC435',
        grisLogo: '#5D5F71',
      },
      width: {
        almost: '96%',
      },
    },
    minHeight: {
      12: '48px',
    },
  },
  variants: {
    extend: {
      textOverflow: ['hover'],
      wordBreak: ['hover'],
      height: ['hover'],
    },
  },
  plugins: [],
};
