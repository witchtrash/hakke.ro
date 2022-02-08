import React from 'react';
import { VStack, useDisclosure } from '@chakra-ui/react';
import { RiMenu3Fill } from 'react-icons/ri';
import { IconButton } from 'components/IconButton';
import { MotionBox } from 'components/MotionBox';
import { Navigation } from './Navigation';

export const NavigationMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <React.Fragment>
      <VStack as="nav" alignItems="flex-end">
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
        <MotionBox
          background="currentColor"
          w=".25rem"
          bottom="4rem"
          zIndex={-100}
          position="absolute"
          animate={{
            height: 'calc(100vh - 14rem)',
            transition: {
              type: 'linear',
              duration: 0.6,
            },
          }}
        ></MotionBox>
      </VStack>
      <Navigation isOpen={isOpen} onClose={onClose} />
    </React.Fragment>
  );
};
