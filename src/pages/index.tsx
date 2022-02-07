import React from 'react';
import { Container } from 'components/Container';
import { Box, VStack, Button } from '@chakra-ui/react';
import { HeroDecoration } from 'components/HeroDecoration';

const Index = () => {
  return (
    <Box as="main">
      <HeroDecoration />
      <Container display="flex">
        <Box flex="1 1 auto" />
        <VStack alignItems="flex-end">
          <Button mb="2rem">x</Button>
          <Box background="pink.200" w="1rem" h="100%"></Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
