import React from 'react';
import { Container } from 'components/Layout';
import { Box, Spacer } from '@chakra-ui/react';
import { Decoration } from 'components/Decoration';
import { NavigationMenu } from 'components/Navigation';

const Index = () => {
  return (
    <Box as="main">
      <Decoration />
      <Container display="flex">
        <Spacer />
        <NavigationMenu />
      </Container>
    </Box>
  );
};

export default Index;
