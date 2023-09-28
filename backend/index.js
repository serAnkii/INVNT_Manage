const express = require("express");

const app = express();

const port = 5001;

const moralis = require('moralis').default;

const cors = require('cors');
const { default: Moralis } = require("moralis");

require("dotenv").config({path:".env"});


app.use(cors());
app .use(express.json());

const key = process.env.key;

//making the endpoints 



Moralis.start({apiKey:key}).then(()=>{
    app.listen(port,()=>{
        console.log(`listening sir`)
    })
})