import React from 'react';
import { Layout } from '~/components/Layout';
import styled from '@emotion/styled';
import { SplitFlapWord } from '~/components/SplitFlap';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 20px [col]);
  grid-template-rows: repeat(auto-fit, 20px);
  height: fit-content;
  align-self: center;
`;

const Word = styled(SplitFlapWord)`
  font-family: Courier;
  display: block;
  font-size: 16px;
  text-align: center;

  color: ${props => {
    if (props.word.includes('CARCOSA')) {
      return '#f00';
    }
    return '#fff';
  }};

  text-shadow: 0 0 10px #fff, 0 0 4px #f00;
`;

const Home = () => {
  const quote = Array.from(
    `I saw the lake of Hali, thin and blank, without a ripple or wind to stir it, and I saw the towers of Carcosa behind the moon. Aldebaran, the Hyades, Alar, Hastur, glided through the cloud-rifts which fluttered and flapped as they passed like the scolloped tatters of the King in Yellow.`
  )
    .map(s => s.toUpperCase())
    .filter(s => {
      const charCode = s.charCodeAt(0);
      return charCode <= 93 && charCode >= 32;
    })
    .join('')
    .split(' ');

  const splitFlapDisplay = quote.map((s: string, i: number) => (
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
      <Grid>{splitFlapDisplay}</Grid>
    </Layout>
  );
};

export default Home;
