import { Box, Button, Center, Heading, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { FaFacebook, FaFilePdf, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const Intro = () => {
  return (
    <Box w="100%" h="100vh">
      <Center h="100vh">
        <Box>
          {/* Intro Section */}
          <Box textAlign="center">
            <Text fontSize={{ base: 'l', sm: 'xl' }} color="gray.400">
              Hi, I'm
            </Text>
            <Heading
              fontSize={{ base: '2xl', sm: '4xl', lg: '6xl' }}
              fontWeight="bold"
              color="teal.300"
            >
              Md Khairul Islam
            </Heading>
            <Text fontSize={{ base: 'l', sm: '2xl' }}>
              Full-stack developer
            </Text>
          </Box>

          {/* Buttons */}
          <Center mt="10">
            <Box>
              <HStack spacing="5">
                <Button
                  as="a"
                  size="sm"
                  href="mailto:jonys.mailbox@gmail.com"
                  colorScheme="messenger"
                  rightIcon={<MdOutlineEmail />}
                >
                  Email
                </Button>
                <Button
                  size="sm"
                  as="a"
                  href="https://www.linkedin.com/in/md-khairul-islam-jony"
                  colorScheme="linkedin"
                  target="_blank"
                  rightIcon={<FaLinkedinIn />}
                >
                  LinkedIn
                </Button>

                <Button size="sm" colorScheme="teal" rightIcon={<FaFilePdf />}>
                  Download CV
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
