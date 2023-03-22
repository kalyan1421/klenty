const express = require("express");
const router = express.Router();
const Cars = require("../models/carmodel")

router.get("/getallcars",async(req,res)=>{
    try{
        const cars = await Cars.find()
        res.send(cars)
    }
    catch(error){      
        return res.status(400).json(error);
    }
});

module.exports = router;