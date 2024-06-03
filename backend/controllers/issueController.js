const User = require("../models/user")
const Issue = require("../models/Issue")
const mongoose = require("mongoose")


// get all issues
const getAllIssues = async (req,res) => {
    const user_id = req.user._id

        try {
        
        const issues = await Issue.find({
            drivers: { $in: [user_id] }
        })
        .sort({ createdAt: -1 })
        .populate('drivers', "_id name");

        console.log("Fetched issues:", issues); 
        res.status(200).json(issues);
    } catch (error) {
        console.log("Error fetching issues:", error); 
        res.status(400).json({ error: error.message });
    }
}


// admin issues
const getAdminIssues = async (req, res) => {

    try{
        const issues = await Issue.find()
        .sort({ createdAt: -1 })
        .populate('drivers', '_id name')
        res.status(200).json(issues)
    }catch (error){
        res.status(400).json({error: error.message})
    }

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
        emptyFields.push('name')
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
            const user = await User.findOne({ name }); // Assuming User is your Mongoose model
            console.log(user)
            if (!user) {
                throw new Error (`user with name ${name} is not found`)
            }
            return user._id
        }));
        
        const issue = await Issue.create({ ...req.body, drivers: driverIds, user_id });

        const selectedDrivers = await User.find({ _id: { $in: driverIds}})
        selectedDrivers.forEach(async (driver) => {
            if (!driver.assignedIssues) {
                driver.assignedIssues = []
            }
            driver.assignedIssues.push(issue._id)
            await driver.save()
        })

        const populatedIssue = await Issue.findById(issue._id).populate('drivers','_id name')
        res.status(200).json(populatedIssue);
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

    await User.updateMany(
        {assignedIssues:issue._id},
        {$pull: {assignedIssues: issue._id} }
    )
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

const updateCompletionStatus = async (req, res) => {
    const { issueId, driverId } = req.params;
    const { isComplete } = req.body;

    if (!mongoose.Types.ObjectId.isValid(issueId) || !mongoose.Types.ObjectId.isValid(driverId)) {
        return res.status(404).json({ error: "Invalid issue or driver ID" });
    }

    const issue = await Issue.findById(issueId);

    if (!issue) {
        return res.status(404).json({ error: "No such issue" });
    }

    const driverStatus = issue.completionStatus.find(status => status.driver.toString() === driverId);

    if (driverStatus) {
        driverStatus.isComplete = isComplete;
    } else {
        issue.completionStatus.push({ driver: driverId, isComplete });
    }

    await issue.save();

    // Check if all drivers have marked the issue as complete
    const allComplete = issue.completionStatus.every(status => status.isComplete) && 
                        issue.completionStatus.length === issue.drivers.length;

    if (allComplete) {
        await Issue.findByIdAndDelete(issueId);
        return res.status(200).json({ message: "Issue completed and deleted" });
    }

    res.status(200).json(issue);
};



module.exports = {createIssue, getAllIssues, getIssue, deleteIssue, updateIssue, getAdminIssues, updateCompletionStatus}