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
  Flex,
  Image,
} from '@chakra-ui/react';
import { CharWrapper, Pace, Pause, WindupChildren } from 'windups';
import { MotionBox } from 'components/MotionBox';
import { RiHeartFill } from 'react-icons/ri';
import { clientFactory } from 'util/supabase';
import { BouncyLetter, ColorText } from 'components/About';
import Head from 'next/head';

interface Artist {
  id: number;
  artist_name: string;
  lastfm_url: string;
  scrobble_count: number;
}

const About = () => {
  const [scrobbles, setScrobbles] = React.useState<undefined | number>();
  const [artists, setArtists] = React.useState<Artist[] | undefined>();

  React.useEffect(() => {
    const client = clientFactory({ useServiceKey: false });

    client
      .from<{
        id: number;
        scrobble_count: number;
      }>('scrobbles')
      .select('id, scrobble_count')
      .order('id', {
        ascending: false,
      })
      .limit(1)
      .then(res => {
        if (res.data) {
          setScrobbles(res.data[0].scrobble_count);
        }
      });

    client
      .from<Artist>('weekly_artists')
      .select('id, artist_name, scrobble_count, lastfm_url')
      .order('id', {
        ascending: false,
      })
      .limit(5)
      .then(res => {
        if (res.data) {
          setArtists(res.data.reverse());
        }
      });
  }, []);

  return (
    <React.Fragment>
      <Head>
        <link rel="preload" as="image" href="/assets/shy.gif" />
      </Head>

      <PageLayout>
        <Box fontFamily="heading" p={['2rem', '2rem', '4rem']}>
          <WindupChildren>
            <Pace ms={40}>
              <Box py="6">
                <Pace ms={80}>
                  <Heading>{`hi friend`}</Heading>
                  <Pause ms={600} />
                  <Heading>
                    {`i'm `}
                    <ColorText color="pink.400">
                      <CharWrapper
                        element={BouncyLetter}
                      >{`emilía`}</CharWrapper>
                    </ColorText>
                  </Heading>
                </Pace>
              </Box>

              <Pause ms={1000} />

              <Box py="3">
                <Text>
                  {`i like writing code sometimes. `}
                  <Pause ms={300} />
                  {`i get paid to do that.`}
                </Text>
                <Pause ms={300} />
                <Text fontFamily="heading">{`here are some things about me.`}</Text>
                <Pause ms={300} />
              </Box>

              <Box py="3">
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

              <Box py="3">
                <Text>
                  {`i like listening to bad music, `}
                  <Pause ms={300} />
                  {`i have like `}
                  <Pause ms={300} />
                  <ColorText color="pink.400">
                    {scrobbles}
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
                  {artists ? (
                    <React.Fragment>
                      {artists.slice(0, 4).map(artist => (
                        <React.Fragment key={artist.id}>
                          <Link color="violet.400" href={artist.lastfm_url}>
                            {`${artist.artist_name}, `}
                          </Link>
                          <Pause ms={150} />
                        </React.Fragment>
                      ))}
                      {`and `}
                      <Link color="violet.400" href={artists[4].lastfm_url}>
                        {`${artists[4].artist_name}.`}
                      </Link>
                      <Flex>
                        <Text>{`check em out by clicking the names, if you want`}</Text>
                        <Pause ms={300} />
                        <Box ml="1">
                          <Image src="/assets/shy.gif" width="22" height="22" />
                        </Box>
                      </Flex>
                      <Pause ms={300} />
                    </React.Fragment>
                  ) : (
                    <React.Fragment>{`???`}</React.Fragment>
                  )}
                  <Pause ms={300} />
                </Text>
              </Box>

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
                    <Icon
                      mt={4}
                      color="pink.400"
                      w={8}
                      h={8}
                      as={RiHeartFill}
                    />
                  </MotionBox>
                </Box>
              </Box>
            </Pace>
          </WindupChildren>
        </Box>
      </PageLayout>
    </React.Fragment>
  );
};

export default About;
