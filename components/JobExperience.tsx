import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Center,
  Container,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';
import { FaGenderless } from 'react-icons/fa';
import { jobExperiences } from '../data/jobExperience.data';
import { JobType } from '../data/types';

const JobExperience = () => {
  return (
    <Box w="100%">
      <Box minH="100vh">
        <Center>
          <Heading mt="4" mb="6" fontSize={{ base: '2xl', sm: '4xl' }}>
            Work Experience{' '}
            {jobExperiences.experience && `(${jobExperiences.experience})`}
          </Heading>
        </Center>

        {jobExperiences.jobs && (
          <Container maxW="6xl">
            {jobExperiences.jobs.map((job, idx) => (
              <ShowWorkExperience key={idx} {...job} />
            ))}
          </Container>
        )}
      </Box>
    </Box>
  );
};

const ShowWorkExperience: React.FC<JobType> = (props) => {
  return (
    <Box
      bg="gray.300"
      color="blue.800"
      rounded="md"
      shadow="lg"
      p={{ base: '2' }}
      m={{ base: '2', sm: '5' }}
      borderLeft="2px solid teal"
    >
      <Heading fontSize={{ base: '2xl', sm: '3xl' }}>{props.position}</Heading>

      <Breadcrumb color="gray.500" separator={<FaGenderless />}>
        {props.details.map((detail, idx) => (
          <BreadcrumbItem key={idx}>
            <Text>{detail}</Text>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>

      <Box p="3">
        <UnorderedList spacing={3}>
          {props.tasks.map((task, idx) => (
            <ListItem key={idx}>{task}</ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default JobExperience;
