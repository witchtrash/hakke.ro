import React from 'react';
import { Container } from 'components/Layout/Container';
import { SEO } from 'components/SEO';

interface BlogPostProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}
export const BlogPost = (props: BlogPostProps) => {
  return (
    <Container marginX="auto" as="article" maxW="960px" minH="unset" w="100%">
      <SEO title={props.title} description={props.description} />
      {props.children}
    </Container>
  );
};
