import express from "express"

import  verifyToken  from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.render("/adminlogin/dashboard")
})

export default router