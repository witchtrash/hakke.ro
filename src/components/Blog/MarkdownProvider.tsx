import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import {
  Box,
  Heading,
  HeadingProps,
  Text,
  TextProps,
  Link,
  UnorderedList,
  ListItem,
  Image,
  ImageProps,
  Center,
} from '@chakra-ui/react';
import { Code } from './Code';
import { MotionWrapper } from './MotionWrapper';
import Zoom from 'react-medium-image-zoom';

type ProviderProps = React.ComponentPropsWithoutRef<typeof MDXProvider>;

interface ChildrenProps {
  children: React.ReactNode;
}

const H1 = (props: HeadingProps) => (
  <MotionWrapper>
    <Heading color="pink.400" fontSize="2rem" pb="2" {...props} />
  </MotionWrapper>
);

const H2 = (props: HeadingProps) => (
  <MotionWrapper>
    <Heading fontSize="1.75rem" pt="6" {...props} />
  </MotionWrapper>
);

const H3 = (props: HeadingProps) => (
  <MotionWrapper>
    <Heading fontSize="1.5rem" pt="6" {...props} />
  </MotionWrapper>
);

const H4 = (props: HeadingProps) => (
  <MotionWrapper>
    <Heading fontSize="1.25rem" pt="6" {...props} />
  </MotionWrapper>
);
const H5 = (props: HeadingProps) => (
  <MotionWrapper>
    <Heading fontSize="1.125rem" pt="6" {...props} />
  </MotionWrapper>
);
const H6 = (props: HeadingProps) => (
  <MotionWrapper>
    <Heading fontSize="1rem" pt="3" {...props} />
  </MotionWrapper>
);

const P = (props: TextProps) => (
  <MotionWrapper>
    <Text py="2" {...props} />
  </MotionWrapper>
);

const InlineCode = (props: ChildrenProps) => (
  <Text
    as="span"
    fontFamily="mono"
    background="#fbfbfb"
    color="purple.600"
    px="1"
    py="0.25"
    mx="0.5"
  >
    {props.children}
  </Text>
);

const Img = (props: ImageProps) => (
  <MotionWrapper p="4" my="4">
    <Center>
      <Zoom zoomMargin={40}>
        <Box>
          <Image mx="auto" {...props} />
          <Text
            pt="2"
            align="center"
            fontSize="sm"
            color="gray.400"
            fontStyle="italic"
          >
            {props.alt}
          </Text>
        </Box>
      </Zoom>
    </Center>
  </MotionWrapper>
);

const Blockquote = (props: ChildrenProps) => (
  <Box borderColor="pink.200" borderLeftWidth="medium" px="3" my="2">
    {props.children}
  </Box>
);

export const MarkdownProvider = (props: ProviderProps) => (
  <MDXProvider
    {...props}
    components={{
      h1: p => <H1 {...p} />,
      h2: p => <H2 {...p} />,
      h3: p => <H3 {...p} />,
      h4: p => <H4 {...p} />,
      h5: p => <H5 {...p} />,
      h6: p => <H6 {...p} />,
      img: p => <Img {...p} />,
      p: p => <P {...p} />,
      a: p => <Link fontWeight="bold" color="violet.400" {...p} />,
      code: p => <InlineCode>{p.children}</InlineCode>,
      pre: p => <Code className={p.className}>{p.children}</Code>,
      ul: p => <UnorderedList pl="2" {...p} />,
      li: p => <ListItem {...p} />,
      blockquote: p => <Blockquote>{p.children}</Blockquote>,
    }}
  />
);
