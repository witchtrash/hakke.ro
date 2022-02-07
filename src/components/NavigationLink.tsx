import React from 'react';
import { Heading } from '@chakra-ui/react';
import NextLink from 'next/link';

interface NavigationLinkProps {
  href: string;
  children: React.ReactChild;
}
export const NavigationLink = (props: NavigationLinkProps) => (
  <Heading
    color="white"
    _hover={{
      color: 'aquamarine',
    }}
    transition="0.07s color ease-in-out"
    userSelect="none"
    lineHeight="none"
  >
    <NextLink href={props.href}>{props.children}</NextLink>
  </Heading>
);
