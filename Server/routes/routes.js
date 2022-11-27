const express = require("express"),
router = express.Router();
const coap = require("node-coap-client").CoapClient;
const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('ascii');
router.get("/datos",(req,res)=>{
   coap
    .request(
        "coap://192.168.174.2:5683/temperature",
        "get" 
        
    )
    .then(response => { 
      //console.log(response.payload.toString())

      res.send(decoder.write(response.payload))})
     
    //res.send({temperature:"10",humidity:"5"})
    });



module.exports = router;