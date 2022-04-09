import React from 'react';
import { PageLayout } from 'components/Layout';
import {
  Heading,
  Box,
  Text,
  Flex,
  Button,
  Wrap,
  Container,
} from '@chakra-ui/react';
import { InferGetStaticPropsType } from 'next';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { NoData } from 'components/NoData';

interface Post {
  postId: string;
  title: string;
  image: string;
  date: Date;
  tags: string[];
}

const BlogIndex = ({
  posts,
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [activeFilter, setActiveFilter] = React.useState<string | undefined>();

  const handleFilterClick = (tag: string) => {
    if (tag === activeFilter) {
      setActiveFilter(undefined);
    } else {
      setActiveFilter(tag);
    }
  };

  return (
    <PageLayout>
      <Flex flexDirection={['column', 'column', 'column', 'row']}>
        <Flex flexDirection="column" flex="1">
          <Heading fontSize={['1.25rem', '2.25rem']} color="violet.400">
            welcome friend.
          </Heading>
          <Heading fontSize={['1rem', '1.25rem']}>
            enjoy this fine selection of words
          </Heading>
          <Heading fontSize={['1rem', '1.25rem']}>i made them myself</Heading>
        </Flex>
        <Wrap pt={[4, 4, 4, 0]} spacing="2">
          {tags.map(tag => (
            <Button
              key={`tag-${tag}`}
              size="xs"
              color="violet.300"
              variant="outline"
              m="2"
              onClick={() => handleFilterClick(tag)}
              isActive={activeFilter === tag}
            >
              {tag}
            </Button>
          ))}
        </Wrap>
      </Flex>
      <Container size="sm" py="12" centerContent>
        {posts.length === 0 ? <NoData /> : null}
        <Box background="pink.100">
          {posts
            .filter(post => {
              if (activeFilter) {
                return post.tags.includes(activeFilter);
              } else {
                return true;
              }
            })
            .map(post => (
              <Box key={`post-${post.postId}`}>
                <Link href={`/blog/post/${post.postId}`} passHref>
                  <a>
                    <Text>{post.postId}</Text>
                  </a>
                </Link>
              </Box>
            ))}
        </Box>
      </Container>
    </PageLayout>
  );
};

export const getStaticProps = async () => {
  const blogDirectory = path.join(process.cwd(), 'src/pages/blog/post');

  const posts = fs
    .readdirSync(blogDirectory)
    .filter(file => file.match(/.+\.mdx$/))
    .map((file): Post => {
      const postId = file.replace(/\.mdx?$/, '');

      const content = fs.readFileSync(path.join(blogDirectory, file), 'utf8');
      const meta = matter(content).data;

      return {
        postId,
        title: meta['title'],
        image: meta['image'],
        date: new Date(meta['date']),
        tags: meta['tags'],
      };
    })
    .sort((a, b) => {
      if (a.date > b.date) {
        return -1;
      }
      if (a.date < a.date) {
        return 1;
      }
      return 0;
    })
    .map(post => {
      return { ...post, date: post.date.toISOString() };
    });

  const tags = Array.from(new Set([...posts.map(p => p.tags)].flat()));

  return {
    props: {
      posts,
      tags,
    },
  };
};

export default BlogIndex;
