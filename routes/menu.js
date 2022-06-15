import express from "express"
import Donut from "../models/Donut.js"

const router = express.Router();

// router.get("/",(req,res)=>{
//     res.render("menu");
// })

router.get("/",function(req,res)
{
	Donut.find({},function(err,data)
		{
			if(err)
				console.log(err);
			else
				res.render("menu",{Donut:data});
		})
}); 
export default router