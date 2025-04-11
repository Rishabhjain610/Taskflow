const mongoose=require("mongoose")
const dotenv=require("dotenv");
dotenv.config();

const ConnectDb=async()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URI,{dbName:"todofullstack"})
    
    console.log("Db connected")
  } catch (error) {
    console.log(error)
  }
}
module.exports=ConnectDb