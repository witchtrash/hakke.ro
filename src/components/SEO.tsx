import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title: string;
}
export const SEO = (props: SEOProps) => (
  <React.Fragment>
    <Head>
      <title>{props.title}</title>
    </Head>
  </React.Fragment>
);
