import React from 'react';
import { PageLayout } from 'components/Layout';
import { Flex, Heading } from '@chakra-ui/react';
import { MotionBox } from 'components/MotionBox';
import { SEO } from 'components/SEO';

const NotFound = () => (
  <React.Fragment>
    <SEO title="hakke.ro | stranger still are lost pages" />

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
          background="violet.400"
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
  </React.Fragment>
);

export default NotFound;
