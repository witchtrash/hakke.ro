import React from 'react';
import {
  Input,
  FormLabel,
  FormControl,
  Box,
  List,
  ListItem,
  Text,
  useOutsideClick,
} from '@chakra-ui/react';

export const GenderIdentityInput = () => {
  const identities = [
    'Female',
    'Male',
    'Gender fluid',
    'Non-binary',
    'Agender',
  ];

  const [identity, setIdentity] = React.useState<string>('');
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const ref = React.useRef(null);

  useOutsideClick({
    ref: ref,
    handler: () => setDropdownOpen(false),
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setIdentity(e.currentTarget.value);
  };

  const handleClick = (identity: string) => {
    setIdentity(identity);
    setDropdownOpen(false);
  };

  return (
    <Box
      p="8"
      mx="auto"
      my="6"
      borderRadius="lg"
      boxShadow="lg"
      position="relative"
    >
      <Text p="1">Selected: {identity}</Text>
      <FormControl>
        <FormLabel color="GrayText" htmlFor="gender-identity" p="1">
          Which gender identity do you most identify with?
        </FormLabel>
        <Input
          id="gender-identity"
          colorScheme="white"
          placeholder="Gender identity"
          value={identity}
          onChange={handleChange}
          onClick={() => setDropdownOpen(true)}
        />
        {dropdownOpen ? (
          <Box
            position="absolute"
            background="white"
            p="4"
            w="100%"
            boxShadow="xl"
            zIndex="dropdown"
            top="24"
          >
            <List spacing={1} ref={ref}>
              {identities
                .filter(listIdentity =>
                  listIdentity.toLowerCase().includes(identity.toLowerCase())
                )
                .map(listIdentity => (
                  <ListItem
                    key={listIdentity}
                    _hover={{
                      background: 'violet.50',
                    }}
                    p="4"
                    onClick={() => handleClick(listIdentity)}
                  >
                    {listIdentity}
                  </ListItem>
                ))}
            </List>
          </Box>
        ) : null}
      </FormControl>
    </Box>
  );
};
