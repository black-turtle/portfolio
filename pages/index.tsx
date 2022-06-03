import { Divider } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import Contact from '../components/Contact';
import Intro from '../components/Intro';
import PortFolio from '../components/PortFolio';
import Projects from '../components/Projects';
import TechStacks from '../components/TechStacks';
// import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Khairul's protfolio</title>
        <meta name="description" content="Khairul's protfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PortFolio />
    </div>
  );
};

export default Home;
