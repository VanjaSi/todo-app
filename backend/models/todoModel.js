
const {model, Schema} = require('mongoose')

const todoSchema = new Schema(
    {
        text: {
            type:String,
            required:true,
        },
        category: {
            type:String,
            required:true,
        },
        priority:{
            type:String,
            default: "medium",
            enum:["low","medium","high"],

        },
        completed:{
            type:Boolean,
            default:false
        }
    },
    {
        timestamps:true
    }
)

const TodoModel = model('Todo', todoSchema)

module.exports = TodoModel