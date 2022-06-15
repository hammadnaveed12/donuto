import express from "express"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Users from "../models/Users.js";

const router = express.Router();

router.get("/",(req,res)=>{
    res.render("signup");
});

router.post("/register",async (req,res,next)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
const newUser = new Users({
    
    email:req.body.email,
    password:hash,
})
await newUser.save()
res.status(200).send("User has been created")
    }
    catch(err){
res.send("Email is already used")
    }
});




export default router