import React from 'react';
import { useBreakpointValue, VStack, Box } from '@chakra-ui/react';
import { HeroText } from './HeroText';
import Image from 'next/image';
import marisa from '/public/assets/marisa.webp';

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
      <Box position="absolute" w={['100%', '100%', 'unset']}>
        <VStack alignItems={['center', 'center', 'flex-start']}>
          {new Array(24).fill('').map((_, i) => (
            <HeroText
              key={`hero-text-${i}`}
              color={i === 6 ? 'aquamarine' : pickColor(i)}
              filled={i === 6}
              zIndex={i === 6 ? 'overlay' : 'base'}
            >
              {text}
            </HeroText>
          ))}
        </VStack>
        <Box position="fixed" top="15%" w="100%" minW="46rem">
          <Image src={marisa} />
        </Box>
      </Box>
    </Box>
  );
};
