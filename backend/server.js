const express = require('express')
const mongoose = require('mongoose')
const {PORT, MONGO_URI} = require('./config/constants')
const todoRoutes = require('./routes/todos')

const server = express()

//middlewares
server.use(express.json())

//routes
server.use('/api',todoRoutes)

//Mongodb connection
mongoose.connect(MONGO_URI,{dbName:'todo_mern_app'})
.then(()=>{
    console.log('MongoDB connected...');
    //server connection
    server.listen(PORT, (err)=>{

        if(err) console.log(err);
         console.log(`Server running on: http://localhost:${PORT}`);
    })
})
.catch(err=>console.log(`MongoDb connection error: ${err}`))

