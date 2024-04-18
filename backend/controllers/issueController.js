const Issue = require("../models/Issue")
const mongoose = require("mongoose")


// get all issues
const getAllIssues = async (req,res) => {

        const issues = await Issue.find({}).sort({createdAt: -1})
        
        res.status(200).json(issues)
}


// get 1 issue
const getIssue = async (req, res) => {
    const {id} = req.params
    
if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"no such workout"})
}
const issue = await Issue.findById(id)

if(!issue){
    return res.status(404).json({error:"no issues found"})
}

res.status(200).json(issue)
}


// create new issue
const createIssue = async (req, res) => {
    

    try{
        const issue = await Issue.create(req.body)
        res.status(200).json(issue)
        } catch (error) {
            res.status(400).json({error: error.message})
    }
}

// delete issue

// update issue



module.exports = {createIssue, getAllIssues, getIssue}