import React from 'react';
import { Logo } from '~/components/Logo';
import { Layout } from '~/components/Layout';
import styled from '@emotion/styled';

const Hero = styled(Logo)`
  width: 600px;
  .text-path {
    fill: #fff;
    stroke: #0f0;
    stroke-width: 2px;

    &.stroke {
      fill: #000;
    }
  }
`;

const Home = () => (
  <Layout>
    <Hero />
  </Layout>
);

export default Home;
