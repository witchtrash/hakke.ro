import React from 'react';
import Head from 'next/head';
import { PageLayout } from 'components/Layout';
import {
  Link,
  Box,
  Heading,
  UnorderedList,
  ListItem,
  Text,
  Icon,
  Flex,
  Image,
} from '@chakra-ui/react';
import { CharWrapper, Pace, Pause, WindupChildren } from 'windups';
import { MotionBox } from 'components/MotionBox';
import { RiHeartFill } from 'react-icons/ri';
import { BouncyLetter, ColorText } from 'components/About';
import { useLastFmStats } from 'hooks/useLastFmStats';
import { SEO } from 'components/SEO';

const About = () => {
  const [introDone, setIntroDone] = React.useState(false);
  const { stats, isLoading } = useLastFmStats();

  return (
    <Box fontFamily="heading">
      <SEO title="tiny idiot's bio" />
      <Head>
        <link rel="preload" as="image" href="/assets/shy.gif" />
      </Head>

      <WindupChildren onFinished={() => setIntroDone(true)}>
        <Pace ms={40}>
          <Box py="6">
            <Pace ms={80}>
              <Heading>{`hi friend`}</Heading>
              <Pause ms={600} />
              <Heading>
                {`i'm `}
                <ColorText color="pink.400">
                  <CharWrapper element={BouncyLetter}>{`emilía`}</CharWrapper>
                </ColorText>
                <Pause ms={1000} />
              </Heading>
            </Pace>
          </Box>
        </Pace>
      </WindupChildren>

      {introDone ? (
        <WindupChildren>
          <Pace ms={40}>
            <Box py="3">
              <Text>
                {`i like writing code sometimes. `}
                <Pause ms={300} />
                {`i get paid to do that.`}
              </Text>
              <Pause ms={300} />
              <Text>{`here are some things about me.`}</Text>
              <Pause ms={300} />
            </Box>

            <Box py="3" pr="3">
              <UnorderedList fontFamily="mono">
                <ListItem>
                  {`education: `}
                  <Pause ms={300} />
                  {`some`}
                </ListItem>
                <ListItem>
                  {`work: `}
                  <Pause ms={300} />
                  {`yes`}
                </ListItem>
                <ListItem>
                  {`skills: `}
                  <Pause ms={300} />
                  {`sure`}
                </ListItem>
                <ListItem>
                  {`interests: `}
                  <Pause ms={300} />
                  {`many`}
                </ListItem>
              </UnorderedList>
            </Box>

            {!isLoading && stats?.scrobbleCount && stats.weeklyArtists ? (
              <Box py="3">
                <Text>
                  {`i like listening to bad music, `}
                  <Pause ms={300} />
                  {`i have like `}
                  <Pause ms={300} />
                  <ColorText color="pink.400">
                    {stats.scrobbleCount}
                    {` scrobbles`}
                  </ColorText>
                  {` on my `}
                  <Link
                    color="violet.400"
                    href="https://www.last.fm/user/witchtrash"
                  >
                    {`last.fm. `}
                  </Link>
                  <Pause ms={300} />
                  {`wowie.`}
                </Text>
                <Pause ms={300} />
                <Text>
                  {`lately ive been listening to `}
                  <Pause ms={300} />
                  <React.Fragment>
                    {stats.weeklyArtists.slice(0, 4).map((artist, i) => (
                      <React.Fragment key={`artist-${artist.artistName}-${i}`}>
                        <Link color="violet.400" href={artist.url}>
                          {`${artist.artistName}, `}
                        </Link>
                        <Pause ms={150} />
                      </React.Fragment>
                    ))}
                    {`and `}
                    <Link color="violet.400" href={stats.weeklyArtists[4].url}>
                      {`${stats.weeklyArtists[4].artistName}.`}
                    </Link>
                    <Flex flexWrap="wrap">
                      <Text>{`check em out by clicking the names, if you want`}</Text>
                      <Pause ms={300} />
                      <Box ml="1">
                        <Image src="/assets/shy.gif" width="22" height="22" />
                      </Box>
                    </Flex>
                    <Pause ms={300} />
                  </React.Fragment>
                  <Pause ms={300} />
                </Text>
              </Box>
            ) : null}

            <Box py="3">
              <Text>
                {`also, `}
                <Pause ms={300} />
                {`you can look at my terrible code on `}
                <Link color="violet.400" href="https://github.com/witchtrash">
                  {`github.`}
                </Link>
              </Text>

              <Pause ms={300} />
              <Text>{`we do a little programming.`}</Text>
              <Pause ms={600} />
            </Box>

            <Box py="3">
              <Text>{`that's it`}</Text>
              <Pause ms={600} />

              <Text>{`enjoy your stay.`}</Text>
              <Pause ms={600} />

              <Text>{`be safe.`}</Text>
              <Pause ms={400} />

              <Box py="3">
                <MotionBox
                  opacity="0"
                  animate={{
                    opacity: 1,
                  }}
                >
                  <Icon mt={4} color="pink.400" w={8} h={8} as={RiHeartFill} />
                </MotionBox>
              </Box>
            </Box>
          </Pace>
        </WindupChildren>
      ) : null}
    </Box>
  );
};

About.getLayout = function getLayout(page: React.ReactElement) {
  return <PageLayout addPadding>{page}</PageLayout>;
};

export default About;
