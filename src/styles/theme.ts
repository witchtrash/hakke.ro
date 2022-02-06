import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    violet: {
      50: '#f3e9ff',
      100: '#d7c1f3',
      200: '#bb99e7',
      300: '#a071db',
      400: '#8549d0',
      500: '#6b2fb6',
      600: '#53258f',
      700: '#3c1967',
      800: '#240f40',
      900: '#0f031a',
    },
    spring: {
      50: '#dafff0',
      100: '#adffd8',
      200: '#7cffc1',
      300: '#4affa8',
      400: '#1aff90',
      500: '#00e677',
      600: '#00b35c',
      700: '#008041',
      800: '#004e26',
      900: '#001c08',
    },
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Rubik, sans-serif',
    monospace: 'Oxygen Mono, monospace',
    moji: 'M PLUS 1p, sans-serif',
  },
  styles: {
    global: {
      'html, body, #__next': {
        minHeight: '100vh',
      },
    },
  },
});
