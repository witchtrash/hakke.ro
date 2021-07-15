import React from 'react';
import Head from 'next/head';
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

        <Head>
          <title key="title">hakke.ro</title>
          <meta property="og:title" content="hakke.ro" key="og-title" />
          <meta name="author" content="mari" key="author" />
          <link rel="icon" href="/icon.png" />

          <meta
            name="description"
            content="Strange is the night where black stars rise, And strange moons circle through the skies, But stranger still is Lost Carcosa."
            key="description"
          />
          <meta
            property="og:description"
            content="Strange is the night where black stars rise, And strange moons circle through the skies, But stranger still is Lost Carcosa."
            key="og-description"
          />
          <meta property="og:type" content="website" key="og-type" />
          <meta property="og:url" content="https://hakke.ro" />
          <meta property="og:image" content="/assets/og.webp" key="og-image" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
