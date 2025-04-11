const ToDoModel=require('../models/todo.model');


const getTodo=async(req,res)=>{
  try {
    let allTodo=await ToDoModel.find({userId:req.user});
    if(!allTodo){
      return res.status(400).json({
        message:"No todo found"
      })
    }
    return res.status(200).json({
      message:"All todo",
      allTodo
    })

  } catch (error) {
    return res.status(500).json({
      message:"Error in getting todo",
      error:error.message
    })
    
  }
}


const addNewTodo=async(req,res)=>{
  try {
    const {title}=req.body;
    if(title==""){
      return res.status(400).json({
        message:"Please enter all the fields"
      })
    }
    let newTodo=await ToDoModel.create({
      title,
      userId:req.user
    })
    return res.status(200).json({
      message:"New todo added",
      newTodo
    })
  } catch (error) {
    return res.status(500).json({
      message:"Error in creating new todo",
      error:error.message
    })
    
  }
}


const UpdateTodo=async(req,res)=>{
  try {
    const {id}=req.params;
    const{title}=req.body;
    if(title==""){
      return res.status(400).json({
        message:"Please enter all the fields"
      })
    }
    let updatedTodo=await ToDoModel.findByIdAndUpdate(id,{
      title:title
    },{new:true})
    
    if(updatedTodo.userId.toString()!==req.user.toString()){
      return res.status(400).json({
        message:"You are not authorized to update this todo"
      })
    }
    if(!updatedTodo){
      return res.status(400).json({
        message:"No todo found"
      })
    }
    return res.status(200).json({
      message:"Todo updated",
      updatedTodo
    })
  } catch (error) {
    return res.status(500).json({
      message:"Error in updating todo",
      error:error.message
    })
  }
}

const DeleteTodo=async(req,res)=>{
  try {
    const {id}=req.params;
    
    const deletedTodo=await ToDoModel.findByIdAndDelete(id);
    
    if(deletedTodo.userId.toString()!==req.user.toString()){
      return res.status(400).json({
        message:"You are not authorized to update this todo"
      })
    }
    if(!deletedTodo){
      return res.status(400).json({
        message:"No todo found"
      })
    }
    return res.status(200).json({
      message:"Todo deleted",
      deletedTodo
    })
  } catch (error) {
    return res.status(500).json({
      message:"Error in deleting todo",
      error:error.message
    })
  }
}
module.exports={
  getTodo,
  addNewTodo,
  UpdateTodo,
  DeleteTodo
}