const User = require("../models/user")
const Issue = require("../models/Issue")
const mongoose = require("mongoose")


// get all issues
const getAllIssues = async (req,res) => {
    const user_id = req.user._id

        try {
        // Fetch issues where the logged-in user is either the creator or one of the drivers
        const issues = await Issue.find({
            drivers: { $in: [user_id] }
        }).sort({ createdAt: -1 });

        console.log("Fetched issues:", issues); // Log the fetched issues
        res.status(200).json(issues);
    } catch (error) {
        console.log("Error fetching issues:", error); // Log any error that occurs
        res.status(400).json({ error: error.message });
    }
}


// admin issues
const getAdminIssues = async (req, res) => {

    try {
        // Fetch issues where there are any drivers assigned
        const issues = await Issue.find({ drivers: { $exists: true, $not: { $size: 0 } } }).sort({ createdAt: -1 });

        console.log("Fetched issues:", issues); // Log the fetched issues
        res.status(200).json(issues);
    } catch (error) {
        console.log("Error fetching issues:", error); // Log any error that occurs
        res.status(400).json({ error: error.message });
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




module.exports = {createIssue, getAllIssues, getIssue, deleteIssue, updateIssue, getAdminIssues}