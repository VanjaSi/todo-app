const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const {PORT, MONGO_URI} = require('./config/constants')
const {corsOptions} = require('./config/config')
const todoRoutes = require('./routes/todos')

const server = express()

//middlewares
server.use(express.json())
server.use(cors(corsOptions))

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

