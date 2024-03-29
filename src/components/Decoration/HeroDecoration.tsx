import React from 'react';
import { useBreakpointValue, VStack, Box } from '@chakra-ui/react';
import { HeroText } from './HeroText';
import { MotionBox } from 'components/MotionBox';
import Image from 'next/image';
import marisa from '/public/assets/marisa.webp';
import { animations } from './animations';

const filledIndex = 6;

export const HeroDecoration = () => {
  const colors = ['red', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink'];
  const text = useBreakpointValue(
    {
      base: 'hakkero',
      md: '1-800-hakkero',
    },
    'xl'
  );

  const pickColor = (i: number): string => {
    return `${colors[i % colors.length]}.300`;
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
      <MotionBox variants={animations.list} initial="hidden" animate="visible">
        <VStack alignItems={['center', 'center', 'flex-start']}>
          {new Array(24).fill('').map((_, i) => (
            <MotionBox
              custom={i}
              key={`hero-text-${i}`}
              variants={
                i === filledIndex ? animations.oneOffItem : animations.item
              }
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
        <MotionBox
          position="fixed"
          variants={animations.image}
          w="100%"
          minW="46rem"
        >
          <Image aria-label="decorative" src={marisa} />
        </MotionBox>
      </MotionBox>
    </Box>
  );
};
