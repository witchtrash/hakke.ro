import React from 'react';
import { MotionBox } from 'components/MotionBox';
import { useBreakpointValue } from '@chakra-ui/react';

interface VerticalLineProps {
  color?: string;
}
export const VerticalLine = (props: VerticalLineProps) => {
  const height = useBreakpointValue(
    {
      base: 'calc(100vh - 7rem)',
      sm: 'calc(100vh - 11rem)',
      md: 'calc(100vh - 14rem)',
    },
    'md'
  );

  return (
    <MotionBox
      position="fixed"
      background={props.color ? props.color : 'currentColor'}
      w=".25rem"
      right={[6, 12, 16]}
      bottom={[6, 12, 16]}
      zIndex={-100}
      animate={{
        height,
        transition: {
          type: 'linear',
          duration: 0.6,
        },
      }}
    ></MotionBox>
  );
};
