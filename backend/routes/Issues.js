const express = require('express')

const {
    createIssue,
    getAllIssues,
    getIssue
} = require("../controllers/issueController")

const router = express.Router()



// get all issues
router.get('/', getAllIssues)


// get issue by id
router.get('/:id', getIssue)


// post a new issue
router.post('/', createIssue)


// delete issue
router.delete('/:id', (req, res) => {
    res.json({mssg: "DELETE an issue"})
})


// update issue
router.patch('/:id', (req, res) => {
    res.json({mssg: "UPDATE a issue"})
})

module.exports = router