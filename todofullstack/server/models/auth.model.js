const mongoose = require('mongoose');
const {Schema,model}=mongoose;
const AuthSchema=new Schema({
  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
})
module.exports=model("user",AuthSchema)