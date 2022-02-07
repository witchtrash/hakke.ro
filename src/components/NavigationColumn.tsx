import React from 'react';
import { VStack, Box } from '@chakra-ui/react';
import { RiMenu3Fill } from 'react-icons/ri';
import { IconButton } from './IconButton';

export const NavigationColumn = () => {
  return (
    <VStack as="nav" alignItems="flex-end">
      <IconButton aria-label="Open navigation" icon={<RiMenu3Fill />} />
      <Box
        background="currentColor"
        w=".25rem"
        h="calc(100vh - 14rem)"
        bottom="4rem"
        zIndex={-100}
        position="absolute"
      ></Box>
    </VStack>
  );
};
