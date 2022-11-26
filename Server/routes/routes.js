const express = require("express"),
router = express.Router();
const coap = require("node-coap-client").CoapClient;
const { StringDecoder } = require('node:string_decoder');
const decoder = new StringDecoder('ascii');
router.get("/datos",(req,res)=>{
  coap
    .request(
        "coap://"/* string */,
        "get" /* "get" | "post" | "put" | "delete" */,
        
    )
    .then(response => { res.send(decoder.write(response))})
    
    });



module.exports = router;