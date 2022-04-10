import React from 'react';
import { PageLayout } from 'components/Layout';
import { Heading, Flex, Button, Wrap, VStack, Box } from '@chakra-ui/react';
import { InferGetStaticPropsType } from 'next';
import { NoData } from 'components/NoData';
import { BlogCard } from 'components/BlogCard';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Title } from 'components/Title';

export interface Post {
  postId: string;
  title: string;
  description: string;
  image: string;
  date: Date | string;
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
    <React.Fragment>
      <Title title="hakke.ro | words of dubious wisdom" />

      <PageLayout>
        <Flex
          p={{
            base: '0',
            xl: '4rem',
          }}
          flexDirection={['column', 'column', 'column', 'row']}
        >
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
        <VStack
          py="12"
          align="stretch"
          maxW="1280px"
          w="100%"
          marginX="auto"
          spacing="16"
        >
          {posts.length === 0 ? (
            <Box
              display="flex"
              flexDirection="column"
              margin="auto"
              alignItems="center"
            >
              <NoData />
            </Box>
          ) : (
            <React.Fragment>
              {posts
                .filter(post => {
                  if (activeFilter) {
                    return post.tags.includes(activeFilter);
                  } else {
                    return true;
                  }
                })
                .map(post => (
                  <BlogCard
                    key={`post-${post.postId}`}
                    postId={post.postId}
                    title={post.title}
                    description={post.description}
                    image={post.image}
                    date={new Date(post.date)}
                    tags={post.tags}
                  />
                ))}
            </React.Fragment>
          )}
        </VStack>
      </PageLayout>
    </React.Fragment>
  );
};

export const getStaticProps = async () => {
  const blogDirectory = path.join(process.cwd(), 'src/pages/words');

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
        description: meta['description'] ?? '',
        date: meta['date'],
        tags: meta['tags'],
      };
    })
    .sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);

      if (aDate > bDate) {
        return -1;
      }
      if (aDate < aDate) {
        return 1;
      }
      return 0;
    })
    .map(post => {
      return { ...post, date: new Date(post.date).toISOString() };
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
