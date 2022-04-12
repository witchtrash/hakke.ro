import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import {
  Heading,
  Text,
  Link,
  Code,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

type ProviderProps = React.ComponentPropsWithoutRef<typeof MDXProvider>;

export const Provider = (props: ProviderProps) => (
  <MDXProvider
    {...props}
    components={{
      h1: p => <Heading color="pink.400" fontSize="2rem" pb="2" {...p} />,
      h2: p => <Heading fontSize="1.75rem" pt="6" {...p} />,
      h3: p => <Heading fontSize="1.5rem" pt="6" {...p} />,
      h4: p => <Heading fontSize="1.25rem" pt="6" {...p} />,
      h5: p => <Heading fontSize="1.125rem" pt="6" {...p} />,
      h6: p => <Heading fontSize="1rem" pt="3" {...p} />,
      p: p => <Text py="2" {...p} />,
      a: p => <Link fontWeight="bold" color="violet.400" {...p} />,
      code: p => <Code {...p} />,
      pre: p => (
        <Code mx="auto" p="3" my="4">
          <pre {...p} />
        </Code>
      ),
      ul: p => <UnorderedList pl="2" {...p} />,
      li: p => <ListItem {...p} />,
    }}
  />
);
