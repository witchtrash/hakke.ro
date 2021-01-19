import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { sample } from 'lodash';
import { Layout, Grid } from '~/components/Layout';
import { SplitFlapWord } from '~/components/SplitFlap';
import { SEO } from '~/components/SEO';

const Word = styled(SplitFlapWord)`
  font-family: Courier;
  display: block;
  font-size: 16px;
  text-align: center;
  text-shadow: 0 0 10px #fff, 0 0 4px #f00;
  color: #fff;
`;

const StyledGrid = styled(Grid)`
  @media (max-width: 400px) {
    grid-template-columns: repeat(12, 20px [col]);
  }
`;

interface HomeProps {
  data: GatsbyTypes.IndexQuery;
}

const Home = ({ data }: HomeProps) => {
  const node = sample(data.allPrismicPoem.edges)?.node;
  const poem = node?.data?.stanza?.text ?? 'hakke.ro';

  const stanzas = Array.from(poem)
    .map(s => s.toUpperCase())
    .filter(s => {
      const charCode = s.charCodeAt(0);
      return charCode <= 93 && charCode >= 32;
    })
    .join('')
    .split(' ');

  const splitFlapDisplay = stanzas.map((s: string, i: number) => (
    <Word
      word={`${s} `}
      key={`word-${i}`}
      delay={i * 200}
      delaySteps={100}
      speed={20}
    />
  ));

  return (
    <Layout>
      <SEO />
      <StyledGrid>{splitFlapDisplay}</StyledGrid>
    </Layout>
  );
};

export const query = graphql`
  query Index {
    allPrismicPoem(filter: { data: { show_on_page: { eq: true } } }) {
      edges {
        node {
          data {
            order
            show_on_page
            stanza {
              text
            }
          }
        }
      }
    }
  }
`;

export default Home;
