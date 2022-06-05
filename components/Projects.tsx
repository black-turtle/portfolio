import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { MdCheckCircle } from 'react-icons/md';
import { projectsData } from '../data/projects.data';
import { ProjectType } from '../data/types';

const Projects = () => {
  return (
    <Box w="100%">
      <Box minH="100vh">
        <Center>
          <Heading mt="4" fontSize={{ base: '2xl', sm: '4xl' }}>
            My Recent Projects
          </Heading>
        </Center>

        <DisplayProjects />
      </Box>
    </Box>
  );
};

const DisplayProjects = () => {
  return (
    <Flex
      p={{ base: 2, sm: 50 }}
      w="full"
      // alignItems="center"
      justifyContent="center"
      wrap="wrap"
    >
      {projectsData.map((project) => (
        <ProjectCard key={project.header} {...project} />
      ))}
    </Flex>
  );
};

const ProjectCard: React.FC<ProjectType> = (props) => {
  return (
    <Box
      bg="gray.300"
      color="blue.800"
      m={{ base: 2 }}
      rounded="md"
      shadow="lg"
      position="relative"
      w={{ base: '100%', md: '80%', lg: '30%' }}
      boxShadow="xl"
      border="1px solid grey"
      // key={keyStr}
    >
      <Image
        src={props.previewUrl}
        borderTopRadius="md"
        alt="preview of imresizer.com"
      />

      <Box p="2">
        <Heading fontSize="3xl" textAlign="center">
          {props.header}
        </Heading>

        {props.demoUrl && (
          <Center>
            <Stack direction="row" wrap="wrap" mt="3">
              {props.demoUrl && (
                <Button
                  as="a"
                  href={props.demoUrl}
                  target="_blank"
                  colorScheme="teal"
                  size="xs"
                >
                  Live Demo
                </Button>
              )}

              {props.sourceUrl && (
                <Button
                  as="a"
                  href={props.sourceUrl}
                  target="_blank"
                  colorScheme="teal"
                  size="xs"
                  variant="outline"
                >
                  Github
                </Button>
              )}
            </Stack>
          </Center>
        )}

        <Text mt="3">{props.description}</Text>

        <Stack
          direction="row"
          wrap="wrap"
          justify="center"
          shouldWrapChildren={true}
          mt="3"
        >
          {props.tags.map((tag, idx) => (
            <Badge
              variant="subtle"
              colorScheme="green"
              rounded="md"
              key={props.header + idx}
            >
              {tag}
            </Badge>
          ))}
        </Stack>

        <Text fontWeight="bold" fontSize="2xl" p="3" mt="3">
          Main Features
        </Text>

        <List spacing={3}>
          {props.features.map((feature, idx) => (
            <ListItem key={props.header + idx}>
              <ListIcon as={MdCheckCircle} color="green.500" />
              {feature}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Projects;
