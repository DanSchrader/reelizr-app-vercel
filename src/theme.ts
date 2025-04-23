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
      primary: '#fefbe4',  
      secondary: '#23b9c0',
    },
    background: {
      default: '#0c0c0c',
      paper: '#0c0c0c'
    },
    primary: {
      main: '#23b9c0',
    },
    secondary: {
      main: '#9943a6',
    },
  },
  typography: {
    fontFamily: "'Ostrich Sans Regular', 'Ostrich Sans Black', 'Ostrich Sans Bold', 'Ostrich Sans Light', 'Ostrich Sans Dashed', 'Ostrich Sans Rounded', 'Ostrich Sans Inline Regular', 'Ostrich Sans Inline Italic'",
    h1: {
      fontFamily: 'Roboto Black',
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '3rem'
      },
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '4rem',
      },
    },
    h2: {
      fontFamily: 'Roboto ExtraBold',
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '2.5rem'
      },
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '3rem',
      },
    },
    h3: {
      fontFamily: 'Roboto Bold',
      color: '#23b9c0',
      fontSize: '1rem',
      '@media (min-width:600px)': {
        fontSize: '1.2rem'
      },
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontFamily: 'Ostrich Sans Rounded',
      fontSize: '2.8rem',
      '@media (min-width:600px)': {
        fontSize: '2rem'
      },
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
      },
    },
    h5: {
      fontFamily: 'Ostrich Sans Black',
      fontSize: '2.8rem',
      '@media (min-width:600px)': {
        fontSize: '2rem'
      },
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
      },
    },
    h6: {
      fontFamily: 'Ostrich Sans Dashed',
      color: '#9943A6',
      fontSize: '4rem',
      '@media (min-width:600px)': {
        fontSize: '6rem'
      },
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '8rem',
      },
    },
    subtitle1: {
      fontFamily: 'Ostrich Sans Bold',
      color: '#9943a6',
      fontSize: '1.2rem',
      '@media (min-width:600px)': {
        fontSize: '1.5rem'
      },
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '2rem',
      },
    },
    subtitle2: {
      fontFamily: 'Ostrich Sans Inline Regular',
      color: '#23b9c0',
      fontSize: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '2rem'
      },
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
      },
    },
    body1: {
      fontFamily: 'Roboto Regular',
      fontSize: '0.8rem',
      '@media (min-width:600px)': {
        fontSize: '0.9rem'
      },
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '1rem',
      },
    },
    body2: {
      fontFamily: 'Ostrich Sans Regular',
      fontSize: '1rem',
      '@media (min-width:600px)': {
        fontSize: '1.2rem'
      },
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
      },
    },
    button: {
      fontFamily: 'Roboto Bold',
      fontSize: '1rem',
      '@media (min-width:600px)': {
        fontSize: '1rem'
      },
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '1rem',
      },
    },
  },
};

export default createTheme(themeOptions);