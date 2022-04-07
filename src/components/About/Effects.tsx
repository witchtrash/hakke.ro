import React from 'react';
import { MotionBox } from 'components/MotionBox';
import { Box, BoxProps } from '@chakra-ui/react';

interface BouncyLetterProps {
  children: React.ReactNode;
}
export const BouncyLetter = ({ children }: BouncyLetterProps) => (
  <MotionBox
    display="inline-block"
    sx={{
      '.name-letter': {
        color: 'violet.500',
      },
    }}
    style={{
      y: 50,
      opacity: 0,
    }}
    animate={{
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        type: 'spring',
        duration: 2,
        bounce: 0.7,
        damping: 5,
      },
    }}
  >
    {children}
  </MotionBox>
);

interface ColorTextProps extends Pick<BoxProps, 'color'> {
  children: React.ReactNode;
}
export const ColorText = ({ children, color }: ColorTextProps) => (
  <Box as="span" color={color}>
    {children}
  </Box>
);
