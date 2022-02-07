import React from 'react';
import { Box, Heading, HeadingProps, useToken } from '@chakra-ui/react';

interface HeroTextProps
  extends Pick<HeadingProps, 'children' | 'color' | 'zIndex'> {
  filled?: boolean;
}
export const HeroText = (props: HeroTextProps) => {
  const [color] = useToken('colors', [String(props.color)]);

  return (
    <Box
      sx={{
        '.hero-text': {
          WebkitTextStrokeColor: color,
          WebkitTextStrokeWidth: props.filled ? '0' : '1px',
          color: props.filled ? color : 'transparent',
        },
      }}
      zIndex={props.zIndex}
    >
      <Heading
        className="hero-text"
        whiteSpace="nowrap"
        textTransform="uppercase"
        fontSize={['4rem', '4rem', '5rem', '6rem', '8rem']}
        lineHeight={['base', 'base', 'short', 'none']}
        userSelect="none"
        p="0.125rem 2rem"
        m="0"
        background={props.filled ? 'violet.500' : 'transparent'}
      >
        {props.children}
      </Heading>
    </Box>
  );
};
