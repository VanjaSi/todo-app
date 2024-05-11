
const Todo = require('../models/todoModel')

//get all todos
const getAllTodos = async (req,res,next)=>{
    
    try {
        const todos = await Todo.find({}).sort({createdAt: -1})

        res.status(200).json(todos)

    } catch (error) {
        console.log(error);
        res.status(400).json({error:error.message})
    }
}

//create todo
const createTodo = async (req,res,next)=>{
    
    const emptyFields = []

    const {text, category} = req.body

    if(!text){
       emptyFields.push('todo text')
    }
    if(!category){
        emptyFields.push('category')

    }
    if(emptyFields.length > 0){
       return res.status(400).json({error:"All fields are required", emptyFields})
    }

    try {
        const response = await Todo.create({...req.body})

        res.status(201).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
        console.log(error);
    }
}

//delete todo
const deleteTodo = async (req,res)=>{
    const {id}= req.params

    try {
        
        const deleted = await Todo.findByIdAndDelete({_id:id})

        if(!deleted) {
            return res.status(404).json({error:"No such todo"})
        }

        res.status(200).json({message:"Todo is successfully deleted", deleted})
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }

}
//update todo
const updateTodo = async (req,res)=>{

    const {id} = req.params

    try {
       
        const response = await Todo.findByIdAndUpdate(id,{...req.body}, {new:true})

        if(!response){
         return   res.status(404).json({error:"No such todo to update"})
        }

        res.status(200).json({message:"Todo updated successfully", response})

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


//get single todo
const getSingleTodo = async (req,res) => {

    const {id} = req.params

    try {
        
        const singleTodo = await Todo.findById(id)
        if(!singleTodo){
         return   res.status(400).json({error:"No such todo"})
        }
        res.status(200).json(singleTodo)
    } catch (error) {
        res.status(400).json({error:error.message})
    }

}


module.exports = {
    getAllTodos,
    createTodo,
    deleteTodo,
    updateTodo,
    getSingleTodo
}