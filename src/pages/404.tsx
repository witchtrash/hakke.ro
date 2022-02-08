import React from 'react';
import { Container } from 'components/Layout';
import { Box, Center, Heading, Link as ChakraLink } from '@chakra-ui/react';
import { IconButton } from 'components/IconButton';
import { RiArrowLeftSLine } from 'react-icons/ri';
import Link from 'next/link';

const NotFound = () => (
  <Container
    backgroundImage="/assets/404.jpg"
    backgroundRepeat="no-repeat"
    backgroundPosition="right bottom"
    backgroundSize={['contain']}
  >
    <Center h="full" position="relative">
      <Link href="/" passHref>
        <ChakraLink>
          <IconButton
            position="absolute"
            top="0"
            left="0"
            aria-label="Navigate to home"
            icon={<RiArrowLeftSLine />}
          />
        </ChakraLink>
      </Link>
      <Box p="1rem 2rem" background="violet.500">
        <Heading fontSize={['1rem', '2rem', '3rem']} color="white">
          There is nothing to be found here.
        </Heading>
      </Box>
    </Center>
  </Container>
);

export default NotFound;
