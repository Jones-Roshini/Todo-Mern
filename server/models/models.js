const mongoose =require('mongoose')
//to create schema 
const TaskSchema= new mongoose.Schema({
    todo:String,  
    isComplete:Boolean
})


const Task= mongoose.model('task',TaskSchema) // to check individual 

module.exports=Task;