const mongoose = require('mongoose')

const isValidId = (req,res,next)=>{

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"Id is not valid"})
    }
    next()
}

module.exports = isValidId