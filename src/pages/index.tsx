import React from 'react';
import { Container } from 'components/Container';
import { Box, Spacer } from '@chakra-ui/react';
import { HeroDecoration } from 'components/HeroDecoration';
import { NavigationColumn } from 'components/NavigationColumn';

const Index = () => {
  return (
    <Box as="main">
      <HeroDecoration />
      <Container display="flex">
        <Spacer />
        <NavigationColumn />
      </Container>
    </Box>
  );
};

export default Index;
