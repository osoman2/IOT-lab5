const express = require("express"),
router = express.Router();
const coap = require("node-coap-client").CoapClient;
const { StringDecoder } = require('node:string_decoder');
const decoder = new StringDecoder('ascii');
router.get("/datos",(req,res)=>{
  /* coap
    .request(
        "coap://{ip}:{port}/{test}",
        "get" 
        
    )
    .then(response => { res.send(decoder.write(response))})
     */
    res.send({temperature:"10",humidity:"5"})
    });



module.exports = router;