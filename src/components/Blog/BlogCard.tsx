import React from 'react';
import {
  Flex,
  Text,
  Heading,
  Wrap,
  Badge,
  LinkOverlay,
  LinkBox,
} from '@chakra-ui/react';
import Link from 'next/link';
import { MotionBox } from 'components/MotionBox';
import { Post } from 'pages/words';

export const BlogCard = (props: Post) => {
  const formatDate = (date: string) => {
    return new Intl.DateTimeFormat().format(new Date(date));
  };

  return (
    <MotionBox
      shadow="base"
      transitionProperty="box-shadow"
      transitionDuration="200ms"
      transitionTimingFunction="ease-in-out"
      whileHover={{
        scale: 1.02,
      }}
      _hover={{
        shadow: 'lg',
      }}
      borderRadius="md"
    >
      <LinkBox
        display="flex"
        as="article"
        minH="40"
        flexDirection={['column', 'column', 'column', 'row']}
        borderRightColor="violet.100"
        borderRightWidth="thick"
        borderRadius="md"
      >
        <Flex
          flex="1"
          backgroundImage={props.image}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          minH="32"
        ></Flex>

        <Flex flex="2" px={['2', '2', '8']} py="6" flexDirection="column">
          <Flex flexDirection={['column', 'column', 'row']}>
            <Flex flexDirection="column" flex="1">
              <Heading color="pink.300" fontSize="0.75rem">
                {formatDate(props.date)}
              </Heading>
              <Link href={`words/${props.postId}`} passHref>
                <LinkOverlay>
                  <Heading>{props.title}</Heading>
                </LinkOverlay>
              </Link>
            </Flex>

            <Wrap>
              {props.tags.map((tag, i) => (
                <Badge colorScheme="pink" key={`${tag}-${i}`}>
                  {tag}
                </Badge>
              ))}
            </Wrap>
          </Flex>
          <Flex py="4">
            <Text>{props.description}</Text>
          </Flex>
        </Flex>
      </LinkBox>
    </MotionBox>
  );
};
