import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import {
  Box,
  Heading,
  HeadingProps,
  Text,
  TextProps,
  Link,
  Code,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { MotionBox } from 'components/MotionBox';

type ProviderProps = React.ComponentPropsWithoutRef<typeof MDXProvider>;

interface ChildrenProps {
  children: React.ReactNode;
}

const MotionWrapper = (
  props: React.ComponentPropsWithoutRef<typeof MotionBox>
) => <MotionBox opacity="0" whileInView={{ opacity: 1 }} {...props} />;

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
      p: p => <P {...p} />,
      a: p => <Link fontWeight="bold" color="violet.400" {...p} />,
      code: p => <Code {...p} />,
      pre: p => (
        <Code mx="auto" p="3" my="4">
          <pre {...p} />
        </Code>
      ),
      ul: p => <UnorderedList pl="2" {...p} />,
      li: p => <ListItem {...p} />,
      blockquote: p => <Blockquote>{p.children}</Blockquote>,
    }}
  />
);
