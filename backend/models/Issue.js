const { type } = require("@testing-library/user-event/dist/type")
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const issueSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    dueDate: {
        type: Date,
        required: false
    },
    completionStatus: [{
        driver: {type: Schema.Types.ObjectId, ref: 'User'},
        isComplete: {type: Boolean, default: false}
    }],
    complete: {
        type: Boolean,
        default: 'false'

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
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    recurrenceInterval: {
        type: String,
        required: false
    },
    recurrenceUnit: {
        type: String,
        required: false
    }
    
}, { timestamps: true })

module.exports = mongoose.model("Issue", issueSchema)