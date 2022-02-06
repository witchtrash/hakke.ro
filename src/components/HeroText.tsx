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
          color: props.filled ? color : 'white',
        },
      }}
    >
      <Heading
        className="hero-text"
        whiteSpace="nowrap"
        textTransform="uppercase"
        fontSize={['16vw', '12vw', '10vw', '8vw']}
        lineHeight={['base', 'base', 'short', 'none']}
        userSelect="none"
        p="0"
        m="0"
        zIndex={props.zIndex}
      >
        {props.children}
      </Heading>
    </Box>
  );
};
