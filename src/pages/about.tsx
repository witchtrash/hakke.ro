import React from 'react';
import { PageLayout } from 'components/Layout';
import {
  Link,
  Box,
  Heading,
  UnorderedList,
  ListItem,
  Text,
  Icon,
} from '@chakra-ui/react';
import { CharWrapper, Pace, Pause, WindupChildren } from 'windups';
import { MotionBox } from 'components/MotionBox';
import { RiHeartFill } from 'react-icons/ri';

interface BouncyLetterProps {
  children: React.ReactChildren;
}
const BouncyLetter = (props: BouncyLetterProps) => (
  <MotionBox
    display="inline-block"
    sx={{
      '.name-letter': {
        color: 'violet.500',
      },
    }}
    style={{
      y: 50,
      opacity: 0,
    }}
    animate={{
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        type: 'spring',
        duration: 2,
        bounce: 0.7,
        damping: 5,
      },
    }}
  >
    {props.children}
  </MotionBox>
);

const About = () => {
  return (
    <PageLayout>
      <WindupChildren>
        <Box fontFamily="heading" p={['2rem', '2rem', '4rem']}>
          <Pace ms={50}>
            <Heading>{`hi friend`}</Heading>
            <Pause ms={700} />
            <Heading>
              {`i'm `}
              <Box display="inline-block" color="violet.500">
                <CharWrapper element={BouncyLetter}>{`mari`}</CharWrapper>
              </Box>
            </Heading>
          </Pace>

          <Pause ms={1000} />
          <Box my="8" />

          <Pace ms={40}>
            <Text fontFamily="heading">
              {`i like writing code sometimes. `}
              <Pause ms={400} />
              {`i get paid to do that.`}
            </Text>
            <Pause ms={400} />
            <Text fontFamily="heading">{`here are some things about me.`}</Text>
          </Pace>

          <UnorderedList mt={6} fontFamily="mono">
            <ListItem>
              {`education: `}
              <Pause ms={500} />
              {`some`}
            </ListItem>
            <ListItem>
              {`work: `}
              <Pause ms={500} />
              {`yes`}
            </ListItem>
            <ListItem>
              {`skills: `}
              <Pause ms={500} />
              {`a few`}
            </ListItem>
            <ListItem>
              {`interests: `}
              <Pause ms={500} />
              {`many`}
            </ListItem>
          </UnorderedList>

          <Box my="6" />

          <Pace ms={40}>
            <Text>
              {`you can look at my terrible code on `}
              <Link color="violet.500" href="https://github.com/witchtrash">
                {`github.`}
              </Link>
            </Text>

            <Pause ms={300} />
            <Text>{`there are a few things on there.`}</Text>
            <Pause ms={600} />
            <Box my="6" />

            <Text>{`that's it`}</Text>
            <Pause ms={600} />

            <Text>{`enjoy your stay.`}</Text>
            <Pause ms={600} />

            <Text>{`be safe.`}</Text>
            <Pause ms={400} />
            <Box my="6" />

            <MotionBox
              opacity="0"
              animate={{
                opacity: 1,
              }}
            >
              <Icon mt={4} color="violet.500" w={8} h={8} as={RiHeartFill} />
            </MotionBox>
          </Pace>
        </Box>
      </WindupChildren>
    </PageLayout>
  );
};

export default About;
