import React from 'react';
import { Heading, HeadingProps, HStack } from '@chakra-ui/react';

const BigMoji = (props: HeadingProps) => (
  <Heading
    color="aquamarine"
    fontSize={['3rem', '4rem', '6rem']}
    fontFamily="moji"
    fontWeight="light"
    userSelect="none"
  >
    {props.children}
  </Heading>
);

export const Moji = () => (
  <HStack>
    <BigMoji>絵美</BigMoji>
  </HStack>
);
