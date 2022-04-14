import React from 'react';
import { NavigationMenu } from 'components/Navigation';
import { Container } from './Container';
import { Box } from '@chakra-ui/react';
import { MotionBox } from 'components/MotionBox';
import { useAnimation } from 'framer-motion';

interface PageProps {
  children?: React.ReactNode;
  withBackButton?: boolean;
  addPadding?: boolean;
}
export const Page = (props: PageProps) => {
  const control = useAnimation();

  React.useEffect(() => {
    control.start({
      opacity: [0, 1],
      transition: {
        duration: 0.6,
      },
    });
  }, [props, control]);
  return (
    <Container as="main">
      <NavigationMenu withBackButton={props.withBackButton} />
      <Box p={props.addPadding ? ['2rem', '2rem', '4rem'] : 'unset'}>
        <MotionBox animate={control}>{props.children}</MotionBox>
      </Box>
    </Container>
  );
};
