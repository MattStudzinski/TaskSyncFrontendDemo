const User = require('../models/user')
const jwt = require('jsonwebtoken')

const createToken = (_id, role) => {
    return jwt.sign({_id, role}, process.env.SECRET, { expiresIn: '3d' } )
}

const loginUser = async (req, res) => {
    const {name, password} = req.body

    try {
        const user = await User.login(name, password)
        // create token
        const token = createToken(user._id, user.role)

        res.status(200).json({name, role: user.role, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    
}

const signupUser = async (req, res) => {
    const {name, password} = req.body

    try {
        const user = await User.signup(name, password)
        // create token
        const token = createToken(user._id)

        res.status(200).json({name, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

module.exports = {signupUser,loginUser}