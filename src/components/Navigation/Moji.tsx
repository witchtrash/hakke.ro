import React from 'react';
import { Heading, HeadingProps, VStack, HStack } from '@chakra-ui/react';
import { MotionBox } from 'components/MotionBox';
import { Variants } from 'framer-motion';

const item: Variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  closed: {
    x: -10,
    opacity: 0,
  },
};

const list: Variants = {
  open: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
      staggerDirection: 1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.07,
      staggerDirection: 1,
    },
  },
};

const SmallMoji = (props: HeadingProps) => (
  <MotionBox variants={item}>
    <Heading
      color="aquamarine"
      fontSize={['1rem', '1.25rem', '2rem']}
      fontFamily="moji"
      fontWeight="light"
      userSelect="none"
    >
      {props.children}
    </Heading>
  </MotionBox>
);

const BigMoji = (props: HeadingProps) => (
  <Heading
    color="aquamarine"
    fontSize={['6rem', '8rem', '12rem']}
    fontFamily="moji"
    fontWeight="light"
    userSelect="none"
  >
    {props.children}
  </Heading>
);

export const Moji = () => (
  <MotionBox variants={list}>
    <HStack>
      <BigMoji>絵美</BigMoji>
      <VStack spacing="-0.25rem">
        <SmallMoji>魔</SmallMoji>
        <SmallMoji>法</SmallMoji>
        <SmallMoji>少</SmallMoji>
        <SmallMoji>女</SmallMoji>
        <SmallMoji>ぜ</SmallMoji>
      </VStack>
    </HStack>
  </MotionBox>
);
