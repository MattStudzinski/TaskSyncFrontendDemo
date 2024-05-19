const User = require("../models/user")
const Issue = require("../models/Issue")
const mongoose = require("mongoose")


// get all issues
const getAllIssues = async (req,res) => {
    const user_id = req.user._id
        const issues = await Issue.find({ user_id }).sort({createdAt: -1})
        
        res.status(200).json(issues)
}


// get 1 issue
const getIssue = async (req, res) => {
    const {id} = req.params

if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"no such issue"})
}
const issue = await Issue.findById(id)

if(!issue){
    return res.status(404).json({error:"no issues found"})
}

res.status(200).json(issue)
}


// create new issue
const createIssue = async (req, res) => {
    
    console.log(req.body)
    const {name, description, drivers: driverNames} = req.body
    let emptyFields = []

    if(!name) {
        emptyFields.push('issuename')
    }
    if(!description) {
        emptyFields.push('description')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({error: "Please fill in all fields", emptyFields})
    }

    try{
        const user_id = req.user._id

        const driverIds = await Promise.all(driverNames.map(async (name) => {
            const user = await User.findOne({ name: name }); // Assuming User is your Mongoose model
            console.log(user)
            if (user) {
                return user._id; // Return user's _id if found
            } else {
                // Handle case where user with given name is not found
                throw new Error(`User '${name}' not found`);
            }
        }));
        
        const issue = await Issue.create({ ...req.body, drivers: driverIds, user_id });
        res.status(200).json(issue);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// delete issue
const deleteIssue = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No issue to delete"})
    }

    const issue = await Issue.findOneAndDelete({_id: id})

    if(!issue){
        return res.status(404).json({error: "no such issue"})
    }
    res.status(200).json(issue)
}

// update issue
const updateIssue = async (req, res) => {

    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No issue to delete"})
    }

    const issue = await Issue.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if(!issue){
        return res.status(404).json({error: "no such issue"})
    }

    res.status(200).json(issue)
}



module.exports = {createIssue, getAllIssues, getIssue, deleteIssue, updateIssue}