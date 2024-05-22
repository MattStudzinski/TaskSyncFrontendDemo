const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')


const Schema = mongoose.Schema

const userSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    assignedIssues: [{
        type: Schema.Types.ObjectId,
        ref: "Issue"
    }]
})

// static signup method
userSchema.statics.signup = async function (name, password) {

    // validation
    if (!name || !password) {
        throw Error('All fields must be filled')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }



    const exists = await this.findOne({ name })

    if (exists) {
        throw Error('name already in use')
    }
    
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ name, password: hash })

    return user
}

// static login method
userSchema.statics.login = async function(name, password){
    
    if (!name || !password) {
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({ name })

    if (!user) {
        throw Error('Incorrect name')
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error('Incorrect password')
    }

    return user
}


module.exports = mongoose.model('User', userSchema)