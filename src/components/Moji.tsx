import React from 'react';
import { Heading, HeadingProps, VStack, HStack } from '@chakra-ui/react';

const SmallMoji = (props: HeadingProps) => (
  <Heading
    color="aquamarine"
    fontSize={['1rem', '1.25rem', '2rem']}
    fontFamily="moji"
    fontWeight="light"
  >
    {props.children}
  </Heading>
);

const BigMoji = (props: HeadingProps) => (
  <Heading
    color="aquamarine"
    fontSize={['6rem', '8rem', '12rem']}
    fontFamily="moji"
    fontWeight="light"
  >
    {props.children}
  </Heading>
);

export const Moji = () => (
  <HStack>
    <BigMoji>魔女</BigMoji>
    <VStack spacing="-0.25rem">
      <SmallMoji>絶</SmallMoji>
      <SmallMoji>望</SmallMoji>
      <SmallMoji>的</SmallMoji>
      <SmallMoji>な</SmallMoji>
      <SmallMoji>夢</SmallMoji>
    </VStack>
  </HStack>
);
