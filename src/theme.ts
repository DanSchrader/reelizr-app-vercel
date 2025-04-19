'use client';

import { createTheme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const baseTheme = createTheme();

export const themeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    text: {
      primary: '#fcfcfc',  
      secondary: '#0c0c0c',
    },
    background: {
      default: '#0c0c0c',
      paper: '#0c0c0c'
    },
    primary: {
      main: '#0c0c0c',
    },
    secondary: {
      main: '#fcfcfc',
    },
  },
  typography: {
    fontFamily: "'Ostrich Sans Regular', 'Ostrich Sans Black', 'Ostrich Sans Bold', 'Ostrich Sans Light', 'Ostrich Sans Dashed', 'Ostrich Sans Rounded', 'Ostrich Sans Inline Regular', 'Ostrich Sans Inline Italic'",
    h1: {
      fontFamily: 'Ostrich Sans Bold',
      fontSize: '2.8rem',
      '@media (min-width:600px)': {
        fontSize: '2rem'
      },
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontFamily: 'Ostrich Sans Black',
      fontSize: '2.8rem',
      '@media (min-width:600px)': {
        fontSize: '2rem'
      },
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
      },
    },
    h3: {
      fontFamily: 'Ostrich Sans Dashed',
      fontSize: '2.8rem',
      '@media (min-width:600px)': {
        fontSize: '2rem'
      },
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
      },
    },
    h4: {
      fontFamily: 'Roboto Black',
      fontSize: '2.8rem',
      '@media (min-width:600px)': {
        fontSize: '2rem'
      },
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
      },
    },
    h5: {
      fontFamily: 'Roboto ExtraBold',
      fontSize: '2.8rem',
      '@media (min-width:600px)': {
        fontSize: '2rem'
      },
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
      },
    },
    h6: {
      fontFamily: 'Roboto Bold',
      fontSize: '2.8rem',
      '@media (min-width:600px)': {
        fontSize: '2rem'
      },
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
      },
    },
    subtitle1: {
      fontFamily: 'Roboto Medium'
    },
    subtitle2: {
      fontFamily: 'Roboto Medium'
    },
    body1: {
      fontFamily: 'Roboto Regular',
      fontSize: '1rem',
      '@media (min-width:600px)': {
        fontSize: '1.2rem'
      },
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
      },
    },
    body2: {
      fontFamily: 'Roboto Light'
    }    
  },
};

export default createTheme(themeOptions);