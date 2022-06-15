import express from "express"
import Donut from "../models/Donut.js";

const router = express.Router();

// router.post("/add", async function (req, res, next) {
//     let product = new Donut({
//         donutname: req.body.donutname,
//         price: req.body.price,
//         image: req.file.filename,
//         path: req.file.path,
// });
//      await product.save();
//     res.redirect("/adminlogin/dashboard");

//   });

router.post("/add", async (req,res)=>{

    const newDonut = new Donut(req.body)
    
    try{
        const savedDonut = await newDonut.save();
        res.redirect("/adminlogin/dashboard")

    }catch(err){
res.status(500).json(err)
    }
});

router.get("/",function(req,res)
{
	Donut.find({},function(err,data)
		{
			if(err)
				console.log(err);
			else
				res.render("admindashboard",{Donut:data});
		})
}); 

router.get("/delete/:id", async (req,res)=>{
    
    try{
          await Donut.findByIdAndDelete(req.params.id);
        // res.status(200).json("Donut has been deleted");
       res.redirect("/adminlogin/dashboard")
        
    }catch(err){
res.status(500).json(err)
    }
});

router.post("/update/:id", async (req,res)=>{
    
    try{
        const updtaeDonut = await Donut.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true});
        res.redirect("/adminlogin/dashboard")
        
    }catch(err){
res.status(500).json(err)
    }
});

export default router