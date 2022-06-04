import React from 'react';
import { Box, Button, Center, Heading, HStack, Text } from '@chakra-ui/react';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import Projects from './Projects';

const ProjectContainer = () => {
  return (
    <Box w="100%">
      <Box minH="100vh">
        <Center>
          <Heading mt="4" fontSize={{ base: '2xl', sm: '4xl' }}>
            Projects
          </Heading>
        </Center>

        <Projects />
      </Box>
    </Box>
  );
};

export default ProjectContainer;
