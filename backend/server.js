const express = require('express')
const {PORT} = require('./config/constants')

const server = express()

server.listen(PORT, (err)=>{

    if(err) console.log(err);

    console.log(`Server running on: http://localhost:${PORT}`);
})