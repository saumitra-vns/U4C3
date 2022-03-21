const express = require("express");

const router = express.Router();


router.post("/", async(req,res)=>{
    
  return  res.send("hello")
})

module.exports = router