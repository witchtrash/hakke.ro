import React from 'react';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'styles/theme';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Head>
        <title key="title">1-800-hakkero</title>
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
        <meta property="og:site_name" content="hakke.ro" />
        <meta property="og:type" content="website" key="og-type" />
        <meta property="og:url" content="https://hakke.ro" />
        <meta property="og:image" content="/assets/og.webp" key="og-image" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="/assets/og.webp"
          key="og-image"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </React.Fragment>
  );
};

export default App;
