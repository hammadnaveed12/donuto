import jwt from "jsonwebtoken"

const requireAuth = (req,res,next)=>{
    
    const token = "asasas";

    if(token){
jwt.verify(token,'asasas',(err,decodedToken)=>{
if(err){
    res.redirect('/adminlogin')
}
else{
    next()
}
})
    }
    else{
res.redirect('/adminlogin')
    }
}
export default requireAuth