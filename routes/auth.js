import express from "express"
import Users from "../models/Users.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();


router.get("/",(req,res)=>{
    res.render("index");
})






export default router