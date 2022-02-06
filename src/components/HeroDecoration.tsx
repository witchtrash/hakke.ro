import React from 'react';
import { useBreakpointValue, VStack } from '@chakra-ui/react';
import { HeroText } from './HeroText';

export const HeroDecoration = () => {
  const colors = ['red', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink'];
  const text = useBreakpointValue({
    base: 'hakkero',
    md: '1-800-hakkero',
  });

  const pickColor = (i: number): string => {
    return `${colors[i % colors.length]}.100`;
  };

  return (
    <VStack
      position="absolute"
      zIndex="hide"
      top="-5rem"
      left={['10%', '9%', '8%', '7%']}
      height="calc(100% + 5rem)"
      overflow="hidden"
      alignItems="flex-start"
    >
      {new Array(12).fill('').map((_, i) => (
        <HeroText
          key={`hero-text-${i}`}
          color={i === 4 ? 'violet.400' : pickColor(i)}
          filled={i === 4}
        >
          {text}
        </HeroText>
      ))}
      <HeroText color="violet.400" filled>
        1-800-hakkero
      </HeroText>
    </VStack>
  );
};
