import React from 'react';
import { Container } from 'components/Layout';
import { Box, Flex, Heading, Link as ChakraLink } from '@chakra-ui/react';
import { IconButton } from 'components/IconButton';
import { RiArrowLeftSLine } from 'react-icons/ri';
import Link from 'next/link';

const NotFound = () => (
  <Container
    display="flex"
    backgroundImage="/assets/404.jpg"
    backgroundRepeat="no-repeat"
    backgroundPosition="right bottom"
    backgroundSize="contain"
  >
    <Box>
      <Link href="/" passHref>
        <ChakraLink>
          <IconButton
            aria-label="Navigate to home"
            icon={<RiArrowLeftSLine />}
          />
        </ChakraLink>
      </Link>
    </Box>
    <Flex flex="1 1 auto" alignItems="center" justifyContent="center">
      <Box p="1rem 2rem" background="violet.500">
        <Heading fontSize={['1rem', '2rem', '3rem']} color="white">
          There is nothing to be found here.
        </Heading>
      </Box>
    </Flex>
  </Container>
);

export default NotFound;
