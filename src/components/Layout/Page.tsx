import React from 'react';
import { NavigationMenu } from 'components/Navigation';
import { Container } from './Container';

interface PageProps {
  children?: React.ReactNode;
}
export const Page = (props: PageProps) => (
  <Container as="main">
    <NavigationMenu />
    {props.children}
  </Container>
);
