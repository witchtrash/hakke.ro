import React from 'react';
import { NavigationMenu } from 'components/Navigation';
import { Container } from 'components/Layout/Container';
import { SEO } from 'components/SEO';

interface BlogPostProps {
  children: React.ReactNode;
  title: string;
}
export const BlogPost = (props: BlogPostProps) => (
  <React.Fragment>
    <Container as="main" minH="unset">
      <SEO title={props.title} />
      <NavigationMenu withBackButton />
      <Container marginX="auto" as="article" maxW="960px" minH="unset" w="100%">
        {props.children}
      </Container>
    </Container>
  </React.Fragment>
);
