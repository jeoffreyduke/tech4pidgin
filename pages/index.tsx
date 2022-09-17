import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Body from "../components/Body";
import Header from "../components/Header";
import Homecomp from "../components/Homecomp";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tech4Pidgin</title>
        <meta name="description" content="Choraji" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.gridCon}>
        <Nav />
        <div className={styles.aside}>
          <Header />
          <Body Midcomp={<Homecomp />} />
        </div>
      </div>
    </div>
  );
};

export default Home;
