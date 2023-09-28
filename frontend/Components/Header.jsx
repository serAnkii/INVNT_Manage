

import { useEffect, useState } from "react";
import { useAccount, useConnect } from "wagmi"; //to check that we are already connected to wallet or not

import Image from "next/image";
import Link from "next/link";


import { Search } from "@web3uikit/icons";

import styles from "@/styles/Home.module.css";

//logo import here

const Header = () => {
  const [adress, isconnected] = useAccount();
  const [connect, connector] = useConnect();

  const [isLoggedIn, setlog] = useState(false);

  useEffect(() => {
    if (!isconnected) {
      setlog(true);
    } else {
      setlog(false);
    }
  }, []);
  return (
    <div >
      <div >
        <Link href="/">
          logo
        </Link>
      </div>
      <div >
        <div >
          <p>Collection</p>
          <Link href="/portfolio" >
            <p>Portfolio</p>
          </Link>
          <p>Airdrop</p>
        </div>
        <div >
          <div>
            <span>
              <Search fontSize="25px" />
            </span>
            <input
              placeholder="Search collections and wallets"
              disabled=""
              className={styles.inputField}
            />
          </div>
        </div>
        {isLoggedIn ? (
          <div>
            {connectors.map((connector) => (
              <button
                disabled={!connector.ready}
                key={connector.id}
                onClick={() => connect({ connector })}
                className={styles.connect_btn}
              >
                CONNECT WALLET
              </button>
            ))}
          </div>
        ) : (
          <div >
            {isLoggedIn ? address?.slice(0, 8) : ""}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
