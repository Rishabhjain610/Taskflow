const express = require('express');
const router = require('./routes/todo.routes');
const ConnectDb = require('./db/db');
const cors = require('cors');
const app=express();
const PORT=8989;



ConnectDb()

app.use(cors()) // Enable CORS for all routes

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/api/v1',router)



app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})