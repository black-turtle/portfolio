import type { NextPage } from 'next';
import Head from 'next/head';
import PortFolio from '../components/PortFolio';
// import styles from '../styles/Home.module.css';
import { generalData } from '../data/general.data';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{generalData.portFolioTitle}</title>
        <meta name="description" content={`${generalData.name}'s portfolio`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PortFolio />
    </div>
  );
};

export default Home;
