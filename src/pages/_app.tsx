import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { dark, light, ThemeContext } from '@util/theme';
import { Reset } from '@components/Reset';

const App = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = React.useState(dark);

  const toggleTheme = () => {
    if (theme === dark) {
      return setTheme(light);
    }
    return setTheme(dark);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Reset />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
