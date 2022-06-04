import { Box, Center, Heading } from '@chakra-ui/react';
import React from 'react';

const Contact = () => {
  return (
    <Box w="100%" h="100vh">
      <Box h="100vh">
        <Center>
          <Heading mt="4" fontSize={{ base: '2xl', sm: '4xl' }}>
            Contact Details
          </Heading>
        </Center>
      </Box>
    </Box>
  );
};

export default Contact;
