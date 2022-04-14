import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'styles/theme';
import { SWRConfig } from 'swr';
import { fetcher } from 'util/fetcher';
import { MarkdownProvider } from 'components/Blog';
import 'focus-visible/dist/focus-visible';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <React.Fragment>
      <Head>
        <title key="title">hakke.ro</title>
        <meta
          property="og:title"
          content="javascript witchcraft"
          key="og-title"
        />
        <meta name="author" content="emilía" key="author" />

        <link rel="icon" href="/icon.png" />
        <meta name="theme-color" content="#6B2FB6" />

        <meta
          name="description"
          content="A witch's personal website"
          key="description"
        />
        <meta
          property="og:description"
          content="A witch's personal website"
          key="og-description"
        />
        <meta property="og:site_name" content="hakke.ro" />
        <meta property="og:type" content="website" key="og-type" />
        <meta property="og:url" content="https://hakke.ro" />
        <meta
          property="og:image"
          content="https://hakke.ro/assets/og.jpg"
          key="og-image"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://hakke.ro/assets/og.jpg"
          key="og-image"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <SWRConfig
          value={{
            fetcher,
          }}
        >
          <MarkdownProvider>
            {getLayout(<Component {...pageProps} />)}
          </MarkdownProvider>
        </SWRConfig>
      </ChakraProvider>
    </React.Fragment>
  );
};

export default App;
