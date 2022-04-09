import React from 'react';
import { NavigationMenu } from 'components/Navigation';
import { Container } from './Container';

interface PageProps {
  children?: React.ReactNode;
  withBackButton?: boolean;
}
export const Page = (props: PageProps) => (
  <Container as="main">
    <NavigationMenu withBackButton={props.withBackButton} />
    {props.children}
  </Container>
);
