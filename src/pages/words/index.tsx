import React from 'react';
import { PageLayout } from 'components/Layout';
import { Heading, Flex, Button, Wrap, VStack, Box } from '@chakra-ui/react';
import { InferGetStaticPropsType } from 'next';
import { NoData } from 'components/NoData';
import { BlogCard } from 'components/Blog';
import { SEO } from 'components/SEO';
import { compareAsc } from 'date-fns';

import { readdirSync, readFileSync } from 'fs';
import { join, resolve } from 'path';
import matter from 'gray-matter';

export interface Post {
  postId: string;
  title: string;
  description: string;
  image: string;
  date: string;
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
      <SEO title="hakke.ro | words of dubious wisdom" />

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
                  date={post.date}
                  tags={post.tags}
                />
              ))}
          </React.Fragment>
        )}
      </VStack>
    </React.Fragment>
  );
};

export const getStaticProps = async () => {
  const blogDirectory = join(process.cwd(), 'src/pages/words');

  const postDirents = readdirSync(blogDirectory, {
    withFileTypes: true,
  }).filter(dirent => {
    if (!dirent.isDirectory()) {
      return false;
    }

    const contents = readdirSync(resolve(blogDirectory, dirent.name));

    if (contents.length === 0) {
      return false;
    }

    return contents.filter(file => file.match(/\.+mdx$/));
  });

  const posts = postDirents
    .map((dirent): Post => {
      const postId = dirent.name;

      const content = readFileSync(
        join(blogDirectory, postId, 'index.mdx'),
        'utf8'
      );
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
    .sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)));

  const tags = Array.from(new Set([...posts.map(p => p.tags)].flat()));

  return {
    props: {
      posts,
      tags,
    },
  };
};

BlogIndex.getLayout = function getLayout(page: React.ReactElement) {
  return <PageLayout addPadding>{page}</PageLayout>;
};

export default BlogIndex;
