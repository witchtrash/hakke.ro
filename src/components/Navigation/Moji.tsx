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
      <SmallMoji>魔</SmallMoji>
      <SmallMoji>法</SmallMoji>
      <SmallMoji>少</SmallMoji>
      <SmallMoji>女</SmallMoji>
      <SmallMoji>ぜ</SmallMoji>
    </VStack>
  </HStack>
);
