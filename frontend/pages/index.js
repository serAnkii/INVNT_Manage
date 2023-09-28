import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

import Header from "../components/Header.jsx";

import Herosec from "../components/Herosec.jsx";

import Airdroppopup from "../components/Airdroppopup.jsx";

import Trending from "../components/Trending.jsx";

export default function Home() {
  return (
    <div className="maincontainer">
      <Head>
        <title>NFT_MARKETPLACE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div>
        <div className="main">
          <Header />
          <Herosec />
          <Airdroppopup />
        </div> 
        <Trending />
      </div>
    </div>
  );
}
