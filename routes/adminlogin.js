import express from "express"

const router = express.Router();

router.get("/",(req,res)=>{
    res.render("adminlogin");
})



    router.post("/adminlogin",async (req,res,next)=>{
        try{
           
    const user = await Users.findOne({
        email:req.body.email,
        
    })
    if(!user) return res.redirect("adminlogin");
    
    
    const isPasswordCorrect = await bcrypt.compare(
        req.body.password,
        user.password
    )
    if(!isPasswordCorrect )  return res.send("Wrong password or email");
    if(isPasswordCorrect && req.body.isAdmin==="true") return res.render("admindashboard");
}
catch(err){

}
});




export default router