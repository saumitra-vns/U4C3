const express = require("express");
const { User } = require("../models/users.model");

const router = express.Router();
const User = require("../models/users.model")

router.post("/", async(req,res)=>{
    
    const user = await User.create(req.body)
    res.status(201).json({data:user})
})

module.exports = router