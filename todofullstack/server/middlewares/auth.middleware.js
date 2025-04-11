const jwt=require("jsonwebtoken")
const dotenv=require("dotenv")
dotenv.config()
const Auth=async(req,res,next)=>{
try{
  let token=req.header("Authorization")
  if(!token){
    return res.status(401).json({
      message:"No token provided, authorization denied"
    })
  }
  if(token.startsWith("Bearer")){
    token=token.split(" ")[1]
    
  }
  let user=jwt.verify(token,process.env.JWT_SECRET)
    req.user=user.userId
    next()
} catch (error) {
  return res.status(401).json({
    message:"Token verification failed",
    error:error.message
  })
}
 
}
module.exports=Auth