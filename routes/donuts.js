import express from "express"
import Donut from "../models/Donut.js";
import mongoose from "mongoose";

const router = express.Router();

// updtae
router.put("/:id", async (req,res)=>{
    
    try{
        const updtaeDonut = await Donut.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true});
        res.status(200).json(updtaeDonut);
        
    }catch(err){
res.status(500).json(err)
    }
});
// delete
router.delete("/:id", async (req,res)=>{
    
    try{
          await Donut.findByIdAndDelete(req.params.id);
        res.status(200).json("Donut has been deleted");
        
    }catch(err){
res.status(500).json(err)
    }
});

// get

router.get("/:id", async (req,res)=>{
    
    try{
        const donut = await Donut.findById(req.params.id);
        res.status(200).json(donut);
        
    }catch(err){
res.status(500).json(err)
    }
});

//get all

router.get("/", async (req,res)=>{
    
    try{
        const donuts = await Donut.find();
        res.status(200).json(donuts);
        
    }catch(err){
next(err)
    }
});
export default router;