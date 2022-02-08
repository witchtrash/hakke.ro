import React from 'react';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'styles/theme';
import type { AppProps } from 'next/app';
import 'focus-visible/dist/focus-visible';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Head>
        <title key="title">hakke.ro</title>
        <meta
          property="og:title"
          content="javascript witchcraft"
          key="og-title"
        />
        <meta name="author" content="mari" key="author" />

        <link rel="icon" href="/icon.png" />
        <meta name="theme-color" content="#6B2FB6" />

        <meta
          name="description"
          content="A website by an idiot."
          key="description"
        />
        <meta
          property="og:description"
          content="A website by an idiot."
          key="og-description"
        />
        <meta property="og:site_name" content="hakke.ro" />
        <meta property="og:type" content="website" key="og-type" />
        <meta property="og:url" content="https://hakke.ro" />
        <meta property="og:image" content="/assets/og.jpg" key="og-image" />
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
