import React from 'react';
import { useBreakpointValue, VStack, Box, useConst } from '@chakra-ui/react';
import { HeroText } from './HeroText';
import Image from 'next/image';
import marisa from '/public/assets/marisa.webp';
import { MotionBox } from './MotionBox';
import { Variants } from 'framer-motion';

export const HeroDecoration = () => {
  const colors = ['red', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink'];
  const text = useBreakpointValue(
    {
      base: 'hakkero',
      md: '1-800-hakkero',
    },
    'xl'
  );
  const filledIndex = useConst(6);

  const pickColor = (i: number): string => {
    return `${colors[i % colors.length]}.300`;
  };

  const list: Variants = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.07,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const item: Variants = {
    visible: i => ({
      y: 0,
      opacity: 1,
      background: i === filledIndex ? 'violet.600' : 'transparent',
      width: 'unset',
      transition: {
        delay: i === filledIndex ? 0.6 : (i - 1) * 0.07,
        duration: 0.6,
      },
    }),
    hidden: i => ({
      y: 10,
      opacity: 0,
      width: i === filledIndex ? '0%' : 'unset',
    }),
  };

  const image: Variants = {
    visible: {
      top: '15%',
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: 0.4,
      },
    },
    hidden: {
      top: '10%',
      opacity: 0,
      rotate: 5,
    },
  };

  return (
    <Box
      zIndex="hide"
      position="absolute"
      top="-5rem"
      left={['0', '0', '10vw']}
      width={['100%', '100%', 'calc(100% - 10vw)']}
      height="calc(100% + 5rem)"
      overflow="hidden"
    >
      <MotionBox variants={list} initial="hidden" animate="visible">
        <VStack alignItems={['center', 'center', 'flex-start']}>
          {new Array(24).fill('').map((_, i) => (
            <MotionBox
              custom={i}
              key={`hero-text-${i}`}
              variants={item}
              zIndex={i === filledIndex ? 'overlay' : 'base'}
            >
              <HeroText
                key={`hero-text-${i}`}
                color={i === filledIndex ? 'aquamarine' : pickColor(i)}
                filled={i === filledIndex}
                zIndex={i === filledIndex ? 'overlay' : 'base'}
                aria-label="decorative"
              >
                {text}
              </HeroText>
            </MotionBox>
          ))}
        </VStack>
        <MotionBox position="fixed" variants={image} w="100%" minW="46rem">
          <Image aria-label="decorative" src={marisa} />
        </MotionBox>
      </MotionBox>
    </Box>
  );
};
