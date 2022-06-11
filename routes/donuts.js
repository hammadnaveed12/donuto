import express from "express"
import Donut from "../models/Donut.js";
import mongoose from "mongoose";

const router = express.Router();

router.post("/", async (req,res)=>{

    const newDonut = new Donut(req.body)
    console.log("savedDonut1");
    try{

        const savedDonut = await newDonut.save();
        res.status(200).json(savedDonut);
        console.log("savedDonut");

    }catch(err){
res.status(500).json(err)
    }
})

export default router;