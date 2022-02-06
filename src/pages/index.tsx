import React from 'react';
import { Main } from 'components/Main';
import { Heading } from '@chakra-ui/react';
import { HeroDecoration } from 'components/HeroDecoration';

const Index = () => {
  return (
    <React.Fragment>
      <HeroDecoration />
      <Main overflowX="hidden">
        <Heading color="violet.400">hello</Heading>
      </Main>
    </React.Fragment>
  );
};

export default Index;
