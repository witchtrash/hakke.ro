import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export const Container = ({ children, ...rest }: BoxProps) => (
  <Box p={[6, 12, 16]} minH="100vh" {...rest}>
    {children}
  </Box>
);
