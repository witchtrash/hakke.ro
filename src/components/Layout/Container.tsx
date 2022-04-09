import React from 'react';
import { BoxProps, Flex } from '@chakra-ui/react';

export const Container = ({ children, ...rest }: BoxProps) => (
  <Flex flexDirection="column" p={[6, 12, 16]} minH="100vh" {...rest}>
    {children}
  </Flex>
);
