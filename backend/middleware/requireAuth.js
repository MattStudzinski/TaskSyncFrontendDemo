const jwt = require('jsonwebtoken')
const User = require('../models/user')

const requireAuth = async (req, res, next) => {

    // verify authenticaiton 
    const { authorization } = req.headers

    if(!authorization) {
        return res.status(401).json({error:"authorization token required"})
    }
    const token = authorization.split(' ')[1]

    try{
        const {_id} = jwt.verify(token, process.env.SECRET)
        
        req.user = await User.findOne({ _id }).select('_id')
        console.log("Authenticated User", req.user)
        next()
    
    } catch (error) {
        console.log(error)
        res.status(401).json({error: 'Request not authorized'})
    }

}

module.exports = requireAuth