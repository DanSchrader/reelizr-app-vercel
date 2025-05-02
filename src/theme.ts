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
    error: {
      main: '#cc0000',
    },
  },
  typography: {
    fontFamily: "'Ostrich Sans Regular', 'Ostrich Sans Black', 'Ostrich Sans Bold', 'Ostrich Sans Light', 'Ostrich Sans Dashed', 'Ostrich Sans Rounded', 'Ostrich Sans Inline Regular', 'Ostrich Sans Inline Italic', 'Roboto Black', 'Roboto ExtraBold', 'Roboto Bold', 'Roboto Regular', 'Roboto Italic'",
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
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // Comprehensive autofill style neutralization
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px #0c0c0c inset",
            transition: "background-color 5000s ease-in-out 0s",
            WebkitTextFillColor: "#fefbe4",
          },
          "& input:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px #0c0c0c inset",
            transition: "background-color 5000s ease-in-out 0s",
            WebkitTextFillColor: "#fefbe4",
          },
          "& textarea:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px #0c0c0c inset",
            transition: "background-color 5000s ease-in-out 0s",
            WebkitTextFillColor: "#fefbe4",
          },
          // For Firefox
          "& input:-moz-autofill": {
            background: "#0c0c0c !important",
            color: "#fefbe4 !important",
          },
          // For Edge
          "& input:-ms-autofill": {
            background: "#0c0c0c !important",
            color: "#fefbe4 !important",
          },
        },
      },
    },
    // CssBaseline safety web to prevent autofill style changes
    MuiCssBaseline: {
      styleOverrides: {
        "input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, textarea:-webkit-autofill, textarea:-webkit-autofill:hover, textarea:-webkit-autofill:focus, select:-webkit-autofill, select:-webkit-autofill:hover, select:-webkit-autofill:focus": {
          WebkitBoxShadow: "0 0 0 1000px #0c0c0c inset !important",
          WebkitTextFillColor: "#fefbe4 !important",
          transition: "background-color 5000s ease-in-out 0s",
          caretColor: "#fefbe4",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            fontFamily: 'Roboto Regular',
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#9943a6",
              borderWidth: "1px",
            },
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#9943a6",
                borderWidth: "2px",
              },
            },
            "&:hover:not(.Mui-focused)": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#9943a6",
                borderWidth: "2px",
              },
            },
          },
          "& .MuiInputLabel-outlined": {
            "&.Mui-focused": {
              color: "#fefbe4",
            },
          },
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: '#cc0000',
          fontFamily: 'Roboto Italic',
          fontSize: "0.8rem",
          marginTop: "0.5rem",
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Roboto Italic',
        },
      },
    },
  },
};

export default createTheme(themeOptions);