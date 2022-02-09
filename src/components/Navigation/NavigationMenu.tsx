import React from 'react';
import { useDisclosure, Flex, Spacer } from '@chakra-ui/react';
import { RiMenu3Fill } from 'react-icons/ri';
import { IconButton } from 'components/IconButton';
import { MotionBox } from 'components/MotionBox';
import { Navigation } from './Navigation';

export const NavigationMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex flexDirection="row" mb={['1rem', '1rem', '2rem']}>
      <Spacer />
      <MotionBox
        w="0"
        overflow="hidden"
        animate={{
          width: 'unset',
          scale: 1,
          transition: {
            duration: 0.6,
          },
        }}
      >
        <IconButton
          onClick={onOpen}
          aria-label="Open navigation"
          icon={<RiMenu3Fill />}
        />
      </MotionBox>
      <Navigation isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
