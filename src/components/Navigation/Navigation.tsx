import React from 'react';
import { Flex, Portal, Slide, Spacer } from '@chakra-ui/react';
import { Container } from 'components/Layout';
import { IconButton } from 'components/IconButton';
import { MotionBox } from 'components/MotionBox';
import { RiCloseFill } from 'react-icons/ri';
import { NavigationLink } from './NavigationLink';
import { Moji } from './Moji';
import { animations } from './animations';

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
            <MotionBox
              animate={props.isOpen ? 'open' : 'closed'}
              variants={animations.list}
            >
              <NavigationLink href="/">home</NavigationLink>
              <NavigationLink href="/about">about</NavigationLink>
              <NavigationLink href="https://github.com/witchtrash">
                code
              </NavigationLink>
            </MotionBox>
          </Flex>

          <Flex
            justifyContent="flex-end"
            borderBottom="0.25rem solid aquamarine"
          >
            <MotionBox animate={props.isOpen ? 'open' : 'closed'}>
              <Moji />
            </MotionBox>
          </Flex>
        </Container>
      </Slide>
    </Portal>
  );
};
