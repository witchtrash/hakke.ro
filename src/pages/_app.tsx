import React from 'react';
import type { AppProps } from 'next/app';
import { Reset } from '@hakkero/components/Reset';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Reset />
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default App;
