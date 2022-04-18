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
      <Flex zIndex="9001" position="fixed">
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
                <NavigationLink href="/" onClick={props.onClose}>
                  home
                </NavigationLink>
                <NavigationLink href="/about" onClick={props.onClose}>
                  about
                </NavigationLink>
                <NavigationLink href="/words" onClick={props.onClose}>
                  words
                </NavigationLink>
                <NavigationLink
                  href="https://github.com/witchtrash"
                  onClick={props.onClose}
                >
                  code
                </NavigationLink>
              </MotionBox>
            </Flex>

            <MotionBox
              animate={props.isOpen ? 'open' : 'closed'}
              variants={animations.bottom}
            >
              <Flex
                justifyContent="flex-end"
                borderBottom="0.25rem solid aquamarine"
              >
                <Moji />
              </Flex>
            </MotionBox>
          </Container>
        </Slide>
      </Flex>
    </Portal>
  );
};
