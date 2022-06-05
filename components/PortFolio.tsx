import { Box, Divider } from '@chakra-ui/react';
import React, { useRef } from 'react';
import Intro from './Intro';
import JobExperience from './JobExperience';
import Projects from './Projects';
import Skills from './Skills';

const PortFolio = () => {
  const introRef = useRef<HTMLInputElement>(null);
  const projectRef = useRef<HTMLInputElement>(null);

  return (
    <Box mb="20">
      <div ref={introRef}>
        <Intro />
      </div>

      <Divider />
      <div ref={projectRef}>
        <Projects />
      </div>

      <Divider />
      <div>
        <JobExperience />
      </div>

      <Divider />
      <div>
        <Skills />
      </div>
    </Box>
  );
};

export default PortFolio;
