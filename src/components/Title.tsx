import React from 'react';
import Head from 'next/head';

interface TitleProps {
  title: string;
}
export const Title = (props: TitleProps) => (
  <Head>
    <title>{props.title}</title>
  </Head>
);
