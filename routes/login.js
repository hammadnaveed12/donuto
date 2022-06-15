import express from "express"
import Users from "../models/Users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/",(req,res)=>{
    res.render("login");
})

router.post("/log",async (req,res,next)=>{
    try{
       
const user = await Users.findOne({
    email:req.body.email,
})
if(!user) return next(createError(404,"User Not found"));

const isPasswordCorrect = await bcrypt.compare(
    req.body.password,
    user.password
)
if(!isPasswordCorrect)  return res.send("Wrong password or email");
if(isPasswordCorrect) return res.send("Authenticated");

const token = jwt.sign({id:user._id, isAdmin:user.isAdmin},"asasas")
const {password, isAdmin, ...otherDetails} = user._doc;


res.cookie("access_token",token,{
    httpOnly:true
}).status(200).json({...otherDetails})

    }
    catch(err){
		res.send("NOT FOUND")
    }
});



// router.post("/login",async (req,res,next)=>{
//     try{
//         const salt = bcrypt.genSaltSync(10);
//         const hash = bcrypt.hashSync(req.body.password, salt);
// const newUser = new Users({
   
//     email:req.body.email,
//     password:hash,
// })
// await newUser.save()
// res.status(201).send("User has been authenticated")
//     }
//     catch(err){
// next(err)
//     }
// });

export default router