// Define what props.theme will look like
export const themeLight = {
  colors: {
    primary: {
      default: '#FF4800',
      100: '#FFEDE5',
      200: '#FFDACC',
      300: '#FFC8B3',
      400: '#FFB699',
      500: '#FFA380',
      600: '#FF9166',
      700: '#FF7F4D',
      800: '#FF6D33',
      900: '#FF5A1A'
    },
    black: {
      default: '#1E1E1E',
      100: '#F4F4F4',
      200: '#E8E8E8',
      300: '#BBBBBB',
      400: '#8F8F8F'
    },
    secundary: {
      default: '#5C00D1',
      100: '#B881FF',
      200: '#770DFF'
    },
    tertiary: {
      first: '#FFFB19',
      second: '#47E439',
      third: '#EB4402'
    },
    error: '#FF4030',

    gradient: {
      primary: 'linear-gradient(90deg, #FF4800 0%, #FF6D33 100%)',
      secundary: 'linear-gradient(90deg, #FF6D33 0%, #FF4800 100%)',
      tertiary: 'linear-gradient(90deg, #770DFF 0%, #5C00D1 100%)'
    }
  },
  fonts: {
    fontSize: {
      xs: '0.625rem',
      sm: '0.75rem',
      md: '0.75rem',
      lg: '0.938rem',
      xl: '1rem',
      '2xl': '1rem',
      '3xl': '1.25rem',
      '4xl': '1.25rem',
      '5xl': '1.5rem',
      '6xl': '1.5rem',
      '7xl': '1.875rem',
      '8xl': '1.875rem',
      '9xl': '2rem',
      '10xl': '2rem'
    },
    fontWeight: {
      light: 300,
      regular: 400,
      semiBold: 600,
      bold: 700
    }
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '2.5rem',
    '2xl': '3rem',
    '3xl': '5rem'
  },
  aspectRatio: {
    square: '1 / 1',
    semiSquare: '4 / 3',
    rectangle: '16 / 9',
    bigRectangle: '21 / 9'
  },
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};
