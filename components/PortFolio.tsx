import { Box, Divider } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import Contact from './Contact';
import Intro from './Intro';
import ProjectContainer from './ProjectContainer';
import Skills from './Skills';

const PortFolio = () => {
  const introRef = useRef<HTMLInputElement>(null);
  const projectRef = useRef<HTMLInputElement>(null);

  return (
    <Box bg="blue.800">
      <div ref={introRef}>
        <Intro />
      </div>
      <Divider />

      <div>
        <Skills />
      </div>
      <Divider />

      <div ref={projectRef}>
        <ProjectContainer />
      </div>
      {/* <Divider /> */}

      {/* <Contact /> */}
    </Box>
  );
};

export default PortFolio;
