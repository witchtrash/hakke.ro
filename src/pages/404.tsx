import React from 'react';
import { PageLayout } from 'components/Layout';
import { Text, Box, Flex, Heading } from '@chakra-ui/react';
import { MotionBox } from 'components/MotionBox';

const NotFound = () => (
  <PageLayout withBackButton>
    <Flex
      display="flex"
      flex="1 1 auto"
      alignItems="center"
      justifyContent="center"
      backgroundImage="/assets/404.jpg"
      backgroundRepeat="no-repeat"
      backgroundPosition="right bottom"
      backgroundSize="contain"
    >
      <MotionBox
        p="1rem 2rem"
        fontSize={['2rem', '2rem', '2rem']}
        color="white"
        background="violet.300"
        animate={{
          opacity: [0, 1],
          y: [40, 0],
        }}
        borderRadius="md"
        boxShadow="md"
      >
        <Heading p="2">There is nothing to be found here.</Heading>
      </MotionBox>
    </Flex>
  </PageLayout>
);

export default NotFound;
