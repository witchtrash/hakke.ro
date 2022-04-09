import React from 'react';
import { Icon, Text } from '@chakra-ui/react';
import { RiEyeCloseFill } from 'react-icons/ri';

export const NoData = () => (
  <React.Fragment>
    <Icon as={RiEyeCloseFill} h="6" w="6" color="gray.300" />
    <Text color="gray.400">but nobody came.</Text>
  </React.Fragment>
);
