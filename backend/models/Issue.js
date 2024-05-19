const { type } = require("@testing-library/user-event/dist/type")
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const issueSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    drivers: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    route: {
        type: Array,
        required: false
    },
    room: {
        type: Array,
        required: false
    },
    priority: {
        type: String,
        required: false
    },
    groupassignment: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
    },
    user_id: {
        type: String,
        required: true
    }
    
}, { timestamps: true })

module.exports = mongoose.model("Issue", issueSchema)