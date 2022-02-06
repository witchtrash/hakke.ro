import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export const Main = ({ children, ...rest }: BoxProps) => (
  <Box p={[6, 12, 16]} h="100vh" w="100vw" {...rest}>
    {children}
  </Box>
);
