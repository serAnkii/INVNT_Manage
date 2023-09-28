import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Eth } from "@web3uikit/icons";

const Herosec = () => {
  const [oneDayTradingVolume, setOneDayTradingVolume] = useState("");
  useEffect(() => {
    const yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);

    const getNftData = async () => {
      const res = await axios.get("http://localhost:5001/getnftdata", {
        params: {
          contractAddress: "address",
        },
      });

      let tradingVolume = 0;
      res.data.map((sale) => {
        if (sale.block_timestamp > yesterday.toISOString()) {
          return (tradingVolume += sale.price / 10 ** 18);
        }
      });

      setOneDayTradingVolume(tradingVolume);

      getNftData();
    };
  });

  return (
    <div>
      <h2>Bored Ape Yacht Club</h2>
      <p>BY YUGALABS</p>
      <div>
        <div>
          <p>FLOOR PRICE</p>
          <p>
            67.90
            <Eth fontSize="17px" />
          </p>
        </div>
        <div>
          <p>1D VOLUME</p>
          <p>
            {Number(oneDayTradingVolume).toFixed(2)}
            <Eth fontSize="17px" />
          </p>
        </div>
        <button>
          VIEW COLLECTION
          <Arrow fontSize="20px" />
        </button>
      </div>
      <div>
        <div>
          {/* images  */}
          <p>Bored Ape Yacht Club</p>
        </div>
        <div>
          {/* images */}
          <p>Checks VV Originals</p>
        </div>
        <Link href="/viewcollection">
          <div>
            {/* images  */}
            <p>Azuki</p>
          </div>
        </Link>
        <div>
          {/* images  */}
          <p>Pudgy Penguins</p>
        </div>
        <div>
          /images 
          <p>Moonbirds</p>
        </div>
      </div>
    </div>
  );
};

export default Herosec;
