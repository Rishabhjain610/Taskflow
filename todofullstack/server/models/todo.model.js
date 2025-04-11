const mongoose=require('mongoose');
const {Schema,model}=mongoose;
const TodoSchema=new Schema({
  title:{
    type:String,
    required:true
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
    
  }
},{timestamps:true})
module.exports=model("todo",TodoSchema)