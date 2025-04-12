'use client';

import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

declare module '@mui/material/styles' {
  
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
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
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;