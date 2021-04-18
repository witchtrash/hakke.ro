import React from 'react';

export type SupportedTheme = 'dark' | 'light';

export type Theme = {
  colors: {
    background: string;
    text: string;
  };
};

export type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext<ThemeContextType>(null);

export const dark: Theme = {
  colors: {
    background: '#000',
    text: '#fff',
  },
};

export const light: Theme = {
  colors: {
    background: '#fff',
    text: '#000',
  },
};
