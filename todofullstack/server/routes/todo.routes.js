const express=require('express');
const { userRegistration,login } = require('../contollers/auth.controller');
const { getTodo, addNewTodo,UpdateTodo,DeleteTodo } = require('../contollers/todo.controller');
const Auth = require('../middlewares/auth.middleware');
const router=express.Router();








router.post('/user/register',userRegistration)
router.post('/users/login',login)



router.get('/users/todo/get',Auth,getTodo)
router.post('/users/todo/add',Auth,addNewTodo)
router.put('/users/todo/update/:id',Auth,UpdateTodo)
router.delete('/users/todo/delete/:id',Auth,DeleteTodo)






module.exports=router