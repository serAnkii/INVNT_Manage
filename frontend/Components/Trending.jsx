import Link from "next/link";
import { Eth } from "@web3uikit/icons";
import styles from "@/styles/Home.module.css";

const Trending = () => {
  return (
    <section>
  <section>
    <h3>Trending</h3>
    <h3>Top</h3>
  </section>
  <table>
    <thead>
      <tr>
        <th>COLLECTION</th>
        <th>FLOOR PRICE</th>
        <th>1D CHANGE</th>
        <th>7D CHANGE</th>
        <th>1D VOLUME</th>
        <th>7D VOLUME</th>
        <th>OWNERS</th>
        <th>SUPPLY</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Azuki</td>
        <td>
          13.89
          <Eth fontSize="17px" />
        </td>
        <td>-5.12%</td>
        <td>-4.99%</td>
        <td>
          3277.46
          <Eth fontSize="17px" />
        </td>
        <td>
          10395.46
          <Eth fontSize="17px" />
        </td>
        <td>4915 (49%)</td>
        <td>10,000</td>
      </tr>
      <tr>
        <td>Bored Ape Yacht Club</td>
        <td>
          67.90
          <Eth fontSize="17px" />
        </td>
        <td>-2.91%</td>
        <td>-3.57%</td>
        <td>
          3096.64
          <Eth fontSize="17px" />
        </td>
        <td>
          14052.83
          <Eth fontSize="17px" />
        </td>
        <td>5814 (58%)</td>
        <td>10,000</td>
      </tr>
      <tr>
        <td>
          <Link href="/mmcollection">Moralis Mage</Link>
        </td>
        <td>
          1.2978
          <Eth fontSize="17px" />
        </td>
        <td>26.42%</td>
        <td>78.23%</td>
        <td>
          9.65
          <Eth fontSize="17px" />
        </td>
        <td>
          61.84
          <Eth fontSize="17px" />
        </td>
        <td>4302 (43%)</td>
        <td>10,000</td>
      </tr>
      <tr>
        <td>Moonbirds</td>
        <td>
          6.508
          <Eth fontSize="17px" />
        </td>
        <td>7.08%</td>
        <td>6.91%</td>
        <td>
          2834.29
          <Eth fontSize="17px" />
        </td>
        <td>
          13043.28
          <Eth fontSize="17px" />
        </td>
        <td>6275 (63%)</td>
        <td>10,000</td>
      </tr>
      <tr>
        <td>Vee Friends</td>
        <td>
          4.80
          <Eth fontSize="17px" />
        </td>
        <td>11.63%</td>
        <td>-11.76%</td>
        <td>
          73.68
          <Eth fontSize="17px" />
        </td>
        <td>
          1001.71
          <Eth fontSize="17px" />
        </td>
        <td>5134 (50%)</td>
        <td>10,255</td>
      </tr>
    </tbody>
  </table>
</section>

  )
}

export default Trending