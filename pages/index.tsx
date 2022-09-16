import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Body from "../components/Body";
import Header from "../components/Header";
import Homecomp from "../components/Homecomp";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Choraji</title>
        <meta name="description" content="Choraji" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Body Midcomp={<Homecomp />} />
    </div>
  );
};

export default Home;
