import React from 'react';
import {
  IconButton as ChakraIconButton,
  IconButtonProps,
} from '@chakra-ui/react';

export const IconButton = (props: IconButtonProps) => (
  <ChakraIconButton
    display="inline-flex"
    alignItems="center"
    fontSize="42px"
    variant="unstyled"
    _hover={{
      color: 'violet.400',
    }}
    {...props}
  />
);
