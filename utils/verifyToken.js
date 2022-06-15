import jwt from "jsonwebtoken"
import express from "express";
const router = express.Router();

export const verifyToken = (req,res,next) =>{

    const token = req.cookies.access_token;

    if(!token){
        return res.send("You are not authenticated")
    }

    jwt.verify(token,process.env.JWT, (err,user)=>{
        if(err)  return res.send("Token is not correct")

        req.user = user
        next()
    })
}

export default router