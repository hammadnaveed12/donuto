import express from "express"
import Users from "../models/Users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/",(req,res)=>{
    res.render("index");
})


// router.post("/login",async (req,res,next)=>{
//     try{
//         const salt = bcrypt.genSaltSync(10);
//         const hash = bcrypt.hashSync(req.body.password, salt);
// const newUser = new Users({
   
//     email:req.body.email,
//     password:hash,
// })
// await newUser.save()
// res.status(201).send("User has been created")
//     }
//     catch(err){
// next(err)
//     }
// });

export default router