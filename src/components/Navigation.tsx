import React from 'react';
import { Flex, Portal, Slide, Spacer, VStack } from '@chakra-ui/react';
import { Container } from './Container';
import { IconButton } from './IconButton';
import { RiCloseFill } from 'react-icons/ri';
import { NavigationLink } from './NavigationLink';
import { MotionBox } from './MotionBox';
import { Moji } from './Moji';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}
export const Navigation = (props: NavigationProps) => {
  return (
    <Portal>
      <Slide direction="top" in={props.isOpen}>
        <Container background="violet.600" display="flex" flexDir="column">
          <Flex flexDir="row" alignItems="flex-end">
            <Spacer />
            <IconButton
              color="white"
              onClick={props.onClose}
              aria-label="Close navigation"
              icon={<RiCloseFill />}
              _hover={{
                color: 'aquamarine',
              }}
            />
          </Flex>
          <Flex
            flex="1 1 auto"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <VStack spacing="2rem">
              <MotionBox>
                <NavigationLink href="#">about</NavigationLink>
              </MotionBox>
              <MotionBox>
                <NavigationLink href="#">words</NavigationLink>
              </MotionBox>
              <MotionBox>
                <NavigationLink href="https://github.com">code</NavigationLink>
              </MotionBox>
            </VStack>
          </Flex>
          <Flex
            justifyContent="flex-end"
            borderBottom="0.25rem solid aquamarine"
          >
            <MotionBox>
              <Moji />
            </MotionBox>
          </Flex>
        </Container>
      </Slide>
    </Portal>
  );
};
