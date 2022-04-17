import React from 'react';
import {
  Flex,
  Heading,
  Wrap,
  LinkOverlay,
  LinkBox,
  Tag,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Post } from 'pages/words';
import { format } from 'date-fns';

export const BlogCard = (props: Post) => {
  const formatDate = (date: string) => {
    return format(new Date(date), 'LLLL do, u');
  };

  return (
    <LinkBox
      display="flex"
      as="article"
      flexDirection="column"
      transitionDuration="400ms"
      transitionTimingFunction="ease-in-out"
      _hover={{
        background: 'pink.50',
      }}
      borderRadius="lg"
    >
      <Flex flex="2" px={['2', '2', '8']} py="6" flexDirection="column">
        <Flex flexDirection="column">
          <Flex flexDirection="column">
            <Heading color="pink.300" fontSize="0.75rem">
              {formatDate(props.date)}
            </Heading>
            <Link href={`/words/${props.postId}`} passHref>
              <LinkOverlay>
                <Heading>{props.title}</Heading>
              </LinkOverlay>
            </Link>
          </Flex>

          <Wrap pt="1">
            {props.tags.map((tag, i) => (
              <Tag
                fontFamily="heading"
                fontSize="xs"
                background="violet.50"
                color="violet.400"
                key={`${tag}-${i}`}
              >
                {tag}
              </Tag>
            ))}
          </Wrap>
        </Flex>
      </Flex>
    </LinkBox>
  );
};
