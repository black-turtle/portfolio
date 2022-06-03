import { Divider } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Contact from './Contact';
import Intro from './Intro';
import Projects from './Projects';
import TechStacks from './TechStacks';

const PortFolio = () => {
  useEffect(() => {
    document.body.classList.add('no-scroll');
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <div>
      <Intro />
      <Divider />

      <Projects />
      <Divider />

      <TechStacks />
      <Divider />

      <Contact />
    </div>
  );
};

export default PortFolio;
