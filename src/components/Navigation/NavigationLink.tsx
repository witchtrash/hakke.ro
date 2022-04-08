import React from 'react';
import { Heading } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { MotionBox } from 'components/MotionBox';
import { animations } from './animations';

interface NavigationLinkProps {
  href: string;
  children: React.ReactChild;
}
export const NavigationLink = (props: NavigationLinkProps) => {
  const router = useRouter();

  return (
    <MotionBox
      variants={animations.item}
      my="3"
      whileHover={{
        scale: 1.1,
      }}
    >
      <Heading
        color={router.pathname === props.href ? 'aquamarine' : 'white'}
        transition="0.3s background, color ease-in-out"
        fontSize={['4rem', '5rem', '6rem']}
        userSelect="none"
        lineHeight="none"
        textAlign="center"
        w={['16rem', '20rem', '24rem']}
        _hover={{
          color: 'violet.600',
          background: 'white',
        }}
        sx={{
          a: {
            width: '100%',
            height: '100%',
            display: 'inline-block',
            p: '0.5rem 1rem',
          },
        }}
      >
        <NextLink href={props.href}>{props.children}</NextLink>
      </Heading>
    </MotionBox>
  );
};
