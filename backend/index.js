const express = require("express");
const app = express();
const port = 5001;
const Moralis = require("moralis");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

app.use(cors());
app.use(express.json());

const key = process.env.key;

// Making the endpoints (GET)
app.get("/getnftdata", async (req, res) => {
  try {
    const { query } = req;

    if (typeof query.contractAddress === "string") {
      const response = await Moralis.EvmAPI.nft.getNFTTrades({
        address: query.contractAddress,
        chain: "eth", // Use "eth" for Ethereum mainnet
      });
      return res.status(200).json(response);
    } else {
      const nftdata = [];
      for (let i = 0; i < query.contractAddress.length; i++) {
        const response = await Moralis.EvmAPI.nft.getNFTTrades({
          address: query.contractAddress[i],
          chain: "eth", // Use "eth" for Ethereum mainnet
        });
        nftdata.push(response);
      }
      const responseData = { nftdata };
      return res.status(200).json(responseData);
    }
  } catch (e) {
    console.error(e);
    return res.status(400).json();
  }
});


//second endpoint to get nft collection for a pirticular nft

app.get("/getcontractnft",async (req,res)=>{
    try{    
        const {query} =res; //parameter from fontend client

        const chain = query.chain == "0x5"?"0x5":"0x1";
        
        const response  = await Moralis.EvmAPI.nft.getContractNfts({chain,format:"decimal",address:query.contractAddress})

        return res.status(200).json(response);


    } catch(e){
        console.log(e);
        return res.status(400).json()
    }
})


app.get("/getnfts",async(req,res)=>{
    try{
        const {query} = res;

        const response = await Moralis.EvmAPI.nft.getWalletNFTs({
            address:query.address,
            chain:query.chain
        })

        return res.status(200).json(response);
    }
    catch(e){
        console.log("error occured");

        res.status(400).json();
    }
})

Moralis.start({apiKey:key}).then(()=>{
    app.listen(port,()=>{
        console.log(`listening sir`)
    })
})
