import { Box, Button, Center, Heading, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const Intro = () => {
  return (
    <Box w="100%" h="100vh" bg="blue.700">
      <Center h="100vh">
        <Box>
          {/* Intro Section */}
          <Box textAlign="center">
            <Text fontSize={{ base: 'l', sm: 'xl' }} color="gray.300">
              Hi, I'm
            </Text>
            <Heading
              fontSize={{ base: '2xl', sm: '4xl', lg: '6xl' }}
              fontWeight="bold"
              color="gray.100"
            >
              Md Khairul Islam
            </Heading>
            <Text fontSize={{ base: 'l', sm: 'xl' }}>Full-stack developer</Text>
          </Box>

          {/* Buttons */}
          <Center mt="10">
            <Box>
              <HStack>
                <Button colorScheme="messenger" leftIcon={<MdOutlineEmail />}>
                  Email
                </Button>
                <Button colorScheme="linkedin" leftIcon={<FaLinkedinIn />}>
                  LinkedIn
                </Button>
              </HStack>
            </Box>
          </Center>
        </Box>
      </Center>
    </Box>
  );
};

export default Intro;
