const corsOptions = {
    origin :'http://localhost:3000',
    methods :'GET,PATCH,DELETE,POST',
    allowedHeaders:['Content-Type', 'Authorization'],
    credentials:true,
    optionsSuccessStatus: 200 
}

module.exports = {corsOptions}