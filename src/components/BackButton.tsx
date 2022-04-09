import React from 'react';
import { Text, Box, Flex, Link as ChakraLink } from '@chakra-ui/react';
import { IconButton } from 'components/IconButton';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { WindupChildren } from 'windups';
import { useRouter } from 'next/router';

export const BackButton = () => {
  const [mouseHover, setMouseHover] = React.useState(false);
  const router = useRouter();

  const handleMouseHover = (hovering: boolean) => {
    setMouseHover(hovering);
  };

  return (
    <ChakraLink
      onClick={router.back}
      onMouseEnter={() => handleMouseHover(true)}
      onMouseLeave={() => handleMouseHover(false)}
      _hover={{
        textDecoration: 'none',
        color: 'violet.500',
      }}
    >
      <Flex alignItems="center" w="42">
        <IconButton
          justifyContent="flex-start"
          aria-label="Navigate back"
          icon={<RiArrowLeftSLine />}
        />
        {mouseHover ? (
          <WindupChildren>
            <Box mr="4" flex="1">
              <Text
                fontFamily="heading"
                textDecoration="none"
                userSelect="none"
              >
                {`Let's go back`}
              </Text>
            </Box>
          </WindupChildren>
        ) : null}
      </Flex>
    </ChakraLink>
  );
};
