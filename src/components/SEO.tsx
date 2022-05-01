import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
}
export const SEO = (props: SEOProps) => (
  <Head>
    <title>{`hakke.ro | ${props.title}`}</title>
    <meta property="og:title" content={props.title} key="og-title" />
    {props.description ? (
      <React.Fragment>
        <meta
          name="description"
          content={props.description}
          key="description"
        />
        <meta
          property="og:description"
          content={props.description}
          key="og-description"
        />
      </React.Fragment>
    ) : null}
  </Head>
);
