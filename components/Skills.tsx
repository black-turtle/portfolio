import {
  Box,
  Center,
  color,
  Divider,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import {
  MdAddTask,
  MdCheckCircle,
  MdDoneAll,
  MdGroupWork,
} from 'react-icons/md';
import { SkillType, skillsData } from '../data/data';

const Skills = () => {
  return (
    <Box w="100%">
      <Box minH="100vh">
        <Center>
          <Heading mt="4" fontSize={{ base: '2xl', sm: '4xl' }}>
            What skills I have
          </Heading>
        </Center>

        <ShowSkills />
      </Box>
    </Box>
  );
};

const ShowSkills = () => {
  return (
    <Flex
      p={{ base: 2, sm: 50 }}
      w="full"
      // alignItems="center"
      justifyContent="center"
      wrap="wrap"
    >
      {skillsData.map((skillCategory, idx) => (
        <ShowSkillCategory
          key={skillCategory.category + idx}
          {...skillCategory}
        />
      ))}
    </Flex>
  );
};

const ShowSkillCategory = (props: SkillType) => {
  return (
    <Box
      w={{ base: 'xl' }}
      bg="gray.300"
      color="blue.800"
      p="2"
      m="2"
      rounded="md"
      boxShadow="xl"
    >
      <Heading fontSize="2xl" textAlign="center">
        {props.category}
      </Heading>

      <Divider sx={{ borderColor: 'blue.300' }} my="2" />

      <SimpleGrid columns={2} spacing={10}>
        {props.skills.map((skill) => (
          <SkillDisplay
            key={skill.name}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

const SkillDisplay: React.FC<{ name: string; level: string }> = ({
  name,
  level,
}) => {
  return (
    <Flex>
      <Icon as={MdDoneAll} w={8} h={8} color="green.500" />
      <Box ml="2">
        <Heading fontSize="xl" color="teal.600">
          {name}
        </Heading>
        <Text color="gray.500">{level}</Text>
      </Box>
    </Flex>
  );
};

export default Skills;
