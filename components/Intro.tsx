import { Box, Button, Center, Heading, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { FaFilePdf, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { generalData } from '../data/general.data';

const Intro = () => {
  return (
    <Box w="100%" h="100vh">
      <Center h="100vh">
        <Box>
          {/* Intro Section */}
          <Box textAlign="center">
            <Text fontSize={{ base: 'l', sm: 'xl' }} color="gray.400">
              Hi, I&apos;m
            </Text>
            <Heading
              fontSize={{ base: '2xl', sm: '4xl', lg: '6xl' }}
              fontWeight="bold"
              color="teal.300"
            >
              {generalData.name}
            </Heading>
            <Text fontSize={{ base: 'l', sm: '2xl' }}>{generalData.role}</Text>
          </Box>

          {/* Buttons */}
          <Center mt="10">
            <Box>
              <HStack spacing="5">
                {generalData.linkedInUrl && (
                  <Button
                    size="sm"
                    as="a"
                    href={generalData.linkedInUrl}
                    colorScheme="linkedin"
                    target="_blank"
                    rightIcon={<FaLinkedinIn />}
                  >
                    LinkedIn
                  </Button>
                )}

                {generalData.personalEmail && (
                  <Button
                    as="a"
                    size="sm"
                    href={`mailto:${generalData.personalEmail}`}
                    colorScheme="messenger"
                    rightIcon={<MdOutlineEmail />}
                  >
                    Email
                  </Button>
                )}

                {generalData.cvFileUrl && (
                  <Button
                    as="a"
                    href={generalData.cvFileUrl}
                    download
                    size="sm"
                    colorScheme="teal"
                    rightIcon={<FaFilePdf />}
                  >
                    Download CV
                  </Button>
                )}
              </HStack>
            </Box>
          </Center>
        </Box>
      </Center>
    </Box>
  );
};

export default Intro;
